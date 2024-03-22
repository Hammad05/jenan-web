import List from "../components/list";
import PageTitle from "../components/pagetitle";

export default function Tasheel() {
    return (
        <div>
            <PageTitle title="PRO & Tasheel Service" image="/tasheeldetails.svg" />
            <p className="text-32px font-ibm-plex-sans-400 mt-8 mb-6">PRO Services</p>
            <p className="text-xl font-ibm-plex-sans-400">At Jenan Group, we boast an expert team equipped with extensive knowledge about government rules and legal procedures, ensuring a streamlined process for obtaining a license and setting up a business in the UAE. Our experts play a significant role in handling Passport Clearance, Business Licenses, Immigration, Trademarks, Certification, and Copyrights.</p>
            <p className="text-xl font-ibm-plex-sans-400 mt-8">We offer professional support services to interact with Government Ministries and Key Stakeholders, obtaining necessary trade license approvals, and providing daily operational support, all while granting you greater flexibility and assessment to secure effective Business Management.</p>
            <p className="text-32px font-ibm-plex-sans-400 mt-8 mb-6">Our PRO Services deal with government bodies such as follows:</p>
            <List items={[
                "UAE Embassy Judicial Courts Authorities",
                "RTA Road & Transport Authority",
                "Chamber of Commerce",
                "Emirates Identity Authority",
                "Immigration & Naturalisation Authority",
                "Dubai Health Authority",
                "Department of Economic Development",
                "Ministry of Labour",
                "General Department for Residency and Foreigners Affairs",
            ]} numColumns={2} />
        </div>
    )
}