/** @format */

import Carousel from "./components/Carousel";
import Header from "./components/header/Header";

export default function Page() {
  const images = [
    "https://via.placeholder.com/600x400.png?text=Image+1",
    "https://via.placeholder.com/600x400.png?text=Image+2",
    "https://via.placeholder.com/600x400.png?text=Image+3",
    "https://via.placeholder.com/600x400.png?text=Image+4",
    "https://via.placeholder.com/600x400.png?text=Image+5",
  ];
  return (
    <>
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold text-center my-8">Product Carousel</h1>
        <Carousel images={images} />
      </div>
    </>
  );
}
