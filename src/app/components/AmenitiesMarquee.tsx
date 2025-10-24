'use client';

import Image from 'next/image';

const amenities = [
    { icon: '/icons/Landscape Greenery.png', title: 'Acupressure Walkway' },
    { icon: '/icons/Half Basketball Court.png', title: 'Half Basketball Court' },
    { icon: '/icons/CCTV surveillance.png', title: 'CCTV Surveillance' },
    { icon: '/icons/Landscaped Gardens.png', title: 'Landscaped Gardens' },
    { icon: '/icons/Multi-Purpose Court.webp', title: 'Multi Purpose Lawn' },
    { icon: '/icons/pool.webp', title: 'Swimming Pool' },
    { icon: '/icons/Amphitheater.png', title: 'Amphitheater' },
    { icon: '/icons/Seating Area.png', title: 'Sitting Area With Pavillion' },
    { icon: '/icons/Play Area for Kids.png', title: 'Play Area for Kids' },
    { icon: '/icons/elder_s corner.png', title: "Elder's Corner" },
    { icon: '/icons/Water Feature.png', title: 'Gazebos' },
    { icon: '/icons/Event Lawn.png', title: 'Event Lawn' },
    { icon: '/icons/Jogging track.png', title: 'Jogging Tracks' },
    { icon: '/icons/Butterfly Garden.png', title: 'Butterfly Garden' },
    { icon: '/icons/Community Park & Space.png', title: 'Community Park & Space' },
    { icon: '/icons/Clubhouse.png', title: 'Clubhouse' },
    { icon: '/icons/247 security.png', title: '24/7 Security' },
    { icon: '/icons/Devine place.png', title: 'Devine Place' },
    { icon: '/icons/Pickle ball court.png', title: 'Pickle Ball Court' },
    { icon: '/icons/cricketpractice-pitch.webp', title: 'Cricket Pitch' },
    { icon: '/icons/Half through ball court.png', title: 'Half Through Ball Court' },
    { icon: '/icons/Gym.png', title: 'Outdoor Gym' },
];

export default function AmenitiesSection() {
    return (
        <section className="py-0 mb-3 position-relative blog" >
            <div className="container text-center">
                <div className="row g-4 ">
                    {amenities.map((item, idx) => (
                        <div key={idx} className="col-6 col-sm-6 col-md-3 col-lg-2 ">
                            <div className="p-3 border rounded-3 shadow-sm bg-white theme-bg-dark h-100 d-flex flex-column align-items-center justify-content-center amenity-card">
                                <Image src={item.icon} alt={item.title} width={50} height={50} className='white-png' />
                                <p className="small mt-2 text-center theme-color-light">{item.title}</p>
                            </div>
                        </div>
                    ))}
                    {/* <Image
                      width={800}
                      height={200}
                      src="/images/page-2.png"
                      loading="lazy"
                      alt=""
                      className="home-masterplan_img img-fluid bg-transparent mt-3 rounded-3"
                      style={{marginTop:"30px", maxHeight:"475px", objectFit:"cover", objectPosition:"bottom bottom", position:"absolute", opacity:".2"}}
                    /> */}
                </div>
            </div>
        </section>
    );
}
