import React from "react";
import getFormattedDate from "../../../../lib/getFormattedDate";
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
    <div>
      <h1>{title}</h1>
      <div>{formattedDate}</div>
      <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
    </div>
  );
}
