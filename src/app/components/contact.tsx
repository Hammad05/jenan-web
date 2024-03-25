"use client";
import Image from "next/image";

export default function ContactInfo() {
  const handleWhatsappClick = () => {
    window.open(`https://api.whatsapp.com/send?phone=971507967733`, "_blank");
  };

  const handleCallClick = () => {
    window.open(`tel:+971 55 796 7733`, "_blank");
  };

  return (
    <div className="h-[64px] flex items-center">
      <button
        onClick={handleWhatsappClick}
        className="bg-green flex-1 md:flex-auto px-4 h-full flex items-center gap-2"
      >
        <Image src="/whatsapp.svg" alt="Whatsapp" width={36} height={36} />
        <span className="font-size-16 text-white">Chat on Whatsapp</span>
      </button>
      <button
        onClick={handleCallClick}
        className="bg-black flex-1 md:flex-auto px-4 h-full flex items-center gap-2"
      >
        <Image src="/call.svg" alt="Call" width={36} height={36} />
        <span className="font-size-16 text-white"> +971 55 796 7733</span>
      </button>
    </div>
  );
}
