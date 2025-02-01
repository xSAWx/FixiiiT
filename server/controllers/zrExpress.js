import Order from "../models/order.module.js";
import axios from "axios";

//////!  CREATE COIL  !//////

export const addCoil = async ({ body, params }, res) => {
  console.log(body);

  try {
    const resp = await axios.post(
      `https://procolis.com/api_v1/add_colis`,
      {
        Colis: [body],
      },
      {
        headers: {
          token: process.env.TOKEN,
          key: process.env.KEY,
        },
      }
    );

    console.log(resp.data);

    if (params._id) {
      var order = await Order.findByIdAndUpdate(
        params._id,
        {
          Tracking: resp.data.Colis[0].Tracking,
        },
        { new: true }
      );
    }
    res.status(202).json(order || resp.data.Colis[0]);
  } catch (error) {
    res.status(401).json(error);
  }
};

//////!  READT ONE COIL  !//////

export const readCoil = async ({ params }, res) => {
  console.log(params);

  try {
    const resp = await axios.post(
      "https://procolis.com/api_v1/lire",
      {
        Colis: [
          {
            Tracking: params.Tracking,
          },
        ],
      },
      {
        headers: {
          token: process.env.TOKEN,
          key: process.env.KEY,
        },
      }
    );
    res.status(202).json(resp.data.Colis[0]);
  } catch (error) {
    res.status(401).json(error);
  }
};
