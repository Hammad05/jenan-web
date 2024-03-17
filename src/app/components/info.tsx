import Image from "next/image";

export default function Info() {
    return <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6">
        <div className="p-10 bg-card rounded-3xl">
            <p className="text-32px font-ibm-plex-sans-600">Asif Leghari</p>
            <p className="text-2xl font-ibm-plex-sans-400 mt-1 mb-12">Managing Director | Executive Consultant</p>
            <div className="flex flex-col gap-4">
                <div className="flex flex-row items-center gap-4">
                    <span className="material-symbols-outlined text-32px">
                        call
                    </span>
                    <div>
                        <p className="font-ibm-plex-sans-400">Mobile</p>
                        <p className="text-lg font-ibm-plex-sans-600">+971 55 796 7733</p>
                    </div>
                </div>
                <div className="flex flex-row items-center gap-4">
                    <span className="material-symbols-outlined text-32px">
                        deskphone
                    </span>
                    <div>
                        <p className="font-ibm-plex-sans-400">Phone</p>
                        <p className="text-lg font-ibm-plex-sans-600">+971 4 266 5806</p>
                    </div>
                </div>
                <div className="flex flex-row items-center gap-4">
                    <span className="material-symbols-outlined text-32px">
                        drafts
                    </span>
                    <div>
                        <p className="font-ibm-plex-sans-400">Email</p>
                        <p className="text-lg font-ibm-plex-sans-600">asif@jenandocuments.ae</p>
                    </div>
                </div>
                <div className="flex flex-row items-center gap-4">
                    <span className="material-symbols-outlined text-32px">
                        pin_drop
                    </span>
                    <div>
                        <p className="font-ibm-plex-sans-400">Office</p>
                        <p className="text-lg font-ibm-plex-sans-600">Office No# 44, Al Fahidi St, Dubai UAE</p>
                    </div>
                </div>
                <div className="flex flex-row items-center gap-4">
                    <span className="material-symbols-outlined text-32px">
                        captive_portal
                    </span>
                    <div>
                        <p className="font-ibm-plex-sans-400">Website</p>
                        <p className="text-lg font-ibm-plex-sans-600">www.jenandocuments.ae</p>
                    </div>
                </div>
            </div>
        </div>
        <div className=" bg-card rounded-3xl">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3608.274976582719!2d55.29546337521356!3d25.261333777669776!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2bf069c2cccc46a1%3A0x5280a8e796bd5a8c!2sJenan%20Documents%20Clearing%20Services!5e0!3m2!1sen!2sae!4v1710621181805!5m2!1sen!2sae"
                width="100%"
                height="574"
                style={{ border: 0, borderRadius: "24px" }}
                allowFullScreen
                loading="lazy"
            ></iframe>
        </div>
        <div className="bg-card rounded-3xl h-[574px]">
            <img src="/ImagejdcFooter.svg" alt="Jenan Documents Clearing Services" className="w-full h-full object-cover rounded-3xl object-right-top" />
        </div>
        <div className="py-8 px-8 bg-card rounded-3xl">
            <p className="text-32px font-ibm-plex-sans-600">Jenan Documents Clearing Services</p>
            <p className="font-ibm-plex-sans-600">About JDC</p>
            <p className="font-ibm-plex-sans-400">our trusted partner in navigating the intricate landscape of documents clearing services and government-related processes. Our mission is to simplify the often complex and time-consuming procedures, allowing you to focus on what truly matters – achieving your goals.</p>
            <p className="font-ibm-plex-sans-600">Our Services</p>
            <p className="font-ibm-plex-sans-400">we specialize in a comprehensive range of documents clearing services and government-related solutions tailored to meet your unique needs. Whether you are an individual, a business entity, or a non-profit organization, our dedicated team is committed to providing efficient, reliable, and transparent services.</p>
            <p className="font-ibm-plex-sans-400">
                <li>
                    <span className="font-ibm-plex-sans-600">Expertise</span> Benefit from our team's in-depth knowledge of both documents clearing and government processes.
                </li>
                <li>
                    <span className="font-ibm-plex-sans-600">Efficiency</span> We prioritize efficiency to streamline your experience, saving you time and resources.
                </li>
                <li>
                    <span className="font-ibm-plex-sans-600">Comprehensive Solutions</span> Whether you need assistance with documentation or government compliance, we offer a holistic approach to meet your unique needs.
                </li>
            </p>
        </div>
    </div>
}
