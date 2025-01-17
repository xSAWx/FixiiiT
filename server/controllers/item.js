import Item from "../models/item.module.js";
import Option from "../models/options.module.js";

//////////!   CREATE ITEM   !//////////

export const createItem = async ({ body: b }, res) => {
  if (!(b.name || b.category || b.price || b.image))
    return res.status(404).json("somthing missing");

  try {
    const already = await Item.find({ name: b.name });
    console.log(already);

    if (already.length) return res.status(406).json("name already used");

    const item = await Item.create(b);
    res.status(201).json(item);
  } catch (error) {
    res.status(401).json(error);
  }
};

//////////!   GET ITEM   !//////////

export const getOneItem = async (req, res) => {
  if (!req.params._id) return res.status(404).json("missing id");

  try {
    const item = await Item.findById(req.params._id)
      .populate({ path: "category", select: "name" })
      .select("-__v");
    res.status(202).json(item);
  } catch (error) {
    res.status(401).json(error);
  }
};

//////////!   GET MANY ITEMS   !//////////

export const getManyItems = async (req, res) => {
  const args = {};
  if (req.query.category) args.category = req.query.category;
  console.log(args);

  try {
    const item = await Item.find(args).select("-__v -updatedAt");
    res.status(202).json(item);
  } catch (error) {
    res.status(401).json(error);
  }
};

//////////!   UPDATE  ITEM   !//////////

export const updateItem = async ({ body: b, params }, res) => {
  try {
    const item = await Item.findByIdAndUpdate(params._id, b, { new: true });
    return res.status(202).json(item);
  } catch (error) {
    return res.status(401).json(error);
  }
};

//////////!   DELTE ITEM   !//////////

export const deleteItem = async ({ params }, res) => {
  try {
    await Item.findByIdAndDelete(params._id);
    res.status(202).json(`${params._id} deleted successfuly`);
  } catch (error) {
    res.status(401).json(error);
  }
};

//////////!        !//////////
//////////!        !//////////
//////////!        !//////////

//////////!   CREATE OPTION   !//////////

export const createOption = async ({ body }, res) => {
  if (!body.name || !body.price || !body.item)
    return res.status(404).json("missing somthing");

  try {
    const already = await Option.findOne({ name: body.name, item: body.item });
    console.log(already);

    if (already) return res.status(406).json("name already exist");

    const option = await Option.create(body);

    res.status(202).json(option);
  } catch (error) {
    res.status(401).json(error);
  }
};

//////////!   GET OPTIONS BY ITEM   !//////////

export const getOptionByItem = async ({ params }, res) => {
  try {
    const options = await Option.find({ item: params._id });
    res.status(202).json(options);
  } catch (error) {
    res.status(401).json(error);
  }
};

//////////!   GET OPTIONS BY ID   !//////////

export const getOneOption = async ({ params }, res) => {
  try {
    const option = await Option.findById(params._id);
    res.status(202).json(option);
  } catch (error) {
    res.status(401).json(error);
  }
};
