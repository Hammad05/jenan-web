import List from "../components/list";
import PageTitle from "../components/pagetitle";

export default function Tasheel() {
  return (
    <div>
      <PageTitle title="PRO & Tasheel Service" image="/tasheeldetails.svg" />
      <div className="px-[var(--layout-padding-md)] md:px-0">
        <p className="text-2xl md:text-32px font-ibm-plex-sans-600 mt-8 mb-6">
          PRO Services
        </p>
        <p className="md:text-xl font-ibm-plex-sans-400">
          At Jenan Group, we boast an expert team equipped with extensive
          knowledge about government rules and legal procedures, ensuring a
          streamlined process for obtaining a license and setting up a business
          in the UAE. Our experts play a significant role in handling Passport
          Clearance, Business Licenses, Immigration, Trademarks, Certification,
          and Copyrights.
        </p>
        <p className="md:text-xl font-ibm-plex-sans-400 mt-8">
          We offer professional support services to interact with Government
          Ministries and Key Stakeholders, obtaining necessary trade license
          approvals, and providing daily operational support, all while granting
          you greater flexibility and assessment to secure effective Business
          Management.
        </p>
        <p className="text-2xl md:text-32px font-ibm-plex-sans-400 mt-8 mb-6">
          Our PRO Services deal with government bodies such as follows:
        </p>
        <List
          items={[
            "UAE Embassy Judicial Courts Authorities",
            "RTA Road & Transport Authority",
            "Chamber of Commerce",
            "Emirates Identity Authority",
            "Immigration & Naturalisation Authority",
            "Dubai Health Authority",
            "Department of Economic Development",
            "Ministry of Labour",
            "General Department for Residency and Foreigners Affairs",
          ]}
          numColumns={2}
        />
        <p className="text-2xl md:text-32px font-ibm-plex-sans-600 mt-14">
          Tas-heel Services
        </p>
        <p className="text-2xl md:text-32px font-ibm-plex-sans-400 mt-10 mb-6">
          Labour Card Services
        </p>
        <List
          items={["New Labour Card and Mission Labour Card Application"]}
          numColumns={1}
        />
        <List
          items={["Modify or Lost Labor Card Application"]}
          numColumns={1}
        />
        <List
          items={[
            "National New Labour Card Application",
            "Sponsorship Transfer",
          ]}
          numColumns={2}
        />
        <p className="text-2xl md:text-32px font-ibm-plex-sans-400 mt-10 mb-6">
          Work Permit Services
        </p>
        <List
          items={[
            "Relative Sponsor Work Permit",
            "Modify Work Permit",
            "Replacement of Work Permit",
            "Establishments",
          ]}
          numColumns={2}
        />
        <p className="text-2xl md:text-32px font-ibm-plex-sans-400 mt-10 mb-6">
          Other Miscellaneous Forms Services
        </p>
        <List items={["Nawakas (Missing) Scanning Documents"]} numColumns={1} />
        <List
          items={["New Labor Application Cancellation", "Online Cancellation"]}
          numColumns={2}
        />
        <List items={["Salary Certificate"]} numColumns={1} />
        <p className="text-2xl md:text-32px font-ibm-plex-sans-400 mt-10 mb-6">
          Company Reports Services
        </p>
        <List
          items={[
            "Company Employee List",
            "Expired Labour Card List",
            "National List",
            "Person Information",
            "Owner Role Information",
          ]}
          numColumns={3}
        />
        <p className="text-2xl md:text-32px font-ibm-plex-sans-400 mt-10 mb-6">
          About Tas-heel
        </p>
        <p className="md:text-xl font-ibm-plex-sans-400">
          Tas-heel is a trademark of the Ministry of Human Resources and
          Emiratisation (MOHRE) aimed at improving the government’s system of
          dealing with labour processes. About 80% of the UAE’s population
          comprises of expats from all over the world. This makes up for an
          increasingly diverse working population that is attracted to the
          tax-free wages and burgeoning work opportunities in UAE.
          <br />
          With the diversity and the ever-increasing numbers of the workforce,
          there was a growing need to streamline the workings and pre-requisites
          of the UAE Labour Law. Tasheel was the outcome of the quest to create
          a comprehensive platform to deal with everything related to employment
          in the UAE.
        </p>
      </div>
    </div>
  );
}
