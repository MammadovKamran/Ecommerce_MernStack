/** @format */
import { Select } from "@chakra-ui/react";

const FilterShop = () => {
  return (
    <>
      <div className="flex md:flex-row flex-col lg:flex-wrap justify-between items-center mx-[2%] mt-16   ">
        <div className="md:w-auto w-[100%]  flex md:flex-row flex-col justify-around items-center md:mb-5  min-w-[500px] min-h-[270px]  ">
          <Select mr={2} h="60px" borderWidth="2px" borderColor="#CBD3D9" className="w-auto h-40  " placeholder="Categories">
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </Select>
          <Select mr={2} h="60px" borderWidth="2px" borderColor="#CBD3D9" className="w-auto h-40 " placeholder="Price Range">
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </Select>
          <Select mr={2} h="60px" borderWidth="2px" borderColor="#CBD3D9" className="w-auto h-40 " placeholder="Select option">
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </Select>
        </div>
        <div className="md:w-auto w-[100%] mb-5">
          <Select mr={2} h="60px" borderWidth="2px" borderColor="#CBD3D9" className="w-full h-40" placeholder="Select option">
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </Select>
        </div>
      </div>
    </>
  );
};

export default FilterShop;
