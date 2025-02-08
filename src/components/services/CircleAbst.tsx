import Image from "next/image";
import circleAbst from "@/assets/images/circleWhite.png";

const CircleAbst = () => {
  return (
    <>
      <Image
        src={circleAbst}
        alt="abstract circle"
        className="hidden lg:absolute -z-10 bottom-52  left-56 animate-[spin_8s_ease_infinite]"
      />
    </>
  );
};

export default CircleAbst;
