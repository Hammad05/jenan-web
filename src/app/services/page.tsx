import React from "react";
import Image from "next/image";
import Info from "../components/info";
import Link from "next/link";
import List from "../components/list";

export default function Services() {
  return (
    <React.Fragment>
      <div className="px-[var(--layout-padding-md)] md:px-0 ">
        <h1 className="text-xl font-ibm-plex-sans-500 md:text-3xl md:font-ibm-plex-sans-500 mb-1">
          Welcom to Jenan
        </h1>
        <div className="font-ibm-plex-sans-400 text-sm md:text-xl mb-8 w-full md:w-3/5">
          Jenan Documents Clearing Services provides wide range of government
          services. Browse the services below and reach out to us for services
          given below.
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-x-5 gap-y-8 justify-items-stretch">
          <Link
            href={"/servicedetail/goldenvisa"}
            className="text-sm md:text-2xl font-ibm-plex-sans-600"
          >
            <div className="relative">
              <div className="aspect-square mb-1 md:mb-4">
                <Image
                  className="mb-1 md:mb-4"
                  src="/goldenVisa.jpg"
                  alt="Golden Visa"
                  priority
                  fill
                  sizes="(max-width: 768px) 156px, 400px"
                />
              </div>
            </div>
            <div>UAE Golden Visa</div>
          </Link>
          <Link
            href={"/servicedetail/newbusiness"}
            className="text-sm md:text-2xl font-ibm-plex-sans-600"
          >
            <div className="relative">
              <div className="aspect-square mb-1 md:mb-4">
                <Image
                  src="/newbiztn.jpg"
                  alt="UAE New Business Setup"
                  fill
                  className="mb-1 md:mb-4 rounded-xl"
                  sizes="(max-width: 768px) 156px, 400px"
                />
              </div>
            </div>
            <div>UAE New Business Setup</div>
          </Link>
          <Link
            href={"/servicedetail/touristvisa"}
            className="text-sm md:text-2xl font-ibm-plex-sans-600"
          >
            <div className="relative">
              <div className="aspect-square mb-1 md:mb-4">
                <Image
                  className="mb-1 md:mb-4"
                  src="/touristVisa.jpg"
                  alt="Dubai Tourist Visa"
                  fill
                  sizes="(max-width: 768px) 156px, 400px"
                />
              </div>
            </div>
            <div>Dubai Tourist Visa</div>
          </Link>
          <Link
            href="/servicedetail/familyvisa"
            className="text-sm md:text-2xl font-ibm-plex-sans-600"
          >
            <div className="relative">
              <div className="aspect-square mb-1 md:mb-4">
                <Image
                  className="mb-1 md:mb-4"
                  src="/amer.svg"
                  alt="Family, Parents & Newborn Visa"
                  fill
                  sizes="(max-width: 768px) 156px, 400px"
                />
              </div>
            </div>
            <div>Family, Parents & Newborn Visa</div>
          </Link>
          <Link
            href="/servicedetail/tadbeer"
            className="text-sm md:text-2xl font-ibm-plex-sans-600"
          >
            <div className="relative">
              <div className="aspect-square mb-1 md:mb-4">
                <Image
                  className="mb-1 md:mb-4"
                  src="/ImageDomesticWork.jpg"
                  alt="TADBEER Domestic worker visa UAE"
                  fill
                  sizes="(max-width: 768px) 156px, 400px"
                />
                <img
                  src="/tadbeerlogo.svg"
                  alt="Logo"
                  className="absolute bottom-0 right-0 mx-2 md:mx-4 my-2 md:my-4 w-[65px] h-auto md:w-[131px]"
                />
              </div>
            </div>
            <div>TADBEER Domestic worker visa UAE</div>
          </Link>
          <Link
            href="/servicedetail/tasheel"
            className="text-sm md:text-2xl font-ibm-plex-sans-600"
          >
            <div className="relative">
              <div className="aspect-square mb-1 md:mb-4">
                <Image
                  className="mb-1 md:mb-4"
                  src="/ImageTesheel.jpg"
                  alt="PRO & TAS-HEEL Services"
                  fill
                  sizes="(max-width: 768px) 156px, 400px"
                />
              </div>
            </div>
            <div>PRO & TAS-HEEL Services</div>
          </Link>
          <Link
            href="/servicedetail/legaltranslation"
            className="text-sm md:text-2xl font-ibm-plex-sans-600"
          >
            <div className="relative">
              <div className="aspect-square mb-1 md:mb-4">
                <Image
                  className="mb-1 md:mb-4"
                  src="/ImageLegal.jpg"
                  alt="Legal Translation"
                  fill
                  sizes="(max-width: 768px) 156px, 400px"
                />
              </div>
            </div>
            <div>Legal Translation</div>
          </Link>
          <Link
            href="/servicedetail/mofacertificateattestation"
            className="text-sm md:text-2xl font-ibm-plex-sans-600"
          >
            <div className="relative">
              <div className="aspect-square mb-1 md:mb-4">
                <Image
                  className="mb-1 md:mb-4"
                  src="/MOFA.svg"
                  alt="MOFA Certificate Attestation"
                  fill
                  sizes="(max-width: 768px) 156px, 400px"
                />
              </div>
            </div>
            <div>MOFA Certificate Attestation</div>
          </Link>
        </div>
        <h1 className="text-xl md:text-3xl font-ibm-plex-sans-500 mt-10 md:mt-36 mb-1">
          Foreign visa services
        </h1>
        <div className="font-ibm-plex-sans-500 text-sm md:text-xl mb-8">
          We provide visa services and guidance for many countries, reach us for
          foreign visa services.
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-y-8 gap-x-5">
          <div className="text-sm md:text-2xl font-ibm-plex-sans-600">
            <Image
              className="mb-1.5"
              src="/KSA.svg"
              alt="foreignVisa"
              width={298}
              height={236}
              sizes="(max-width: 768px) 236px, 298px"
            />
            <div className="mx-0.5">Saudi Arabia Visa</div>
          </div>
          <div className="text-sm md:text-2xl font-ibm-plex-sans-600">
            <Image
              className="mb-1.5"
              src="/UK.svg"
              alt="foreignVisa"
              width={298}
              height={236}
              sizes="(max-width: 768px) 236px, 298px"
            />
            <div className="mx-0.5">United Kingdom Visa</div>
          </div>
          <div className="text-sm md:text-2xl font-ibm-plex-sans-600">
            <Image
              className="mb-1"
              src="/EU.svg"
              alt="foreignVisa"
              width={298}
              height={236}
              sizes="(max-width: 768px) 236px, 298px"
            />
            <div className="mx-0.5">Schengen Visa</div>
          </div>
          <div className="text-sm md:text-2xl font-ibm-plex-sans-600">
            <Image
              className="mb-1.5"
              src="/Turkey.svg"
              alt="foreignVisa"
              width={298}
              height={236}
              sizes="(max-width: 768px) 236px, 298px"
            />
            <div className="mx-0.5">Turkey Visa</div>
          </div>
        </div>

        <h1 className="text-xl md:text-3xl font-ibm-plex-sans-500 mt-10 md:mt-36 mb-1">
          Other Services
        </h1>
        <div className="font-ibm-plex-sans-500 text-sm md:text-xl mb-8">
          In addition to above service we also provide the below services
        </div>
        <List
          items={[
            "Bank Account Assistance",
            "UAE Green Visa",
            "Company Liquidation",
            "Auditors Services",
            "UAE Employment Visa",
            "Dubai Health Authority",
            "Corporate Tax Registration",
            "UAE Freelance Visa",
            "Economic Department Services",
            "Trade License Renewal",
            "UAE Retirement Visa",
            "Land Department Services",
          ]}
          numColumns={3}
        />

        <h1 className="text-xl md:text-3xl font-ibm-plex-sans-500 mt-10 md:mt-36 mb-1">
          Get in touch
        </h1>
        <div className="font-ibm-plex-sans-500 text-sm md:text-xl mb-8">
          Contact us for your inquiries and we will respond back within hours.
        </div>
        <Info />
      </div>
    </React.Fragment>
  );
}
