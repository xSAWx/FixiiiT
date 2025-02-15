import React from "react";
import BreadCrumbs from "../Components/common/BreadCrumbs";

function TOS() {
  return (
    <section>
      <BreadCrumbs
        navs={["Home", "Terms & Conditions"]}
        routes={["/", "/terms-conditions"]}
        title="Terms & Conditions"
      />
      <article className="py-20 grid gap-4 px-14 max-w-7xl text-black/60 font-medium mx-auto">
        <Title>Terms & Conditions for [Fixiiit.store]</Title>
        <h1 className="font-light mb-2 text-black">
          Last updated: October 2023
        </h1>
        <h1 className="font-light mb-2 text-black">
          Terms & Conditions for [Fixiiit.store]
        </h1>
        <Title>1. Acceptance of Terms</Title>
        <p>
          By submitting a device for repair, booking a service, or using our
          website, you agree to comply with these T&Cs.
        </p>
        <p>
          We reserve the right to update these terms at any time. Continued use
          after changes constitutes acceptance.
        </p>
        <Title>2. Services Offered</Title>
        <p>
          Repairs: We diagnose and repair phones, tablets, laptops, PCs, and
          related devices.
        </p>
        <p>
          Diagnostics: A non-refundable diagnostic fee of [1500 DA amount] may
          apply if repairs are declined.
        </p>
        <p>
          Parts: We use [OEM/third-party/refurbished] parts unless otherwise
          agreed.
        </p>
        <p>
          Estimates: Quotes are valid for [X days]. Final costs may vary if
          additional issues are found.
        </p>
        <Title>3. Customer Responsibilities</Title>
        <p>
          Backup Data: You are responsible for backing up data before repairs.
          We are not liable for data loss.
        </p>

        <p>
          Device Condition: Disclose existing damage (e.g., water exposure,
          cracks) before service.
        </p>
        <p>
          Pickup: Unclaimed devices after [3 days] may incur storage fees or be
          considered abandoned.
        </p>

        <Title>4. Payment & Fees</Title>
        <p>
          Payment: Due at pickup unless otherwise agreed. We accept [cash,
          credit/debit cards, PayPal].
        </p>
        <p>
          Deposits: Non-refundable deposits may be required for high-cost parts
          or special orders.
        </p>

        <Title>5. Warranties</Title>
        <p>
          Repair Warranty: Repairs are guaranteed for [X days/months] unless
          otherwise stated.
        </p>
        <p>Exclusions: Warranty voids if:</p>
        <p>The device is tampered with post-repair.</p>
        <p>
          Damage results from misuse, accidents, or unauthorized modifications.
        </p>
        <p>Non-original parts are used without consent.</p>
        <p>
          Claims: Warranty claims require proof of repair (invoice/receipt).
        </p>

        <Title>6. Limitation of Liability</Title>
        <p>We are not liable for:</p>
        <p>Data loss during repairs.</p>
        <p>Pre-existing or undiagnosed issues.</p>
        <p>Damage caused by shipping (if applicable).</p>
        <p>Incidental/consequential damages (e.g., lost profits).</p>
        <p>Total liability is limited to the repair cost paid.</p>

        <Title>7. Cancellations & Refunds</Title>
        <p>
          Cancellations: Notify us at least [X hours/days] before your
          appointment to avoid fees.
        </p>
        <p>
          Refunds: Refunds for declined repairs are issued minus diagnostic
          fees. No refunds after parts are ordered.
        </p>

        <Title>8. Intellectual Property</Title>
        <p>
          Website content (logos, text, images) is owned by [Fixiiit.store] and
          protected by copyright laws.
        </p>

        <Title>9. Dispute Resolution</Title>
        <p>
          Disputes will be resolved through FixiiiT/Ain Beida in [Oum el Bouaghi
          / Algeria ].
        </p>
        <p>
          Governing Law: These terms are governed by the laws of [Your
          Country/State].
        </p>

        <Title>10. Shipping (If Applicable)</Title>
        <p>
          Risk: Customers assume all shipping risks. We recommend insurance.
        </p>
        <p>Costs: Shipping fees are non-refundable.</p>

        <Title>11. Right to Refuse Service</Title>

        <p>We may refuse service for:</p>

        <p>Devices with illegal modifications (e.g., jailbroken phones).</p>
        <p>Safety risks (e.g., swollen batteries, severe liquid damage).</p>
        <p>Abusive or threatening behavior.</p>
      </article>
    </section>
  );
}

export const Title = ({ children }) => (
  <h1 className="text-2xl font-semibold my-2 text-fif ">{children}</h1>
);

export default TOS;
