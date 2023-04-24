import { useEffect } from 'react';
import { Marker } from '@/types/map';

const Marker = ({ map, coordinates, icon, onClick }: Marker) => {
  useEffect(() => {
    let marker: naver.maps.Marker | null = null;
    if (map) {
      /** https://navermaps.github.io/maps.js.ncp/docs/tutorial-2-Marker.html */
      marker = new naver.maps.Marker({
        map: map,
        position: new naver.maps.LatLng(...coordinates),
        icon,
      });

      if (onClick) {
        naver.maps.Event.addListener(marker, 'click', onClick);
      }

      return () => {
        marker?.setMap(null);
      };
    }
  }, [map]);

  return null;
};

export default Marker;
