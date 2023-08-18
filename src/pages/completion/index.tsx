import completionApi from "@/apis/completionApi";
import CompletionList from "@/components/common/completion/CompletionList";
import NavBar from "@/layouts/components/NavBar";
import { useEffect, useState } from "react";

export default function Home() {
  const [completions, setCompletions] = useState([]);
  const [isNext, setIsNext] = useState<boolean>(false);
  const [isPrevious, setIsPrevious] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);
  const [total, setTotal] = useState<number>(0);

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
