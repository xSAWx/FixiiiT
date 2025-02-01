import React, { useState } from "react";
import { useSiteInfo } from "../../Hooks/useDashboard";
import ReactApexChart from "react-apexcharts";

function Dashboard() {
  const { info, loading, totalPrice } = useSiteInfo();

  return (
    <section className="w-full min-h-96 border rounded-xl p-6 border-black/20">
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

      <article className="lg:grid grid-cols-5 gap-6">
        <aside className="grid min-h-96 col-span-3  border-black/20  rounded-xl">
          {loading ? <></> : <OrderChart chartData={totalPrice} />}
        </aside>
        <aside className="grid min-h-96 col-span-2 font-bold  border border-black/20 p-4 rounded-xl">
          <h1 className="text-lg tracking-wider">Last Week Orders</h1>
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
    },
    yaxis: {},
    title: {
      text: "Daily Order Totals (Last 7 Days)",
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
