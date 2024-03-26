import Image from "next/image";
import PageTitle from "../../components/pagetitle";
import List from "../../components/list";

export default function newBusinessSetup() {
  return (
    <div className="container">
      <PageTitle
        title="UAE New Business Setup"
        image="/newBusinessDetails.svg"
      />
      <div className="px-[var(--layout-padding-md)] md:px-0">
        <p className="text-2xl md:text-32px font-ibm-plex-sans-400 mt-8 mb-6">
          Business Setup Solutions
        </p>
        <p className="md:text-xl font-ibm-plex-sans-400">
          The Business Environment in UAE gives you a strong sense of security
          and safety, being an investor&apos;s paradise UAE has a unique
          infrastructure that perfectly watches the international standard. Our
          team understand the current market, changing process and information.
          Jenan Group professional will provide you with best advice regarding
          the setup of your business in UAE. With the guidance of our experts,
          you don&apos;t need to worry about the management of your business
          startup.
        </p>
        <div className="font-ibm-plex-sans-600 text-sm md:text-base mt-5">
          We work closely with all government authorities
        </div>
        <p className="md:text-xl font-ibm-plex-sans-400">
          Incorporating your business in UAE is now easier as we work closely
          with all government authorities
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 mt-5 divide-y divide-x divide-gray border-b border-r border-gray">
          <div className="flex items-center border-l border-t border-gray px-6">
            <Image
              src="/Logo12dubaiEconomy.svg"
              alt="Logo"
              width={200}
              height={154}
            />
          </div>
          <div className="flex items-center px-10 py-8">
            <Image
              src="/Logo04dbxeconomyandtourism.svg"
              alt="Logo"
              width={200}
              height={154}
            />
          </div>
          <div className="flex items-center px-6 py-8">
            <Image src="/Logo06dmcc.svg" alt="Logo" width={200} height={154} />
          </div>
          <div className="flex items-center px-6">
            <Image
              src="/Logo11dbxintfincenter.svg"
              alt="Logo"
              width={200}
              height={154}
            />
          </div>
          <div className="flex items-center justify-center py-8 px-10">
            <Image src="/Logo05shams.svg" alt="Logo" width={64} height={90} />
          </div>
          <div className="flex items-center px-12 py-6">
            <Image src="/Logo09jazfa.svg" alt="Logo" width={200} height={154} />
          </div>
          <div className="flex items-center px-4">
            <Image
              src="/Logo07ajmanfreezone.svg"
              alt="Logo"
              width={200}
              height={154}
            />
          </div>
          <div className="flex items-center px-12 py-8">
            <Image
              src="/Logo10dbxairportfreezone.svg"
              alt="Logo"
              width={200}
              height={154}
            />
          </div>
          <div className="flex items-center px-16 py-8">
            <Image src="/Logo08rakez.svg" alt="Logo" width={200} height={154} />
          </div>
          <div className="flex items-center p-8">
            <Image
              src="/Logo03creativecity.svg"
              alt="Logo"
              width={200}
              height={154}
            />
          </div>
          <div className="flex items-center px-12 py-4">
            <Image
              src="/Logo02shjEcoDept.svg"
              alt="Logo"
              width={200}
              height={154}
            />
          </div>
          <div className="flex items-center px-8 py-4">
            <Image
              src="/Logo01ajmandeptofeconomics.svg"
              alt="Logo"
              width={200}
              height={154}
            />
          </div>
        </div>
        <p className="text-2xl md:text-32px font-ibm-plex-sans-400 mt-8 mb-6">
          We are committed to
        </p>
        <List
          items={[
            "Data Protection",
            "Secure movement of information",
            "Laws compliance updates",
            "100% Transparency",
            "100% Accountability",
          ]}
          numColumns={1}
        />
        <p className="text-2xl md:text-32px font-ibm-plex-sans-400 mt-8 mb-6">
          Let us help you build your dream business
        </p>
        <p className="md:text-xl font-ibm-plex-sans-400">
          Let us help you with UAE company registration and governmental
          documentation. We also provide you excellent customised consulting for
          FREE! Book your consultation with our experts to be advised on the
          various stages of company formation in the UAE. Our consultants ensure
          that you are aware of the intricacies of company registration in Dubai
          UAE. Let us go beyond and act-on your dream business setup.
        </p>
      </div>
    </div>
  );
}