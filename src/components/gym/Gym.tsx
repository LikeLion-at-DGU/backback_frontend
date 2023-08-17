import RouterLink from "@/components/core/RouterLink";

export interface GymProps {
  id: string;
  name: string;
  address: string;
  exercises: string;
  image: string;
  createdAt: string;
  updatedAt: string;
  index?: number;
  latitude: number;
  longitude: number;
}

const Gym: React.FC<GymProps> = ({ ...prop }) => {
  const exercises = prop.exercises
    .replace(/[\[\]']+/g, "")
    .split(", ")
    .join(" / ");
  const address = prop.address.split(" ").slice(0, 2).join(" ");
  return (
    <RouterLink href={`/gym/${prop.id}`}>
      <div
        style={{
          width: "100%",
          padding: `${
            prop.index !== undefined && prop.index % 2 === 0
              ? "13px 7.5px 13px 15px"
              : "13px 15px 13px 7.5px"
          }`,
        }}
      >
        <div
          style={{
            width: "100%",
            height: "230px",
            borderRadius: "20px",
            display: "flex",
            flexDirection: "column",
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
                overflow: "hidden",
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
                overflow: "hidden",
              }}
            >
              {address}
            </div>
            <div
              style={{
                fontSize: "14px",
                width: "100%",
                height: "22px",
                overflow: "hidden",
              }}
            >
              {exercises}
            </div>
          </div>
        </div>
      </div>
    </RouterLink>
  );
};

export default Gym;
