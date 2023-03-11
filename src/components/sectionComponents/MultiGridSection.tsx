import { useState } from "react";

import ImageCard from "../cardComponents/ImageCard";
import data from "../../storyData/stories.json";

export default function MultiGridSection(props: {
  itemAmount: number;
  startFrom: number;
}) {
  const itemAmount = props.itemAmount;
  const startInt = props.startFrom;

  return (
    <>
      <div className="grid md:grid-cols-2 lg:grid-cols-4">
        {data.slice(startInt, itemAmount).map((item) => {
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
