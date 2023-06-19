import React from 'react';
import Link from "next/link";

function PostPreview({post}) {
    return (
        <div>
            <Link href={`/posts/${post.slug}`}>
                <h2>{post.title}</h2>
                <p>{post.subtitle}</p>
                <p>{post.date}</p>
            </Link>
        </div>
    );
}

export default PostPreview;