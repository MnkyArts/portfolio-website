import Link from "next/link";
import getFormattedDate from "../../../lib/getFormattedDate";

const ProjectItem = ({ post }) => {
  const { id, title, date } = post;
  const formattedDate = getFormattedDate(date);
  return (
    <li className="mr-6">
      <div class="bg-[#0b1120] max-w-sm rounded-lg overflow-hidden shadow-lg">
        <img
          class="w-full"
          src="https://v1.tailwindcss.com/img/card-top.jpg"
          alt="Sunset in the mountains"
        ></img>
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2">
            <Link href={`/projects/${id}`}>{title}</Link>
          </div>
          <p class="text-gray-400 text-base">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptatibus quia, nulla! Maiores et perferendis eaque,
            exercitationem praesentium nihil.
          </p>
          <br />
          <button className="transition delay-15 duration-300 bg-green-400 hover:bg-transparent text-white hover:text-green-400 font-semibold py-1 px-4 border-2 border-transparent hover:border-green-400 rounded-full">
            Read more
          </button>
        </div>
        <div class="px-6 pt-2 pb-2">
          <span class="inline-block py-1 text-sm font-semibold text-gray-500 mr-2 mb-2">
            {formattedDate}
          </span>
        </div>
      </div>
    </li>
  );
};

export default ProjectItem;
