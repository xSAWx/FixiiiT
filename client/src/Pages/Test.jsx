import React, { useRef } from "react";
import html2pdf from "html2pdf.js";
import OrderInvoic from "./Authenticated/OrderInvoic";
const TEST = () => {

  

  const invoiceRef = useRef();

  const handleDownload = () => {
    const options = {
      margin: 10,
      filename: "invoice.pdf",
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
    };
    html2pdf().from(invoiceRef.current).set(options).save();
  };

  return (
    <>
      <OrderInvoic invoiceRef={invoiceRef}/>
      <button
        onClick={handleDownload}
        className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-md"
      >
        Download PDF
      </button>
    </>
  );
};

export default TEST;
