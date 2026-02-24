'use client';
import Image from 'next/image';

export default function MasterPlanSection() {
    const amenities = [
        { text: 'Grand entrance gate', icon: '/icons/Ear Master Plan Icon-06.webp' },
        { text: 'Concrete roads', icon: '/icons/Ear Master Plan Icon-07.webp' },
        { text: 'Street light', icon: '/icons/Ear Master Plan Icon-08.webp' },
        { text: 'Fruit bearing trees on streets', icon: '/icons/Ear Master Plan Icon-05.webp' },
        { text: 'Sewage treatment plant', icon: '/icons/Ear Master Plan Icon-04.webp' },
        { text: 'Water connections to every plot', icon: '/icons/Ear Master Plan Icon-03.webp' },
        { text: 'Sewage connection to every plot', icon: '/icons/Ear Master Plan Icon-01.webp' },
        { text: 'Underground storm water drains', icon: '/icons/Ear Master Plan Icon-09.webp' },
        { text: 'Electricity connection to every plot', icon: '/icons/Ear Master Plan Icon-02.webp' },
        {
            text: 'Rain water recharge pits at every 40 feet on both sides of the road',
            icon: '/icons/Ear Master Plan Icon-10.webp',
        }
    ];

    return (
        <section
            data-w-id="8905ac58-eaf7-356f-bf47-4ad8001e257f"
            className="section_home-masterplan theme-bg-light lifestyle-section py-5"
            id="master-plan"
        >
            <div className="container">
                {/* Section Title */}
                <div className="text-center mb-5">
                    <h2 className="text-color-dark-rainforest theme-color-dark mb-0">
                        Master Plan
                    </h2>
                </div>

                {/* Main Row */}
                <div className="row align-items-center">
                    {/* Left Column - Masterplan Image */}
                    <div className="col-md-6 mb-5">
                        <Image
                            width={600}
                            height={500}
                            src="/images/Eara_masterplan.webp"
                            loading="lazy"
                            alt="Eara Master Plan"
                            className="w-100 rounded-3 shadow-sm"
                        />
                    </div>
                    {/* Right Column - Amenities */}
                    <div className="col-md-6">
                        <div className="row row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-5 justify-content-center">
                            {amenities.map((item, index) => (
                                <div
                                    key={index}
                                    className="col mb-4 d-flex flex-column align-items-center text-center"
                                >
                                    <div
                                        className="amenity-icon mb-2 border rounded-3 shadow-sm bg-white d-flex align-items-center justify-content-center p-3 w-100"
                                        style={{ maxWidth: '120px' }}
                                    >
                                        <Image
                                            src={item.icon}
                                            alt={item.text}
                                            width={100}
                                            height={100}
                                            className="img-fluid"
                                        />
                                    </div>
                                    <div className="amenity-text theme-color-dark fw-semibold mt-2">
                                        {item.text}
                                    </div>
                                </div>
                            ))}
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}
