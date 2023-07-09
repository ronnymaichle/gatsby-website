import React, { useContext, useState, useEffect } from "react";
import { MenuContext } from "./MenuContext";
import { Anatomy } from "./Anatomy";
import { Tabs } from "flowbite-react";

const customTheme = {
  base: "flex flex-col gap-1",
  tablist: {
    base: "flex text-center",
    styles: {
      default: "flex-wrap border-b border-gray-200 dark:border-gray-700",
      underline:
        "flex-wrap -mb-px border-b border-gray-200 dark:border-gray-700",
      pills:
        "flex-wrap font-medium text-sm text-gray-500 dark:text-gray-400 space-x-2",
      fullWidth:
        "w-full text-sm font-medium divide-x divide-gray-200 shadow grid grid-flow-col dark:divide-gray-700 dark:text-gray-400 rounded-none",
    },
    tabitem: {
      base: "flex-1 mx-2 h-[60px] items-center justify-center p-2 rounded-t-lg text-sm font-medium first:ml-0 disabled:cursor-not-allowed disabled:text-gray-400 disabled:dark:text-gray-500 focus:ring-4 focus:ring-emerald-300 focus:outline-none",
      styles: {
        default: {
          base: "rounded-t-lg",
          active: {
            on: "bg-gray-100 text-cyan-600 dark:bg-gray-800 dark:text-cyan-500",
            off: "text-gray-500 hover:bg-gray-50 hover:text-gray-600 dark:text-gray-400 dark:hover:bg-gray-800  dark:hover:text-gray-300",
          },
        },
        underline: {
          base: "rounded-t-lg text-base",
          active: {
            on: "text-emerald-800 rounded-t-lg border-b-2 border-emerald-800 active dark:text-cyan-500 dark:border-cyan-500",
            off: "border-b-2 border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-300",
          },
        },
        pills: {
          base: "",
          active: {
            on: "rounded-lg bg-cyan-600 text-white",
            off: "rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white",
          },
        },
        fullWidth: {
          base: "ml-0 first:ml-0 w-full rounded-none flex",
          active: {
            on: "p-4 text-gray-900 bg-gray-100 active dark:bg-gray-700 dark:text-white rounded-none",
            off: "bg-white hover:text-gray-700 hover:bg-gray-50 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700 rounded-none",
          },
        },
      },
      icon: "mr-2 h-5 w-5",
    },
  },
  tabpanel: "py-3",
};

export const InjuryView = () => {
  const { selectedMenu, data } = useContext(MenuContext);
  const [injury, setInjury] = useState(null);

  useEffect(() => {
    if (data) {
      const matchedElement = data.find((item) => {
        return (
          item.node.bodypart_name === selectedMenu.bodypartName &&
          item.node.injuries.some(
            (injury) => injury.name === selectedMenu.injuryName
          )
        );
      });

      if (matchedElement && matchedElement.node) {
        const matchedInjury = matchedElement.node.injuries.find(
          (injury) => injury.name === selectedMenu.injuryName
        );

        if (matchedInjury) {
          setInjury(matchedInjury);
        }
      }
    }
  }, [selectedMenu, data]);
  const lorem = (title) => {
    return (
      <>
        <p>{title}</p>
        <p className="text-black font-serif mb-1">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui ut
          ornare lectus sit amet est. Purus in massa tempor nec feugiat. Dui
          vivamus arcu felis bibendum ut tristique et. Nunc mattis enim ut
          tellus elementum sagittis vitae. Lectus urna duis convallis convallis
          tellus id interdum. Quisque id diam vel quam elementum pulvinar etiam
          non. Auctor urna nunc id cursus metus aliquam. Elementum pulvinar
          etiam non quam lacus suspendisse faucibus interdum. Sapien et ligula
          ullamcorper malesuada. Eget sit amet tellus cras adipiscing enim eu
          turpis. Iaculis at erat pellentesque adipiscing commodo elit at.
          Parturient montes nascetur ridiculus mus. Amet nisl purus in mollis
          nunc sed. Scelerisque varius morbi enim nunc faucibus a pellentesque
          sit. Libero enim sed faucibus turpis in. Mi tempus imperdiet nulla
          malesuada pellentesque elit eget gravida cum. Eget nulla facilisi
          etiam dignissim diam quis. Nunc non blandit massa enim. Ornare massa
          eget egestas purus.
        </p>
      </>
    );
  };

  if (!selectedMenu.injuryName) {
    return <></>;
  } else {
    return (
      <div className=" p-6 bg-white flex-1  rounded shadow overflow-y-auto">
        {/* <p>{injury?.id}</p> */}
        <h1 className="text-black font-serif text-4xl text-center mb-2">
          {/* {selectedMenu.bodypartName + " - " + injury?.name} */}
          {injury?.name}
        </h1>
        <br />
        <div className=" flex-col flex-1 items-center text-center justify-center">
          <h1 className="text-black font-serif text-3xl mb-1">Anatomy</h1>
          <Anatomy />
          {/* <img
            className={"w-[300px] my-4"}
            src={injury?.anatomy_of_the_structure}
          ></img> */}
        </div>
        <br />
        <Tabs.Group
          aria-label="Pills"
          // customTheme={customTheme}
          style="underline"
          theme={customTheme}
          className="items-center"
        >
          <Tabs.Item active title="Assessent">
            {lorem("Assessent")}
          </Tabs.Item>
          <Tabs.Item title="Rehabilitation">
            {lorem("Rehabilitation")}
          </Tabs.Item>
          <Tabs.Item title="Clinical Presentation">
            {lorem("Clinical Presentation")}
          </Tabs.Item>
        </Tabs.Group>
        {/* <h1 className="text-black font-serif text-2xl mb-1">Assessment</h1> */}
        {/* <h1 className="text-black font-serif text-2xl mb-1 mt-4"> */}
        {/* Rehabilitation
        </h1>
        <p className="text-black font-serif mb-1">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui ut
          ornare lectus sit amet est. Purus in massa tempor nec feugiat. Dui
          vivamus arcu felis bibendum ut tristique et. Nunc mattis enim ut
          tellus elementum sagittis vitae. Lectus urna duis convallis convallis
          tellus id interdum. Quisque id diam vel quam elementum pulvinar etiam
          non. Auctor urna nunc id cursus metus aliquam. Elementum pulvinar
          etiam non quam lacus suspendisse faucibus interdum. Sapien et ligula
          ullamcorper malesuada. Eget sit amet tellus cras adipiscing enim eu
          turpis. Iaculis at erat pellentesque adipiscing commodo elit at.
          Parturient montes nascetur ridiculus mus. Amet nisl purus in mollis
          nunc sed. Scelerisque varius morbi enim nunc faucibus a pellentesque
          sit. Libero enim sed faucibus turpis in. Mi tempus imperdiet nulla
          malesuada pellentesque elit eget gravida cum. Eget nulla facilisi
          etiam dignissim diam quis. Nunc non blandit massa enim. Ornare massa
          eget egestas purus.
        </p>
        <h1 className="text-black font-serif text-2xl mb-1 mt-4">
          Clinical Presentation
        </h1>
        <p className="text-black font-serif mb-1">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui ut
          ornare lectus sit amet est. Purus in massa tempor nec feugiat. Dui
          vivamus arcu felis bibendum ut tristique et. Nunc mattis enim ut
          tellus elementum sagittis vitae. Lectus urna duis convallis convallis
          tellus id interdum. Quisque id.
        </p> */}
        .{/* <p>{injury?.rehabilitation}</p> */}
        {/* <p>{injury?.clinical_presentation}</p> */}
      </div>
    );
  }
};
