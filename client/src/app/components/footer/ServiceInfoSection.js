/** @format */

// components/ServiceInfoSection.tsx
const services = [
  {
    title: "Fast & Secure Delivery",
    description: "Tell about your service.",
    img: "https://new.axilthemes.com/demo/template/etrade/assets/images/icons/service1.png",
  },
  {
    title: "Money Back Guarantee",
    description: "Within 10 days.",
    img: "https://new.axilthemes.com/demo/template/etrade/assets/images/icons/service2.png",
  },
  {
    title: "24 Hour Return Policy",
    description: "No question ask.",
    img: "https://new.axilthemes.com/demo/template/etrade/assets/images/icons/service1.png",
  },
  {
    title: "Pro Quality Support",
    description: "24/7 Live support.",
    img: "https://new.axilthemes.com/demo/template/etrade/assets/images/icons/service4.png",
  },
];

const ServiceInfoSection = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 2xl:gap-16 gap-2   lg:gap-1  mb-8 text-center">
      {services.map((service, index) => (
        <div
          key={index}
          className="p-4  rounded-lg  flex justify-between items-center"
        >
          <img src={service.img} className="w-10" />
          <div className="text-start">
            <h3 className="font-semibold mb-2">{service.title}</h3>
            <p className="text-sm text-gray-600">{service.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ServiceInfoSection;
