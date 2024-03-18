import Image from "next/image";
import Info from "../components/info";

export default function Services() {
    return (
        <div>
            <h1 className="text-3xl font-ibm-plex-sans-400 mb-1">Welcom to Jenan </h1>
            <p className="font-ibm-plex-sans-400 text-xl mb-8">Jenan Documents Clearing Services provides wide range of government services.
                Browse the services below and reach out to us for services given below. </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-6">
                <div className="text-2xl font-ibm-plex-sans-600">
                    <Image className="mb-4" src="/goldenVisa.svg" alt="Golden Visa" width={400} height={400} />
                    <p>UAE Golden Visa</p>
                </div>
                <div className="text-2xl font-ibm-plex-sans-600">
                    <Image className="mb-4" src="/newBusinessSetup.svg" alt="New Business Setup" width={400} height={400} />
                    <p>UAE New Business Setup</p>
                </div>
                <div className="text-2xl font-ibm-plex-sans-600">
                    <Image className="mb-4" src="/touristVisa.svg" alt="Dubai Tourist Visa" width={400} height={400} />
                    <p>Dubai Tourist Visa</p>
                </div>
                <div className="text-2xl font-ibm-plex-sans-600">
                    <Image className="mb-4" src="/Amer.svg" alt="Family, Parents & Newborn Visa" width={400} height={400} />
                    <p>Family, Parents & Newborn Visa</p>
                </div>
                <div className="text-2xl font-ibm-plex-sans-600">
                    <Image className="mb-4" src="/ImageDomesticWork.svg" alt="TADBEER Domestic worker visa UAE" width={400} height={400} />
                    <p>TADBEER Domestic worker visa UAE</p>
                </div>
                <div className="text-2xl font-ibm-plex-sans-600">
                    <Image className="mb-4" src="/ImageTesheel.svg" alt="PRO & TAS-HEEL Services" width={400} height={400} />
                    <p>PRO & TAS-HEEL Services</p>
                </div>
                <div className="text-2xl font-ibm-plex-sans-600">
                    <Image className="mb-4" src="/ImageLegal.svg" alt="Legal Translation" width={400} height={400} />
                    <p>Legal Translation</p>
                </div>
                <div className="text-2xl font-ibm-plex-sans-600">
                    <Image className="mb-4" src="/MOFA.svg" alt="MOFA Certificate Attestation" width={400} height={400} />
                    <p>MOFA Certificate Attestation</p>
                </div>
            </div>
            <h1 className="text-3xl font-ibm-plex-sans-400 mt-36 mb-1">Foreign visa services</h1>
            <p className="font-ibm-plex-sans-400 text-xl mb-8">We provide visa services and guidance for many countries, reach us for foreign visa services.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-6">
                <div className="text-2xl font-ibm-plex-sans-600">
                    <Image className="mb-4" src="/KSA.svg" alt="foreignVisa" width={298} height={236}/>
                    <p>Saudi Arabia Visa</p>
                </div>
                <div className="text-2xl font-ibm-plex-sans-600">
                    <Image className="mb-4" src="/UK.svg" alt="foreignVisa" width={298} height={236}/>
                    <p>United Kingdom Visa</p>
                </div>
                <div className="text-2xl font-ibm-plex-sans-600">
                    <Image className="mb-4" src="/EU.svg" alt="foreignVisa" width={298} height={236}/>
                    <p>Schengen Visa</p>
                </div>
                <div className="text-2xl font-ibm-plex-sans-600">
                    <Image className="mb-4" src="/Turkey.svg" alt="foreignVisa" width={298} height={236}/>
                    <p>Turkey Visa</p>
                </div>
            </div>

            <h1 className="text-3xl font-ibm-plex-sans-400 mt-36 mb-1">Get in touch</h1>
            <p className="font-ibm-plex-sans-400 text-xl mb-8">Contact us for your inquiries and we will respond back within hours.</p>
            <Info/>
        </div>
    );
}