export default function H1(props: { text?: string }) {
  return (
    <>
      <h1 className=" mb-5 font-brand text-2xl font-bold uppercase tracking-widest md:text-5xl">
        {props.text}
      </h1>
    </>
  );
}
