import { InfoWindowF } from "@react-google-maps/api";
import { FaExternalLinkAlt } from "react-icons/fa";


export const GoogleMapInfoWindow = ({
  label,
  url,
  address, distanceInMinutes,
  lat,
  lng,
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
            <strong>{label}</strong><div className="ml-1"><FaExternalLinkAlt /></div>
          </section>
        </a>
        <section className="p-1">
          <p>{address}</p>
          <p>{distanceInMinutes} mins away</p>
        </section>
      </div>
    </InfoWindowF>
  );
};