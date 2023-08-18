import HomePage from "@/components/home/HomePage";
import NavBar from "@/layouts/components/NavBar";
import { Inter } from "next/font/google";
import { useEffect, useState } from "react";
import postApi from "@/apis/postApi";
import bannerApi from "@/apis/bannerApi";
import { useCookies } from "react-cookie";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [cookies] = useCookies(["uid"]);
  const [posts, setPosts] = useState([]);
  const [isNext, setIsNext] = useState<boolean>(false);
  const [isPrevious, setIsPrevious] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);
  const [total, setTotal] = useState<number>(0);
  const [banners, setBanners] = useState([]);
  useEffect(() => {
    if (cookies.uid === undefined) return;
    postApi()
      .getPosts({ followers: true, page: page })
      .then((res: any) => {
        setPosts(res.data.results);
        setIsNext(res.data.next !== null);
        setIsPrevious(res.data.previous !== null);
        setTotal(Math.ceil(res.data.count / 20));
      });
  }, [cookies.uid, page]);
  useEffect(() => {
    bannerApi()
      .getBanners()
      .then((res: any) => {
        setBanners(res.data);
      });
  }, []);
  return (
    <>
      <NavBar />
      <HomePage
        images={banners}
        posts={posts}
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
