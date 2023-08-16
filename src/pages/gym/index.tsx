import { useCallback, useEffect, useState } from "react";
import { ScrollContent } from "@/components/common/post/PostDetail";
import { GymProps } from "@/components/common/gym/Gym";
import KakaoMap from "@/components/common/gym/map";
import gymApi from "@/apis/gymApi";
import GymList from "@/components/common/gym/GymList";
import NavBar from "@/layouts/components/NavBar";

export default function Home() {
  const [isopen, setIsopen] = useState(false);
  const [mapopen, setMapopen] = useState(false);
  const [lat, setLat] = useState(0);
  const [lng, setLng] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [address, setAddress] = useState("");
  const [gyms, setGyms] = useState<GymProps[]>([]);
  const [gymlocation, setGymlocation] = useState<GymProps[]>([]);
  const handlemapopen = () => {
    setMapopen(!mapopen);
  };
  const openFilter = () => {
    setIsopen(!isopen);
  };
  useEffect(() => {
    const { geolocation } = navigator;

    geolocation.getCurrentPosition(
      (position) => {
        // success.
        setLat(position.coords.latitude);
        setLng(position.coords.longitude);
        setIsLoading(false);
      },
      (error) => {
        console.warn("Fail to fetch current location", error);
      }
    );
  }, []);

  const getGym = useCallback(() => {
    gymApi()
      .getGyms({ address: address })
      .then((res) => {
        console.log(res);
        setGyms(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [setGyms, address, gymApi]);
  const getGymByLocation = useCallback(() => {
    gymApi()
      .getGymsBylocation({ latitude: lat, longitude: lng })
      .then((res) => {
        console.log(res);
        setGymlocation(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [setGymlocation, lat, lng, gymApi]);
  useEffect(() => {
    getGym();
  }, [getGym, address]);
  useEffect(() => {
    getGymByLocation();
  }, [getGymByLocation, lat, lng]);

  return (
    <ScrollContent>
      <NavBar />
      <div
        style={{
          width: "100%",
          height: "45px",
          padding: "0px 15px 0px 15px",
        }}
      >
        <div
          style={{
            width: "100%",
            height: "45px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderBottom: "1px solid #B7BBC8",
          }}
        >
          <div
            style={{
              flex: "2",
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <input
              placeholder="지역 검색"
              style={{
                height: "20px",
                flex: "1",
                padding: "3px",
                marginRight: "5px",
              }}
              onClick={handlemapopen}
              value={address}
              onChange={(e) => {
                setAddress(e.target.value);
              }}
            ></input>
            <img
              src="../../../../assets/images/find_icon.png"
              alt="find_icon"
              style={{ height: "25px" }}
            ></img>
          </div>
          <div
            style={{
              flex: "1",
              display: "flex",
              height: "100%",
              justifyContent: "flex-end",
              alignItems: "center",
            }}
          >
            <img
              src="../../../../assets/images/Question_icon.png"
              alt="filter_icon"
              style={{ height: "20px" }}
              onClick={openFilter}
            ></img>
            {isopen && (
              <div
                style={{
                  width: "300px",
                  height: "60px",
                  position: "absolute",
                  top: "140px",
                  left: "80px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  fontSize: "12px",
                  border: "1px solid #B7BBC8",
                  backgroundColor: "white",
                  borderRadius: "10px",
                }}
              >
                <div>헬스장 등록은 이메일 문의를 통해 가능합니다.</div>
                <div>ulkkeun.official@gmail.com으로 문의해주세요.</div>
              </div>
            )}
          </div>
        </div>
      </div>
      <div style={{ padding: "0px 15px 0px 15px" }}>
        {mapopen &&
          (!isLoading ? (
            <KakaoMap latitude={lat} longitude={lng} gyms={gymlocation} />
          ) : (
            <div
              style={{
                width: "100%",
                height: "270px",
                backgroundColor: "#B7BBC8",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              잠시만 기다려 주세요
            </div>
          ))}
      </div>
      <GymList gyms={...gyms}></GymList>
    </ScrollContent>
  );
}
