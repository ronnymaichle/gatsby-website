import React from "react";
import { Carousel } from "flowbite-react";
export const Anatomy = () => {
  return (
    <Carousel slide={false} className="w-full h-[300px] z-0">
      <img
        alt="..."
        className="w-[200px]"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Muscles_of_the_head_and_neck%3B_an_écorché_seen_in_profile._Li_Wellcome_V0008436.jpg/640px-Muscles_of_the_head_and_neck%3B_an_écorché_seen_in_profile._Li_Wellcome_V0008436.jpg"
      />
      <img
        alt="..."
        src="https://flowbite.com/docs/images/carousel/carousel-2.svg"
      />
      <img
        alt="..."
        src="https://flowbite.com/docs/images/carousel/carousel-3.svg"
      />
    </Carousel>
  );
};
