'use client';

import { useState } from "react";
import { GoogleMap, MarkerF, useJsApiLoader } from '@react-google-maps/api';
import process from "next/dist/build/webpack/loaders/resolve-url-loader/lib/postcss";
import { LOCATIONS, VENUE } from "@/data";

// https://www.youtube.com/watch?v=FS6hEIFTda8&ab_channel=WebDevCody
const GOOGLE_MAPS_API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

export const GoogleMapComponent = () => {
  const [selectedLocation, setSelectedLocation] = useState(null);

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: GOOGLE_MAPS_API_KEY,
  });

  const markers = Object.values(LOCATIONS).map((l) => {
    return <MarkerF key={l.id} position={{ lat: l.lat, lng: l.lng }}/>;
  });

  return (
    <section className="card-section xs:w-128 md:w-144 md:w-156 lg:160">
      {isLoaded ? (
        <GoogleMap
          zoom={13}
          mapContainerStyle={{ width: '25rem', height: '25rem' }}
          center={{
            lat: VENUE.LOMA_VISTA_GARDENS.lat,
            lng: VENUE.LOMA_VISTA_GARDENS.lng
          }}
        >
          {markers}
        </GoogleMap>
      ) : (
        <p>Unable to load Google Map</p>
      )}
    </section>
  );
};