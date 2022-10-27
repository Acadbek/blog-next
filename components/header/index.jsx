import Link from "next/link";
import React from "react";

const Header = () => {
  const pages = [
    { id: 1, title: "Blog", slug: "blog" },
    { id: 2, title: "Works", slug: "works" },
    { id: 3, title: "Skills", slug: "skills" },
  ];
  return (
    <div className="flex justify-between items-end">
      <div>
        <Link href={"/"}> Zemeister&apos;s notes</Link>
      </div>
      <div>
        {pages.map((page) => (
          <Link className='cursor-pointer' key={page.id} href={`${page.slug}`}>
            {page.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Header;
