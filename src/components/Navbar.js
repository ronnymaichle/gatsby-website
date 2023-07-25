import React, { useEffect, useRef } from "react";
import { graphql, useStaticQuery } from "gatsby";
import { Link } from "gatsby";

export default function Navbar({ asideRef, asideButton }) {
  const breakpointRef = useRef(false);
  const data = useStaticQuery(graphql`
    query SiteInfo {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);
  const { title } = data.site.siteMetadata;

  function handleAsideButton() {
    if (asideRef && asideRef.current) {
      const asideElement = asideRef.current;
      asideElement.classList.toggle("hidden");
    }
  }

  // function hideAside() {
  //   if (asideRef && asideRef.current) {
  //     const asideElement = asideRef.current;
  //     if (asideElement.classList.contains("hidden"))
  //       asideElement.classList.add("hidden");
  //   }
  // }

  useEffect(() => {
    const handleResize = () => {
      const bigger = window.innerWidth >= 1024;
      if (asideRef && asideRef.current) {
        const asideElement = asideRef.current;
        if (bigger && !breakpointRef.current) {
          breakpointRef.current = true;
          asideElement.classList.remove("hidden");
        } else if (!bigger && breakpointRef.current) {
          asideElement.classList.add("hidden");
          breakpointRef.current = false;
        }
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", () => {});
  }, [asideRef]);

  return (
    <nav>
      <div>
        <button
          ref={asideButton}
          className="__aside-button"
          onClick={handleAsideButton}
        >
          <span class="material-icons align-middle">menu</span>
        </button>
      </div>

      <h1 className="text-xl text-white lg:ml-8">{title}</h1>
      {/* grid-template-columns: auto 1fr; */}
      <div className="links">
        <Link to="/about">About</Link>
        <Link to="/"> Home</Link>
      </div>
    </nav>
  );
}
