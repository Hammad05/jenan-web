import Image from "next/image";
import Link from "next/link";
import React from "react";

export interface PageTitleProps {
  title: string;
  image?: string;
  imageClasses?: string;
  containerClasses?: string;
}

export default function PageTitle(props: PageTitleProps) {
  return (
    <React.Fragment>
      <div className="flex items-start mb-[var(--layout-padding-md)] md:mb-9 gap-2 md:gap-6 px-[var(--layout-padding-md)] px-0">
        <Link
          href={"/services"}
          className="bg-iconBg flex p-1 px-2 md:p-3 rounded-full"
        >
          <span className="material-symbols-outlined text-xl md:text-5xl">
            arrow_back
          </span>
        </Link>
        <p className="text-xl md:text-58px font-ibm-plex-sans-700 p-1">
          {props.title}
        </p>
      </div>
      {props.image && (
        <div className={`w-full h-[14.375rem] md:h-[400px] relative ${props.containerClasses ?? ""}`}>
          <Image
            className={`md:rounded-3xl object-cover ${props.imageClasses ?? ""}`}
            src={props.image}
            alt="Golden Visa"
            layout="fill"
            objectFit="cover"
          />
        </div>
      )}
    </React.Fragment>
  );
}
