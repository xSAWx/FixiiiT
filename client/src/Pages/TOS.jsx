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
        <h1 className="font-light mb-2 text-black">
          Last updated: October 2023
        </h1>
        <Title>Terms & conditions</Title>
        <p>
          Turpis gravida turpis mauris magna in libero ac dis consequat.
          Imperdiet ac semper quisque volutpat consectetur cursus non pretium
          pharetra. Nisl duis blandit dui imperdiet nec id integer. Elit varius
          cras arcu tempor integer in.
        </p>
        <p>
          Quam nunc arcu nunc a lobortis convallis magnis dolor. Integer
          malesuada vel mi eu elementum. Etiam eget urna quis dui amet facilisis
          fringilla sed. Massa vitae accumsan viverra in morbi nec volutpat
          aenean tortor. At nec sagittis eget placerat. Mi accumsan massa vitae
          etiam nisi suspendisse condimentum elementum. Arcu varius id ipsum
          arcu et diam non rutrum. Auctor elit malesuada non aenean posuere
          mattis iaculis mauris nibh.
        </p>
        <Title>Intellectual property and acceptable use</Title>
        <p>
          Turpis gravida turpis mauris magna in libero ac dis consequat.
          Imperdiet ac semper quisque volutpat consectetur cursus non pretium
          pharetra. Nisl duis blandit dui imperdiet nec id integer. Elit varius
          cras arcu tempor integer in. Quam nunc arcu nunc a lobortis convallis
          magnis dolor. Integer malesuada vel mi eu elementum. Etiam eget urna
          quis dui amet facilisis fringilla sed. Massa vitae accumsan viverra in
          morbi nec volutpat aenean tortor. At nec sagittis eget placerat. Mi
          accumsan massa vitae etiam nisi suspendisse condimentum elementum.
          Arcu varius id ipsum arcu et diam non rutrum. Auctor elit malesuada
          non aenean posuere mattis iaculis mauris nibh.
        </p>
        <Title>Limitation of liability</Title>
        <p>
          Turpis gravida turpis mauris magna in libero ac dis consequat.
          Imperdiet ac semper quisque volutpat consectetur cursus non pretium
          pharetra. Nisl duis blandit dui imperdiet nec id integer. Elit varius
          cras arcu tempor integer in.
        </p>

        <p>
          Quam nunc arcu nunc a lobortis convallis magnis dolor. Integer
          malesuada vel mi eu elementum. Etiam eget urna quis dui amet facilisis
          fringilla sed. Massa vitae accumsan viverra in morbi nec volutpat
          aenean tortor. At nec sagittis eget placerat. Mi accumsan massa vitae
          etiam nisi suspendisse condimentum elementum. Arcu varius id ipsum
          arcu et diam non rutrum. Auctor elit malesuada non aenean posuere
          mattis iaculis mauris nibh.
        </p>
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
        <Title>Registration</Title>
        <p>
          Turpis gravida turpis mauris magna in libero ac dis consequat.
          Imperdiet ac semper quisque volutpat consectetur cursus non pretium
          pharetra. Nisl duis blandit dui imperdiet nec id integer. Elit varius
          cras arcu tempor integer in. Quam nunc arcu nunc a lobortis convallis
          magnis dolor. Integer malesuada vel mi eu elementum. Etiam eget urna
          quis dui amet facilisis fringilla sed. Massa vitae accumsan viverra in
          morbi nec volutpat aenean tortor. At nec sagittis eget placerat. Mi
          accumsan massa vitae etiam nisi suspendisse condimentum elementum.
          Arcu varius id ipsum arcu et diam non rutrum. Auctor elit malesuada
          non aenean posuere mattis iaculis mauris nibh.
        </p>
        <Title>Password and security</Title>
        <p>
          Turpis gravida turpis mauris magna in libero ac dis consequat.
          Imperdiet ac semper quisque volutpat consectetur cursus non pretium
          pharetra. Nisl duis blandit dui imperdiet nec id integer. Elit varius
          cras arcu tempor integer in.
        </p>
        <p>
          Quam nunc arcu nunc a lobortis convallis magnis dolor. Integer
          malesuada vel mi eu elementum. Etiam eget urna quis dui amet facilisis
          fringilla sed. Massa vitae accumsan viverra in morbi nec volutpat
          aenean tortor. At nec sagittis eget placerat. Mi accumsan massa vitae
          etiam nisi suspendisse condimentum elementum. Arcu varius id ipsum
          arcu et diam non rutrum. Auctor elit malesuada non aenean posuere
          mattis iaculis mauris nibh.
        </p>
      </article>
    </section>
  );
}

export const Title = ({ children }) => (
  <h1 className="text-2xl font-semibold my-2 text-fif ">{children}</h1>
);

export default TOS;
