import fs from "fs"
import MarkDown from "markdown-to-jsx"
import matter from "gray-matter"
import getPostMetaData from "@/components/getPostMetaData"
import {notFound} from "next/navigation"



const getPostContent = (slug) =>{
    const folder ="posts/";
    const file = `${folder}${slug}.md`;
    const content = fs.readFileSync(file, "utf8");
    const matterResult = matter(content);
    return matterResult;
}

export const generateStaticParams = async ()=>{
    const posts = getPostMetaData();
    return posts.map((post)=>({
        slug:post.slug,
    }));
}

const PostPage = (props)=>{
    try {
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
    }catch (error) {
        notFound();
    }
}

export default PostPage;