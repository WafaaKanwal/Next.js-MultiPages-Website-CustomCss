import Image from "next/image";

export default async function About() {
  // Optional loading effect before the page renders
  await new Promise((resolve) => setTimeout(resolve, 5000));

  return (
    <div className="about-container">
      <h1 className="about-title">About Us</h1>
      <div className="about-content">
        <div className="about-image-container">
          <Image 
            src="/images/your-image.jpg" 
            alt="Background"
            layout="fill"
            className="about-image"
          />
        </div>
        <div className="about-text-container">
          <p className="about-text">
            At WK Beauty Salon, we believe that beauty is not just about appearance— 
            it&apos;s about confidence, self-expression, and self-care. Our salon is a sanctuary 
            where expert stylists and beauty professionals provide personalized services 
            tailored to your unique needs. Whether it&apos;s a fresh hairstyle, rejuvenating 
            skincare, or elegant makeup, we are dedicated to enhancing your natural beauty. 
            With a focus on quality, creativity, and the latest trends, WK Beauty Salon 
            offers a luxurious and relaxing environment where you can unwind and leave 
            feeling refreshed, radiant, and empowered.
          </p>
        </div>
      </div>
      <button className="book-button">Book Now</button>
    </div>
  );
}
