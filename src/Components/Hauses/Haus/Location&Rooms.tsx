import { FaShower } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdBed } from "react-icons/md";
import { PropertyType } from "../../../types/PropertyType";

const LocationRooms = ({ property }: { property: PropertyType }) => {
  return (
    <div className="max-w-[400px] px-2 md:px-0">
      <p className="font-helvetica flex items-center gap-3 md:gap-4 text-sm md:text-base mb-2">
        <FaLocationDot size={20} /> {property?.DISPLAY_ADDRESS}
      </p>

      <div className="flex flex-col md:flex-row md:justify-between md:mt-3 gap-2 text-sm md:text-base">
        <p className="font-helvetica flex items-center gap-3 md:gap-4">
          <MdBed size={20} />
          <span>
            <span className="border-b-2 border-primary p-0 text-lg">
              {property.BEDROOMS}
            </span>{" "}
            Bedrooms
          </span>
        </p>
        <p className="font-helvetica flex items-center gap-3 md:gap-4">
          <FaShower size={20} />
          <span>
            <span className="border-b-2 border-primary p-0 text-lg">
              {property.BATHROOMS}
            </span>{" "}
            Bathrooms
          </span>
        </p>
      </div>
    </div>
  );
};

export default LocationRooms;
