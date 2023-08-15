export interface GymProps {
  id: string;
  name: string;
  address: string;
  exercises: string[];
  image: string;
  createdAt: string;
  updatedAt: string;
  index?: number;
}

const Gym: React.FC<GymProps> = ({ ...prop }) => {
  const exercises = prop.exercises.join(" / ");
  return (
    <div
      style={{
        width: "170px",
        height: "230px",
        borderRadius: "20px",
        display: "flex",
        flexDirection: "column",
        margin: `${
          prop.index !== undefined && prop.index % 2 === 0
            ? "13px 10px 13px 15px"
            : "13px 15px 13px 10px"
        }`,
        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.3)",
      }}
    >
      <div
        style={{
          width: "100%",
          height: "130px",
          overflow: "hidden",
        }}
      >
        <img
          src={prop.image}
          style={{
            width: "100%",
            borderRadius: "20px 20px 0px 0px",
          }}
        ></img>
      </div>
      <div
        style={{
          width: "100%",
          height: "100px",
          display: "flex",
          flexDirection: "column",
          padding: "10px",
        }}
      >
        <div
          style={{
            fontSize: "16px",
            fontWeight: "700",
            width: "100%",
            height: "25px",
          }}
        >
          {prop.name}
        </div>
        <div
          style={{
            fontSize: "12px",
            width: "100%",
            height: "18px",
            marginBottom: "5px",
          }}
        >
          {prop.address}
        </div>
        <div style={{ fontSize: "14px", width: "100%", height: "22px" }}>
          {exercises}
        </div>
      </div>
    </div>
  );
};

export default Gym;
