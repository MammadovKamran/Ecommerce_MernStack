/** @format */
import { Select } from "@chakra-ui/react";

const FilterShop = () => {
  return (
    <>
      <div className="flex justify-between items-center mx-16 mt-16 ">
        <div className="w-auto flex justify-around items-center">
          <Select
            mx={2}
            h="60px"
            borderWidth="2px"
            borderColor="#CBD3D9"
            className="w-auto h-40"
            placeholder="Categories"
          >
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </Select>
          <Select
            mx={2}
            h="60px"
            borderWidth="2px"
            borderColor="#CBD3D9"
            className="w-auto h-40"
            placeholder="Price Range"
          >
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </Select>
          <Select
            mx={2}
            h="60px"
            borderWidth="2px"
            borderColor="#CBD3D9"
            className="w-auto h-40"
            placeholder="Select option"
          >
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </Select>
        </div>
        <div>
          <Select
            mx={2}
            h="60px"
            borderWidth="2px"
            borderColor="#CBD3D9"
            className="w-auto h-40"
            placeholder="Select option"
          >
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
