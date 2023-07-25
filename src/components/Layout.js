import React, { useRef, useEffect } from "react";
import Navbar from "./Navbar";
// import { graphql, useStaticQuery } from "gatsby";
import { Sidebar } from "./Sidebar";
import "../styles/global.css";

export default function Layout({ children }) {
  const asideRef = useRef(null);
  const asideButtonRef = useRef(null);
  const [windowWidth, setWindowWidth] = useState(0);
  // const data = useStaticQuery(graphql`
  //   query SiteTitleQuery {
  //     site {
  //       siteMetadata {
  //         title
  //       }
  //     }
  //   }
  // `);

  function toggleAside() {
    if (asideRef.current && window.innerWidth < 1024) {
      asideRef.current.classList.toggle("hidden");
    }
  }

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        asideRef.current &&
        !asideRef.current.contains(event.target) &&
        !asideButtonRef.current.contains(event.target) &&
        window.innerWidth < 1024
      ) {
        // Clicked outside of the aside element, hide it
        if (!asideRef.current.classList.contains("hidden"))
          asideRef.current.classList.add("hidden");
      }
    };

    const handleEscapeKey = (event) => {
      if (
        event.keyCode === 27 &&
        asideRef.current &&
        window.innerWidth < 1024
      ) {
        // Pressed Escape key, hide the aside element
        asideRef.current.classList.add("hidden");
      }
    };
    setWindowWidth(window.innerWidth);
    // Add event listeners
    window.addEventListener("click", handleOutsideClick);
    window.addEventListener("keydown", handleEscapeKey);
    // Clean up event listeners
    return () => {
      window.removeEventListener("click", handleOutsideClick);
      window.removeEventListener("keydown", handleEscapeKey);
    };
  });

  return (
    <div className="layout">
      <title>AT Website</title>
      {/* <title>{data.site.siteMetadata?.title || `Title`}</title> */}

      <Navbar asideRef={asideRef} asideButton={asideButtonRef} />

      <div className="middle_part">
        <aside
          ref={asideRef}
          className={windowWidth < 1024 ? "hidden z-50" : "z-50"}
        >
          <Sidebar toggleAside={toggleAside} />
        </aside>
        <main>{children}</main>
      </div>
      <footer className="hidden">
        <p>{"Copyright 2023"}</p>
      </footer>
    </div>
  );
}
