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
    if (inputValue !== undefined) {
      setAddress(inputValue);
      setMapopen(true);
    } else {
      setMapopen(false);
    }
  };
  const handlemapopen = () => {
    setMapopen(!mapopen);
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
        console.log(res);
        setGyms(res.data.results);
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
    // 클라이언트에서 위치 정보를 얻는 코드
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
    if (!address) {
      getGyms();
      getGymByLocation();
    } else {
      getGymsByAddress();
      setGymlocation(gyms);
      let x = 0,
        y = 0,
        index = 0;
      gyms.map((gym) => {
        x += parseFloat(String(gym.latitude));
        y += parseFloat(String(gym.longitude));
        index += 1;
      });
      setLat(x / index);
      setLng(y / index);
    }
  }, [getGyms, getGymsByAddress, getGymByLocation]);

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
              onKeyUp={(e) => {
                if (e.key === "Enter") {
                  handleSearch();
                }
              }}
              ref={inputRef}
            ></input>
            <img
              src="../../../../assets/images/find_icon.png"
              alt="find_icon"
              style={{ height: "25px", cursor: "pointer" }}
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
              style={{ height: "20px" }}
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
