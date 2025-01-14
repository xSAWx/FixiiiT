import Item from "../models/item.module.js";

//////////!   CREATE ITEM   !//////////

export const createItem = async ({ body: b }, res) => {
  if (!(b.name || b.category || b.price || b.image))
    return res.status(404).json("somthing missing");

  try {
    const already = await Item.find({ name: b.name });
    if (already) return res.status(406).json("name already used");

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
