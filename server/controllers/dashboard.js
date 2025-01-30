import User from "../models/user.module.js";
import Order from "../models/order.module.js";
import Item from "../models/item.module.js";

export const adminDashboard = async (req, res) => {
  try {
    const users = await User.countDocuments();
    const orders = await Order.countDocuments();
    const items = await Item.countDocuments();
    const totalPrice = await Order.aggregate([
      {
        $group: {
          _id: null, // Grouping by null means you get the sum for all orders
          totalPrice: { $sum: "$totalPrice" }, // Sum the "price" field from each order
        },
      },
    ]);

    res
      .status(202)
      .json({ users, orders, items, price: totalPrice[0].totalPrice });
  } catch (error) {
    res.status(401).json(error);
  }
};

export const TotalEachDay = async (req, res) => {
  try {
    const orders = await Order.aggregate([
      {
        $group: {
          _id: { $dateToString: { format: "%Y-%m-%d", date: "$updatedAt" } }, // Group by day
          totalPrice: { $sum: { $toDouble: "$totalPrice" } }, // Sum prices for each day
        },
      },
      {
        $sort: { _id: 1 }, // Sort by date ascending
      },
    ]);

    const today = new Date();
    const sevenDaysAgo = new Date();
    sevenDaysAgo.setDate(today.getDate() - 30);

    const last7Days = orders.filter((order) => {
      const date = new Date(order._id);
      return date >= sevenDaysAgo;
    });

    res.status(202).json(last7Days);
  } catch (error) {
    res.status(401).json(error);
  }
};
