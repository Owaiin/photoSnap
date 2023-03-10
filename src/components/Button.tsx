export default function Button(props: {
  text: string;
  onClick?: React.MouseEventHandler;
}) {
  return (
    <>
      <button
        className="text-md uppercase transition-colors duration-150 ease-in-out font-brand bg-black text-white font-medium px-10 py-2 tracking-widest hover:text-black hover:bg-gray-300"
        onClick={props.onClick}
      >
        {props.text}
      </button>
    </>
  );
}
