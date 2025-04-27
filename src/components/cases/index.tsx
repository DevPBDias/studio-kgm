"use client";
import ole from "@/assets/images/ole.png";
import max from "@/assets/images/max.png";
import ftb from "@/assets/images/ftb.png";
import personal from "@/assets/images/Personal.png";
import trip from "@/assets/images/Trip.png";

import { InfiniteMovingCards } from "./InfinityCards";

export default function CasesWork() {
  return (
    <div
      id="cases"
      className="h-[30rem] rounded-md flex flex-col antialiased bg-[var--primary)] items-center justify-center w-full absolute top-[90dvh] left-1/2 -translate-x-1/2 overflow-hidden"
    >
      <InfiniteMovingCards
        items={[ole, max, ftb, personal, trip]}
        direction="right"
        speed="slow"
      />
    </div>
  );
}
