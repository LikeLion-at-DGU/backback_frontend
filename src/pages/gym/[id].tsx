import gymApi from "@/apis/gymApi";
import GymDetail from "@/components/gym/GymDetail";
import { ReviewProps } from "@/components/gym/Review";
import NavBar from "@/layouts/components/NavBar";
import { useCallback, useEffect, useState } from "react";

export interface GymProps {
  id: string;
  name: string;
  squareFeet: number;
  address: string;
  info: {
    exercises: string[];
    machines: string[];
    certifications: string[];
  };
  image: string;
  createdAt: string;
  updatedAt: string;
  latitude: number;
  longitude: number;
  reviewCnt: string;
}

export async function getServerSideProps(context: any) {
  const params = context.params;
  const id = params.id;

  return { props: { id } };
}

export default function Home(props: { id: string }) {
  const [gym, setGym] = useState<GymProps>();
  const [reviews, setReviews] = useState<ReviewProps[]>([]);
  const getGym = useCallback(() => {
    gymApi()
      .getGym(props.id)
      .then((res: any) => {
        setGym(res.data);
      })
      .catch((err) => {});
  }, [setGym, gymApi]);
  const getReviews = useCallback(() => {
    gymApi()
      .getGymReviews(props.id)
      .then((res: any) => {
        setReviews(res.data);
      })
      .catch((err) => {});
  }, [setReviews, gymApi]);
  useEffect(() => {
    getGym();
    getReviews();
  }, [getGym, getReviews]);
  return (
    <>
      <NavBar />
      {gym && (
        <GymDetail
          id={gym?.id}
          name={gym?.name}
          squareFeet={gym?.squareFeet}
          address={gym?.address}
          info={gym?.info}
          image={gym?.image}
          createdAt={gym?.createdAt}
          updatedAt={gym?.updatedAt}
          latitude={gym?.latitude}
          longitude={gym?.longitude}
          reviewCnt={gym?.reviewCnt}
          reviews={reviews}
        />
      )}
    </>
  );
}
