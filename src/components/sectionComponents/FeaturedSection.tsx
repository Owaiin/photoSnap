import Container from "../Container";
import data from "../../../public/storyData/stories.json";
import H1 from "../H1";
import ArrowButton from "../ArrowButton";
export default function FeaturedSection() {
  const featuredItem = data.filter((story) => story.featured);

  return (
    <>
      <header className="relative flex min-h-screen flex-col justify-center p-10 md:min-h-750">
        <img
          src={featuredItem[0].image}
          alt=""
          className="absolute top-0 left-0 h-full w-full object-cover object-center"
        />
        <div className="absolute top-0 left-0 z-10 h-full w-full bg-black bg-opacity-20"></div>
        <Container>
          <div className=" relative z-30 flex h-full flex-col justify-center text-white md:w-1/2">
            <p className="mb-3 font-brand uppercase tracking-widest">
              Last Months Featured Story
            </p>
            <H1 text="Hazy Full moon of appalachia" />
            <p className="mb-5 font-brand ">March 2nd 2020 by John Appleseed</p>
            <p className="font-brand">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Obcaecati suscipit minus atque sequi magni mollitia, consequuntur
              fuga aliquid at, rerum, ratione dicta dignissimos corrupti? Ea
              sequi laborum hic a eius.
            </p>
            <ArrowButton text="Read more" />
          </div>
        </Container>
      </header>
    </>
  );
}
