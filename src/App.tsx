import { useState } from "react";
import Navbar from "./components/Navbar";
import MainTwoGrid from "./components/sectionComponents/MainTwoGrid";
import HeroImage from "./assets/images/HomePage/create-and-share.jpg";
import StoriesImage from "./assets/images/HomePage/beautiful-stories.jpg";
import DesignForEveryone from "./assets/images/HomePage/designed-for-everyone.jpg";
import ImageCard from "./components/cardComponents/ImageCard";
import MultiGridSection from "./components/sectionComponents/MultiGridSection";
import Footer from "./components/Footer";
function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div>
        <Navbar />
      </div>
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
        <MultiGridSection itemAmount={4} />
      </section>
      <section></section>
      <Footer />
    </div>
  );
}

export default App;
