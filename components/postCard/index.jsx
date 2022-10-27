import React from "react";
import Image from "next/image";
import Link from "next/link";
import moment from "moment";

const PostCard = ({ post }) => {
  return (
    <div className="shadow-lg rounded-md p-0 lg:p-8 pb-12 mb-8">
      <h1 className="transition duration-700 text-center mb-8 cursor-pointer hover:text-indigo-800 text-3xl">
        <Link href={`/post/${post.slug}`}>{post.tItle}</Link>
      </h1>
      <div className="block lg:flex text-center justify-center mb-8 w-full">
        <div className="flex items-center gap-3 justify-center mb-4 lg:mb-0 w-full lg:w-auto mr-8">
          <img
            src={post.author.photo.url}
            alt={post.author.name}
            width="30px"
            height="30px"
            className="align-middle rounded-full"
          />
          <p className="inline align-top text-gray-700">{post.author.name}</p>
        </div>
        <div className="font-medium flex items-center text-gray-700">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 inline mr-2 text-pink-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
          <span className="text-[13px] text-gray-600">
            {moment(post.createdAt).format("MMM DD YYYY")}
          </span>
        </div>
      </div>
      <div className="relative overflow-hidden shadow-md pb-80 mb-6">
        <img
          className="object-top absolute h-80 w-full object-cover rounded-t-md lg:rounded-lg"
          src={post.photo.url}
          alt={post.tItle}
        />
      </div>
      <p className="text-center text-lg text-gray-700 font-normal px-4 lg:px-20 mb-8">
        {post.excerpt}
      </p>
      <div className='text-center'>
        <Link href={`/post/${post.slug}`}>Read More</Link>
      </div>
    </div>
  );
};

export default PostCard;
