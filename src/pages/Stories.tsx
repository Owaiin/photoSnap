import FeaturedSection from "../components/sectionComponents/FeaturedSection";
import ImageCard from "../components/cardComponents/ImageCard";
import MultiGridSection from "../components/sectionComponents/MultiGridSection";
import Footer from "../components/Footer";
export default function Stories() {
  return (
    <>
      <FeaturedSection />
      <main>
        <MultiGridSection startFrom={1} itemAmount={13} />
      </main>
    </>
  );
}
