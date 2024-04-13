"use client";
import Image from "next/image";

export default function ContactInfo() {
  const handleWhatsappClick = () => {
    window.open(`https://api.whatsapp.com/send?phone=971557967733`, "_blank");
  };

  const handleCallClick = () => {
    window.open(`tel:+971 55 796 7733`, "_blank");
  };

  return (
    <div className="h-[64px] flex items-center">
      <button
        onClick={handleWhatsappClick}
        className="bg-green flex-1 md:flex-auto px-4 h-full flex items-center justify-center gap-3 md:gap-4"
      >
        <img
          src="/whatsapp.svg"
          alt="Whatsapp"
          className="object-contain w-6 h-6 md:w-auto md:h-auto"
        />
        <span className="text-sm md:text-base text-white flex-initial">
          Chat on Whatsapp
        </span>
      </button>
      <button
        onClick={handleCallClick}
        className="bg-black flex-1 md:flex-auto px-4 h-full flex items-center justify-center gap-3 md:gap-4"
      >
        <img
          src="/call.svg"
          alt="Call"
          className="object-contain w-6 h-6 md:w-auto md:h-auto"
        />
        <span className="text-sm md:text-base text-white flex-initial">
          +971 55 796 7733
        </span>
      </button>
    </div>
  );
}
