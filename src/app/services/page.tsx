import React from "react";
import Image from "next/image";
import Info from "../components/info";
import Link from "next/link";

export default function Services() {
    return (
        <React.Fragment>
            <h1 className="text-3xl font-ibm-plex-sans-400 mb-1">Welcom to Jenan </h1>
            <div className="font-ibm-plex-sans-400 text-xl mb-8">Jenan Documents Clearing Services provides wide range of government services.
                Browse the services below and reach out to us for services given below. </div>
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-6">
                <Link href={"/goldenvisa"} className="text-2xl font-ibm-plex-sans-600">
                    <Image className="mb-4" src="/goldenVisa.svg" alt="Golden Visa" width={400} height={400} sizes="(max-width: 768px) 156px, 400px" />
                    <div>UAE Golden Visa</div>
                </Link>
                <Link href={"/"} className="text-2xl font-ibm-plex-sans-600">
                    <Image className="mb-4" src="/newBusinessSetup.svg" alt="New Business Setup" width={400} height={400} sizes="(max-width: 768px) 156px, 400px" />
                    <div>UAE New Business Setup</div>
                </Link>
                <Link href={"/touristvisa"} className="text-2xl font-ibm-plex-sans-600">
                    <Image className="mb-4" src="/touristVisa.svg" alt="Dubai Tourist Visa" width={400} height={400} sizes="(max-width: 768px) 156px, 400px" />
                    <div>Dubai Tourist Visa</div>
                </Link>
                <Link href="familyvisa" className="text-2xl font-ibm-plex-sans-600">
                    <Image className="mb-4" src="/Amer.svg" alt="Family, Parents & Newborn Visa" width={400} height={400} sizes="(max-width: 768px) 156px, 400px" />
                    <div>Family, Parents & Newborn Visa</div>
                </Link>
                <Link href="tadbeer" className="text-2xl font-ibm-plex-sans-600">
                    <Image className="mb-4" src="/ImageDomesticWork.svg" alt="TADBEER Domestic worker visa UAE" width={400} height={400} sizes="(max-width: 768px) 156px, 400px" />
                    <div>TADBEER Domestic worker visa UAE</div>
                </Link>
                <Link href="tasheel" className="text-2xl font-ibm-plex-sans-600">
                    <Image className="mb-4" src="/ImageTesheel.svg" alt="PRO & TAS-HEEL Services" width={400} height={400} sizes="(max-width: 768px) 156px, 400px" />
                    <div>PRO & TAS-HEEL Services</div>
                </Link>
                <Link href="legaltranslation" className="text-2xl font-ibm-plex-sans-600">
                    <Image className="mb-4" src="/ImageLegal.svg" alt="Legal Translation" width={400} height={400} sizes="(max-width: 768px) 156px, 400px" />
                    <div>Legal Translation</div>
                </Link>
                <Link href="mofacertificateattestation" className="text-2xl font-ibm-plex-sans-600">
                    <Image className="mb-4" src="/MOFA.svg" alt="MOFA Certificate Attestation" width={400} height={400} sizes="(max-width: 768px) 156px, 400px" />
                    <div>MOFA Certificate Attestation</div>
                </Link>
            </div>
            <h1 className="text-3xl font-ibm-plex-sans-400 mt-36 mb-1">Foreign visa services</h1>
            <div className="font-ibm-plex-sans-400 text-xl mb-8">We provide visa services and guidance for many countries, reach us for foreign visa services.</div>
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-6">
                <div className="text-2xl font-ibm-plex-sans-600">
                    <Image className="mb-4" src="/KSA.svg" alt="foreignVisa" width={298} height={236} sizes="(max-width: 768px) 236px, 298px"/>
                    <div>Saudi Arabia Visa</div>
                </div>
                <div className="text-2xl font-ibm-plex-sans-600">
                    <Image className="mb-4" src="/UK.svg" alt="foreignVisa" width={298} height={236}  sizes="(max-width: 768px) 236px, 298px"/>
                    <div>United Kingdom Visa</div>
                </div>
                <div className="text-2xl font-ibm-plex-sans-600">
                    <Image className="mb-4" src="/EU.svg" alt="foreignVisa" width={298} height={236}  sizes="(max-width: 768px) 236px, 298px"/>
                    <div>Schengen Visa</div>
                </div>
                <div className="text-2xl font-ibm-plex-sans-600">
                    <Image className="mb-4" src="/Turkey.svg" alt="foreignVisa" width={298} height={236}  sizes="(max-width: 768px) 236px, 298px"/>
                    <div>Turkey Visa</div>
                </div>
            </div>

            <h1 className="text-3xl font-ibm-plex-sans-400 mt-36 mb-1">Get in touch</h1>
            <div className="font-ibm-plex-sans-400 text-xl mb-8">Contact us for your inquiries and we will respond back within hours.</div>
            <Info/>
        </React.Fragment>
    );
}