import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useGetCategory } from "../../Hooks/useCategory";
import BreadCrumbs from "../../Components/common/BreadCrumbs";
import { MdStar } from "react-icons/md";
import { getItemsByCategory } from "../../Hooks/useItem";
import Select from "../../Components/common/Select";
import Items from "./Items";

function Category() {
  const { _id } = useParams();
  const { loading, err, category } = useGetCategory(_id);

  useEffect(() => {
    document.title = category?.name || "...loading";
  }, [category]);

  return loading ? (
    <></>
  ) : (
    <section>
      <BreadCrumbs
        navs={["Home", "Shop", category?.name]}
        routes={["/", "/shop", `/shop/${category?._id}`]}
        title={category?.name || "loading"}
      />

      <nav className="max-w-6xl w-11/12 mx-auto my-20">
        <h1 className="text-center mx-auto title mb-8">
          {category?.name} Services
        </h1>
        <article className="grid md:grid-cols-[10fr_7fr] gap-6">
          {/* //! IAMGE !//  */}
          <img
            src={category?.image}
            className="w-full object-cover h-[420px] rounded-lg"
          />

          {/* //! DETAILS !//  */}
          <aside className="w-full border-2 border-black/20 rounded-lg h-full p-5 text-black/60 font-semibold tracking-wide text-lg">
            <h1 className="text-fif text-3xl font-bold mb-6">
              {category?.name} Services
            </h1>

            <div className="grid gap-y-4 grid-cols-[2fr_2fr] items-center ">
              {/* REVIEWS  */}
              <h2>Reviews :</h2>
              <h3 className="text-yellow-500 text-xl items-center flex gap-0.5">
                {[...Array(5)].map(() => (
                  <MdStar />
                ))}
                <h4 className="text-black/60 text-lg ml-2">(0)</h4>
              </h3>

              {/* BUYERS  */}
              <h2>Buyers :</h2>
              <h3>0</h3>

              {/* ORDERS  */}
              <h2>Orders on proccessing :</h2>
              <h3>0</h3>

              {/* PRICE  */}
              <h2 className="line-clamp-1">Price Start From :</h2>
              <h3>5 DA</h3>
            </div>
          </aside>
        </article>

        <div className="md:w-full w-11/12 my-8 mx-auto">
          <h2 className="md:text-3xl text-2xl  font-bold text-fif mb-3.5">{category?.name} Description :</h2>
          <h1 className="2xl:text-xl text-lg font-medium max-w-7xl   text-black/70 mb-6">
            {category?.description}
          </h1>
          
        </div>

        <Items />
      </nav>
    </section>
  );
}

export default Category;
