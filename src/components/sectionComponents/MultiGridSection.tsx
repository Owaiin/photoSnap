import { useState } from "react";

import ImageCard from "../cardComponents/ImageCard";
import data from "../../storyData/stories.json";

export default function MultiGridSection(props: { itemAmount: number }) {
  const itemAmount = props.itemAmount;

  return (
    <>
      <div className="grid grid-cols-4">
        {data.slice(0, itemAmount).map((item) => {
          return (
            <>
              <ImageCard
                title={item.name}
                author={item.author}
                image={item.image}
              />
            </>
          );
        })}
      </div>
    </>
  );
}
