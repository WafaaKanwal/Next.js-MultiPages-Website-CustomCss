import Image from "next/image";

export default function Products() {
  const products = [
    {
      name: "Premium Hair Care Products",
      image: "/images/hair-care.webp",
      description: "Keep your hair healthy and vibrant with our premium hair care range.",
    },
    {
      name: "Professional Hair Styling Tools",
      image: "/images/tools.jpeg",
      description: "Achieve salon-quality hairstyles with our advanced styling tools.",
    },
    {
      name: "Skin Care Essentials",
      image: "/images/skincare.jpg",
      description: "Nurture your skin with our carefully curated skincare essentials.",
    },
    {
      name: "Makeup Products",
      image: "/images/makeupp.avif",
      description: "Explore our high-quality makeup collection to enhance your beauty.",
    },
    {
      name: "Nail Care Kits",
      image: "/images/nailcare.jpg",
      description: "Maintain flawless nails with our all-in-one nail care kits.",
    },
    {
      name: "Body Care Products",
      image: "/images/bodycare.webp",
      description: "Rejuvenate your body with our luxurious body care range.",
    },
    {
      name: "Fragrances",
      image: "/images/fragnance.jpeg",
      description: "Discover your signature scent from our collection of fragrances.",
    },
  ];

  return (
    <div className="products-container">
      <h1 className="products-title">Our Products</h1>
      <div className="products-grid">
        {products.map((product, index) => (
          <div className="product-card" key={index}>
            <Image
              src={product.image}
              alt={product.name}
              width={300}
              height={200}
              className="product-image"
            />
            <div className="product-content">
              <h2 className="product-name">{product.name}</h2>
              <p className="product-description">{product.description}</p>
              <a href="#" className="order-button">
                Order Now
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
