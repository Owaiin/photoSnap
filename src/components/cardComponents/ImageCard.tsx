import H3 from "../H3";
import ArrowButton from "../ArrowButton";

export default function ImageCard(props: {
  title: string;
  author: string;
  image?: string;
}) {
  return (
    <>
      <div className=" p-8 relative min-h-500 text-white hover:-translate-y-2 transition-all duration-200 ease-in-out">
        <img
          src={props.image}
          alt=""
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
        <div className="absolute z-10 top-0 left-0 w-full h-full bg-gradient-to-t from-black via-transparent"></div>
        <div className="relative h-full flex flex-col items-start justify-end z-20">
          <H3 text={props.title} />
          <p className="font-brand">by {props.author}</p>
          <div className="w-full border-b border-white mt-5"></div>
          <ArrowButton text="Read more" />
        </div>
      </div>
    </>
  );
}
