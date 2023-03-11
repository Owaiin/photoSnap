import H2 from "../H2";
import Button from "../Button";

export default function PricingCard(props: {
  dark?: boolean;
  annual?: boolean;
  title?: string;
  text?: string;
  price?: string | number;
}) {
  return (
    <>
      <div
        className={`px-20 py-10 font-brand flex flex-col items-center text-center ${
          props.dark ? "bg-black text-white" : "bg-gray-200"
        }`}
      >
        <H2 text={props.title} />
        <p className="mb-3">{props.text}</p>
        <H2 text={`$${props.price}`} large />
        <p>per month</p>
        <Button text="Pick Plan" />
      </div>
    </>
  );
}
