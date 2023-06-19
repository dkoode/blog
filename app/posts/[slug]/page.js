import fs from "fs"
import MarkDown from "markdown-to-jsx"
import matter from "gray-matter";

const getPostContent = (slug) =>{
    const folder ="posts/";
    const file = `${folder}${slug}.md`;
    const content = fs.readFileSync(file, "utf8");
    const matterResult = matter(content);
    return matterResult;
}
const PostPage = (props)=>{
    const slug = props.params.slug;
    const post = getPostContent(slug)
    return (
        <div className={`h-full w-full bg-gray-900 text-gray-200 p-[2rem]`}>
            <p className={`container`}>
                <h1>
                    {post.data.title}
                </h1>
                <MarkDown>{post.content}</MarkDown>
            </p>
        </div>
    )
}

export default PostPage;