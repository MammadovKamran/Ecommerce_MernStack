/** @format */
import { HeartIcon, EyeIcon } from "@heroicons/react/24/outline";
const products = [
  {
    id: 1,
    name: "Basic Tee",
    href: "#",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    color: "Black",
    originalPrice: "$40",
    discountPrice: "$30", // indirimli fiyat
    discount: "25%", // İndirim oranı
  },
  // Diğer ürünler de buraya eklenebilir
];

export default function Card() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          Customers also purchased
        </h2>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <div key={product.id} className="group relative ">
              {/* Ürün resmi ve badge */}
              <div className="relative aspect-h-1 overflow-hidden aspect-w-1 w-full  rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <img
                  alt={product.imageAlt}
                  src={product.imageSrc}
                  className="h-full w-full object-center group-hover:scale-110 transition-all duration-300 lg:h-full lg:w-full"
                />
                {/* İndirim Badge */}
                <span className="absolute top-2 right-2 bg-blue-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                  {product.discount}
                </span>
                <div className="absolute bottom-0 flex items-center justify-center opacity-0 transition-transform transition-duration-300     duration-300 ease-linear -translate-y-16 group-hover:opacity-100 transform  group-hover:-translate-y-28 ">
                  <div className="  flex">
                    <button className="">
                      <HeartIcon
                        aria-hidden="true"
                        className="h-10 w-10 rounded-md p-2 bg-white hover:bg-pink-600"
                      />
                    </button>
                    <button className="text-sm text-white h-10 w-auto rounded-md p-2 m-2 bg-pink-600 ">
                      Add To Cart
                    </button>
                    <button className=" ">
                      <EyeIcon
                        aria-hidden="true"
                        className="h-10 w-10 rounded-md p-2  bg-white hover:bg-pink-600"
                      />
                    </button>
                  </div>
                </div>
              </div>

              {/* Ürün ismi, renk ve fiyat bilgisi */}
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-lg text-gray-700">
                    <a href={product.href}>
                      {/* <span aria-hidden="true" className="absolute inset-0" /> */}
                      {product.name}
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                </div>
                <div className="text-right flex">
                  <p className="text-xl font-medium text-gray-900 px-2">
                    {product.discountPrice}
                  </p>
                  <p className="text-xl text-gray-500 line-through ">
                    {product.originalPrice}
                  </p>
                </div>
              </div>

              {/* Renk Seçimi (Radio Buttons) */}
              <div className="mt-4 flex space-x-4">
                <label className="flex items-center cursor-pointer">
                  <input type="radio" name="color" className="hidden" />
                  <span className="w-6 h-6 rounded-full border-2 border-gray-300 bg-cyan-500"></span>
                </label>
                <label className="flex items-center cursor-pointer">
                  <input type="radio" name="color" className="hidden" />
                  <span className="w-6 h-6 rounded-full border-2 border-gray-300 bg-blue-500"></span>
                </label>
                <label className="flex items-center cursor-pointer">
                  <input type="radio" name="color" className="hidden" />
                  <span className="w-6 h-6 rounded-full border-2 border-gray-300 bg-green-500"></span>
                </label>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
