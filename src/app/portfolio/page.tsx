import styles from "./page.module.css";
import "@/app/global.css";
import Link from "next/link";
import Image from "next/image";
import sky from "@/app/images/sky.jpg";
import Project from "@/database/projectSchema";
import connectDB from "@/helpers/db";

// Resume page
export default async function Page() {
  const projects = await getProjects();

  return (
    <div>
      <h1 className="portfolio">Portfolio!</h1>
      {/* <Link href="index.html">
        {" "}
        <Image
          src={sky.src}
          width={300}
          height={500}
          alt="A picture of Aryan Baldua"
        ></Image>
      </Link> */}

      {projects.map((project) => {
        return (
          <div>
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <a href={`/portfolio/comment/${project._id}`}>Add Comment</a>
            {project.comments.map((c) => {
              return <div>{c}</div>;
            })}
          </div>
        );
      })}
      <div className="project-details">
        <p className="project-name">Aryan's website</p>
        <p className="project-description">All about Aryan</p>
        <a href="index.html">LEARN MORE</a>
      </div>

      <footer>© 2023 Aryan Baldua | All Rights Reserved</footer>
    </div>
  );
}

async function getProjects() {
  await connectDB(); // function from db.ts before

  try {
    // query for all blogs and sort by date
    const projects = await Project.find().orFail();
    // send a response as the blogs as the message
    return projects;
  } catch (err) {
    return null;
  }
}
