import HeroCarousel from "../components/Microsite/HeroCarousel";
import EnquiryForm from "../components/Microsite/EnquiryForm";
import AmenitiesSection from "../components/Microsite/AmenitiesSection";
import Specifications from "../components/Microsite/Specifications";
import LocationSection from "../components/Microsite/LocationSection";
import AboutSection from "../components/Microsite/AboutSection";
import FAQSection from "../components/Microsite/FAQSection";
import ReraCertificate from "../components/Microsite/ReraCertificate";

export default function MythriSankalp() {
    return (
        <main>
            <section className="position-relative p-0">
                <HeroCarousel />
                <div className="container position-absolute top-50 end-0 translate-middle-y z-3">
                    <EnquiryForm />
                </div>
            </section>
            <AboutSection />
            <AmenitiesSection />
            <Specifications />
            <LocationSection />
            <FAQSection />
            <ReraCertificate />
        </main>
    );
}
