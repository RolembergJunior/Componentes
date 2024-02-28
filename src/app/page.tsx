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
import { FunctionComponent, useEffect, useState } from "react";
import _, { drop } from 'lodash'
import { Responsive } from "react-grid-layout";


interface Props{
  domElements: any[],
  classname: string,
  rowHeight?: number,
  onLayoutChange: ( layout: any, layouts: any ) => void,
  cols: any,
  breakpoints?: any,
  containerPadding?: number
}

export default function Home( props:FunctionComponent<Props>) {
  const [layouts, setLayouts] = useState<{[ index: string ]: any[]}>({
    lg: _.map(_.range(0,25), function(item, i){
      var y = Math.ceil(Math.random() * 4) + 1;
      return{
        x: (_.random(0, 5) * 2) % 12,
        y: Math.floor(i / 6) * y,
        w: 2,
        h: y,
        i: i.toString(),
        static: Math.random() < 0.05
      };
    })
  });
  const [currentBreakpoint, setCurrentBreakpoint] = useState<string>("lg");
  const [compactType, setCompactType] = useState<string | null>("vertical");
  const [mounted, setMounted] = useState<boolean>(false);
  const [toolbox, setToolbox] = useState<{ [index:string]: any[] }>({
    lg:[]
  });

  useEffect(() =>{
    setMounted(true);
  },[]);

  function onBreakpointChange( breakpoint:any){
    setCurrentBreakpoint(breakpoint);
    setToolbox({
      ...toolbox,
      [breakpoint]: toolbox[breakpoint] || toolbox[currentBreakpoint] || []
    });
  };

  function onCompactTypeChange(){
    let oldCompactType = "";

    const compactType = oldCompactType === "horizontal" ? "vertical" : oldCompactType === "vertical" ? null : "horizotal";
    setCompactType(compactType);
  }

  function onLayoutChange( layout: any, layouts: any ){
    setLayouts({ ...layouts });
  }

  function onDrop(layout: any, layoutItem: any, _en: any){
    alert(
      `Element parameters:\n${JSON.stringify(
        layoutItem,
        ["x", "y", "w", "h"],
        2
    )}`
    );
  };

  function generateDOM(){
    return _.map(layouts.lg, function(l,i){
      return (
        <div
          key={i}
          className={l.static ? "static" : ""}
        >
          {
            <div>
              <span className="text-center">asdasdasdasdasdas{i}</span>
              <span className="text-black">asdasdasdasdasdas</span>
            </div>
          }
        </div>
      )
    })
  }

  return (
    <div
      className="droppable-element"
      draggable
      unselectable="on"
      onDragStart={(e) => e.dataTransfer.setData("text/plain", '')}
    > 
      Droplable Element (DRAG ME)
      <Responsive
        {...props}
        style={{ background: "#f0f0f0" }}
        layouts={layouts}
        measureBeforeMount={false}
        useCSSTransforms={mounted}
        // compactType={compactType}
        preventCollision={!compactType}
        onLayoutChange={() => onLayoutChange()}
        onBreakpointChange={() => onBreakpointChange()}
        onDrop={() => drop()}
        isDroppable
        width={200}
      >
        {() => generateDOM()}
      </Responsive>
      
      
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
    </div>
  );
}

// Home.defaultProps = {
//   className: "layout",
//   rowHeight: 30,
//   onLayoutChange: (layout: any, layouts: any) => {},
//   cols: { lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 },
//   breakpoints: { lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 },
//   containerPadding: [0, 0]
// };
