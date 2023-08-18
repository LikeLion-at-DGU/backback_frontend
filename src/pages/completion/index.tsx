import completionApi from "@/apis/completionApi";
import CompletionList from "@/components/common/completion/CompletionList";
import NavBar from "@/layouts/components/NavBar";
import { useEffect, useState } from "react";

export async function getServerSideProps() {
  const result = await completionApi()
    .getCompletions({ page: 1 })
    .then((res: any) => {
      return res.data;
    });

  return {
    props: {
      completions: result.results,
      next: result.next !== null,
      previous: result.previous !== null,
      total: Math.ceil(result.count / 18),
    },
  };
}

export default function Home(props) {
  const [completions, setCompletions] = useState(props.completions);
  const [isNext, setIsNext] = useState<boolean>(props.next);
  const [isPrevious, setIsPrevious] = useState<boolean>(props.previous);
  const [page, setPage] = useState<number>(1);
  const [total, setTotal] = useState<number>(props.total);

  useEffect(() => {
    completionApi()
      .getCompletions({ page: page })
      .then((res: any) => {
        setCompletions(res.data.results);
        setIsNext(res.data.next !== null);
        setIsPrevious(res.data.previous !== null);
        setTotal(Math.ceil(res.data.count / 18));
      });
  }, [page]);
  return (
    <>
      <NavBar />
      <CompletionList
        completions={completions}
        postPageProps={{
          page: page,
          isNext: isNext,
          isPrevious: isPrevious,
          total: total,
          setPage: setPage,
        }}
      />
    </>
  );
}
