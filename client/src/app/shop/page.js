/** @format */

import Card from "../components/Card";
import FilterShop from "../components/FilterShop";
import Footer from "../components/footer/Footer";

const page = () => {
  return (
    <>
      <div className="flex flex-col">
        <FilterShop />
        <Card />
        <Footer />
      </div>
    </>
  );
};

export default page;
