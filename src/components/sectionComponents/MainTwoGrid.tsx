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
      <section className="grid md:grid-cols-5 ">
        <div
          className={` flex flex-col items-start justify-center p-10 md:p-20 lg:p-24
            ${props.dark && "bg-black text-white"}
            ${
              !props.invert
                ? "order-2 md:order-none md:col-span-3 lg:col-span-2"
                : " order-2 md:order-2 md:col-span-3 lg:col-span-2"
            }
        `}
        >
          {props.hero ? (
            <H1 text={props.title} />
          ) : (
            <H2 large text={props.title} />
          )}

          <p className="font-brand text-lg">{props.text}</p>
          {props.dark ? (
            <ArrowButton text={props.buttonText} />
          ) : (
            <ArrowButton text={props.buttonText} dark />
          )}
        </div>
        <img
          className={`${
            !props.invert
              ? "order-1 md:order-none md:col-span-2 lg:col-span-3"
              : "order-1 md:order-1 md:col-span-2 lg:col-span-3"
          } h-full w-full object-cover`}
          src={props.image}
          alt=""
        />
      </section>
    </>
  );
}
