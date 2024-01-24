'use client';

import { useState } from "react";
import { GoogleMap, MarkerF, useJsApiLoader } from '@react-google-maps/api';
import process from "next/dist/build/webpack/loaders/resolve-url-loader/lib/postcss";
import { LOCATIONS, VENUE } from "@/data";
import { GoogleMapInfoWindow } from "@/components/molecules/GoogleMapInfoWindow";
import { GoogleMapPin } from "@/components/atoms/GoogleMapPin";

// https://www.youtube.com/watch?v=FS6hEIFTda8&ab_channel=WebDevCody
// old docs: https://tomchentw.github.io/react-google-maps/
// blog help: https://medium.com/scalereal/integration-of-google-maps-with-react-part-1-86c075ab452a

const GOOGLE_MAPS_API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

export const GoogleMapComponent = () => {
  const [selectedLocation, setSelectedLocation] = useState(null);
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: GOOGLE_MAPS_API_KEY,
  });

  const pin = (
    <GoogleMapPin
      onClick={() => handleClickMarker(VENUE.LOMA_VISTA_GARDENS.id)}
      {...VENUE.LOMA_VISTA_GARDENS}
    />
  );

  const markers = Object.values(LOCATIONS).map((l) => {
    return <MarkerF
      key={l.id}
      position={{ lat: l.lat, lng: l.lng }}
      onClick={() => handleClickMarker(l.id)}
    />;
  });

  const handleClickMarker = (markerID) => {
    const isLomaVistaGardens = markerID === VENUE.LOMA_VISTA_GARDENS.id;
    selectedLocation?.id === markerID
      ? setSelectedLocation(null)
      : setSelectedLocation(isLomaVistaGardens ? VENUE.LOMA_VISTA_GARDENS : LOCATIONS[markerID]);
  };

  return (
    <section className="rounded w-screen xxs:h-[700px] md:w-[768px] md:shadow-lg ">
      {isLoaded && (
        <GoogleMap
          zoom={13}
          mapContainerStyle={{ width: '100%', height: '100%' }}
          center={{
            lat: VENUE.LOMA_VISTA_GARDENS.lat,
            lng: VENUE.LOMA_VISTA_GARDENS.lng
          }}
        >
          {pin}
          {markers}
          {selectedLocation && (
            <GoogleMapInfoWindow onClose={() => setSelectedLocation(null)} {...selectedLocation} />
          )}
        </GoogleMap>
      )}
    </section>
  );
};