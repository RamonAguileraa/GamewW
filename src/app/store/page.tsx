import React from 'react';

const products = [
  {
    id: 1,
    name: "Modo zombies BETA WonderWagons",
    price: "$50.00 USD",
    description: "Juego demo de la parte 2 de WonderWagons (En desarrollo)",
    image: "/zombies.jpg",
    link: "https://16c2c2-8d.myshopify.com"
  },
  {
    id: 2,
    name: "Escenario extra WonderWagons",
    price: "$40.00 USD",
    description: "Escenario extra para descubrir contenido extra de WonderWagons.",
    image: "/space.jpg",
    link: "https://16c2c2-8d.myshopify.com"
  },
  {
    id: 3,
    name: "Skin de manos VR para WonderWagons",
    price: "$35.00 USD",
    description: "Pack de diferentes manos para personalizar el personaje.",
    image: "hands.jpg",
    link: "https://16c2c2-8d.myshopify.com"
  },
];

function Shop() {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center overflow-hidden">
      <h1 className="text-white text-4xl font-extrabold mb-8 text-center">Bienvenido a nuestra tienda</h1>
      <h2 className="text-white text-opacity-75 text-xl font-bold mb-8 text-center">Bienvenido a nuestra tienda</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

function ProductCard({ product }: { product: any }) {
  return (
    <a href={product.link} className="block">
      <div className="bg-gray-800 rounded-lg overflow-hidden shadow-md transform transition-transform hover:scale-105">
        <img src={product.image} alt={product.name} className="w-full h-64 object-cover" />
        <div className="p-6">
          <h2 className="text-white text-lg md:text-xl lg:text-2xl font-semibold mb-2">{product.name}</h2>
          <p className="text-gray-300 mb-4">{product.description}</p>
          <div className="flex justify-between items-center">
            <span className="text-white text-lg font-semibold">{product.price}</span>
            <button className="bg-indigo-500 text-white px-4 py-2 rounded-md transition-colors duration-300 hover:bg-indigo-600 focus:outline-none">Add to Cart</button>
          </div>
        </div>
      </div>
    </a>
  );
}

export default Shop;
