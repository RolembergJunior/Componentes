'use client'

import { useState } from "react";
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
    { i: "a", x: 0, y: 1, w: 1, h: 9 },
    { i: "b", x: 0, y: 1, w: 1, h: 10 },
    { i: "c", x: 0, y: 1, w: 1, h: 3 },
    { i: "d", x: 1, y: -2, w: 1, h: 9 },
    { i: "e", x: 1, y: -2, w: 1, h: 9 },
    { i: "f", x: 1, y: -2, w: 2, h: 3.7 },
    { i: "g", x: 2, y: -3, w: 1, h: 6.5 },
    { i: "h", x: 2, y: -3, w: 1, h: 7.5 },
    { i: "i", x: 2, y: -3, w: 1, h: 4.8 },
    { i: "j", x: 3, y: -6, w: 1, h: 6 },
    { i: "k", x: 3, y: -6, w: 1, h: 15 },
  ];

  return (
    <div className=""> 
      <ReactGridLayout
        className="w-[80%] mx-auto layout"
        layout={layout}
        cols={4}
        rowHeight={30}
        width={1550}
      >
        <div key='a'>
          <LoginCard/>
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
      </ReactGridLayout>
    </div>
  );
}

