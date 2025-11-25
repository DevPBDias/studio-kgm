import Link from "next/link";
import whatsapp from "@/assets/images/Whatsapp.webp";
import Image from "next/image";

const WhatsappBtn = () => {
  return (
    <Link
      className="flex items-center justify-center fixed bottom-6 right-6 z-50 hover:scale-110 rounded-full shadow-lg hover:shadow-xl transition-shadow"
      href="https://w.app/2rdmwc"
    >
      <Image src={whatsapp} alt="whatsapp" width={40} height={40} />
    </Link>
  );
};

export default WhatsappBtn;
