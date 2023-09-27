import Link from "next/link";

const NavLinks = ({ href, title }) => {
  return (
    <li className="mr-6">
      <Link href={href}>{title}</Link>
    </li>
  );
};

export default NavLinks;
