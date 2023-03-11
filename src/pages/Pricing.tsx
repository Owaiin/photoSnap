import MainTwoGrid from "../components/sectionComponents/MainTwoGrid";
import HeroImage from "../assets/images/pricing/hero.jpg";
import InviteCta from "../components/sectionComponents/InviteCTA";
import PricingCard from "../components/cardComponents/PricingCard";
import Container from "../components/Container";

export default function Pricing() {
  return (
    <>
      <header>
        <MainTwoGrid
          hero
          dark
          image={HeroImage}
          title="Pricing"
          buttonText="Get an invite"
          text="Create a your stories, Photosnap is a platform for photographers and visual storytellers. It’s the simple way to create and share your photos."
        />
      </header>
      <main>
        <section>
          <Container>
            <div className="grid grid-cols-3 gap-10 py-32">
              <PricingCard
                title="Basic"
                price={19.0}
                text="Includes basic usage of our platform. Recommended for new and aspiring photographers."
              />
              <PricingCard
                dark
                title="Pro"
                price={39.0}
                text="More advanced features available. Recommended for photography veterans and professionals."
              />
              <PricingCard
                title="Business"
                price={99.0}
                text="Additional features available such as more detailed metrics. Recommended for business owners."
              />
            </div>
          </Container>
        </section>
        <section></section>
        <InviteCta />
      </main>
    </>
  );
}
