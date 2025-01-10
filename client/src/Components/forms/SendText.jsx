import React, { useEffect, useState } from "react";
import Input from "../common/Input";
import { BsChevronDown } from "react-icons/bs";
import Select from "../common/Select";
import TextArea from "../common/TextArea";
import Checkbox from "../common/Checkbox";
import Button from "../common/Button";
import { Link } from "react-router-dom";

function SendText() {
  const [credentials, setcredentials] = useState({
    fullName: "",
    email: "",
    phone: "",
    bookingDate: "",
    deviceType: "Mobile",
    brand: "",
    problemType: "",
    warrantyStatus: "Warranty",
    additionalInformation: "",
    attatchFiles: "",
    TOS: false,
  });

  const [tosM, settosM] = useState(false);
  const [PpM, setPpM] = useState(false);

  useEffect(() => {
    setcredentials({
      ...credentials,
      brand: brandList(credentials.deviceType)[0],
    });
  }, [credentials.deviceType]);

 

  return (
    <form className="grid gap-6">
      <Input
        name="fullName"
        placeholder="Your Full Name"
        set={setcredentials}
        value={credentials.fullName}
        title={"Full Name"}
      />
      <aside className="grid md:grid-cols-2 gap-x-4 gap-y-6 mb-4">
        <Input
          name="email"
          placeholder="Your Email"
          set={setcredentials}
          value={credentials.email}
          title={"Email"}
        />
        <Input
          name="phone"
          placeholder="Your Phone Number"
          set={setcredentials}
          value={credentials.phone}
          title={"Phone Number"}
        />
      </aside>
      <Input
        name="bookingDate"
        type="date"
        set={setcredentials}
        value={credentials.bookingDate}
        title={"Booking Date"}
      />

      <aside className="grid md:grid-cols-2 gap-x-4 gap-y-6 mb-4">
        <Select
          title="Device Type"
          name="deviceType"
          set={setcredentials}
          options={["Mobile", "Console", "PC", "Tablet", "Laptop"]}
        />
        <Select
          title="Brand"
          set={setcredentials}
          name="brand"
          options={brandList(credentials.deviceType)}
        />
      </aside>

      <aside className="grid md:grid-cols-2 gap-x-4 gap-y-6 mb-4">
        <Select
          title="Problem Type"
          name="problemType"
          set={setcredentials}
          options={[
            "DEAD",
            "Battery Issue",
            "Software Issue",
            "Screen Change",
            "OTHER",
          ]}
        />
        <Select
          title="Warranty Status"
          set={setcredentials}
          name="warrantyStatus"
          options={["Warranty", "Out Of Warranty", "Not Sure"]}
        />
      </aside>

      <TextArea
        title="Additional Information"
        placeholder="Provide any addintional information that may help us "
        set={setcredentials}
        name="additionalInformation"
      ></TextArea>

      <aside className="group mb-3">
        <h1 className="font-semibold text-white tracking-widest text-[15px] mb-2.5 ml-1">
          Attach Files
        </h1>
        <div className="relative w-full h-12 bg-white group-hover:bg-gray-200 rounded-md">
          <input
            onChange={(e) =>
              setcredentials(() => ({
                ...credentials,
                attatchFiles: e.target.files[0].name,
              }))
            }
            type="file"
            className="z-10 opacity-0 w-full h-full cursor-pointer absolute"
          />
          <div className="absolute z-0 left-4 flex text-base gap-3 group-hover:text-tertiary font-bold text-black/60  top-1/2 -translate-y-1/2">
            <p>Choose Image</p>
            <div className="w-px h-6 bg-tertiary" />
            <p>{credentials.attatchFiles}</p>
          </div>
        </div>
      </aside>

      <Checkbox
        className="text-white ml-1  "
        onChange={() =>
          setcredentials({ ...credentials, TOS: !credentials.TOS })
        }
        check={credentials.TOS}
        text={
          <h1 className="text-white text-sm">
            I agree to the{" "}
            <Link to="/terms-conditions" className="text-gray-700 hover:text-tertiary">
              terms and conditions
            </Link>{" "}
            and{" "}
            <Link to="/privacy-policy" className="text-gray-700 hover:text-tertiary">
              privacy policy
            </Link>
            .
          </h1>
        }
      />

      <Button className="w-48">BOOK NOW</Button>
    </form>
  );
}

const brandList = (device) => {
  switch (device) {
    case "Mobile":
      return ["Apple", "Samsung", "Huawei"];
    case "Tablet":
      return ["Apple", "Samsung", "Huawei"];
    case "Laptop":
      return ["Dell", "HP", "Microsoft"];
    case "PC":
      return ["PC"];
    case "Console":
      return ["PS5", "PS4", "XBOX360", "XBOXONE", "XBOX-SERIESX/S"];
  }
};

export default SendText;
