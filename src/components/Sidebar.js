import React, { useContext } from "react";
import { graphql, useStaticQuery } from "gatsby";
import { MenuContext } from "./MenuContext";
import { Link } from "gatsby";
const SidebarSubmenu = ({ injuries, bodypartName, toggleAside }) => {
  const { setSelectedMenu } = useContext(MenuContext);

  function handleClick(bodypartName, injuryName) {
    //console.log(injuryName);
    setSelectedMenu({ bodypartName: bodypartName, injuryName: injuryName });
    toggleAside();
  }

  // useEffect(() => {
  //   setSelectedMenu({
  //     bodypartName: bodypartName,
  //     injuryName: injuries[0].name,
  //   });
  // }, []);

  return (
    <ul className="bg-emerald-500 mx-2  rounded">
      {injuries.map((injury) => {
        return (
          <Link
            onClick={() => handleClick(bodypartName, injury.name)}
            className="pl-2 flex pr-2 text-sm text-slate-950 py-1 hover:bg-emerald-400"
            key={bodypartName + "/" + injury.name}
            to="/"
          >
            {injury.name}
          </Link>
        );
      })}
    </ul>
  );
};

export const Sidebar = ({ toggleAside }) => {
  const { setData } = useContext(MenuContext);
  const data = useStaticQuery(graphql`
    query MyQuery {
      allInjuriesJson {
        edges {
          node {
            bodypart_name
            injuries {
              id
              name
              assessment
              rehabilitation
              clinical_presentation
              anatomy_of_the_structure
            }
          }
        }
      }
    }
  `);

  const bodyparts = data.allInjuriesJson.edges;
  setData(bodyparts);

  return (
    <div className="__sidebar">
      <ul className="">
        {bodyparts.map((bodypart) => {
          return (
            <React.Fragment key={"_" + bodypart.node.bodypart_name}>
              <li
                className="my-1 pr-2 mt-1 text-base text-slate-950 "
                key={bodypart.node.bodypart_name}
              >
                {bodypart.node.bodypart_name}
              </li>
              <SidebarSubmenu
                injuries={bodypart.node.injuries}
                bodypartName={bodypart.node.bodypart_name}
                toggleAside={toggleAside}
              />
            </React.Fragment>
          );
        })}
      </ul>
    </div>
  );
};
