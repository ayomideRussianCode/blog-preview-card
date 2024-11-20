import React from "react";
import Illustration from './illustration-article.svg';
import Avatar from './image-avatar.webp';

function BlogPreviewCard() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-yellow-400">
      <div className="max-w-sm bg-white rounded-lg shadow-md overflow-hidden">
        <div className=" relative">
          <img src={Illustration} alt="illustration" className="w-full"/>
        </div>
        <div className="p-5">
          <p className=" inline-block bg-yellow-500 text-sm font-bold text-black mb-3 py-1 px-4 rounded"> Learning </p>
          <h2 className="text-lg mb-4 text-gray-900 font-semibold">Published 21 Dec 2023</h2>
          <p className="text-2xl font-bold text-gray-950 mb-5">HTML & CSS foundations</p>
          <p className="text-lg mb-7 text-gray-500">These languages are the backbone of every website, defining structure, content, and presentation.</p>
          <div className="flex items-center gap-3">
            <img src={Avatar} alt="avatar" className="w-10 h-10 rounded-full"/>
            <p className="text-lg font-bold text-gray-950">Greg Hooper</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogPreviewCard;
