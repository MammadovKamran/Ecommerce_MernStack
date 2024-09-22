/** @format */

// components/CopyrightSection.tsx
const CopyrightSection = () => {
  return (
    <div className="bg-gray-200 py-4 text-center text-sm">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row lg:justify-between items-center">
          <p className="mb-2 lg:mb-0">© 2023. All rights reserved by Axilthemes.</p>
          <div className="flex space-x-4 mb-2 lg:mb-0">
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
          <div className="flex space-x-4">
            <img src="/paypal.png" alt="Paypal" className="w-10" />
            <img src="/visa.png" alt="Visa" className="w-10" />
            <img src="/mastercard.png" alt="MasterCard" className="w-10" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CopyrightSection;
