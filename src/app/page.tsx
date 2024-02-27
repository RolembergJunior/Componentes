import ColorPalette from "@/components/ColorPalette";
import FriendsCard from "@/components/FriendsCard";
import InformationCard from "@/components/InformationCard";
import LoginCard from "@/components/LoginCard";
import Navbar from "@/components/Navbar";
import PhotoCard from "@/components/PhotoCard";
import PriceCard from "@/components/PriceCard";
import ScearchCard from "@/components/ScearchCard";
import SupportCard from "@/components/SupportCard";
import TagsCard from "@/components/TagsCard";
import UserCard from "@/components/UserCard";

const componentsArray = [
      <LoginCard/>,
      <SupportCard/>,
      <Navbar/>,
      <PriceCard/>,
      <FriendsCard/>,
      <ScearchCard/>,
      <PhotoCard/>,
      <InformationCard/>,
      <TagsCard/>,
      <UserCard/>,
      <ColorPalette/>
]

export default function Home() {
  return (
    <div>
      <div className="grid grid-cols-4 grid-rows-none w-[80%] h-[100vh] mx-auto">
        <div className="col-start-1 col-end-2 space-y-10 my-8" >
          <LoginCard/>
          <SupportCard/>
          <Navbar/>
        </div>
        <div className="row-start-1 row-end-1 col-start-2 col-end-4 mx-auto space-y-12 my-8">
          <PriceCard/>
          <FriendsCard/>
          <ScearchCard/>
        </div>
        <div className="row-start-1 row-end-1 col-start-3 col-end-3 space-y-7 mx-auto my-8">
          <PhotoCard/>
          <InformationCard/>
          <TagsCard/>
        </div>
        <div className="row-start-1 row-end-1 col-start-4 col-end-5 space-y-10 my-8">
          <UserCard/>
          <ColorPalette/>
        </div>
      </div>
    </div>
  );
}
