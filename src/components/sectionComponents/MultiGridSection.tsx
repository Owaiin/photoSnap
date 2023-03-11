import { useState, useEffect } from "react";

import ImageCard from "../cardComponents/ImageCard";
// import data from "../../../public/storyData/stories.json";

export default function MultiGridSection(props: {
  itemEnd?: number;
  startFrom?: number;
}) {
  const itemEnd = props.itemEnd;
  const startInt = props.startFrom;

  const [data, setData]: any = useState();

  const getData = async () => {
    const response = await fetch("storyData/stories.json");
    const freshData = await response.json();
    setData(freshData);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div className="grid md:grid-cols-2 lg:grid-cols-4">
        {data && props.itemEnd
          ? data.slice(startInt, itemEnd).map((item: any, idx: number) => {
              return (
                <>
                  <ImageCard
                    key={idx}
                    title={item.name}
                    author={item.author}
                    image={item.image}
                  />
                </>
              );
            })
          : data &&
            data
              .filter((item: any) => !item.featured)
              .map((item: any, idx: number) => {
                return (
                  <>
                    <ImageCard
                      key={idx}
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
