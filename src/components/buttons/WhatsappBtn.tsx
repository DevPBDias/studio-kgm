import Link from "next/link";
import whatsapp from "@/assets/images/Whatsapp.webp";
import Image from "next/image";

const WhatsappBtn = () => {
  return (
    <Link
      className="cursor-pointer fixed z-[9999] bottom-6 right-6 flex items-center justify-center hover:scale-110 transition-all duration-300"
      href="https://w.app/2rdmwc"
    >
      <Image src={whatsapp} alt="whatsapp" width={40} height={40} />
    </Link>
  );
};

export default WhatsappBtn;
