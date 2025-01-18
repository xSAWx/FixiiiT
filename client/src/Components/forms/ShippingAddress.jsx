import React, { useState } from "react";
import Input from "../common/Input";
import Select from "../common/Select";
import { addressSlice } from "../../Store/user";
import { useUpdateAddress } from "../../Hooks/useUpdate";

function ShippingAddress({setmdl}) {
  const [credentials, setcredentials] = useState({
    firstName: "",
    phoneNumber: "",
    lastName: "",
    country: "Algeria",
    streetAddress1: "",
    streetAddress2: "",
    city: "",
    state: "Adrar",
    postalCode: "",
  });

  const { setAddress, address } = addressSlice();

  const { loading, update, err } = useUpdateAddress(setmdl);

  const submitHandler = async (e) => {
    e.preventDefault();
    await update();
  };

  return (
    <form onSubmit={submitHandler} className="grid gap-6">
      <h1 className="title md:!text-4xl !text-3xl">Shipping address</h1>
      <aside className="grid md:grid-cols-2 gap-6">
        <Input
          err={err?.firstName}
          name="firstName"
          title="First Name *"
          set={setAddress}
          placeholder="Enter Your First Name"
          value={address.firstName}
        />
        <Input
          err={err?.lastName}
          name="lastName"
          title="Last Name *"
          set={setAddress}
          placeholder="Enter Your Last Name"
          value={address.lastName}
        />
      </aside>
      <Input
        err={err?.phoneNumber}
        name="phoneNumber"
        title="Phone Number *"
        set={setAddress}
        placeholder="Enter Your Phone Number"
        type="number"
        value={address.phoneNumber}
      />
      <aside className="grid md:grid-cols-3 gap-6">
        <Input
          disabled
          name="country"
          title="Country *"
          set={setAddress}
          placeholder="Enter Your Country"
          value={credentials.country}
        />
        <Select
          err={err?.state}
          options={wilayas}
          name="state"
          set={setAddress}
          title="State"
          value={address.state}
        />
        <Input
          err={err?.city}
          name="city"
          title="City / Town *"
          set={setAddress}
          placeholder="Enter Your City Or Town"
          value={address.city}
        />
      </aside>

      <Input
        err={err?.streetAddress}
        name="streetAddress1"
        title="Street Address *"
        set={setAddress}
        placeholder="Enter Your Street Name"
        value={address.streetAddress1}
      />
      <Input
        name="streetAddress2"
        set={setAddress}
        placeholder="Enter Your Second Street Name"
        value={address.streetAddress2}
      />

      <Input
        err={err?.postalCode}
        name="postalCode"
        title="Postal Code *"
        type="number"
        set={setAddress}
        placeholder="Enter Your Postal Code "
        value={address.postalCode}
      />
      <div className="flex gap-4 items-end font-bold">
        <button
          disabled={
            !(
              address.firstName &&
              address.lastName &&
              address.postalCode &&
              address.state &&
              address.streetAddress1 &&
              address.city &&
              address.phoneNumber
            ) || loading
          }
          className="Button w-44 !text-base mt-2"
        >
          {loading ? (
            <div className="w-6 h-6 loader mx-auto " />
          ) : (
            "Save Address"
          )}
        </button>
        {err.success && (
          <h1 className="text-sm text-tertiary ">
            Address Changed Successfuly
          </h1>
        )}
        {err.fail && (
          <h1 className="text-sm text-red-600 ">Somthing Went Wrong</h1>
        )}
      </div>
    </form>
  );
}

export default ShippingAddress;

const wilayas = [
  "Adrar",
  "Chlef",
  "Laghouat",
  "Oum el Bouaghi",
  "Batna",
  "Béjaïa",
  "Biskra",
  "Béchar",
  "Blida",
  "Bouira",
  "Tamanrasset",
  "Tébessa",
  "Tlemcen",
  "Tiaret",
  "Tizi Ouzou",
  "Alger",
  "Djelfa",
  "Jijel",
  "Sétif",
  "Saïda",
  "Skikda",
  "Sidi Bel Abbès",
  "Annaba",
  "Guelma",
  "Constantine",
  "Médéa",
  "Mostaganem",
  "M'Sila",
  "Mascara",
  "Ouargla",
  "Oran",
  "El Bayadh",
  "Illizi",
  "Bordj Bou Arreridj",
  "Boumerdès",
  "El Tarf",
  "Tindouf",
  "Tissemsilt",
  "El Oued",
  "Khenchela",
  "Souk Ahras",
  "Tipaza",
  "Mila",
  "Aïn Defla",
  "Naâma",
  "Aïn Témouchent",
  "Ghardaïa",
  "Relizane",
  "Timimoun",
  "Bordj Badji Mokhtar",
  "Ouled Djellal",
  "Béni Abbès",
  "In Salah",
  "In Guezzam",
  "Touggourt",
  "Djanet",
  "El M'Ghair",
  "El Meniaa",
];
