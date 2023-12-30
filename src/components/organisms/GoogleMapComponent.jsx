'use client';

import { useCallback, useState } from "react";
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import process from "next/dist/build/webpack/loaders/resolve-url-loader/lib/postcss";

const GOOGLE_MAPS_API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

export const GoogleMapComponent = () => {
  const [map, setMap] = useState(null);
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: GOOGLE_MAPS_API_KEY,
  });

  const onLoad = useCallback(function callback(map) {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);

    setMap(map);
  }, []);

  const onUnmount = useCallback(function callback(map) {
    setMap(null);
  }, []);


  const containerStyle = {
    width: '400px',
    height: '400px'
  };


  const center = {
    lat: -3.745,
    lng: -38.523
  };

  return isLoaded ? (
    <section className="card-section xs:w-128 md:w-144 md:w-156 lg:160">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        { /* Child components, such as markers, info windows, etc. */ }
        <></>
      </GoogleMap>
    </section>
  ) : <></>;
};