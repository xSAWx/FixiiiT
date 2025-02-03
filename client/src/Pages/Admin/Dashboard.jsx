import React, { useState } from "react";
import { useGetLastWeekOrders, useSiteInfo } from "../../Hooks/useDashboard";
import ReactApexChart from "react-apexcharts";
import { MdDelete, MdLocalShipping, MdMoreHoriz } from "react-icons/md";
import Dropdown from "../../Components/common/Dropdown";
import { OrderDetails } from "./Order/Order";
import moment from "moment";
import { useDeleteOrderById } from "../../Hooks/useOrder";
import ZrSend from "./Order/ZrSend";

function Dashboard() {
  const { info, loading, totalPrice } = useSiteInfo();
  const { orders, loading: Uloading, getMany } = useGetLastWeekOrders();

  return (
    <section className="w-full min-h-96 border rounded-xl p-6 border-black/20">
      {/* BLOCKS  */}
      <article className="grid grid-cols-4 h-24 mb-10 w-full gap-6 to-blue-900">
        <Block
          color="#1e3a8a"
          loading={loading}
          title="Users"
          value={info?.users}
        />
        <Block
          color="#dc2626"
          loading={loading}
          title="Orders"
          value={info?.orders}
        />
        <Block
          color="#ca8a04"
          loading={loading}
          title="Items"
          value={info?.items}
        />
        <Block
          color="#16a34a"
          loading={loading}
          title="Amount"
          value={info?.price}
          symbol={"DA"}
        />
      </article>

      {/* CHART  */}
      <article className="lg:grid grid-cols-5 gap-6">
        <aside className="grid min-h-96 col-span-3  border-black/20  rounded-xl">
          {loading ? <></> : <OrderChart chartData={totalPrice} />}
        </aside>

        {/* LAST WEEK ORDERS  */}
        <aside className="min-h-96 col-span-2 overflow-y-auto font-bold  border border-black/20 p-4 rounded-xl">
          <h1 className="text-lg tracking-wider mb-4">Last Week Orders</h1>

          <div className=" w-full min-h-[calc(100%-50px)]">
            {Uloading ? (
              <div className="w-12 h-12 !border-t-tertiary place-self-center loader" />
            ) : (
              orders?.map((o) => <Order o={o} getMany={getMany} />)
            )}
          </div>
        </aside>
      </article>
    </section>
  );
}

const Block = ({ color, loading, title = "", value, symbol }) => (
  <aside
    style={{ backgroundColor: `${color}DD` }}
    className="w-full rounded-lg h-full grid text-white place-content-center"
  >
    {loading ? (
      <div className="w-8 h-8 !border-t-white loader" />
    ) : (
      <div className="text-center fadeUp text-xl font-bold tracking-wider">
        <h1 className="mb-1.5 sqd">{title}</h1>
        <h2>
          {value} {symbol}
        </h2>
      </div>
    )}
  </aside>
);

const Order = ({ o, getMany }) => {
  const [mdl, setmdl] = useState(false);
  const { loading: LDelete, Delete } = useDeleteOrderById();
  console.log({ o });

  // DELETE
  const DeleteHandler = async () => {
    await Delete(o._id);
    await getMany();
  };

  return (
    <aside className="w-full flex justify-between mb-4 items-center px-4 py-2 tracking-wide border border-black/10 rounded-xl shadow-lg shadow-black/30">
      <div className="flex gap-3">
        <h1>{o?.user?.username || "User"} </h1>
        <h2 className="text-xs text-black/60 mt-auto">( {o?.item?.name} )</h2>
        <h2 className="text-xs text-black/60 mt-auto">
          {" "}
          {moment(o?.updatedAt).fromNow()}{" "}
        </h2>
      </div>

      <Dropdown
        component={
          <div className="p-1 bg-black/5 hover:bg-black/20 rounded-md">
            <MdMoreHoriz className="text-2xl relative !z-0 hover:text-black" />
          </div>
        }
        direction={{ x: "right", y: "bottom" }}
        chevron={false}
        className="w-56 p-2 bg-white rounded-lg border border-black/20  shadow-xl shadow-black/30"
      >
        <div className="text-sm font-bold tracking-wide">
          <button
            onClick={() => setmdl(true)}
            //   onDoubleClick={() => DeleteHandler(o._id)}
            className=" pl-4 py-2 hover:bg-black/10 items-center flex gap-3 w-full text-left rounded-md  disabled:opacity-50 cursor-pointer "
          >
            <MdLocalShipping className="text-2xl" /> Send Package
          </button>
          <div className="w-full h-px my-1.5 bg-black/20" />
          <button
            onClick={DeleteHandler}
            className="pl-4 py-2 hover:bg-black/10 items-center flex gap-3 w-full text-left rounded-md text-red-600 disabled:opacity-50 cursor-pointer hover:text-red-700"
          >
            {LDelete ? (
              <div className="loader w-6 h-6 !border-t-red-600 !border-white" />
            ) : (
              <>
                <MdDelete className="text-2xl" /> Delete Order
              </>
            )}
          </button>
        </div>
      </Dropdown>
      <ZrSend open={mdl} setopen={setmdl} o={o} />
    </aside>
  );
};

const OrderChart = ({ chartData }) => {
  console.log(chartData?.map((item) => item.totalPrice));

  const [chartOptions] = useState({
    chart: {
      type: "line",
      zoom: {
        enabled: false,
      },

      toolbar: {
        show: false,
      },
    },
    legend: {
      position: "top",
    },
    stroke: {
      curve: "smooth",
    },
    xaxis: {
      categories: chartData?.map((item) => item._id),
      type: "datetime",
    },
    yaxis: {},
    title: {
      text: "Daily Order Totals (Last 30 Days)",
      align: "top",
    },
    grid: {
      show: true,
      borderColor: "#0003",
      strokeDashArray: 6,

      padding: {
        top: 5,
        right: 20,
      },
    },
    colors: ["#4CAF50"],
    markers: {
      size: 5,
    },
    tooltip: {
      y: {
        formatter: (value) => `${value} DA`,
      },
    },
  });

  const [chartSeries] = useState([
    {
      name: "Total Amount",
      data: chartData?.map((item) => item.totalPrice),
    },
  ]);

  return (
    <div>
      <ReactApexChart
        options={chartOptions}
        series={chartSeries}
        type="area"
        height={400}
      />
    </div>
  );
};

export default Dashboard;
