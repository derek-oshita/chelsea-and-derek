import { MarkerF } from "@react-google-maps/api";

export const GoogleMapPin = ({ id, lat, lng, onClick }) => {
  return (
    <MarkerF
      key={id}
      icon="https://maps.google.com/mapfiles/ms/icons/green-dot.png"
      position={{ lat: lat, lng: lng, }}
      onClick={onClick}
    />
  );
};