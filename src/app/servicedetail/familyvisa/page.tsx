import List from "../../components/list";
import PageTitle from "../../components/pagetitle";

export default function FamilyVisa() {
  return (
    <div>
      <PageTitle
        title="Family, Parents & Newborn Visa"
        image="/familyvisadetails.svg"
      />
      <div className="px-[var(--layout-padding-md)] md:px-0">
        <p className="text-2xl md:text-32px font-ibm-plex-sans-400 mt-8 mb-6">
          You can sponsor residence visa for the below
        </p>
        <div className="md:w-3/4">
          <List
            items={[
              "Parent",
              "New Born Baby",
              "Siblings (Special Cases)",
              "Spouse",
              "Father in law",
              "Children",
              "Mother in law",
            ]}
            numColumns={2}
          ></List>
        </div>
        <p className="text-2xl md:text-32px font-ibm-plex-sans-600 mt-16">
          Family Visa in Dubai
        </p>
        <p className="md:text-xl font-ibm-plex-sans-400 mt-4">
          Do you want to sponsor your family to live with you in UAE? You can do
          so by applying for a Dubai family visa. This visa is different from a
          tourist or work visa, allowing you to stay in Dubai with your family
          called 2 years residence visa.
        </p>
        <p className="text-2xl md:text-32px font-ibm-plex-sans-600 mt-16">
          Spouse Visa
        </p>
        <div className="md:text-xl font-ibm-plex-sans-400 mt-4">
          <p>
            To obtain a spouse visa in the UAE, you need to meet certain
            requirements. Here&apos;s a summary of the key points:
          </p>
          <p className="mt-4">
            <span className="font-ibm-plex-sans-700">Eligibility:</span>
            Expatriate residents can sponsor their spouses if they have a valid
            UAE residence permit and meet the minimum salary requirement of AED
            4,000 or AED 3,000 plus accommodation.
          </p>
          <p className="mt-4">
            <span className="font-ibm-plex-sans-700">Validity:</span> The
            spousal visa is generally valid for two years, and renewal
            conditions are similar to those for a new residence visa.
          </p>
        </div>
        <p className="text-2xl md:text-32px font-ibm-plex-sans-600 mt-16">
          Newborn Visa
        </p>
        <div className="md:text-xl font-ibm-plex-sans-400 mt-4">
          <p>
            For a newborn visa in Dubai, residents have up to 120 days from the
            birth of their child to arrange the necessary documents, which
            include birth certificates, passports, Emirates ID, and visas for
            their newborn babies. If the residence visa is not finalized within
            this period, a fee of AED 50 per day for immigration and AED 20 per
            day Emirates ID will be charged for each day over the 120-day limit,
            and the baby will not be allowed to exit the country.
          </p>
          <p className="mt-4">
            Here are the key steps for registering a newborn and obtaining their
            residence visa:
          </p>
          <ul className="list-disc px-8 mt-4 font-ibm-plex-sans-700">
            <li>Register the child&apos;s birth within 30 days.</li>
            <li>
              Submit the required documents to the hospital or relevant health
              authority.
            </li>
            <li>
              Attested Arabic translated marriage certificate (if in another
              language)
            </li>
            <li>
              Copy and original of both parents&apos; passports and residence
              visas,
            </li>
            <li>Birth notification details from the hospital.</li>
          </ul>
          <p className="mt-4">
            All expatriates must get birth certificates attested by the Ministry
            of Health and Prevention and the Ministry of Foreign Affairs and
            International Cooperation (MOFA)
          </p>
          <p className="text-2xl md:text-32px font-ibm-plex-sans-600 mt-16">
            Parents Visa
          </p>
          <div className="md:text-xl font-ibm-plex-sans-400 mt-4">
            <p>
              In the UAE, a residence visa for parents allows them to live in
              the country, typically sponsored by their children who are UAE
              residents. The visa is granted on a yearly basis regardless of the
              sponsor&apos;s visa duration.
            </p>
            <p className="text-2xl md:text-32px font-ibm-plex-sans-600 mt-16">
              Benefits
            </p>
            <p className="mt-4">
              The benefits of a residence visa in the UAE for parents include:
            </p>
            <ul className="list-disc px-8 mt-4 font-ibm-plex-sans-700">
              <li>
                Opening a bank account: With a residence visa, your parents can
                open and operate their own bank accounts in the UAE.
              </li>
              <li>
                They can access various financial services, such as loans and
                credit facilities.
              </li>
              <li>They are eligible to apply for a UAE driving licence.</li>
              <li>
                They can avail of government health services and apply for
                health insurance.
              </li>
              <li>
                Work and investment: If they wish, they can seek employment or
                invest in businesses in the UAE.
              </li>
              <li>
                Travel convenience: A UAE residence visa may allow for visa-free
                travel to certain destinations, depending on the passport they
                hold.
              </li>
            </ul>
            <p className="mt-4">
              These benefits enhance the quality of life for your parents and
              provide them with greater financial and social independence during
              their stay in the UAE.
            </p>
            <p className="mt-4 mb-4">
              Let us help you make the process stress-free and efficient,
              allowing you to reunite with your loved ones
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
