import React from 'react';
import Link from "next/link";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import Image from "next/image";

function PostPreview({post}) {
    return (
        <div className="flex flex-col gap-2">
            <div className="max-w-full max-h-[200px] max-w-full">
                <Link href={`/posts/${post.slug}`}>
                    <Image
                        src={post.image}
                        width={500}
                        height={200}
                        className="object-cover rounded-sm max-h-[200px] transition-all hover:saturate-150 object-center-top w-full"
                        alt="Picture of the author"
                    />
                </Link>
            </div>
            <Card  className="relative -mt-[50px] w-[96%] transition-all hover:-mt-[60px] duration-500 ease-in-out mx-auto bg-gray-900 border-gray-700 overflow-x-hidden ">
                <Link className="flex flex-col items-end justify-between  h-full" href={`/posts/${post.slug}`}>
                    <div className="">
                        <h2 className="text-xl text-gray-200 px-5 pt-5">{post.title}</h2>
                        <p className="text-gray-300 text-md py-3 px-5">{post.subtitle}</p>
                    </div>
                    <p className="text-gray-500  px-2 text-xs border-t-[2px] w-full flex items-center py-2 justify-end border-gray-900">{post.date}</p>
                </Link>
            </Card>
        </div>

    );
}

export default PostPreview;