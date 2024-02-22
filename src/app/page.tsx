import ColorPalette from "@/components/ColorPalette";
import FriendsCard from "@/components/FriendsCard";
import InformationCard from "@/components/InformationCard";
import LoginCard from "@/components/LoginCard";
import Navbar from "@/components/Navbar";
import PhotoCard from "@/components/PhotoCard";
import PriceCard from "@/components/PriceCard";
import SupportCard from "@/components/SupportCard";
import TagsCard from "@/components/TagsCard";
import UserCard from "@/components/UserCard";

export default function Home() {
  return (
    <div>
      <div className="grid grid-cols-4 grid-rows-3">
        <LoginCard/>
        <PriceCard/>
        <PhotoCard/>
        <UserCard/>
        <SupportCard/>
        <FriendsCard/>
        <div>
          <InformationCard/>
          <TagsCard/>
        </div>
        <ColorPalette/>
        <Navbar/>
      </div>
    </div>
  );
}
