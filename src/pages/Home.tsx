import MainTwoGrid from "../components/sectionComponents/MainTwoGrid";
import HeroImage from "../assets/images/HomePage/create-and-share.jpg";
import StoriesImage from "../assets/images/HomePage/beautiful-stories.jpg";
import DesignForEveryone from "../assets/images/HomePage/designed-for-everyone.jpg";
import MultiGridSection from "../components/sectionComponents/MultiGridSection";
import EmbedIcon from "../assets/images/features/desktop/embed.svg";
import NoLimitIcon from "../assets/images/features/desktop/no-limit.svg";
import ResponsiveIcon from "../assets/images/features/desktop/responsive.svg";
import FeatureCard from "../components/cardComponents/FeaturedCard";
import Container from "../components/Container";
function Home() {
  return (
    <div className="">
      <MainTwoGrid
        buttonText="View the stories"
        hero
        dark
        image={HeroImage}
        title="Create and share your photo stories"
        text="Photosnap is a platform for photographers and visual storytellers. We make it easy to share photos, tell stories and connect with others."
      />
      <MainTwoGrid
        buttonText="View the stories"
        invert
        image={StoriesImage}
        title="Beautiful Stories Every Time"
        text="We provide design templates to ensure your stories look terrific. Easily add photos, text, embed maps and media from other networks. Then share your story with everyone."
      />
      <MainTwoGrid
        buttonText="View the stories"
        image={DesignForEveryone}
        title="Designed for Everyone"
        text="Photosnap can help you create stories that resonate with your audience.  Our tool is designed for photographers of all levels, brands, businesses you name it."
      />
      <section>
        <MultiGridSection startFrom={1} itemAmount={5} />
      </section>
      <section>
        <Container>
          <div className="grid grid-cols-1 gap-10 py-20 lg:grid-cols-3">
            <FeatureCard
              icon={ResponsiveIcon}
              title="100% Responsive"
              text="No matter which the device you’re on, our site is fully responsive and stories look beautiful on any screen."
            />
            <FeatureCard
              icon={NoLimitIcon}
              title="No Photo Upload Limit"
              text="Our tool has no limits on uploads or bandwidth. Freely upload in bulk and share all of your stories in one go."
            />
            <FeatureCard
              icon={EmbedIcon}
              title="Available to Embed"
              text="Embed Tweets, Facebook posts, Instagram media, Vimeo or YouTube videos, Google Maps, and more. "
            />
          </div>
        </Container>
      </section>
    </div>
  );
}

export default Home;
