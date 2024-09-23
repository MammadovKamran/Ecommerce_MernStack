/** @format */
import { Select } from "@chakra-ui/react";

const FilterShop = () => {
  return (
    <>
      <div className="flex md:flex-row flex-col md:flex-wrap justify-between items-center mx-[2%] mt-16   ">
        <div className="md:w-auto w-[100%]  flex md:flex-row flex-col justify-around items-center ">
          <Select mx={2} h="60px" borderWidth="2px" borderColor="#CBD3D9" className="w-auto h-40 mb-3" placeholder="Categories">
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </Select>
          <Select mx={2} h="60px" borderWidth="2px" borderColor="#CBD3D9" className="w-auto h-40 mb-3" placeholder="Price Range">
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </Select>
          <Select mx={2} h="60px" borderWidth="2px" borderColor="#CBD3D9" className="w-auto h-40 mb-3" placeholder="Select option">
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </Select>
        </div>
        <div className="md:w-auto w-[100%]">
          <Select h="60px" borderWidth="2px" borderColor="#CBD3D9" className="w-full h-40 " placeholder="Select option">
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
