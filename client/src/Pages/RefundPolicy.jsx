import React from "react";
import BreadCrumbs from "../Components/common/BreadCrumbs";
import { Title } from "./TOS";

function RefundPolicy() {
  return (
    <section>
      <BreadCrumbs
        navs={["Home", "Refund Policy"]}
        routes={["/", "/refund-policy"]}
        title="Refund Policy"
      />
      <article className="py-20 grid gap-4 px-14 max-w-7xl text-black/60 font-medium mx-auto">
        <h1 className="font-light mb-2 text-black">
          Last updated: February 2025
        </h1>
        <Title>Refund Policy</Title>
        <p>
          At Fix iiiT, we prioritize quality repairs and customer satisfaction.
          Please review our refund and warranty guidelines below.
        </p>
        <Title>1. Non-Refundable Services</Title>
        <p>
          Labor/Service Fees: Once repair work is completed, labor/service fees
          are non-refundable. We guarantee our work and will address issues
          under our Warranty Policy .
        </p>

        <p>
          Parts/Components: Unused parts ordered specifically for your repair
          (not in-stock items) may be eligible for a refund with a restocking
          fee .
        </p>
        <Title>
          2. Eligibility for Refunds Refunds may be considered in the following
          cases:
        </Title>
        <p>Cancelled Services:</p>

        <p>Full refund if canceled before work begins.</p>

        <p>
          Partial refund (minus labor costs and parts used) if canceled after
          work starts.
        </p>

        <p>
          Defective Parts: Parts installed by us that fail due to manufacturing
          defects will be replaced free of charge. If unavailable, a refund for
          the part will be issued.
        </p>
        <p>
          Service Not Rendered: Full refund if we cannot complete the repair due
          to unforeseen issues.
        </p>
        <Title>3. Warranty on Repairs</Title>
        <p>
          We offer a 30-day warranty on repairs performed by Fix iiiT, excluding
          screen repairs.
        </p>
        <p>
          If the same issue reoccurs within 30 days, we will repair it free of
          charge.
        </p>
        <Title>Warranty Exclusions:</Title>

        <ul className="list-decimal pl-6 grid gap-4 marker:text-tertiary marker:text-lg my-4">
          <li className="text-black ">
            Screen repairs (liquid damage, cracks, or display issues).
          </li>
          <li className="text-black">
            Damage from misuse, accidents, or unauthorized modifications.{" "}
          </li>
        </ul>
        <Title>
          4. How to Request a Refund or Warranty Service To initiate a request:
        </Title>
        <p>Contact us within 7 days of service completion.</p>
        <p>
          Provide your receipt number and a detailed reason for the request.
        </p>
        <p>Return unused parts in their original condition (if applicable).</p>
        <p>Requests are reviewed case-by-case and may require an inspection.</p>
        <Title>5. Processing Timelines</Title>
        <p>
          Approved refunds are processed within 5–10 business days to your
          original payment method.
        </p>
        <Title>6. Contact Us</Title>
        <ul className="list-disc pl-6 grid gap-4 marker:text-tertiary marker:text-lg my-4">
          <li className="text-black ">📞 0673142128</li>
          <li className="text-black ">📞 0794914158</li>
          <li className="text-black ">📧 fixiiit04@gmail.com</li>
          <li className="text-black ">
            📍 Algeria, Oum El Bouaghi , Ain Beida
          </li>
        </ul>
        <Title>7. Policy Updates</Title>
        <p>
          We reserve the right to update this policy. Changes will be posted
          here.
        </p>
        <p>
          Note: This policy does not override your statutory consumer rights
          under applicable laws.
        </p>
        <p className="text-lg text-black mt-4">🔧 Trust Fix iiiT for Reliable Repairs!</p>
      </article>
    </section>
  );
}

export default RefundPolicy;
