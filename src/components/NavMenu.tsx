import Button from "./Button";
import { Link, NavLink } from "react-router-dom";

export default function NavMenu(props: { setMenuOpen: any }) {
  return (
    <>
      <div className="absolute z-50 h-full w-full bg-black bg-opacity-40">
        <div className="flex  flex-col items-center justify-center bg-white px-10 pb-14 pt-5">
          <ul className=" flex flex-col items-center justify-center font-brand uppercase tracking-widest">
            <li className="my-5">
              <NavLink onClick={() => props.setMenuOpen(false)} to="stories">
                Stories
              </NavLink>
            </li>
            <li className="my-5">
              <NavLink onClick={() => props.setMenuOpen(false)} to="features">
                Features
              </NavLink>
            </li>
            <li className="my-5">
              <NavLink onClick={() => props.setMenuOpen(false)} to="pricing">
                Pricing
              </NavLink>
            </li>
          </ul>
          <div className="mb-5 w-full border-b border-black"></div>
          <Button text="Get an invite" />
        </div>
      </div>
    </>
  );
}
