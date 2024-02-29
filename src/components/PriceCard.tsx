"use client";

import { useState } from "react";
import { Box, Slider } from "@mui/material";

export default function PriceCard() {
  const [value, setValue] = useState<number[]>([25,50]);

  function valueText(){
    return `$${value}`;
  }

  const minDistance = 25;

  function handleChange(e:Event, newValue: number | number[], activeThumb:number){
    if(!Array.isArray(newValue)){
        return;
    }
    if(activeThumb === 0){
        setValue([Math.min(newValue[0], value[1] - minDistance), value[1]])
    } else {
        setValue([value[0], Math.max(newValue[1], value[0] + minDistance)]);
    }
  };

  return (
    <div className="flex flex-col justify-between bg-white w-[300px] h-[320px] mx-auto p-4 rounded-xl shadow-lg">
      <h1 className="text-xl font-medium">Preço</h1>
      <div className="flex justify-around items-center">
        <input
          className="w-[100px] h-[50px] bg-[#FAFAFA] rounded-md p-3"
          type="number"
          value={value[0]}
        />
        <hr className="bg-gray-600 w-[20px] h-[4px]" />
        <input
          className="w-[100px] h-[50px] bg-[#FAFAFA] rounded-md p-3"
          type="number"
          value={value[1]}
        />
      </div>
      <Box sx={{ width: 250 }}>
        <Slider
            className="text-[#0F8E5E]"
            getAriaLabel={() => 'Minimum distance'}
            min={0}
            max={500}
            value={value}
            onChange={handleChange}
            valueLabelDisplay="auto"
            getAriaValueText={valueText}
            disableSwap
        />
    </Box>
      <div className="flex flex-wrap justify-between gap-3">
        <p>Menos de $25</p>
        <p>$25 a $50</p>
        <p>$50 a $100</p>
        <p>$100 a $200</p>
        <p>$200 a $500</p>
        <p>$500 e acima</p>
      </div>
      <p className="text-[#A1A1A1]">150 resultados encontrados</p>
    </div>
  );
}
