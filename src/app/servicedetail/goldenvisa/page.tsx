import Image from "next/image";
import PageTitle from "../../components/pagetitle";
import List from "../../components/list";

export default function GoldenVisa() {
  return (
    <div>
      <PageTitle
        title="UAE Golden Visa"
        image="/goldenVisaDetails.svg"
        imageClasses="object-top-right"
      />
      <div className="px-[var(--layout-padding-md)] md:px-0">
        <p className="text-2xl md:text-32px font-ibm-plex-sans-400 mt-8 mb-6">
          Eligible Categories
        </p>
        <List
          items={[
            "Property Owner",
            "Business Partners",
            "Investors",
            "Doctors",
            "Engineers",
            "Managing Directors",
            "Project Managers",
            "Professionals",
            "Graphic & Web Designers",
            "IT Managers",
            "Singers",
          ]}
          numColumns={3}
        ></List>
        <List
          items={[
            "Artists",
            "Students",
          ]}
          numColumns={3}
        ></List>
        <p className="text-2xl md:text-32px font-ibm-plex-sans-400 mt-8 mb-6">
          What is UAE Golden Visa
        </p>
        <p className="md:text-xl font-ibm-plex-sans-400">
          The United Arab Emirates (UAE) has one of the world&apos;s
          fastest-growing economies. It is a popular destination for new
          opportunities for entrepreneurs, investors, and professionals. The
          United Arab Emirates provides an appealing business environment,
          excellent infrastructure, and a high standard of living. The UAE
          Golden Visa is one of the most recent initiatives launched by the UAE
          government to attract investors and entrepreneurs. The UAE Golden
          Visa, introduced in 2019, is a residency visa that allows investors,
          entrepreneurs, and professionals to live and work in the UAE for a
          period of 10 years. Once the ten years are up, the visa can be
          automatically renewed. It grants long-term residency permits in the
          UAE to investors & entrepreneurs, and eligible categories which can be
          extended to their family members.
        </p>
        <p className="text-2xl md:text-32px font-ibm-plex-sans-400 mt-8 mb-6">
          Benefits of UAE Golden Visa
        </p>
        <ul className="flex flex-col gap-6">
          <li className="flex gap-3">
            <span className="material-icons text-2xl text-golden">star</span>
            <span className="md:text-xl font-ibm-plex-sans-400">
              The visa grants individuals a long-term residency permit in the
              UAE, allowing them to live and work in the country for an extended
              period of time. There is no requirement for an employer to sponsor
              the visa.
            </span>
          </li>
          <li className="flex gap-3">
            <span className="material-icons text-2xl text-golden">star</span>
            <span className="md:text-xl font-ibm-plex-sans-400">
              Even if the holder stays outside the UAE for more than six months,
              the residence visa will remain valid.
            </span>
          </li>
          <li className="flex gap-3">
            <span className="material-icons text-2xl text-golden">star</span>
            <span className="md:text-xl font-ibm-plex-sans-400">
              It allows investors and entrepreneurs to establish a base in the
              UAE, gain access to new markets, and network with other investors
              and entrepreneurs in the region.
            </span>
          </li>
          <li className="flex gap-3">
            <span className="material-icons text-2xl text-golden">star</span>
            <span className="md:text-xl font-ibm-plex-sans-400">
              It also allows you to sponsor family members, including your
              spouse and children, parents, regardless of their ages, as well as
              an unlimited number of domestic helpers Visa.
            </span>
          </li>
          <li className="flex gap-3">
            <span className="material-icons text-2xl text-golden">star</span>
            <span className="md:text-xl font-ibm-plex-sans-400">
              It also enables you to obtain the Esaad Card, which provides
              discounts at restaurants, hotels, retail outlets, hospitals and
              pharmacies, clothing brands, salons, and schools, among other
              places.
            </span>
          </li>
        </ul>
        <p className="text-2xl md:text-32px font-ibm-plex-sans-400 mt-8 mb-6">
          Obtaining Golden Visa
        </p>
        <p className="md:text-xl font-ibm-plex-sans-400">
          Obtaining a Golden Visa in the UAE is simple, but applicants must
          understand their eligibility requirements. The assessment for UAE
          Golden Visa eligibility can be a complicated task, but it can be
          simplified with the assistance of Expert team.
        </p>
        <p className="md:text-xl font-ibm-plex-sans-400 mt-8">
          Jenan Documents Clearing Services is a one-stop shop for businesses
          and individuals seeking Business & Home Support Services from other
          businesses and individuals in the UAE.
        </p>
      </div>
    </div>
  );
}
