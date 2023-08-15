import styled from "styled-components";
import { UserInfoProps } from "../UserInfo";
import Link from "../../../../node_modules/next/link";

export interface CompletionProps extends UserInfoProps {
  id: string;
  image: string;
}

const Completion: React.FC<CompletionProps> = ({ ...prop }) => {
  return (
    <Link href="/completions/[id]" as={`/completions/${prop.id}`}>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
        }}
      >
        <img
          src={prop.image}
          style={{
            height: "100%",
            width: "100%",
          }}
        />
      </div>
    </Link>
  );
};

export default Completion;
