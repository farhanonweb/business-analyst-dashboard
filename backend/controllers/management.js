import mongoose from "mongoose";
import User from "../models/User.js";
import Transaction from "../models/Transaction.js";

export const getAdmins = async (req, res) => {
  try {
    const admins = await User.find({ role: "admin" }).select("-password");
    res.status(200).json(admins);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getUserPerformance = async (req, res) => {
  try {
    const { id } = req.params;

    const userWithStats = await User.aggregate([
      { $match: { _id: new mongoose.Types.ObjectId(id) } },
      {
        $lookup: {
          from: "affiliatestats", 
          localField: "_id",
          foreignField: "userId",
          as: "affiliateStats",
        },
      },
     
      {
        $unwind: { path: "$affiliateStats", preserveNullAndEmptyArrays: true },
      },
    ]);

    
    if (!userWithStats || userWithStats.length === 0) {
      return res.status(404).json({ message: "User not found" });
    }

    const user = userWithStats[0]; 
    let filteredSaleTransactions = []; 
    
    if (user.affiliateStats && user.affiliateStats.affiliateSales) {
      const saleTransactions = await Promise.all(
        user.affiliateStats.affiliateSales.map((id) => {
          return Transaction.findById(id);
        })
      );
      filteredSaleTransactions = saleTransactions.filter(
        (transaction) => transaction !== null
      );
    }

    res
      .status(200)
      .json({ user: user, sales: filteredSaleTransactions });
      
  } catch (error) {
   
    console.error("PERFORMANCE CONTROLLER ERROR:", error); 
    res.status(500).json({ message: error.message });
  }
};