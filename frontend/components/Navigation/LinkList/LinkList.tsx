import React from "react";
import Link from "next/link";
import { getSession } from "next-auth/react";
import { signOut, useSession } from "next-auth/react";
import { useEffect } from "react";

const LinkList = ({ content }) => {
  const { data: session } = useSession();
  useEffect(() => {
    if (session == null) return;
  }, [session]);


  // return (
  //   <ul className="navbar-nav mb-2 mb-lg-0 me-3">
  //     {content ? content.map((nav: {
  //       [x: string]: any; subNav: any[]; title: any; slug: string;},index: React.Key) => (
  //         <li key={index} className="nav-item dropdown">
  //           {nav?.navigationLinksCollection.items.length ? (
  //             <>
  //               <Link href={"#"} aria-current="page">
  //                 <a
  //                   className="nav-link dropdown-toggle"
  //                   id="navbarDropdown"
  //                   data-bs-toggle="dropdown"
  //                   aria-expanded="false"
  //                 >
  //                   {nav.title}
  //                 </a>
  //               </Link>
  //               <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
  //                 {nav?.navigationLinksCollection?.items ? nav.navigationLinksCollection.items.map((subnav: { slug: string; title: any }, i: React.Key) => (
  //                   <li key={i} className="nav-item">
  //                     <Link
  //                       href={"/" + subnav.slug}
  //                       aria-current="page"
  //                     >
  //                       <a className="dropdown-item">
  //                         {subnav.title}
  //                       </a>
  //                     </Link>
  //                   </li>
  //                 )
  //                 )
  //                   : ""}
  //               </ul>
  //             </>
  //           ) : (
  //             <Link href={"/" + nav.slug} aria-current="page">
  //               <a className="nav-link">{nav.title}</a>
  //             </Link>
  //           )}
  //         </li>
  //       )
  //       )
  //       : ""}
  //     {session ? (
  //       <>
  //         <li className="nav-item">
  //           <Link href="/dashboard">
  //             <a className="nav-link" href="" aria-disabled="true">
  //               Dashboard
  //             </a>
  //           </Link>
  //         </li>
  //         <li className="nav-item">
  //           <Link href="">
  //             <a
  //               onClick={() => signOut}
  //               className="nav-link"
  //               href=""
  //               aria-disabled="true"
  //             >
  //               Logout
  //             </a>
  //           </Link>
  //         </li>
  //       </>
  //     ) : (
  //       <li className="nav-item">
  //         <Link href="/auth/sign-in">
  //           <a className="btn btn-primary" href="" aria-disabled="true">
  //             Log In
  //           </a>
  //         </Link>
  //       </li>
  //     )}
  //   </ul>
  // );
};
export default LinkList;
