import { InfoWindowF } from "@react-google-maps/api";


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
      <div>
        <a href={url} target="_blank" rel="noopener noreferrer" >{label}</a>
        <p>{address}</p>
        <p>{distanceInMinutes} mins away</p>
      </div>
    </InfoWindowF>
  );
};