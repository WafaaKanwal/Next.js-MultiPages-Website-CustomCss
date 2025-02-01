export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header section with responsive background image and opacity settings */}
      <div className="header">
        <div className="header-overlay"></div>

        {/* Content Section */}
        <div className="header-content">
          <h1>WK Beauty Salon</h1>
          <p>
            Experience elegance and expert care at WK Beauty Salon. Let our skilled professionals enhance your beauty, leaving you radiant and refreshed.
          </p>
          <div className="flex justify-start">
            <button className="header-button">
              We're Booking Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
