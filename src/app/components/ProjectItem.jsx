import Link from "next/link";
import getFormattedDate from "../../../lib/getFormattedDate";

const ProjectItem = ({ post }) => {
  const { id, title, date, excerpt } = post;
  const formattedDate = getFormattedDate(date);
  return (
    <li className="mr-6">
      <div className="bg-[#0b1120] max-w-sm rounded-lg overflow-hidden shadow-lg">
        <img
          className="w-full"
          src="https://v1.tailwindcss.com/img/card-top.jpg"
          alt="Sunset in the mountains"
        ></img>
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">
            <Link href={`/projects/${id}`}>{title}</Link>
          </div>
          <p className="text-gray-400 text-base">{excerpt}</p>
          <br />
          <a
            href={`/projects/${id}`}
            className="transition delay-15 duration-300 bg-green-400 hover:bg-transparent text-white hover:text-green-400 font-semibold py-1 px-4 border-2 border-transparent hover:border-green-400 rounded-full"
          >
            Read more
          </a>
        </div>
        <div className="px-6 pt-2 pb-2">
          <span className="inline-block py-1 text-sm font-semibold text-gray-500 mr-2 mb-2">
            {formattedDate}
          </span>
        </div>
      </div>
    </li>
  );
};

export default ProjectItem;
