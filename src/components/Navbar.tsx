import Button from "./Button";
import Logo from "../assets/shared/logo.svg";
import Container from "./Container";

export default function Navbar() {
  return (
    <>
      <nav className="bg-white">
        <Container>
          <div className="w-full flex justify-between items-center py-5 font-brand">
            <img src={Logo} alt="" />
            <ul className="grid grid-cols-3 gap-20">
              <li>Stories</li>
              <li>Features</li>
              <li>Pricing</li>
            </ul>
            <Button text="Get an invite" />
          </div>
        </Container>
      </nav>
    </>
  );
}
