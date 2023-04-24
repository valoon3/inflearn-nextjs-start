import { Coordinates } from '@/types/store';
import { useEffect, useRef } from 'react';
import Script from 'next/script';
import { NaverMap } from '@/types/map';
import { INITIAL_CENTER, INITIAL_ZOOM } from '@/hooks/useMap';
import styles from '@/styles/map.module.scss';

type Props = {
  mapId?: string;
  initialCenter?: Coordinates;
  initialZoom?: number;
  onLoad?: (map: NaverMap) => void;
};

const Map = ({
  mapId = 'map',
  initialCenter = INITIAL_CENTER,
  initialZoom = INITIAL_ZOOM,
  onLoad,
}: Props) => {
  const mapRef = useRef<NaverMap | null>(null);

  const initializeMap = () => {
    const mapOptions = {
      center: new window.naver.maps.LatLng(...initialCenter),
      zoom: initialZoom,
      minZoom: 9,
      scaleControl: false,
      mapDataControl: false,
      logoControlOptions: {
        position: naver.maps.Position.BOTTOM_LEFT,
      },
    };

    /** https://navermaps.github.io/maps.js.ncp/docs/tutorial-2-Getting-Started.html */
    const map = new window.naver.maps.Map(mapId, mapOptions);
    mapRef.current = map;

    // 만약 prop 으로 onLoad 함수가 주어졌을 때 load 가 완료됐다고 부모 컴포넌트에 알리는 부분
    if (onLoad) {
      onLoad(map);
    }
  };

  // Map 컴포넌트가 unmount 됐을 때 해당 map  인스턴스를 모두 파괴한다.
  useEffect(() => {
    return () => {
      mapRef.current?.destroy();
    };
  }, []);

  return (
    <>
      <Script
        strategy="afterInteractive"
        type="text/javascript"
        src={`https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${process.env.NEXT_PUBLIC_NCP_CLIENT_ID}`}
        onReady={initializeMap}
      />
      <div id={mapId} className={styles.map} />
    </>
  );
};

export default Map;
