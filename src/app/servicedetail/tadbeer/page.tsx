import List from "../../components/list";
import PageTitle from "../../components/pagetitle";

export default function Tadbeer() {
  return (
    <div>
      <PageTitle
        title="Tadbeer Domestic Worker Visa UAE"
        image="/tadbeerdetails.svg"
      />
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
          Domestic Worker or TADBEER Visa Service
        </p>
        <p className="md:text-xl font-ibm-plex-sans-400">
          Known as a domestic worker visa or a TADBEER visa, is part of a
          government service called the TADBEER program which aims to facilitate
          both workers and employers in the UAE. The service also looks to
          ensure that the welfare of the domestic worker is guaranteed of their
          rights.
        </p>
        <p className="text-2xl md:text-32px font-ibm-plex-sans-400 mt-8 mb-6">
          In general, the rules to qualify for hiring a live-in full time maid
          are:
        </p>
        <List
          items={[
            "An affidavit from the embassy or consulate of non-relationship, if the maid is from the same country",
            "Sponsor's monthly salary should be more than 25,000 AED",
            "Only families may hire a maid; bachelors may not hire a maid",
            "Sponsor should have a valid UAE residence visa",
            "Sponsor cannot hire a relative",
          ]}
          numColumns={1}
        ></List>
      </div>
    </div>
  );
}
