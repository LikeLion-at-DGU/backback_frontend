import Gym, { GymProps } from "./Gym";

interface GymListProps {
  gyms: GymProps[];
}

const GymList: React.FC<GymListProps> = ({ ...prop }) => {
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
      latitude={item.latitude}
      longitude={item.longitude}
    />
  ));

  return (
    <>
      {prop.gyms.length === 0 ? (
        <div
          style={{
            width: "100%",
            flex: "1",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          검색 결과가 없습니다.
        </div>
      ) : (
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
      )}
    </>
  );
};

export default GymList;
