import { InfiniteSlider } from "@/components/ui/infinite-slider";
import { imageCards } from "@/constants/sliderImages";
import Image from "next/image";

export default function InfiniteSliderHorizontal() {
  return (
    <div className="absolute top-[90dvh] left-1/2 -translate-x-1/2 z-10 pb-4">
      <InfiniteSlider gap={32} speed={40} className="py-4">
        {imageCards.map((project, i) => (
          <div
            key={i}
            className="flex items-center justify-center rounded-xl overflow-hidden shadow-lg w-[380px] h-[220px] lg:w-[480px] lg:h-[320px]"
          >
            <Image
              src={project}
              alt={`project-${i}`}
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
