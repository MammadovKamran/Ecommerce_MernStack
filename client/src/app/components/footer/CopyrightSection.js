/** @format */

import {  } from "@heroicons/react/24/outline";
const CopyrightSection = () => {
  return (
    <div className="bg-gray-200 py-4 text-center text-sm">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row lg:justify-between items-center"><div className="flex space-x-4 mb-2 lg:mb-0">
            {/* Social Media Icons */}
            <a href="#" className="text-gray-600 hover:text-blue-500">
              Facebook
            </a>
            <a href="#" className="text-gray-600 hover:text-blue-500">
              Instagram
            </a>
            <a href="#" className="text-gray-600 hover:text-blue-500">
              LinkedIn
              
            </a>
          </div>
          <p className="mb-2 lg:mb-0">© 2023. All rights reserved by Axilthemes.</p>
          
          <div className="flex items-center space-x-4 ">
            <img src="https://new.axilthemes.com/demo/template/etrade/assets/images/icons/cart/cart-1.png" alt="Paypal" className="w-5 h-5" />
            <img src="	https://new.axilthemes.com/demo/template/etrade/assets/images/icons/cart/cart-2.png" alt="Visa" className="w-9 h-5" />
            <img src="	https://new.axilthemes.com/demo/template/etrade/assets/images/icons/cart/cart-5.png" alt="MasterCard" className="w-12 h-5" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CopyrightSection;
