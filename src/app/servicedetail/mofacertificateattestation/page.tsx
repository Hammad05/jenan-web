import List from "../../components/list";
import PageTitle from "../../components/pagetitle";

export default function MOFACertificateAttestation() {
  return (
    <div>
      <PageTitle
        title="MOFA Certificate Attestation"
        image="/mofadetails.svg"
      />
      <div className="px-[var(--layout-padding-md)] md:px-0">
        <p className="text-2xl md:text-32px font-ibm-plex-sans-400 mt-8 mb-6">
          Fast, Secure & Affordable Attestation Services in Dubai, Sharjah, Abu
          Dhabi
        </p>
        <List
          items={[
            "Marriage Certificate Attestation",
            "MOFA Attestation",
            "Apostile Service",
            "Degree Certificate Attestation",
            "Commercial Documents Attestation",
            "Birth Certificate Attestation",
            "Worldwide Attestation Service",
          ]}
          numColumns={2}
        />
        <p className="text-2xl md:text-32px font-ibm-plex-sans-400 mt-8 mb-6">
          Documents Attestation in UAE
        </p>
        <p className="md:text-xl font-ibm-plex-sans-400">
          Attestation is a procedure to confirm the validity of the seal and
          signature on documents issued in the UAE or abroad. It is a service
          provided by MOFA in the UAE via by its embassies and consulates
          abroad.
        </p>
        <p className="md:text-xl font-ibm-plex-sans-400 mt-8">
          We have a highly experienced & passionate legalization team for unique
          certificate attestation who provides our services locally and
          globally. We offer the best and most competitive quotes for
          Certificate Attestation, Apostille, UAE Embassy Attestation, and Legal
          Translation services to help drive the success of the requirement,
          whether it is for an employment visa or business setup. We stand for
          excellence and uniqueness. We are happy to be the point of contact for
          all your certificate attestation needs
        </p>
      </div>
    </div>
  );
}
