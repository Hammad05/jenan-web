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
          Eligible Categories
        </p>
        <List
          items={[
            "Parent",
            "New Born Baby",
            "Siblings",
            "Spouse",
            "Father in law",
            "Children",
            "Mother in law",
          ]}
          numColumns={3}
        ></List>
        <p className="text-2xl md:text-32px font-ibm-plex-sans-600 mt-8 mb-6">
          Family Visa in Dubai
        </p>
        <p className="md:text-xl font-ibm-plex-sans-400 mt-8 mb-6">
          Do you want to sponsor your family to live with you in UAE? You can do
          so by applying for a Dubai family visa. This visa is different from a
          tourist or work visa, allowing you to stay in Dubai with your family
          called 2 years residence visa.
          <br />
          <br />
          Let us help you make the process stress-free and efficient, allowing
          you to reunite with your loved ones.
        </p>
        <p className="text-2xl md:text-32px font-ibm-plex-sans-600 mt-8 mb-6">
          Residency Visa for Newborn Baby in Dubai
        </p>
        <p className="md:text-xl font-ibm-plex-sans-400 mt-8 mb-6">
          To obtain the Residency Visa for New Born Baby in Dubai you must apply
          within 120 days of the child&apos;s birth. If you failed to do it
          within 120 days, then you have to pay a fine of AED 50 per day for
          immigration and AED 20 per day for Emirates ID.
        </p>
        <p className="text-2xl md:text-32px font-ibm-plex-sans-400 mt-8 mb-6">
          Documents Requirements for Newborn Baby
        </p>
        <List
          items={[
            "Father Clear Scan Passport & Visa Copy",
            "Mother Clear Scan passport & Visa Copy",
            "Baby’s Birth Certificate Copy",
            "Baby’s photo (eyes open and white background)",
            "Baby Clear Scan Passport Copy",
            "Father Emirates ID Card Copy",
          ]}
          numColumns={1}
        />
      </div>
    </div>
  );
}
