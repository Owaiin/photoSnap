export default function H2(props: { text?: string | number; large?: boolean }) {
  return (
    <>
      <h2
        className={`${
          props.large ? "text-2xl md:text-5xl" : "text-2xl"
        } mb-5 font-brand font-bold uppercase tracking-widest`}
      >
        {props.text}
      </h2>
    </>
  );
}
