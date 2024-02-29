'use client'

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
import ReactGridLayout from "react-grid-layout";

export default function Home() {

  const layout = [
    { i: "a", x: 0, y: 0, w: 2, h: 9 },
    { i: "b", x: 0, y: 0, w: 2, h: 10 },
    { i: "c", x: 0, y: 0, w: 2, h: 3 },
    { i: "d", x: 2, y: 0, w: 1.5, h: 9 },
    { i: "e", x: 2, y: 0, w: 1.5, h: 9 },
    { i: "f", x: 2.4, y: 0, w: 2.9, h: 4 },
    { i: "g", x: 4, y: -1, w: 1.5, h: 6.5 },
    { i: "h", x: 4, y: -1, w: 1.5, h: 6.9 },
    { i: "i", x: 4, y: -1, w: 1.5, h: 4.8 },
    { i: "j", x: 7, y: 0, w: 1, h: 2 },
    { i: "k", x: 4, y: 0, w: 1, h: 2 },
  ];

  return (
    <div> 
      <ReactGridLayout
        className="layout"
        layout={layout}
        cols={5}
        rowHeight={30}
        width={1200}
      >
        <div key='a'>
          <LoginCard />
        </div>
        <div key='b'>
          <SupportCard />
        </div>
        <div key='c'>
          <Navbar />
        </div>
        <div key='d'>
          <PriceCard />
        </div>
        <div key='e'>
          <FriendsCard />
        </div>
        <div key='f'>
          <ScearchCard />
        </div>
        <div key='g'>
          <PhotoCard />
        </div>
        <div key='h'>
          <InformationCard />
        </div>
        <div key='i'>
          <TagsCard />
        </div>
        <div key='j'>
          <UserCard />
        </div>
        <div key='k'>
          <ColorPalette />
        </div>
      {/* <div className="grid grid-cols-4 grid-rows-none w-[80%] h-[100vh] mx-auto">
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
      </div> */}
      </ReactGridLayout>
    </div>
  );
}

