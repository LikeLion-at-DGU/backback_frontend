import GymDetail from "@/components/common/gym/GymDetail";
import NavBar from "@/layouts/components/NavBar";

export default function Home() {
  return (
    <>
      <NavBar />
      <GymDetail
        id={"1"}
        latitude={33.450701}
        longitude={126.570667}
        review_count={6}
        name={"동국대 체육관"}
        square_feet={100}
        address={"서울특별시 중구 필동로 1길 30"}
        info={{
          exercises: ["ab", "ab"],
          machines: ["ab", "ab"],
          certifications: ["ab", "ab"],
        }}
        image={"../../../assets/images/Character1.png"}
        createdAt="2023-08-11"
        updatedAt="2023-08-12"
        reviews={[
          {
            index: 0,
            comment: "comment",
            id: "1",
          },
          {
            index: 0,
            comment: "comment",
            id: "2",
          },
          {
            index: 0,
            comment: "comment",
            id: "3",
          },
          {
            index: 0,
            comment: "comment",
            id: "4",
          },
        ]}
      />
    </>
  );
}
