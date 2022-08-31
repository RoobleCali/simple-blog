import Showcase from "../components/Showcase";
import FeaturedPost from "../components/FeaturedPost";

export default function Home() {
  return (
    <div className="mt-36">
      {/* Header */}
      <Showcase />
      <FeaturedPost />
    </div>
  );
}
