import { InfiniteSlider } from "@/components/ui/infinite-slider";
import ole from "@/assets/cases/ole.png";
import max from "@/assets/cases/max.png";
import personal from "@/assets/cases/Personal.png";
import ftbWebsite from "@/assets/cases/Ftb-principal.png";
import pomodoro from "@/assets/cases/angular-todo-pomodoro.png";
import Trybetunes from "@/assets/cases/Trybetunes.jpg";
import indiApp from "@/assets/cases/Nelore App.png";
import Magick from "@/assets/cases/Magick.png";
import Image from "next/image";

export default function InfiniteSliderHorizontal() {
  const imageCards = [
    ole,
    max,
    personal,
    pomodoro,
    indiApp,
    Trybetunes,
    ftbWebsite,
    Magick,
  ];

  return (
    <div className="absolute top-[90dvh] left-1/2 -translate-x-1/2 z-10 pb-4">
      <InfiniteSlider gap={32} speed={40} className="py-4">
        {imageCards.map((project, i) => (
          <div
            key={i}
            className="flex items-center justify-center rounded-xl overflow-hidden shadow-lg w-[380px] h-[220px] lg:w-[480px] lg:h-[320px]"
          >
            <Image
              src={project.src || "/placeholder.svg"}
              alt={project.src}
              width={380}
              height={220}
              className="object-cover w-full h-full"
            />
          </div>
        ))}
      </InfiniteSlider>
    </div>
  );
}
