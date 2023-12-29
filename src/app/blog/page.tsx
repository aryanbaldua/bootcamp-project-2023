import styles from "./page.module.css";
import "@/app/global.css";
/* import blogs from "@/app/blogData"; */
import BlogPreview from "@/app/components/blogPreview";
import connectDB from "@/helpers/db";
import Blog from "@/database/blogSchema";
//import { useEffect } from "react";

export default async function Page() {
  const blogs = await getBlogs();
  // const [blog, setBlog] = useState();

  // const getContent = async () => {
  //   const result = await fetch("/api/special");
  //   const data = result.json();
  //   setBlog(data);
  // };

  // useEffect(() => {
  //   getContent();
  // }, []);

  console.log("blogs", blogs);

  return (
    <>
      <main>
        <main className="main">
          <div className="content" id="blog">
            <ul id="blog-list" className="blog-list"></ul>
          </div>
        </main>
        <h1 className="page-title">MY BLOG</h1>
        Hello Guys! This is my blog.
        {blogs &&
          blogs.map((blog) => {
            return (
              <BlogPreview // This is how we call the component
                key={blog.slug}
                title={blog.title}
                description={blog.description}
                date={blog.date}
                image={blog?.image}
                //text={blog.text}
                slug={blog.slug}
              />
            );
          })}
      </main>

      <script src="./src/blog.js"> </script>

      <footer className="footer">
        © 2023 Aryan Baldua's Personal Website Name | All Rights Reserved
      </footer>
    </>
  );
}

async function getBlogs() {
  await connectDB(); // function from db.ts before

  try {
    // query for all blogs and sort by date
    const blogs = await Blog.find().sort({ date: -1 }).orFail();
    // send a response as the blogs as the message
    return blogs;
  } catch (err) {
    return null;
  }
}
