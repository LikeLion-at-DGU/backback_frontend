import React from "react";
import TagButtonList from "./TagButtonList";
import HotColumn, { HotColumnProps } from "./HotColumn";

export interface FindProps {
  columns: HotColumnProps[];
}

const getRandomIndexes = (totalItems: number, count: number): number[] => {
  const indexes: number[] = [];
  while (indexes.length < count) {
    const randomIndex = Math.floor(Math.random() * totalItems);
    if (!indexes.includes(randomIndex)) {
      indexes.push(randomIndex);
    }
  }
  return indexes;
};

const Find: React.FC<FindProps> = ({ ...prop }) => {
  const allItems = prop.columns;

  const randomIndexes = getRandomIndexes(allItems.length, 2);
  const selectedItems = randomIndexes.map((index) => allItems[index]);

  const listItems = selectedItems.map((item, index) => (
    <HotColumn
      id={item.id}
      key={index}
      nickname={item.nickname}
      type={item.type}
      content={item.content}
      createdAt={item.createdAt}
      title={item.title}
      image={item.image}
      views={item.views}
      profileId={item.profileId}
      index={index}
    />
  ));

  return (
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
          <p
            style={{
              color: "#B3B3B3",
              fontSize: "16px",
              fontFamily: "MainFont",
              marginLeft: "8px",
            }}
          >
            검색어를 입력해주세요.
          </p>
          <img
            src="../../../assets/images/Find_icon.png"
            style={{ height: "24px", marginLeft: "auto" }}
            alt="Search Icon"
          />
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
      <div
        style={{
          display: "grid",
          width: "100%",
          height: "250px",
          gridTemplateColumns: "repeat(2, 1fr)",
          overflow: "auto",
          scrollBehavior: "smooth",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {listItems}
      </div>
    </div>
  );
};

export default Find;
