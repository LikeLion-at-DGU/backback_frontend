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
  my?: boolean;
}

const KakaoMap: React.FC<KakaoMapProps> = ({ ...prop }) => {
  useEffect(() => {
    const script = document.createElement("script");
    script.async = true;
    script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=33ccb9ed924f4f71c3407b8f585df918&autoload=false`;
    document.head.appendChild(script);
    script.addEventListener("load", () => {
      window.kakao.maps.load(() => {
        if (prop.gyms) {
          const container = document.getElementById("map");
          let options = {
            center: new window.kakao.maps.LatLng(prop.latitude, prop.longitude),
            level: 7,
          };
          const map = new window.kakao.maps.Map(container, options);
          let activeInfoWindow = new window.kakao.maps.InfoWindow();
          activeInfoWindow = null;
          prop.gyms.forEach((gym) => {
            const marker = new window.kakao.maps.Marker({
              map: map,
              position: new window.kakao.maps.LatLng(
                gym.latitude,
                gym.longitude
              ),
            });

            const infowindowContent = document.createElement("div");
            infowindowContent.style.borderRadius = "1000px"; // Add border radius
            infowindowContent.style.backgroundColor = "white"; // Add background color
            infowindowContent.style.padding = "10px"; // Add padding

            const nameParagraph = document.createElement("p");
            nameParagraph.innerText = gym.name;
            nameParagraph.style.fontSize = "12px";
            infowindowContent.appendChild(nameParagraph);

            const link = document.createElement("a");
            link.href = `/gym/${gym.id}`;
            link.innerText = "헬스장 상세 보기";
            link.style.fontSize = "12px";
            infowindowContent.appendChild(link);

            const infowindow = new window.kakao.maps.InfoWindow({
              content: infowindowContent,
            });

            window.kakao.maps.event.addListener(marker, "click", () => {
              if (activeInfoWindow) {
                activeInfoWindow.close();
              }
              infowindow.open(map, marker);
              activeInfoWindow = infowindow;
            });
          });
        } else {
          const container = document.getElementById("map");
          let options = {
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
            position: new window.kakao.maps.LatLng(
              prop.latitude,
              prop.longitude
            ),
            image: markerImage,
          });
        }
      });
    });
  }, [prop.gyms]);

  return (
    <div
      style={{
        width: "100%",
        padding: "20px 0px 20px 0px",
        display: "flex",
        placeItems: "center",
        borderBottom: "1px solid #B7BBC8",
      }}
    >
      <div id="map" style={{ width: "100%", height: "270px" }}></div>
    </div>
  );
};

export default KakaoMap;
