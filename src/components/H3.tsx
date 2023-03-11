export default function H3(props: { text?: string }) {
  return (
    <>
      <h3 className="text font-brand capitalize font-bold">{props.text}</h3>
    </>
  );
}
