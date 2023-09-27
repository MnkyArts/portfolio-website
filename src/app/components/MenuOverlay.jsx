import React from "react";
import NavLinks from "./NavLinks";

const MenuOverlay = ({ links }) => {
  return (
    <ul className="flex flex-col py-4 items-center">
      {links.map((link, index) => (
        <NavLinks key={index} href={link.href} title={link.title} />
      ))}
    </ul>
  );
};

export default MenuOverlay;
