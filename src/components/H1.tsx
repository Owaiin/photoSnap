export default function H1(props: { text?: string }) {
  return (
    <>
      <h1 className=" text-5xl font-brand uppercase tracking-widest font-bold mb-5">
        {props.text}
      </h1>
    </>
  );
}
