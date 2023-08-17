import CompletionDetail, {
  CompletionDetailProps,
} from "@/components/common/completion/CompletionDetail";
import NavBar from "@/layouts/components/NavBar";
import { useEffect, useState } from "react";
import completionApi from "@/apis/completionApi";

export async function getServerSideProps(context: any) {
  const params = context.params;
  const id = params.id;

  return { props: { id } };
}
export default function Home(props: { id: string }) {
  const [completion, setCompletion] = useState<CompletionDetailProps>(
    {} as CompletionDetailProps
  );

  useEffect(() => {
    completionApi()
      .getCompletion(props.id)
      .then((res: any) => setCompletion(res.data));
  }, [props.id]);
  return (
    <>
      <NavBar />
      <CompletionDetail {...completion} />
    </>
  );
}
