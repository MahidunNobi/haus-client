import { FaHeart, FaRegHeart, FaShare, FaShower } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdBed } from "react-icons/md";
import { RiContactsBook3Fill } from "react-icons/ri";
import { PropertyType } from "../../../types/PropertyType";
import Swal from "sweetalert2";
import useAuth from "../../../Hooks/useAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import auth from "../../../firebase/firebase.config";
import { useNavigate } from "react-router-dom";

const DeskSpecification = ({
  property,
}: {
  property: PropertyType | undefined;
}) => {
  const Auth = useAuth();
  const navigate = useNavigate();
  const axiosSecure = useAxiosSecure();

  const handleSaveProperty = async () => {
    if (!Auth?.user || !property) {
      return navigate("/signin");
    }
    const res = await axiosSecure.post("/user/save-property", {
      AGENT_REF: property.AGENT_REF,
    });
    if (res.status === 200) {
      await Auth.handleAuthState(auth.currentUser);
      Swal.fire({
        icon: "success",
        title: res.data.message,
        showCancelButton: false,
        timer: 1200,
      });
    } else if (res.status === 202) {
      Swal.fire({
        icon: "warning",
        title: res.data.message,
        showCancelButton: false,
        timer: 1200,
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Unable to save property",
      });
    }
  };
  const handleUnsaveProperty = async () => {
    if (!Auth?.user || !property) {
      return navigate("/signin");
    }
    const res = await axiosSecure.post("/user/unsave-property", {
      AGENT_REF: property.AGENT_REF,
    });
    if (res.status === 200) {
      await Auth.handleAuthState(auth.currentUser);
      Swal.fire({
        icon: "success",
        title: res.data.message,
        showCancelButton: false,
        timer: 1200,
      });
    } else if (res.status === 202) {
      Swal.fire({
        icon: "warning",
        title: res.data.message,
        showCancelButton: false,
        timer: 1200,
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Unable to save property",
      });
    }
  };

  if (!property) {
    return;
  }
  return (
    <div className="container mx-auto px-5 md:flex md:justify-between items-center mb-6">
      {/* ------Mobile Price------ */}
      <div className="flex md:hidden justify-between px-2 *:font-semibold">
        <h1 className=" text-xl md:text-2xl">
          £{property?.PRICE} <span className="text-sm">PCM</span>
        </h1>
        {property?.AGENT_REF.includes("r") && (
          <h1 className=" text-xl md:text-2xl">
            £{property?.LET_BOND} <span className="text-sm">DEPOSIT</span>
          </h1>
        )}
      </div>

      {/* -------Left Section------ */}
      <div className=" hidden md:block">
        {/* -----Price------ */}
        <div className="flex mb-3">
          <h1 className=" text-xl md:text-2xl">
            £{property?.PRICE} <span className="text-sm">PCM</span>
          </h1>
          {property?.AGENT_REF.includes("r") && (
            <div className="divider divider-horizontal before:bg-primary after:bg-primary"></div>
          )}
          {property?.AGENT_REF.includes("r") && (
            <h1 className=" text-xl md:text-2xl">
              £{property?.LET_BOND} <span className="text-sm">DEPOSIT</span>
            </h1>
          )}
        </div>
        {/* -----Bedrooms count------- */}
        <p className="font-helvetica flex items-center gap-3 md:gap-4">
          <MdBed size={20} />
          <span>
            <span className="border-b-2 border-primary p-0 text-lg">
              {property?.BEDROOMS}
            </span>{" "}
            Bedrooms
          </span>
        </p>
        {/* -----Bathroom count------- */}
        <p className="font-helvetica flex items-center gap-3 md:gap-4">
          <FaShower size={20} />
          <span>
            <span className="border-b-2 border-primary p-0 text-lg">
              {property?.BATHROOMS}
            </span>{" "}
            Bathrooms
          </span>
        </p>
      </div>
      {/* ---------Right Section--------- */}
      <div className="text-right hidden md:block">
        <p className="font-helvetica flex items-center gap-3 md:gap-4 text-sm md:text-base mb-2">
          <FaLocationDot size={20} /> {property?.DISPLAY_ADDRESS}
        </p>
        <p className="flex md:justify-end text-xs md:text-sm px-2">
          <strong>Property ID:</strong> {property?.AGENT_REF}
        </p>
        {/* --------Actions-------- */}
        <div className="flex justify-end gap-4 text-sm mt-1">
          {Auth?.user?.saved_properties &&
          Auth?.user?.saved_properties.includes(property.AGENT_REF) ? (
            <button
              className="flex items-center gap-1 font-helvetica"
              onClick={handleUnsaveProperty}
            >
              <FaHeart className="text-primary" /> Saved
            </button>
          ) : (
            <button
              className="flex items-center gap-1 font-helvetica"
              onClick={handleSaveProperty}
            >
              <FaRegHeart className="text-primary" /> Save
            </button>
          )}
          <button className="flex items-center gap-1 font-helvetica">
            <FaShare className="text-blue-600" /> Share
          </button>
          <button className="flex items-center gap-1 font-helvetica">
            <RiContactsBook3Fill className="text-primary" /> Book Viewing
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeskSpecification;
