'use client';

import Image from 'next/image';

const images = [
    { src: '/icons/Gym.png', title: 'Lounge & Gym' },
    { src: '/icons/lou.webp', title: 'Pool & Deck' },
    { src: '/icons/indoorgames.png', title: 'Indoor/Outdoor Party Areas' },
    { src: '/icons/pool.webp', title: 'Jacuzzi' },
    { src: '/icons/spa.png', title: 'Steam & Sauna' },
    { src: '/icons/Common Library.png', title: 'Library' },
    { src: '/icons/Cafeteria.webp', title: 'Café' },
    { src: '/icons/Yoga.png', title: 'Yoga Room' },
    { src: '/icons/Biliiards.png', title: 'Board Games' },
    { src: '/icons/Biliiards.png', title: 'More' },
];

export default function Clubhouse() {
    return (
        <div className="mb-3">
            <div className="container text-center">
                <div className="row row-cols-2 row-cols-md-5 mb-md-4">
                    {images.map((item, idx) => (
                        <div key={idx} className="col mb-4">
                            <div className="p-3 border rounded-3 shadow-sm bg-white h-100 d-flex flex-column align-items-center justify-content-center amenity-card theme-bg-light">
                                <Image src={item.src} alt={item.title} width={60} height={60} />
                                <p className="small mt-2 text-center theme-color-dark">{item.title}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
