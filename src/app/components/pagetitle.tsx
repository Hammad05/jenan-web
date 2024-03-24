import Image from "next/image";
import Link from "next/link";
import React from "react";

export interface PageTitleProps {
    title: string;
    image?: string;
}

export default function PageTitle(props: PageTitleProps) {
    return (
        <React.Fragment>
        <div className="flex items-start mb-9 gap-6">
            <Link href={"/services"} className="bg-iconBg flex p-3 rounded-full">
                <span className="material-symbols-outlined text-5xl">
                    arrow_back
                </span>
            </Link>
            <p className="text-58px font-ibm-plex-sans-700">{props.title}</p>
        </div>
        {
            props.image && <div className="w-full h-[400px] relative">
            <Image
                className="rounded-3xl object-cover"
                src={props.image}
                alt="Golden Visa"
                layout="fill"
                objectFit="cover"
            />
        </div>
        }
        
        </React.Fragment>
    )
}