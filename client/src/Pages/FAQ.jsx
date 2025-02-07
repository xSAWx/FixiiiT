import React, { useState } from "react";
import BreadCrumbs from "../Components/common/BreadCrumbs";
import Accordion from "../Components/common/Accordion";
import Input from "../Components/common/Input";

function FAQ() {
  const [credentials, setcredentials] = useState({
    email: "",
    username: "",
    comment: "",
  });

  return (
    <section>
      <BreadCrumbs
        navs={["Home", "FAQ"]}
        routes={["/", "/faq "]}
        title="Frequently Asked Questions"
      />
      <article className="max-w-4xl mx-auto   px-8 my-20 grid  gap-6">
        <Accord
          title="What types of computer issues do you repair?"
          text="We handle a wide range of computer problems, including software issues, hardware malfunctions, virus and malware removal, data recovery, screen repairs, and more."
        />
        <Accord
          title="Do you repair both desktops and laptops?"
          text="We handle a wide range of computer problems, including software issues, hardware malfunctions, virus and malware removal, data recovery, screen repairs, and more."
        />
        <Accord
          title="How long does a typical computer repair take?"
          text="We handle a wide range of computer problems, including software issues, hardware malfunctions, virus and malware removal, data recovery, screen repairs, and more."
        />
        <Accord
          title="Do you provide on-site repairs or remote support?"
          text="We handle a wide range of computer problems, including software issues, hardware malfunctions, virus and malware removal, data recovery, screen repairs, and more."
        />
        <Accord title="What brands and models do you repair?" text="" />
        <Accord title="Is there a diagnostic fee?" text="" />
        <Accord title="Do you provide data recovery services?" text="" />
        <Accord
          title="Will I lose my data during the repair process?"
          text=""
        />
        <Accord title="What payment methods do you accept?" text="" />
      </article>

      <article className="my-24 tracking-wide mx-auto max-w-3xl px-8">
        <h1 className="text-5xl  text-fif font-bold">Have A Question?</h1>
        <p className="text-black/70 my-4">
          Your email address will not be published. Required fields are marked *
        </p>

        <aside className="grid gap-8 my-10">
          <Input
            classs="border-black/40"
            className="text-fif "
            set={setcredentials}
            title="Your Name"
            name="username"
            placeholder="Your Name"
          />
          <Input
            classs="border-black/40"
            className="text-fif "
            set={setcredentials}
            title="Email"
            name="email"
            placeholder="Your Email"
          />
          <div>
            <h1 className="font-semibold text-fif m-1">Your Comment</h1>
            <textarea className="w-full border duration-300 outline-none focus:border-tertiary rounded-lg p-4 border-black/40" cols={4} />
          </div>

          <button disabled className="Button">Send</button>
        </aside>
      </article>
    </section>
  );
}

const Accord = ({ text = "", title = "" }) => (
  <Accordion
    className="border-2 border-black/15 p-4 px-6 "
    title={<h1 className="text-fif text-[20px]  font-bold">{title}</h1>}
  >
    <div className="pt-4 px-4">
      We handle a wide range of computer problems, including software issues,
      hardware malfunctions, virus and malware removal, data recovery, screen
      repairs, and more.
    </div>
  </Accordion>
);

export default FAQ;
