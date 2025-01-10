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
        <h1 className="font-light mb-2 text-black">
          Last updated: October 2023
        </h1>
        <Title>Privacy policy</Title>
        <p>Turpis gravida turpis mauris magna in libero ac dis consequat. Imperdiet ac semper quisque volutpat consectetur cursus non pretium pharetra. Nisl duis blandit dui imperdiet nec id integer. Elit varius cras arcu tempor integer in.</p>
        <p>Quam nunc arcu nunc a lobortis convallis magnis dolor. Integer malesuada vel mi eu elementum. Etiam eget urna quis dui amet facilisis fringilla sed. Massa vitae accumsan viverra in morbi nec volutpat aenean tortor. At nec sagittis eget placerat. Mi accumsan massa vitae etiam nisi suspendisse condimentum elementum. Arcu varius id ipsum arcu et diam non rutrum. Auctor elit malesuada non aenean posuere mattis iaculis mauris nibh.</p>
        <Title>What type of personal information do we collect?</Title>
        <p>Turpis gravida turpis mauris magna in libero ac dis consequat. Imperdiet ac semper quisque volutpat consectetur cursus non pretium pharetra. Nisl duis blandit dui imperdiet nec id integer. Elit varius cras arcu tempor integer in. Quam nunc arcu nunc a lobortis convallis magnis dolor. Integer malesuada vel mi eu elementum. Etiam eget urna quis dui amet facilisis fringilla sed. Massa vitae accumsan viverra in morbi nec volutpat aenean tortor. At nec sagittis eget placerat. Mi accumsan massa vitae etiam nisi suspendisse condimentum elementum. Arcu varius id ipsum arcu et diam non rutrum. Auctor elit malesuada non aenean posuere mattis iaculis mauris nibh.</p>
        <Title>How do we collect your personal data?</Title>
        <p>Turpis gravida turpis mauris magna in libero ac dis consequat. Imperdiet ac semper quisque volutpat consectetur cursus non pretium pharetra. Nisl duis blandit dui imperdiet nec id integer. Elit varius cras arcu tempor integer in.</p>
        <p>Quam nunc arcu nunc a lobortis convallis magnis dolor. Integer malesuada vel mi eu elementum. Etiam eget urna quis dui amet facilisis fringilla sed. Massa vitae accumsan viverra in morbi nec volutpat aenean tortor. At nec sagittis eget placerat. Mi accumsan massa vitae etiam nisi suspendisse condimentum elementum. Arcu varius id ipsum arcu et diam non rutrum. Auctor elit malesuada non aenean posuere mattis iaculis mauris nibh.</p>
        <ul className="list-decimal pl-6 grid gap-4 marker:text-tertiary marker:text-lg my-4">
          <li className="text-black ">
            Imperdiet ac semper quisque volutpat consectetur cursus non pretium
            pharetra.
          </li>
          <li className="text-black">
            Nisl duis blandit dui imperdiet nec id integer.
          </li>
          <li className="text-black">
            Quam nunc arcu nunc a lobortis convallis magnis dolor.
          </li>
          <li className="text-black">
            Massa vitae accumsan viverra in morbi nec volutpat aenean tortor.
          </li>
        </ul>
        <Title>What are our legal bases for processing your data?
        </Title>
        <p>Turpis gravida turpis mauris magna in libero ac dis consequat. Imperdiet ac semper quisque volutpat consectetur cursus non pretium pharetra. Nisl duis blandit dui imperdiet nec id integer. Elit varius cras arcu tempor integer in. Quam nunc arcu nunc a lobortis convallis magnis dolor. Integer malesuada vel mi eu elementum. Etiam eget urna quis dui amet facilisis fringilla sed. Massa vitae accumsan viverra in morbi nec volutpat aenean tortor. At nec sagittis eget placerat. Mi accumsan massa vitae etiam nisi suspendisse condimentum elementum. Arcu varius id ipsum arcu et diam non rutrum. Auctor elit malesuada non aenean posuere mattis iaculis mauris nibh.</p>
        <Title>Security</Title>
        <p>Turpis gravida turpis mauris magna in libero ac dis consequat. Imperdiet ac semper quisque volutpat consectetur cursus non pretium pharetra. Nisl duis blandit dui imperdiet nec id integer. Elit varius cras arcu tempor integer in.</p>
        <p>Quam nunc arcu nunc a lobortis convallis magnis dolor. Integer malesuada vel mi eu elementum. Etiam eget urna quis dui amet facilisis fringilla sed. Massa vitae accumsan viverra in morbi nec volutpat aenean tortor. At nec sagittis eget placerat. Mi accumsan massa vitae etiam nisi suspendisse condimentum elementum. Arcu varius id ipsum arcu et diam non rutrum. Auctor elit malesuada non aenean posuere mattis iaculis mauris nibh.</p>
      </article>
    </section>
  );
}

export default PrivacyPolicy;
