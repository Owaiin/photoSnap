import Container from "./Container";
import Logo from "../assets/shared/logo.svg";
import FacebookIcon from "../assets/shared/facebook.svg";
import InstagramIcon from "../assets/shared/instagram.svg";
import TwitterIcon from "../assets/shared/twitter.svg";
import PintrestIcon from "../assets/shared/pinterest.svg";
import YoutubeIcon from "../assets/shared/youtube.svg";

export default function Footer() {
  const date = new Date().getFullYear();

  return (
    <>
      <footer className="bg-black text-white py-10">
        <Container>
          <div className="grid grid-cols-4">
            <div className="flex flex-col justify-between items-start">
              <img src={Logo} alt="" className="invert" />
              <div className="flex">
                <img
                  className=" mr-3 brightness-full hover:brightness-100 transition-all duration-75 ease-in-out"
                  src={FacebookIcon}
                  alt=""
                />
                <img
                  className=" mr-3 brightness-full hover:brightness-100 transition-all duration-75 ease-in-out"
                  src={YoutubeIcon}
                  alt=""
                />
                <img
                  className=" mr-3 brightness-full hover:brightness-100 transition-all duration-75 ease-in-out"
                  src={TwitterIcon}
                  alt=""
                />
                <img
                  className=" mr-3 brightness-full hover:brightness-100 transition-all duration-75 ease-in-out"
                  src={PintrestIcon}
                  alt=""
                />
                <img
                  className=" mr-3 brightness-full hover:brightness-100 transition-all duration-75 ease-in-out"
                  src={InstagramIcon}
                  alt=""
                />
              </div>
            </div>
            <ul>
              <li>Home</li>
              <li>Stories</li>
              <li>Features</li>
              <li>Pricing</li>
            </ul>
            <div className=" col-span-2 flex flex-col items-end justify-between">
              <div></div>
              <p>Copyright {date}. All Rights Reserved.</p>
            </div>
          </div>
        </Container>
      </footer>
    </>
  );
}
