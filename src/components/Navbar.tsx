import Button from "./Button";
import Logo from "../assets/shared/logo.svg";
import Container from "./Container";
import { Link, NavLink } from "react-router-dom";
import NavMenu from "./NavMenu";
import { useState } from "react";
import MenuIcon from "../assets/shared/menu.svg";
import CloseIcon from "../assets/shared/close.svg";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className="bg-white">
        <Container>
          <div className="flex w-full items-center justify-between py-5 font-brand font-medium">
            <Link onClick={() => setMenuOpen(false)} to="/">
              <img src={Logo} alt="" />
            </Link>
            <ul className="hidden md:grid md:grid-cols-3 md:gap-10">
              <li>
                <NavLink to="stories">Stories</NavLink>
              </li>
              <li>
                <NavLink to="features">Features</NavLink>
              </li>
              <li>
                <NavLink to="pricing">Pricing</NavLink>
              </li>
            </ul>
            <div className="hidden md:block">
              <Button text="Get an invite" />
            </div>
            <img
              onClick={() =>
                menuOpen ? setMenuOpen(false) : setMenuOpen(true)
              }
              className="md:hidden"
              src={!menuOpen ? MenuIcon : CloseIcon}
              alt=""
            />
          </div>
        </Container>
      </nav>
      {menuOpen && <NavMenu setMenuOpen={setMenuOpen} />}
    </>
  );
}
