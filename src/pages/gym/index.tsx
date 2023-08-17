import { useCallback, useEffect, useRef, useState } from "react";
import { ScrollContent } from "@/components/post/PostDetail";

import KakaoMap from "@/components/gym/map";
import gymApi from "@/apis/gymApi";
import GymList from "@/components/gym/GymList";
import NavBar from "@/layouts/components/NavBar";
import { GymProps } from "@/components/gym/Gym";

export default function Home() {
  const [isopen, setIsopen] = useState(false);
  const [mapopen, setMapopen] = useState(false);
  const [lat, setLat] = useState(37);
  const [lng, setLng] = useState(127);
  const [isLoading, setIsLoading] = useState(true);
  const [address, setAddress] = useState("");
  const [gyms, setGyms] = useState<GymProps[]>([]);
  const [gymlocation, setGymlocation] = useState<GymProps[]>([]);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const handleSearch = () => {
    const inputValue = inputRef.current?.value; // 옵셔널 체이닝 연산자 사용
    if (inputValue) {
      setAddress(inputValue);
      setMapopen(true);
    } else {
      setAddress("");
      setMapopen(false);
    }
  };
  const openFilter = () => {
    setIsopen(!isopen);
  };

  const getGyms = useCallback(() => {
    gymApi()
      .getGyms({ search: "" })
      .then((res) => {
        setGyms(res.data.results);
      })
      .catch((err) => {});
  }, [setGyms, address, gymApi]);
  const getGymsByAddress = useCallback(() => {
    gymApi()
      .getGyms({ search: address })
      .then((res) => {
        setGyms(res.data.results);
        setGymlocation(res.data.results);
        let x = 0,
          y = 0,
          index = 0;
        res.data.results.forEach((gym: GymProps) => {
          x += parseFloat(String(gym.latitude));
          y += parseFloat(String(gym.longitude));
          index += 1;
        });
        setLat(x / index);
        setLng(y / index);
      })
      .catch((err) => {});
  }, [setGyms, address, gymApi]);

  const getGymByLocation = useCallback(() => {
    gymApi()
      .getGymsBylocation({ latitude: lat, longitude: lng })
      .then((res) => {
        setGymlocation(res.data.results);
      })
      .catch((err) => {});
  }, [setGymlocation, lat, lng, gymApi]);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLat(position.coords.latitude);
          setLng(position.coords.longitude);
        },
        (error) => {
          console.warn("Error getting geolocation:", error);
        }
      );
    }
  }, []);

  useEffect(() => {
    const fetchData = () => {
      if (!address) {
        getGymByLocation();
        getGyms();
      } else {
        getGymsByAddress();
      }
      setIsLoading(false);
    };

    fetchData();
  }, [getGyms, getGymsByAddress, getGymByLocation, setAddress]);

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
              placeholder="원하는 주소를 입력해주세요"
              style={{
                height: "20px",
                width: "274px",
                flex: "1",
                padding: "5px",
                marginRight: "5px",
                fontFamily: "MainFont",
                fontSize: "14px",
                border: "none", // 사각형 모양 제거
                borderBottom: "1px solid black", // 밑줄 스타일 적용
                outline: "none",
              }}
              onKeyDown={(e) => {
                e.key === "Enter" && handleSearch();
              }}
              ref={inputRef}
            ></input>
            <img
              src="../../../../assets/images/find_icon.png"
              alt="find_icon"
              style={{ height: "20px", cursor: "pointer", marginTop: "5px" }}
              onClick={handleSearch}
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
              style={{ height: "20px", cursor: "pointer" }}
              onClick={openFilter}
            ></img>
            {isopen && (
              <div
                style={{
                  width: "300px",
                  height: "60px",
                  position: "absolute",
                  top: "145px",
                  right: "15px",
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
      {gyms && <GymList gyms={...gyms}></GymList>}
    </ScrollContent>
  );
}
