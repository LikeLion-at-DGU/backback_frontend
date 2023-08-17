interface ButtonProps {
  name: string;
  image: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ name, image, onClick }) => {
  return (
    <div
      style={{
        border: "0.5px solid black",
        width: "100%",
        flex: "1",
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
        padding: "0px 5px 0px 5px",
      }}
      onClick={onClick}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
          height: "100%",
          flex: "3",
          fontSize: "14px",
        }}
      >
        {name}
      </div>
      <div
        style={{
          display: "flex",
          height: "100%",
          flex: "1",
          alignItems: "center",
          justifyContent: "flex-end",
        }}
      >
        <img src={image} style={{ height: "14px" }}></img>
      </div>
    </div>
  );
};

export default Button;
