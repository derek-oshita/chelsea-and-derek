import { InfoWindowF } from "@react-google-maps/api";
import { FaExternalLinkAlt } from "react-icons/fa";
import { MdOutlinePets } from "react-icons/md";

export const renderIcon = icon => {
  return (
    <div className="ml-1">
      {icon}
    </div>
  );
};

export const GoogleMapInfoWindow = ({
  label,
  url,
  address, distanceInMinutes,
  lat,
  lng,
  isPetFriendly,
  onClose
}) => {
  return (
    <InfoWindowF
      zIndex={1}
      position={{ lat, lng }}
      onCloseClick={onClose}
    >
      <div className="flex flex-col">
        <a href={url} target="_blank" rel="noopener noreferrer" >
          <section className="flex p-1">
            <strong>{label}</strong>{renderIcon(<FaExternalLinkAlt />)}
          </section>
        </a>
        <section className="p-1">
          <p>{address}</p>
          <p>{distanceInMinutes} mins away</p>
          {isPetFriendly && (
            <div className="flex">
              <p>Pet Friendly</p>{renderIcon(<MdOutlinePets />)}
            </div>
          )}
        </section>
      </div>
    </InfoWindowF>
  );
};