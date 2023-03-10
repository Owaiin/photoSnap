export default function H2(props: { text?: string; large?: boolean }) {
  return (
    <>
      <h2
        className={`${
          props.large ? "text-5xl" : "text-3xl"
        } font-brand uppercase tracking-widest font-bold mb-5`}
      >
        {props.text}
      </h2>
    </>
  );
}
