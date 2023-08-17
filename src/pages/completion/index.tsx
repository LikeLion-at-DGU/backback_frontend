import completionApi from "@/apis/completionApi";
import CompletionList from "@/components/common/completion/CompletionList";
import NavBar from "@/layouts/components/NavBar";
import { useEffect, useState } from "react";

export default function Home() {
  const [completions, setCompletions] = useState([]);
  useEffect(() => {
    completionApi()
      .getCompletions()
      .then((res: any) => {
        setCompletions(res.data.results);
      });
  }, []);
  return (
    <>
      <NavBar />
      <CompletionList completions={completions} />
    </>
  );
}
