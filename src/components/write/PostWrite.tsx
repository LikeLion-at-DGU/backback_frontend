// 사진 첨부, 제목, 내용은 write.tsx에서 컴포넌트로 작성
// 사진 수정/삭제 불가능 
// 오운완에서는 사진 필수, 나머지는 선택인데 이거 프론트에서 작업해야함?
// null 값 처리는 어떻게 해야할지 모르겠음


export interface WriteProps {
    title: string;
    content: string;
}

const PostWrite: React.FC<WriteProps> = (WriteProps: WriteProps) => {
    return (
        <div style={{ width: "100%", padding: "0px 20px 0px 20px" }}>


        </div>
    )
}

export default PostWrite;

