import Arrow from "../assets/shared/arrow.svg";
import { useState } from "react";

export default function ArrowButton(props: {
  text?: string;
  onClick?: React.MouseEventHandler;
  dark?: boolean;
}) {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <>
      <button
        className={`${
          props.dark ? "text-black" : "text-white"
        } flex items-center uppercase tracking-widest font-brand mt-5`}
        onClick={props.onClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {props.text}
        <img
          src={Arrow}
          alt=""
          className={`${!props.dark && "invert"} ml-5 ${
            isHovered && "ml-10"
          } transition-all duration-150 ease-in-out`}
        />
      </button>
    </>
  );
}
