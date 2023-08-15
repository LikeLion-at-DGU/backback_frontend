import CompletionDetail from "@/components/common/completion/CompletionDetail";

export default function Home() {
  return (
    <>
      <CompletionDetail
        id = {"1"}
        title= {"안녕하세요"}
        createdAt= {"2023.08.15 14:29"}
        image= {"../../assets/images/completion1.png"}
        content= {"오랜만에 헬스장에 갔어요 :)\n역시 자주 안하니까 1시간 넘게 운동하기가 힘들더라고요 ㅠㅠ"}
        like_count= {1}
        is_liked= {true}
        nickname={"이창준"}
        type={"../../../assets/icons/icon-48x48.png"}
        profileimage={"../../../assets/icons/icon-48x48.png"}
      />
    </>
  );
}
