/** @format */
import { Modal as Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody } from "@chakra-ui/react";
import Carousel from "./Carousel";

function ProductModal({ isOpen, onClose }) {
  const images = [
    "https://via.placeholder.com/600x400.png?text=Image+1",
    "https://via.placeholder.com/600x400.png?text=Image+2",
    "https://via.placeholder.com/600x400.png?text=Image+3",
    "https://via.placeholder.com/600x400.png?text=Image+4",
    "https://via.placeholder.com/600x400.png?text=Image+5",
  ];

  return (
    <Modal onClose={onClose} isOpen={isOpen} isCentered size="xl">
      <ModalOverlay />
      <ModalContent
        minW={["90vw", "57vw"]} // Ekran genişliğine göre dinamik genişlik
        minH={["90vh", "80vh"]} // Ekran yüksekliğine göre dinamik yükseklik
        h="auto">
        <ModalHeader borderBottom="1px" borderColor="gray">
          Product Details
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <div className="container pt-6 flex flex-col lg:flex-row gap-4 h-full">
            {/* Carousel kısmı */}
            <div className="w-full lg:w-1/2 h-auto">
              <Carousel images={images} />
            </div>

            {/* Ürün detayları kısmı */}
            <div className="w-full lg:w-1/2 h-auto  ">
              <h2 className="text-xl font-semibold mb-4">Product Information</h2>
              <p className="text-gray-700">This is a sample product description. Resize the screen to see how the modal adapts!</p>
            </div>
          </div>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}

export default ProductModal;
