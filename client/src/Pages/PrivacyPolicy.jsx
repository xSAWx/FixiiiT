import React from "react";
import BreadCrumbs from "../Components/common/BreadCrumbs";
import { Title } from "./TOS";

function PrivacyPolicy() {
  return (
    <section>
      <BreadCrumbs
        navs={["Home", "Privacy Policy"]}
        routes={["/", "/privacy-policy"]}
        title="Privacy Policy"
      />
      <article className="py-20 grid gap-4 px-14 max-w-7xl text-black/60 font-medium mx-auto">
        <Title>Privacy Policy for Fixiiit.store</Title>
        <h1 className="font-light mb-2 text-black">
          Last updated: 2 /15 /2025
        </h1>
        <h1 className="font-light mb-2 text-black">
          At [Fixiiit.store], we are committed to protecting your privacy. This
          policy explains how we collect, use, and safeguard your personal
          information when you use our repair services, website, or interact
          with us.
        </h1>
        <Title>1. Information We Collect</Title>
        <p>We may collect the following informations:</p>
        <p>
          Personal Details: Name, email, phone number, and address when you
          submit a repair request or create an account.
        </p>
        <p>
          Payment Data: Credit/debit card details (processed securely via
          third-party gateways like [Stripe/PayPal]). We do not store full
          payment information.
        </p>
        <p>
          Payment Data: Credit/debit card details (processed securely via
          third-party gateways like [Stripe/PayPal]). We do not store full
          payment information.
        </p>
        <p>
          Technical Data: IP address, browser type, and cookies (see Cookies
          section below) when you visit our website.
        </p>
        <Title>2. How We Use Your Information do we collect?</Title>
        <p>Your data is used to:</p>
        <p>Process repair requests and communicate service updates.</p>
        <p>Diagnose/fix devices and provide warranty support.</p>
        <p>Improve our services and website experience.</p>
        <p>Send promotional offers (only with your consent).</p>
        <p>Comply with legal obligations (e.g., tax reporting).</p>
        <Title>3. Sharing Your Information</Title>
        <p>We never sell your data. We may share it with:</p>
        <p>Technicians: To diagnose/repair your device.</p>
        <p>
          Third-Party Vendors: Payment processors, couriers (e.g., shipping
          labels), or parts suppliers.
        </p>
        <p>Legal Authorities: Only if required by law (e.g., court orders).</p>

        <Title>4. Data Security </Title>
        <p>We protect your information with:</p>
        <p>Encryption: SSL for online transactions.</p>
        <p>Physical Security: Locked storage for devices and paperwork.</p>
        <p>Limited Access: Only authorized staff handle sensitive data.</p>
        <p>Note: While we take precautions, no system is 100% secure.</p>

        <Title>5. Your Data Rights </Title>
        <p>You have the right to:</p>
        <p>Access, update, or delete your personal data.</p>
        <p>Opt out of marketing emails (use the "unsubscribe" link).</p>
        <p>Request a copy of your repair records.</p>
        <p>Withdraw consent (where applicable).</p>
        <p>To exercise these rights, contact us at [your email/phone].</p>

        <Title>6. Device Data Confidentiality</Title>
        <p>
          Repairs: We only access data on your device if necessary for
          troubleshooting (e.g., software issues).
        </p>
        <p>
          Backups: We recommend you back up data before repairs. We are not
          responsible for data loss during service.
        </p>
        <p>
          Post-Repair: All login credentials/test data are deleted from our
          systems.
        </p>

        <Title>7. Cookies</Title>
        <p>Our website uses cookies to:</p>
        <p>Analyze traffic (via tools like Google Analytics).</p>
        <p>Remember your preferences (e.g., language).</p>
        <p>You can disable cookies in your browser settings.</p>

        <Title>8. Policy Updates</Title>
        <p>
          We may update this policy periodically. Changes will be posted on our
          website with a new Last Updated date.
        </p>

        
      </article>
    </section>
  );
}

export default PrivacyPolicy;
