import HomePage from "@/components/home/HomePage";
import NavBar from "@/layouts/components/NavBar";
import { Inter } from "next/font/google";
import { useEffect, useState } from "react";
import postApi from "@/apis/postApi";
import bannerApi from "@/apis/bannerApi";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [posts, setPosts] = useState([]);
  const [banners, setBanners] = useState([]);
  useEffect(() => {
    postApi()
      .getPosts({ followers: true })
      .then((res: any) => {
        setPosts(res.data.results);
      });
  }, []);
  useEffect(() => {
    bannerApi()
      .getBanners()
      .then((res: any) => {
        setBanners(res.data);
        console.log(res.data);
      });
  }, []);
  return (
    <>
      <NavBar />
      <HomePage images={...banners} posts={...posts} />
    </>
  );
}
