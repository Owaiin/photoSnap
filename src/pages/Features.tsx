import MainTwoGrid from "../components/sectionComponents/MainTwoGrid";
import HeroImage from "../assets/images/features/desktop/hero.jpg";
import Container from "../components/Container";
import FeatureCard from "../components/cardComponents/FeaturedCard";
import BoostIcon from "../assets/images/features/desktop/boost-exposure.svg";
import CustomDomainIcon from "../assets/images/features/desktop/custom-domain.svg";
import DragDropIcon from "../assets/images/features/desktop/drag-drop.svg";
import EmbedIcon from "../assets/images/features/desktop/embed.svg";
import NoLimitIcon from "../assets/images/features/desktop/no-limit.svg";
import ResponsiveIcon from "../assets/images/features/desktop/responsive.svg";
import InviteCta from "../components/sectionComponents/InviteCTA";
export default function Features() {
  return (
    <>
      <header>
        <MainTwoGrid
          dark
          hero
          image={HeroImage}
          title="Features"
          buttonText="Get an invite"
          text="We make sure all of our features are designed to be loved by every aspiring and even professional photograpers who wanted to share their stories."
        />
      </header>
      <main>
        <Container>
          <div className="grid gap-10 py-20 md:grid-cols-2 lg:grid-cols-3">
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
            <FeatureCard
              icon={CustomDomainIcon}
              title="Custom Domain"
              text="With Photosnap subscriptions you can host your stories on your own domain. You can also remove our branding!"
            />
            <FeatureCard
              icon={BoostIcon}
              title="Boost Your Exposure"
              text="Users that viewed your story or gallery can easily get notifed of new and featured stories with our built in mailing list."
            />
            <FeatureCard
              icon={DragDropIcon}
              title="Drag & Drop Image"
              text="Easily drag and drop your image and get beautiful shots everytime. No over the top tooling to add friction to creating stories."
            />
          </div>
        </Container>
        <InviteCta />
      </main>
    </>
  );
}
