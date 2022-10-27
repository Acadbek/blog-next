import moment from "moment";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { getRecentPosts, getSimilarPosts } from "../../services";

const PostWidget = ({ categories, slug }) => {
  const [relatedPosts, setRelatedPosts] = useState([]);
  useEffect(() => {
    if (slug) {
      getSimilarPosts(categories, slug).then((res) => setRelatedPosts(res));
    } else {
      getRecentPosts().then((res) => {
        setRelatedPosts(res);
      });
    }
  }, [slug]);
  console.log(relatedPosts);
  return (
    <div className="bg-white shadow-md p-4 mb-4 rounded-md">
      <h3 className="border-b mb-4">
        {slug ? "Related posts" : "Recent posts"}
      </h3>
      {relatedPosts.map((post) => (
        <div className="flex items-center w-full mb-4" key={post.title}>
          <div className="w-15 flex-none">
            <img
              className="align-middle rounded-sm"
              width={45}
              src={post.photo.url}
              alt={post.title}
            />
          </div>
          <div className="flex-grow ml-4">
            <p className="text-gray-500 text-xs">
              {moment(post.createdAt).format("MMM DD, YYYY")}
            </p>
            <Link className="text-[14px]" href={`post/${post.slug}`}>
              {post.tItle}
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostWidget;
