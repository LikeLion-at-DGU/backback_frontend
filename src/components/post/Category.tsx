import { ReactNode, useState } from "react";

interface CategoryBoxProps {
  onClick: () => void;
  children: ReactNode;
  find: boolean;
}

const CategoryBox: React.FC<CategoryBoxProps> = ({
  children,
  onClick,
  find,
}) => {
  const [isopen, setIsopen] = useState(find);
  const handleopen = () => {
    setIsopen(!isopen);
    onClick();
  };

  return (
    <div
      style={{
        width: "70px",
        height: "25px",
        marginBottom: "5px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "12px",
        cursor: "pointer",
        backgroundColor: isopen ? "#c17f7f" : "white",
        color: isopen ? "white" : "black",
        borderRadius: "15px",
      }}
      onClick={handleopen}
    >
      {children}
    </div>
  );
};
export default CategoryBox;
