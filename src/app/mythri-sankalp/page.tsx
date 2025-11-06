import HeroCarousel from "../components/Microsite/HeroCarousel";
import EnquiryForm from "../components/Microsite/EnquiryForm";
import AmenitiesSection from "../components/Microsite/AmenitiesSection";
import Specifications from "../components/Microsite/Specifications";
import LocationSection from "../components/Microsite/LocationSection";

export default function MythriSankalp() {
    return (
        <main>
            <section className="position-relative p-0">
                <HeroCarousel />
                <div className="container position-absolute top-50 end-0 translate-middle-y z-3">
                    <EnquiryForm />
                </div>
            </section>
            <AmenitiesSection />
            <Specifications />
        </main>
    );
}
