import H3 from "../H3";
export default function FeatureCard(props: {
  icon?: any;
  title?: string;
  text?: string;
}) {
  return (
    <>
      <div className="flex flex-col p-5">
        <img src={props.icon} alt="" />
        <H3 text={props.text} />
        <p>{props.text}</p>
      </div>
    </>
  );
}
