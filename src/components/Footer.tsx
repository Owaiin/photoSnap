import Container from "./Container";
import Logo from "../assets/shared/logo.svg";
import FacebookIcon from "../assets/shared/facebook.svg";
import InstagramIcon from "../assets/shared/instagram.svg";
import TwitterIcon from "../assets/shared/twitter.svg";
import PintrestIcon from "../assets/shared/pinterest.svg";
import YoutubeIcon from "../assets/shared/youtube.svg";
import { Link } from "react-router-dom";

export default function Footer() {
  const date = new Date().getFullYear();

  return (
    <>
      <footer className="bg-black py-10 text-white">
        <Container>
          <div className=" flex flex-col items-center text-center lg:grid lg:grid-cols-4 lg:text-start">
            <div className="md: flex flex-col items-center md:justify-between">
              <img src={Logo} alt="" className="mb-5 invert" />
              <div className="flex">
                <img
                  className=" mr-5 brightness-full transition-all duration-75 ease-in-out hover:brightness-100 md:mr-3"
                  src={FacebookIcon}
                  alt=""
                />
                <img
                  className=" mr-5 brightness-full transition-all duration-75 ease-in-out hover:brightness-100 md:mr-3"
                  src={YoutubeIcon}
                  alt=""
                />
                <img
                  className=" mr-5 brightness-full transition-all duration-75 ease-in-out hover:brightness-100 md:mr-3"
                  src={TwitterIcon}
                  alt=""
                />
                <img
                  className=" mr-5 brightness-full transition-all duration-75 ease-in-out hover:brightness-100 md:mr-3"
                  src={PintrestIcon}
                  alt=""
                />
                <img
                  className="  brightness-full transition-all duration-75 ease-in-out hover:brightness-100 md:mr-3"
                  src={InstagramIcon}
                  alt=""
                />
              </div>
            </div>
            <ul className="mb-5 font-brand text-lg font-medium md:mb-0">
              <li className="my-5 mt-7">
                <Link to={"/"}>Home</Link>
              </li>
              <li className="my-5">
                <Link to={"/stories"}>Stories</Link>
              </li>
              <li className="my-5">
                <Link to={"/features"}>Features</Link>
              </li>
              <li className="my-5">
                <Link to={"/pricing"}>Pricing</Link>
              </li>
            </ul>
            <div className=" col-span-2 flex flex-col items-end justify-between font-brand">
              <div></div>
              <p>Copyright {date}. All Rights Reserved.</p>
            </div>
          </div>
        </Container>
      </footer>
    </>
  );
}
