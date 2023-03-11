import H3 from "../H3";
export default function FeatureCard(props: {
  icon?: any;
  title?: string;
  text?: string;
}) {
  return (
    <>
      <div className="flex flex-col p-10 items-center justify-end text-center">
        <img src={props.icon} alt="" className="w-20 mb-8" />
        <H3 text={props.title} />
        <p className="mt-3">{props.text}</p>
      </div>
    </>
  );
}
