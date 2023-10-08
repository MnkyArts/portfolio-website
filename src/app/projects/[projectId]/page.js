import React from "react";
import getFormattedDate from "../../../../lib/getFormattedDate";
import Navbar from "@/app/components/Navbar";
import { getSortedPostsData, getPostData } from "../../../../lib/projects";
import { notFound } from "next/navigation";

export function generateMetadata({ params }) {
  const projects = getSortedPostsData();
  const { projectId } = params;

  const project = projects.find((project) => project.id === projectId);

  if (!project) {
    return {
      title: "Project not found",
    };
  }

  return {
    title: project.title,
  };
}

export default async function Project({ params }) {
  const projects = getSortedPostsData();
  const { projectId } = params;

  if (!projects.find((project) => project.id === projectId)) {
    return notFound();
  }

  const { title, date, contentHtml } = await getPostData(projectId);

  const formattedDate = getFormattedDate(date);

  return (
    <main className="flex min-h-screen flex-col bg-[#0B1120]">
      <Navbar />
      <section className="mx-auto min-w-full px-24 py-20 lg:py-32 lg:px-52 overflow-hidden relative">
        <h1 className="text-white text-1xl lg:text-2xl font-extrabold">
          {title}
        </h1>
        <div className="text-green-400">{formattedDate}</div>
        <br />
        <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
      </section>
    </main>
  );
}
