import React, { useEffect, useState } from "react";
import TagButtonList from "./TagButtonList";
import HotColumn, { HotColumnProps } from "./HotColumn";
import RouterLink from "../core/RouterLink";
import { ScrollContent } from "../post/PostDetail";

export interface FindProps {
  columns: HotColumnProps[];
}

function getRandomElementsFromArray(arr: any[], count: number): any[] {
  if (count > arr.length) {
    return arr;
  }
  const shuffledArray = arr.slice();
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray.slice(0, count);
}

const Find: React.FC<FindProps> = ({ ...props }) => {
  const [searchQ, setSearchQ] = useState<string>("");

  const [selectedItems, setSelectedItems] = useState<HotColumnProps[]>([]);
  useEffect(() => {
    setSelectedItems(getRandomElementsFromArray(props.columns, 2));
  }, [props.columns]);

  return (
    <ScrollContent>
      <div
        style={{
          width: "100%",
          flex: "1",
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
          padding: "21px 37px 0px 38px",
        }}
      >
        <p
          style={{
            width: "100%",
            height: "37px",
            fontSize: "24px",
            fontFamily: "BoldFont",
          }}
        >
          무엇을 찾으시나요?
        </p>
        <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginTop: "12px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              width: "100%",
              height: "34px",
            }}
          >
            <input
              placeholder="검색어를 입력해주세요."
              style={{
                color: "#B3B3B3",
                fontSize: "16px",
                fontFamily: "MainFont",
                marginLeft: "8px",
                border: "none",
                outline: "none",
                width: "100%",
              }}
              onChange={(e) => setSearchQ(e.target.value)}
            />
            <RouterLink href={`/find/${searchQ}`}>
              <div
                style={{ width: "30px", height: "24px", marginLeft: "auto" }}
              >
                <img
                  src="../../../assets/images/Find_icon.png"
                  style={{ width: "100%" }}
                  alt="Search Icon"
                />
              </div>
            </RouterLink>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              width: "100%",
            }}
          >
            <hr
              style={{
                width: "100%",
                height: "2px",
                backgroundColor: "#000000",
                margin: "0",
                border: "none",
              }}
            />
          </div>
        </div>
        <p
          style={{
            fontSize: "18px",
            fontFamily: "BoldFont",
            marginTop: "31px",
            marginRight: "auto",
          }}
        >
          추천 검색어
        </p>
        <TagButtonList
          tags={[
            { id: "1", content: "프로틴" },
            { id: "2", content: "요가" },
            { id: "3", content: "PT" },
            { id: "4", content: "필라테스" },
            { id: "5", content: "단백질" },
            { id: "6", content: "수영" },
            { id: "7", content: "체형교정" },
            { id: "8", content: "헬스장 추천" },
            { id: "9", content: "체력" },
          ]}
        />
        <p
          style={{
            fontSize: "18px",
            fontFamily: "BoldFont",
            marginTop: "22px",
            marginRight: "auto",
          }}
        >
          추천 칼럼
        </p>
        <div style={{ marginTop: selectedItems.length ? "20px" : "50px" }}>
          {selectedItems.length ? (
            <div
              style={{
                display: "grid",
                width: "100%",
                height: "250px",
                gridTemplateColumns: "repeat(2, 1fr)",
              }}
            >
              {selectedItems.map((item, index) => (
                <HotColumn
                  id={item.id}
                  key={index}
                  nickname={item.nickname}
                  type={item.type}
                  contentShort={item.contentShort}
                  createdAt={item.createdAt}
                  updatedAt={item.updatedAt}
                  title={item.title}
                  image={item.image}
                  viewCnt={item.viewCnt}
                  profileId={item.profileId}
                  index={index}
                  writer={item.writer}
                />
              ))}
            </div>
          ) : (
            <div>아직 추천 칼럼이 존재하지 않습니다.</div>
          )}
        </div>
      </div>
    </ScrollContent>
  );
};

export default Find;
