import Info from "../components/info";

export default function AboutPage() {
  return (
    <div className="px-[var(--layout-padding-md)] md:px-0">
      <h1 className="text-xl md:text-3xl font-ibm-plex-sans-500 md:font-ibm-plex-sans-400 mb-1">
        Contact us
      </h1>
      <p className="font-ibm-plex-sans-400 text-sm md:text-xl mb-8">
        Contact us for your inquiries and we will respond back within hours.
      </p>
      <Info />
    </div>
  );
}
