import Order from "../models/order.module.js";

//////////!   CREATE ORDER   !//////////

export const createOrder = async ({ body: b, user }, res) => {
  if (!b?.items?.length)
    return res.status(404).json("must be atleast one item");

  try {
    const order = await Order.create({ ...b, user: user._id });
    res.status(201).json(order);
  } catch (error) {
    res.status(401).json(error);
  }
};

//////////!   GET ORDER   !//////////

export const getOrder = async (req, res) => {
  try {
    const order = await Order.findById(req.params._id);
    res.status(202).json(order);
  } catch (error) {
    res.status(401).json();
  }
};

//////////!   GET ALL ORDERS   !//////////

export const getAllOrders = async ({ query }, res) => {
  let args = {};
  if (query?.category) args.category = query.category;
  if (query?.status) args.status = query.status;
  if (query?.totalPrice) args.totalPrice = { $gt: Number(query.totalPrice) };
  console.log(args);

  try {
    const totalCount = await Order.countDocuments(args);
    const orders = await Order.find(args)
      .sort({
        [query?.sort || "createdAt"]: -1,
      })
      .limit(query?.limit || 10)
      .skip((query?.page - 1) * query?.limit)
      .select("-__v");
    res.status(202).json({
      orders,
      pages: {
        current: Number(query?.page) || 1,
        total: Math.ceil(totalCount / query?.limit) || 1,
      },
    });
  } catch (error) {
    res.status(401).json(error);
  }
};

//////////!   CREATE ORDER FOR   !//////////

export const getMyOrders = async ({ query, user }, res) => {
  try {
    const orders = await Order.find({ user: user._id })
      .limit(query?.limit || 10)
      .skip((query?.page - 1) * query?.limit)
      .select("-__v");
    res.status(202).json(orders);
  } catch (error) {
    res.status(401).json(error);
  }
};

export const updateOrder = async ({ body, params }, res) => {
  try {
    const valid = await Order.findById(params._id);
    if (!valid) return res.status(404).json("order not found");

    const order = await Order.findByIdAndUpdate(params._id, body, {
      new: true,
    });
    res.status(202).json(order);
  } catch (error) {
    res.status(401).json(error);
  }
};

//////////!   DELETE ORDER   !//////////

export const deleteOrder = async ({ params }, res) => {
  try {
    await Order.findByIdAndDelete(params._id);
    res.status(202).json(`order with id ${params._id} deleted successfuly`);
  } catch (error) {
    res.status(401).json(error);
  }
};

export const deleteMyOrder = async (req, res) => {
  try {
    await Order.findOneAndDelete({ user: req.user._id, _id: req.params._id });
    res.status(202).json(`your order deleted successfuly`);
  } catch (error) {
    res.status(401).json(error)
  }
};
