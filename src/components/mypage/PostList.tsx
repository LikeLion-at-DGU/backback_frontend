import { Post } from "./Post"
import { PostPage } from "./PostPage"

interface PostListProps {
    isMine: boolean,
    currentPage: number,
    totalPages: number,
    postList: Post[]
}

const postListTitleTextstyle = {
    fontWeight: 700,
    fontSize: '16px',
    margin: '12px 0px 2px 26px'
}

export function PostList({isMine, currentPage, totalPages, postList}: PostListProps) {
    return (
        <div>
            <p
                style={postListTitleTextstyle}
            >
                {isMine ? "내가 쓴 글" : "모든 게시물"}
            </p>
            <div>
                {postList.map((post:Post, index:number) => (
                    <Post post={post} />
                ))}
            </div>
            <PostPage currentPage={currentPage} totalPages={totalPages} />
        </div>
    )
}