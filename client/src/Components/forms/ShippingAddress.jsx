import React, { useState } from "react";
import Input from "../common/Input";
import Select from "../common/Select";

function ShippingAddress() {
  const [credentials, setcredentials] = useState({
    firstName: "",
    lastName: "",
    country: "Algeria",
    streetAddress1: "",
    streetAddress2: "",
    city: "",
    state: "",
    postalCode: "",
  });

  console.log(credentials);

  return (
    <form className="grid gap-6">
      <h1 className="title md:!text-4xl !text-3xl">Shipping address</h1>
      <aside className="grid md:grid-cols-2 gap-6">
        <Input
          name="firstName"
          title="First Name *"
          set={setcredentials}
          placeholder="Enter Your First Name"
        />
        <Input
          name="lastName"
          title="Last Name *"
          set={setcredentials}
          placeholder="Enter Your Last Name"
        />
      </aside>
      <Input
        disabled
        name="country"
        title="Country *"
        set={setcredentials}
        placeholder="Enter Your Country"
        value={credentials.country}
      />
      <Select
        options={wilayas}
        name="state"
        set={setcredentials}
        title="State"
        number
      />
      <Input
        name="city"
        title="City / Town *"
        set={setcredentials}
        placeholder="Enter Your City Or Town"
      />
      <Input
        name="streetAddress1"
        title="Street Address *"
        set={setcredentials}
        placeholder="Enter Your Street Name"
      />
      <Input
        name="streetAddress2"
        set={setcredentials}
        placeholder="Enter Your Second Street Name"
      />

      <Input
        name="postalCode"
        title="Postal Code *"
        set={setcredentials}
        placeholder="Enter Your Postal Code "
      />
      <button
        disabled={
          !(
            credentials.firstName &&
            credentials.lastName &&
            credentials.postalCode &&
            credentials.state &&
            credentials.streetAddress1 &&
            credentials.city
          )
        }
        className="Button w-44 !text-base mt-2"
      >
        Save Address{" "}
      </button>
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
