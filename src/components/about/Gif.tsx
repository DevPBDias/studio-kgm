import gif from "@/assets/video/peopleWorking.gif";
import Image from "next/image";

const Gif = () => {
  return (
    <div className="w-full lg:w-1/2 flex flex-col justify-center items-center p-4">
      <Image
        src={gif}
        alt=""
        className="w-full h-full object-cover rounded-xl"
      />
    </div>
  );
};

export default Gif;
