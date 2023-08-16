import { useCallback, useEffect, useRef } from "react";
import { GymProps } from "./Gym";

declare global {
  interface Window {
    kakao: any;
  }
}
export interface KakaoMapProps {
  latitude: number;
  longitude: number;
  gyms?: GymProps[];
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
        const imageSrc = "../../../../assets/images/Location_Blue_icon.png"; // 마커이미지의 주소입니다
        const imageSize = new window.kakao.maps.Size(18, 18); // 마커이미지의 크기입니다

        const markerImage = new window.kakao.maps.MarkerImage(
          imageSrc,
          imageSize
        );
        new window.kakao.maps.Marker({
          map: map,
          position: new window.kakao.maps.LatLng(prop.latitude, prop.longitude),
          image: markerImage,
        });
        if (prop.gyms) {
          prop.gyms.map((gym) => {
            const gymImageSrc =
              "../../../../assets/images/Location_Red_icon.png"; // 마커이미지의 주소입니다
            const gymImageSize = new window.kakao.maps.Size(18, 18); // 마커이미지의 크기입니다

            const gymMarkerImage = new window.kakao.maps.MarkerImage(
              gymImageSrc,
              gymImageSize
            );
            new window.kakao.maps.Marker({
              map: map,
              position: new window.kakao.maps.LatLng(
                gym.latitude,
                gym.longitude
              ),
              image: gymMarkerImage,
            });
          });
        }
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
