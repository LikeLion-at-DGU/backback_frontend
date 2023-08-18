import { UserInfoProps } from "../UserInfo";
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
        position: "relative",
        paddingBottom: "100%",
        overflow: "hidden",
      }}
    >
      <RouterLink href={`/completion/${prop.id}`}>
        <img
          src={prop.image}
          style={{
            position: "absolute",
            top: "0",
            left: "0",
            width: "100%",
            height: "100%",
            objectFit: "cover",
            // objectPositon: "center",
          }}
        />
      </RouterLink>
    </div>
  );
};

export default Completion;
