import { FaFacebookSquare, FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { RiInstagramFill } from "react-icons/ri";

const ContactUsMap = () => {
  const mapSrc =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2241.6307172849724!2d-1.5824484129825174!3d53.82343573675745!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48795937ed339b51%3A0x381bb43bb411c52c!2s14%20St.Annes%20Rd%2C%20Headingley%2C%20Leeds%20LS6%203NX%2C%20UK!5e1!3m2!1sen!2sbd!4v1723463896135!5m2!1sen!2sbd";
  return (
    <div className="container mx-auto px-3 my-24 flex flex-col md:flex-row items-center gap-6">
      <div className="flex-1">
        <h1 className="text-2xl md:text-4xl font-roboto font-bold mb-16">
          CONTACT US
        </h1>
        <nav className="space-y-3 flex flex-col items-center lg:items-start *:text-center *:lg:text-left">
          <h6 className="font-helvetica mb-2">Haus Sales and Lettings Leeds</h6>
          <span className="link link-hover flex gap-3">
            <FaLocationDot size={20} />
            14 St Annes Road <br /> Headingley <br /> Leeds <br /> LS6 3NX
          </span>
          <span className="link link-hover flex items-center gap-3">
            <FaPhoneAlt size={20} />
            0113 323 1800
          </span>
          <span className="link link-hover flex items-center gap-3">
            <IoMdMail size={20} />
            headingley@haus-properties.com
          </span>
          <span className="link link-hover flex items-center gap-3 ml-6">
            <RiInstagramFill size={24} />
            <FaFacebookSquare size={24} />
          </span>
        </nav>
      </div>

      <div className="flex-1">
        <div style={{ width: "100%", height: "500px" }}>
          <iframe
            src={mapSrc}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
};

export default ContactUsMap;
