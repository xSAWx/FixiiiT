import React from "react";
import BreadCrumbs from "../../Components/common/BreadCrumbs";
import { Swiper, SwiperSlide } from "swiper/react";
import { useGetCategories } from "../../Hooks/useCategory";
import { Autoplay } from "swiper/modules";
import { ReviewsSection, TitleS } from "../AboutUs";
import { Link } from "react-router-dom";

function Shop() {
  const { categories, loading, err } = useGetCategories();
  console.log(categories);

  return (
    <section>
      <BreadCrumbs
        navs={["Home", "Shop"]}
        routes={["/", "/shop "]}
        title="You Need A Repair ?"
      />

      <article className="my-24 md:w-full w-11/12 mx-auto">
        <div className="flex">
          <TitleS title="CATEGORIES" className="mx-auto text-center" />
        </div>
        <h1 className="title text-center md:w-[550px] !leading-tight mx-auto mb-16">
          Choose What You Want To Repair{" "}
        </h1>
        {loading ? (
          <aside className="grid w-full h-full my-24 place-content-center">
            <div className="loader w-16 h-16 !border-8" />
          </aside>
        ) : (
          <Swiper
            spaceBetween={10}
            modules={[Autoplay]}
            effect="cube"
            breakpoints={{
              // Optional: you can define custom breakpoints to adjust settings at specific screen sizes

              0: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 3,
              },
              1024: {
                slidesPerView: 4,
              },
              1600: {
                slidesPerView: 5,
              },
            }}
            slidesPerView="auto"
            loop={true}
            speed={3000}
            autoplay={{ delay: 0, disableOnInteraction: false }}
          >
            {[...Array(2)].map(() =>
              categories?.map((cat) => (
                <>
                  <SwiperSlide>
                    <CardCategory {...cat} />
                  </SwiperSlide>
                </>
              ))
            )}
          </Swiper>
        )}
      </article>

      <ReviewsSection />
    </section>
  );
}

const CardCategory = ({ _id, name, image, description }) => (
  <Link
    to={_id}
    className="cursor-pointer hover:translate-y-2 duration-200 group"
  >
    <img
      src={image}
      className="2xl:w-[17vw] lg:w-[20vw] w-80 rounded-lg  object-cover   mx-auto mb-3"
    />
    <h1 className="text-tertiary md:text-[28px] group-hover:tracking-wider duration-200 text-2xl translate-x-1 text-center font-bold tracking-wide">
      {name}
    </h1>
    <h2 className="text-black/60 text-center tracking-wider mt-2 font-semibold">
      Repair {name}
    </h2>
  </Link>
);

export default Shop;
