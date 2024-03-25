import List from "../components/list";
import PageTitle from "../components/pagetitle";

export default function TouristVisa() {
  return (
    <div>
      <PageTitle
        title="Dubai Tourist Visa"
        image="/touristvisadetails.jpg"
        imageClasses="object-top-right md:object-center"
      />
      <div className="px-[var(--layout-padding-md)] md:px-0">
        <p className="text-2xl md:text-32px font-ibm-plex-sans-400 mt-8 mb-6">
          Documents requirement for applying for UAE Tourist/ Visit visa:
        </p>
        <List
          items={["Passport copy", "Passport size photograph"]}
          numColumns={2}
        />
        <p className="text-2xl md:text-32px font-ibm-plex-sans-400 mt-8 mb-6">
          Dubai tourist visa services
        </p>
        <p className="font-ibm-plex-sans-400 md:text-xl mb-8">
          Applying Dubai tourist visa or UAE visit visa has been easy as
          everything can be done sitting at home.
        </p>
        <p className="text-2xl md:text-32px font-ibm-plex-sans-600 mt-8">
          96 Hours Transit visa
        </p>
        <p className="md:text-xl font-ibm-plex-sans-400 mt-6 mb-8">
          Transit visas for the UAE are not hard to get but the regulations and
          requirements are specific enough to require that you plan well in
          advance in case you want to get out of the airport.
        </p>
        <p className="text-2xl md:text-32px font-ibm-plex-sans-600 mt-12">
          14 Days UAE Visa
        </p>
        <p className="md:text-xl font-ibm-plex-sans-400 mt-6 mb-8">
          This type of visa is recommended for visitors planning for a short
          stay in Dubai or UAE for Trips, Meetings, Conferences or Transit stay.
          The requirements for obtaining this tourist visa for Dubai vary
          depending on your nationality.
        </p>
        <p className="text-2xl md:text-32px font-ibm-plex-sans-600 mt-12">
          30 Days UAE Visa
        </p>
        <p className="md:text-xl font-ibm-plex-sans-400 mt-6 mb-8">
          For those people who want to take a short trip to UAE to catch up with
          your family or friends, the tourist visa valid for 30 days will be an
          ideal option for you. The whole process for 30 days UAE/Dubai visit
          visa will be 2-3 working days.
        </p>
        <p className="text-2xl md:text-32px font-ibm-plex-sans-600 mt-12">
          60 Days UAE Visa
        </p>
        <p className="md:text-xl font-ibm-plex-sans-400 mt-6 mb-8">
          60 days UAE visa has been introduced for visitors to UAE. Now visitors
          have 30 and 60 days visa for their stay in UAE. The visa can be
          further extended for 30 and 60 days without exiting the country.
        </p>
        <p className="text-2xl md:text-32px font-ibm-plex-sans-600 mt-12">
          30 Days Multiple Entry UAE Visa
        </p>
        <p className="md:text-xl font-ibm-plex-sans-400 mt-6 mb-8">
          The multiple entry visa for 30 days is of great value to businessmen
          who would like to travel within the GCC or even to other countries in
          the world.
        </p>
        <p className="text-2xl md:text-32px font-ibm-plex-sans-600 mt-12">
          60 Days Multiple Entry UAE Visa
        </p>
        <p className="md:text-xl font-ibm-plex-sans-400 mt-6 mb-8">
          60 days multiple entry visa has been introduced by UAE. The applicants
          can now avail 60 days multiple entry visa and they can exit and enter
          as many times in this 60 days period.
        </p>
        <p className="text-2xl md:text-32px font-ibm-plex-sans-600 mt-12">
          90 Days Multiple Entry UAE Visa
        </p>
        <p className="md:text-xl font-ibm-plex-sans-400 mt-6">
          90 days UAE leisure visa is now available. The process takes bit
          longer than usual tourist visa. 90 days visa has been recently
          introduced which allows travellers to stay inside country for 90 days.
        </p>
      </div>
    </div>
  );
}
