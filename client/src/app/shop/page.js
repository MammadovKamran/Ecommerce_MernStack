/** @format */

import Card from "../components/Card";
import FilterShop from "../components/FilterShop";
import Footer from "../components/footer/Footer";

const page = () => {
  return (
    <>
      <div className="">
        <div className="flex flex-col justify-center">
          <FilterShop />
          <Card />
          <Footer />
        </div>
      </div>
    </>
  );
};

export default page;
