/** @format */

import Card from "../components/Card";
import FilterShop from "../components/FilterShop";

const page = () => {
  return (
    <>
      <div className="flex flex-col">
        <FilterShop />
        <Card />
      </div>
    </>
  );
};

export default page;
