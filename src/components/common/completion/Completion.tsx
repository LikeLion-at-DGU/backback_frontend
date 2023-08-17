import { UserInfoProps } from "../UserInfo";
import Link from "../../../../node_modules/next/link";
import RouterLink from "@/components/core/RouterLink";

export interface CompletionProps extends UserInfoProps {
  id: string;
  image: string;
  isPrivate: boolean;
  writer: UserInfoProps;
}

const Completion: React.FC<CompletionProps> = ({ ...prop }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        width: "100%",
        height: "100%",
      }}
    >
      <RouterLink href={`/completion/${prop.id}`}>
        <img
          src={prop.image}
          style={{
            height: "100%",
            width: "100%",
            objectFit: "cover",
            objectPositon: "center",
          }}
        />
      </RouterLink>
    </div>
  );
};

export default Completion;
