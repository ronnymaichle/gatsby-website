import React, { useContext, useState, useEffect } from "react";
import { MenuContext } from "./MenuContext";

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

  if (!selectedMenu.injuryName) {
    return <></>;
  } else {
    return (
      <div className=" p-6 bg-white flex-1 rounded shadow overflow-y-auto">
        {/* <p>{injury?.id}</p> */}
        <h1 className="text-black font-serif text-4xl text-center mb-2">
          {selectedMenu.bodypartName + " - " + injury?.name}
        </h1>
        <div className="flex items-center justify-center">
          <img
            className={"w-[300px] my-4"}
            src={injury?.anatomy_of_the_structure}
          ></img>
        </div>
        <h1 className="text-black font-serif text-2xl mb-1">Assessment</h1>
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
          Rehabilitation
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
        </p>
        .{/* <p>{injury?.rehabilitation}</p> */}
        {/* <p>{injury?.clinical_presentation}</p> */}
      </div>
    );
  }
};
