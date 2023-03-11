import Container from "../Container";
import H2 from "../H2";
import ArrowButton from "../ArrowButton";
import BackgroundImage from "../../assets/shared/bg-beta.jpg";

export default function InviteCta() {
  return (
    <>
      <section className="relative">
        <img
          src={BackgroundImage}
          alt=""
          className="absolute top-0 left-0 h-full w-full object-cover"
        />
        <div className="absolute top-0 left-0 z-10 h-full w-full bg-black bg-opacity-40"></div>
        <Container>
          <div className="relative z-20 flex flex-col justify-between px-10 py-20 text-white md:flex-row md:px-0">
            <div className="md:w-1/3">
              <H2 large text="We're in beta. Get your invite today!" />
            </div>
            <ArrowButton text="Get an invite" />
          </div>
        </Container>
      </section>
    </>
  );
}
