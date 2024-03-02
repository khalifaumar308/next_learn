"use client"

import NavLink from "./navbarLink/NavLink";
import { useState } from "react";

const links = [
  { title: "HomePage", path: "/" },
  { title: "Contact", path: "/contact" },
  { title: "Blog", path: "/blog" },
];

const Links = () => {
  const [open, setOpen] = useState(false);
  const authenticated = true;
  const isAdmin = true;
  return (
    <div>

      <div className="hidden md:flex items-center gap-3 ">
        {links.map((link, id) => (
          <NavLink item={link} key={id} />
        ))}{
          authenticated ? (
            <>
              {isAdmin && (
                <NavLink item={{ title: "Admin", path: "/admin" }} />
              )}
              <button className="p-3 cursor-pointer font-bold">Logout</button>
            </>
          ): (
            <NavLink item={{title:'Login', path:"/login"}} />
          )
      }
      </div>
      <button className="flex md:hidden" onClick={()=>setOpen(!open)}>Menu</button>
      {
        open &&
        <div
            className={`
              absolute top-[100px] h-[calc(100vh-100px)] w-1/2 right-0
              flex flex-col items-center content-center gap-3 overflow-hidden
              transition-[height 0.5s ease-in-out] `}>
          {links.map(link=><NavLink key={link.title} item={link} />)}
        </div>
      }
    </div>
  )
}

export default Links