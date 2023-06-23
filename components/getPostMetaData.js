import fs from "fs"
import matter from "gray-matter"

const getPostMetaData = () =>{
    const folder = "posts/"
    const files = fs.readdirSync(folder);
    const markdownPosts = files.filter((file) => file.endsWith('.md'));

    //Get grey-matter data from eachfile
    const posts = markdownPosts.map((fileName)=>{
        const fileContents = fs.readFileSync(`posts/${fileName}`, "utf8");
        const matterResult = matter(fileContents);
        return{
            title: matterResult.data.title,
            date: matterResult.data.date,
            subtitle: matterResult.data.subtitle,
            slug: fileName.replace(".md", ""),
            image: matterResult.data.image,
        }
    })
    return posts;
}
export default getPostMetaData;