import { motion } from 'framer-motion';
import Image from 'next/image';

export const Overview = (messages: any) => {
  console.log("messages", messages);

  // Sample shopping items
  const products = [
    {
      id: 1,
      name: "Product 1",
      price: "₹999",
      image: "/images/product1.jpg", // Replace with actual image path
      link: "https://www.amazon.in/dp/B09G9FPGTN", // Replace with actual product URL
    },
    {
      id: 2,
      name: "Product 2",
      price: "₹1499",
      image: "/images/product2.jpg", // Replace with actual image path
      link: "https://www.amazon.in/dp/B08N5WRWNW", // Replace with actual product URL
    },
    {
      id: 3,
      name: "Product 3",
      price: "₹1999",
      image: "/images/product3.jpg", // Replace with actual image path
      link: "https://www.amazon.in/dp/B09GKXYX6S", // Replace with actual product URL
    },
  ];

  return (
    <motion.div
      key="overview"
      className="max-w-3xl mx-auto"
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.98 }}
      transition={{ delay: 0.5 }}
    >
      <div className="rounded-xl p-6 flex flex-col gap-8 leading-relaxed text-center max-w-xl">
        <p className="text-lg font-semibold">Buy from Us!</p>

        <div className="grid grid-cols-3 gap-6">
          {products.map((product) => (
            <div key={product.id} className="p-4 border rounded-lg shadow-lg flex flex-col items-center">
              <Image 
                src={product.image} 
                alt={product.name} 
                width={100} 
                height={100} 
                className="rounded-lg"
              />
              <p className="mt-2 font-semibold">{product.name}</p>
              <p className="text-gray-500">{product.price}</p>
              
              <a 
                href={product.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
              >
                Buy Now
              </a>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};
