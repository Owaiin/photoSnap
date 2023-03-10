import H1 from "../H1";
import H2 from "../H2";
import ArrowButton from "../ArrowButton";

export default function MainTwoGrid(props: {
  hero?: boolean;
  title?: string;
  text?: string;
  image?: any;
  dark?: boolean;
  invert?: boolean;
  buttonText?: string;
}) {
  return (
    <>
      <section className="grid grid-cols-5 ">
        <div
          className={` p-24 flex flex-col items-start justify-center
            ${props.dark && "bg-black text-white"}
            ${!props.invert ? "col-span-2" : "col-span-2 order-2"}
        `}
        >
          {props.hero ? (
            <H1 text={props.title} />
          ) : (
            <H2 large text={props.title} />
          )}

          <p className="text-lg font-brand">{props.text}</p>
          {props.dark ? (
            <ArrowButton text={props.buttonText} />
          ) : (
            <ArrowButton text={props.buttonText} dark />
          )}
        </div>
        <img
          className={`${
            !props.invert ? "col-span-3" : "col-span-3 order-1"
          } w-full h-full object-cover`}
          src={props.image}
          alt=""
        />
      </section>
    </>
  );
}
