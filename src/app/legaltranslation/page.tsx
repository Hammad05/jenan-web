import List from "../components/list";
import PageTitle from "../components/pagetitle";

export default function LegalTranslation() {
  return (
    <div>
      <PageTitle
        title="Legal Translation"
        image="/legaltranslationdetails.svg"
      />
      <div className="px-[var(--layout-padding-md)] md:px-0">
        <p className="text-2xl md:text-32px font-ibm-plex-sans-400 mt-8 mb-6">
          Legal Translations
        </p>
        <List
          items={[
            "Education Certificates",
            "Judicial & Court Documents",
            "Birth & Marriage Certificate",
            "Mergers & Acquisitions",
            "Immigration & Visa",
            "Regulatory & Compliance",
            "Legal Documents",
            "Financial Banking",
            "Personal & Family",
            "Litigation & Dispute Resolution",
            "Intelectual Property",
            "Insolvency & Bankruptcy",
            "Contract & Agreements",
            "Employment & Labor",
            "Real Estate & Property",
            "Tax & Customs",
            "Corporate & Commercial",
          ]}
          numColumns={2}
        ></List>
        <p className="text-2xl md:text-32px font-ibm-plex-sans-400 mt-8 mb-6">
          Professional translation center in Dubai for all your needs
        </p>
        <p className="md:text-xl font-ibm-plex-sans-400">
          At Jenan Documents Clearing Company Dubai, we offer a comprehensive
          range of translation services to clients worldwide at competitive
          rates. Each document is translated by a specialist with linguistic
          expertise in the source and target languages, maintaining the accuracy
          and nuance of the translation process. With a dedicated team of
          experts, our translation services in Dubai provide precise and
          specialised translations across a diverse spectrum of industries,
          including medical, technical, and legal translations. We provide legal
          translation services in over 100 languages and dialects and serve all
          document types
        </p>
      </div>
    </div>
  );
}
