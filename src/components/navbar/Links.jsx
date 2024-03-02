"use client"

import NavLink from "./navbarLink/NavLink";
import { useState } from "react";

const Links = () => {
  const [open, setOpen] = useState(false);
  const links = [
    { title: "HomePage", path: "/" },
    { title: "Contact", path: "/contact" },
    { title: "Blog", path: "/blog" },
  ];
  const authenticated = true;
  const isAdmin = true;
  return (
    <div>

      <div className=" sm:flex items-center gap-3 ">
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
      <button onClick={()=>setOpen(!open)}>Menu</button>
      {
        open &&
        <div className={`absolute top-[100px] right-0 w-1/2 h-[calc(100vh-100px)] flex 
        flex-col items-center content-center gap-3 overflow-hidden
        transition-[height 0.5s ease-in-out]`}>
          {links.map(link=><NavLink key={link.title} item={link} />)}
        </div>
      }
    </div>
  )
}

export default Links