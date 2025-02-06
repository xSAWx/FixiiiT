import React, { useEffect, useState } from "react";
import { addressSlice } from "../../Store/user";
import Input from "../common/Input";
import TextArea from "../common/TextArea";
import { useContact } from "../../Hooks/useOrder";

function SnedMessage() {
  const { address } = addressSlice();

  const { contact, loading } = useContact();

  const [credentials, setcredentials] = useState({
    username: address.username || "",
    email: address.email || "",
    phoneNumber: address.phoneNumber || "",
    subject: "",
    message: "",
  });

  useEffect(() => {
    setcredentials({
      ...credentials,
      username: address.username || "",
      email: address.email || "",
      phoneNumber: address.phoneNumber || "",
    });
  }, [address]);

  const Contact = async () => {
    await contact(credentials);
  };

  return (
    <>
      <Input
        disabled={address?.username}
        placeholder="Your Username"
        set={setcredentials}
        value={credentials.username}
        name="username"
        title="Username"
      />
      <Input
        disabled={address?.username}
        placeholder="Your Email Address"
        set={setcredentials}
        value={credentials.email}
        name="email"
        title="Email"
      />
      <Input
        disabled={address?.username}
        placeholder="Your Phone Number"
        set={setcredentials}
        value={credentials.phoneNumber}
        name="phoneNumber"
        type="number"
        title="Phone Number"
      />
      <Input
        placeholder="Enter A Subject"
        set={setcredentials}
        value={credentials.subject}
        name="subject"
        title="Subject"
      />
      <TextArea
        name="message"
        title="Message"
        placeholder="Enter Your Message"
        rows={4}
        set={setcredentials}
      />
      <button className="Button" onClick={Contact}>
        Send Email
      </button>
    </>
  );
}

export default SnedMessage;
