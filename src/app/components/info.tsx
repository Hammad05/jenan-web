import Image from "next/image";

export default function Info() {
    return <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-6">
        <div className="p-6 md:p-10 bg-card rounded-3xl">
            <div className="text-2xl md:text-32px font-ibm-plex-sans-600">Asif Leghari</div>
            <div className="text-sm md:text-2xl font-ibm-plex-sans-400 mt-1 mb-4 md:mb-12">Managing Director | Executive Consultant</div>
            <div className="flex flex-col gap-3 md:gap-4">
                <div className="flex flex-row items-center gap-4">
                    <span className="material-symbols-outlined text-32px">
                        call
                    </span>
                    <div>
                        <div className="font-ibm-plex-sans-400">Mobile</div>
                        <div className="md:text-lg font-ibm-plex-sans-600">+971 55 796 7733</div>
                    </div>
                </div>
                <div className="flex flex-row items-center gap-4">
                    <span className="material-symbols-outlined text-32px">
                        deskphone
                    </span>
                    <div>
                        <div className="font-ibm-plex-sans-400">Phone</div>
                        <div className="md:text-lg font-ibm-plex-sans-600">+971 4 266 5806</div>
                    </div>
                </div>
                <div className="flex flex-row items-center gap-4">
                    <span className="material-symbols-outlined text-32px">
                        drafts
                    </span>
                    <div>
                        <div className="font-ibm-plex-sans-400">Email</div>
                        <div className="md:text-lg font-ibm-plex-sans-600">asif@jenandocuments.ae</div>
                    </div>
                </div>
                <div className="flex flex-row items-center gap-4">
                    <span className="material-symbols-outlined text-32px">
                        pin_drop
                    </span>
                    <div>
                        <div className="font-ibm-plex-sans-400">Office</div>
                        <div className="md:text-lg font-ibm-plex-sans-600">Office No# 44, Al Fahidi St, Dubai UAE</div>
                    </div>
                </div>
                <div className="flex flex-row items-center gap-4">
                    <span className="material-symbols-outlined text-32px">
                        captive_portal
                    </span>
                    <div>
                        <div className="font-ibm-plex-sans-400">Website</div>
                        <div className="md:text-lg font-ibm-plex-sans-600">www.jenandocuments.ae</div>
                    </div>
                </div>
            </div>
        </div>
        <div className="bg-card rounded-3xl flex justify-center items-center h-[360px] md:h-[574px]">
            <iframe
                title="map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3608.274976582719!2d55.29546337521356!3d25.261333777669776!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2bf069c2cccc46a1%3A0x5280a8e796bd5a8c!2sJenan%20Documents%20Clearing%20Services!5e0!3m2!1sen!2sae!4v1710621181805!5m2!1sen!2sae"
                width="100%"
                height="100%"
                style={{ border: 0, borderRadius: "24px", userSelect: "none", outline: "none" }}
                allowFullScreen
                loading="lazy"
            ></iframe>
        </div>
        <div className="bg-card rounded-3xl h-[360px] md:h-[574px]">
            <img src="/ImagejdcFooter.svg" alt="Jenan Documents Clearing Services" className="w-full h-full object-cover rounded-3xl object-right-top" />
        </div>
        <div className="py-8 px-8 bg-card rounded-3xl">
            <div className="text-xl md:text-32px font-ibm-plex-sans-600">Jenan Documents Clearing Services</div>
            <div className="font-ibm-plex-sans-600 text-sm md:text-base mt-5">About JDC</div>
            <div className="font-ibm-plex-sans-400 text-sm md:text-base">our trusted partner in navigating the intricate landscape of documents clearing services and government-related processes. Our mission is to simplify the often complex and time-consuming procedures, allowing you to focus on what truly matters – achieving your goals.</div>
            <div className="font-ibm-plex-sans-600 text-sm md:text-base mt-5">Our Services</div>
            <div className="font-ibm-plex-sans-400 text-sm md:text-base">we specialize in a comprehensive range of documents clearing services and government-related solutions tailored to meet your unique needs. Whether you are an individual, a business entity, or a non-profit organization, our dedicated team is committed to providing efficient, reliable, and transparent services.</div>
            <div className="font-ibm-plex-sans-400 text-sm md:text-base mt-5">
                <li>
                    <span className="font-ibm-plex-sans-600">Expertise</span> Benefit from our team's in-depth knowledge of both documents clearing and government processes.
                </li>
                <li>
                    <span className="font-ibm-plex-sans-600">Efficiency</span> We prioritize efficiency to streamline your experience, saving you time and resources.
                </li>
                <li>
                    <span className="font-ibm-plex-sans-600">Comprehensive Solutions</span> Whether you need assistance with documentation or government compliance, we offer a holistic approach to meet your unique needs.
                </li>
            </div>
        </div>
    </div>
}
