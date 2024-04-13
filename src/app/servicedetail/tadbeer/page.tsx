import Image from "next/image";
import List from "../../components/list";
import PageTitle from "../../components/pagetitle";

export default function Tadbeer() {
  return (
    <div>
      <div className="relative">
        <PageTitle
          title="Tadbeer Domestic Worker Visa UAE"
          image="/tadbeerdetails.svg"
        />
        <img src="/tadbeerlogo.svg" alt="Logo" className="absolute bottom-0 right-0 mx-4 my-4 w-[65px] h-[66px] md:w-[131px] md:h-[132px]" />
      </div>
      <div className="px-[var(--layout-padding-md)] md:px-0">
        <p className="text-2xl md:text-32px font-ibm-plex-sans-400 mt-8 mb-6">
          Types of Domestic Worker Visa in UAE
        </p>
        <List
          items={[
            "Maid Visa",
            "Nanny Visa",
            "Babysitter Visa",
            "Personal Driver Visa",
          ]}
          numColumns={4}
        />
        <p className="text-2xl md:text-32px font-ibm-plex-sans-400 mt-8 mb-6">
          What is domestic worker visa in UAE?
        </p>
        <p className="md:text-xl font-ibm-plex-sans-400">
          Also known as a domestic worker visa or a TADBEER visa, is part of a government service called the TADBEER program which aims to facilitate both workers and employers in the UAE. The service also looks to ensure that the welfare of the domestic worker is guaranteed of their rights.
        </p>
        <p className="md:text-xl font-ibm-plex-sans-400 mt-4">
          For a domestic worker to legally work in the UAE, they must have a resident visa, which can be sponsored by a UAE national or an expatriate resident in UAE. Jenan Documents Clearing Services providing domestic worker visa services, and the approval typically takes around 24 hours.
        </p>
        <p className="text-2xl md:text-32px font-ibm-plex-sans-400 mt-20 mb-6">
          In general, the rules to qualify for hiring a live-in full time maid
          are:
        </p>
        <List
          items={[
            "Sponsor's monthly salary should be more than 25,000 AED",
            "Sponsor cannot hire a relative",
            "Sponsor should have a valid UAE residence visa",
            "Only families may hire a maid; bachelors may not hire a maid",
            "An affidavit from the embassy or consulate of non-relationship, if the maid is from the same country",
          ]}
          numColumns={1}
        ></List>
      </div>
    </div>
  );
}
