import Map from './Map';
import useMap, { INITIAL_CENTER, INITIAL_ZOOM } from '@/hooks/useMap';
import { NaverMap } from '@/types/map';
import Markers from './Markers';
import UseCurrentStore from '@/hooks/useCurrentStore';
import { useRouter } from 'next/router';
import { useMemo } from 'react';
import { Coordinates } from '@/types/store';

const MapSection = () => {
  /** initial zoom, center from url query */
  const router = useRouter();

  const query = useMemo(() => new URLSearchParams(router.asPath.slice(1)), []);

  const initialZoom = useMemo(() => {
    console.log(query);
    return query.get('zoom') ? Number(query.get('zoom')) : INITIAL_ZOOM;
  }, [query]);

  const initialCenter = useMemo<Coordinates>(
    () =>
      query.get('lat') && query.get('lng')
        ? [Number(query.get('lat')), Number(query.get('lng'))]
        : INITIAL_CENTER,
    [query]
  );

  console.log(initialCenter);

  /** onLoadMap */
  const { initializeMap } = useMap();
  const { clearCurrentStore } = UseCurrentStore();

  const onLoadMap = (map: NaverMap) => {
    initializeMap(map);
    naver.maps.Event.addListener(map, 'click', clearCurrentStore);
  };

  return (
    <>
      <Map
        onLoad={onLoadMap}
        initialZoom={initialZoom}
        initialCenter={initialCenter}
      />
      <Markers />
    </>
  );
};

export default MapSection;
