import { useCallback, useEffect, useRef } from "react";

declare global {
  interface Window {
    kakao: any;
  }
}
export interface KakaoMapProps {
  latitude: number;
  longitude: number;
}

const KakaoMap: React.FC<KakaoMapProps> = ({ ...prop }) => {
  useEffect(() => {
    const script = document.createElement("script");
    script.async = true;
    script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=33ccb9ed924f4f71c3407b8f585df918&autoload=false`;
    document.head.appendChild(script);

    script.addEventListener("load", () => {
      window.kakao.maps.load(() => {
        const container = document.getElementById("map");
        const options = {
          center: new window.kakao.maps.LatLng(prop.latitude, prop.longitude),
          level: 3,
        };
        const map = new window.kakao.maps.Map(container, options);
        new window.kakao.maps.Marker({
          map: map,
          position: new window.kakao.maps.LatLng(prop.latitude, prop.longitude),
        });
      });
    });
  }, []);

  return (
    <div
      style={{
        width: "100%",
        padding: "20px 0px 20px 0px",
        display: "grid",
        placeItems: "center",
        borderBottom: "1px solid #B7BBC8",
      }}
    >
      <div id="map" style={{ width: "100%", height: "270px" }}></div>
    </div>
  );
};

export default KakaoMap;
