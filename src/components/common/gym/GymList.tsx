import { useState } from "react";
import { ScrollContent } from "../post/PostDetail";
import Gym, { GymProps } from "./Gym";

export interface GymListProps {
  gyms: GymProps[];
}

const GymList: React.FC<GymListProps> = ({ ...prop }) => {
  const [isopen, setIsopen] = useState(false);
  const listItems = prop.gyms.map((item, index) => (
    <Gym
      key={index.toString()}
      index={index}
      id={item.id}
      name={item.name}
      address={item.address}
      exercises={item.exercises}
      image={item.image}
      createdAt={item.createdAt}
      updatedAt={item.updatedAt}
    />
  ));
  const openFilter = () => {
    setIsopen(!isopen);
  };

  return (
    <ScrollContent>
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
      <div
        style={{
          display: "grid",
          width: "100%",
          gridTemplateColumns: "repeat(2, 1fr)",
          overflow: "auto",
          scrollBehavior: "smooth",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {listItems}
      </div>
    </ScrollContent>
  );
};

export default GymList;
