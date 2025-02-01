import Link from 'next/link';

export default function Contact() {
  return (
    <div className="contact-container">
      <h1 className="contact-title">Contact Us</h1>

      <div className="contact-content">
        {/* Left Section */}
        <div className="contact-left">
          {/* Address */}
          <div>
            <h2>📍 Address</h2>
            <Link href="https://www.google.com/maps/place/123+Glamour+Street,+Beauty+Town" target="_blank">
              WK Beauty Salon, 123 Glamour Street, Beauty Town, City, ZIP Code
            </Link>
          </div>

          {/* Phone */}
          <div>
            <h2>📞 Phone</h2>
            <Link href="tel:+1234567890">(+123) 456-7890</Link>
          </div>

          {/* Email */}
          <div>
            <h2>📧 Email</h2>
            <Link href="mailto:info@wkbeautysalon.com">info@wkbeautysalon.com</Link>
          </div>

          {/* Social Media */}
          <div>
            <h2>🌐 Social Media</h2>
            <Link href="https://instagram.com/wkbeautysalon" target="_blank">Instagram: @wkbeautysalon</Link><br />
            <Link href="https://facebook.com/wkbeautysalon" target="_blank">Facebook: WK Beauty Salon</Link><br />
            <Link href="https://wa.me/1234567890" target="_blank">WhatsApp: +1234567890</Link>
          </div>

          {/* Business Hours */}
          <div className="business-hours">
            <h2>🕒 Business Hours</h2>
            <p>Monday to Friday: 9:00 AM – 7:00 PM</p>
            <p>Saturday: 10:00 AM – 6:00 PM</p>
            <p>Sunday: Closed</p>
          </div>
        </div>

        {/* Right Section */}
        <div className="contact-right">
          {/* Map */}
          <div>
            <h2>🗺️ Visit Us</h2>
            <div className="contact-map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.5028053550484!2d-122.40170068468193!3d37.786886679758205!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809dc2b7c4d7%3A0x6ed86c0c26de565c!2sWK%20Beauty%20Salon!5e0!3m2!1sen!2sus!4v1697608350057!5m2!1sen!2us"
                width="100%"
                height="100%"
                loading="lazy"
              ></iframe>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h2>✉️ Contact Form</h2>
            <form className="contact-form">
              <input type="text" placeholder="Your Name" required />
              <input type="email" placeholder="Your Email" required />
              <textarea placeholder="Your Message" required></textarea>
              <button type="submit">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
