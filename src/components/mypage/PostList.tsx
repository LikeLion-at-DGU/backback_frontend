import { Post } from "./Post"

interface PostProps {
    isMine: boolean,
    currentPage: number,
    totalPages: number,
    postList: Post[]
}