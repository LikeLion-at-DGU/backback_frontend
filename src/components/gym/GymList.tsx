import { PostPageProps } from "../mypage/PostPage";
import Gym, { GymProps } from "./Gym";
import { PostPage } from "../mypage/PostPage";

interface GymListProps {
  gyms: GymProps[];
  postPageProps: PostPageProps;
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
      <PostPage
        page={prop.postPageProps.page}
        isNext={prop.postPageProps.isNext}
        isPrevious={prop.postPageProps.isPrevious}
        setPage={prop.postPageProps.setPage}
        total={prop.postPageProps.total}
      />
    </div>
  );
};

export default GymList;
