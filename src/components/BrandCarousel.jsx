import React, { useRef, useEffect, useState } from 'react';

const BrandCarousel = () => {
    const scrollRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(0);

    const brands = [
        { name: 'Audi', src: 'https://upload.wikimedia.org/wikipedia/commons/9/92/Audi-Logo_2016.svg' },
        { name: 'BMW', src: 'https://upload.wikimedia.org/wikipedia/commons/4/44/BMW.svg' },
        { name: 'Mercedes', src: 'https://upload.wikimedia.org/wikipedia/commons/9/90/Mercedes-Logo.svg' },
        { name: 'Volkswagen', src: 'https://upload.wikimedia.org/wikipedia/commons/6/6d/Volkswagen_logo_2019.svg' },
        { name: 'Porsche', src: 'https://cdn.worldvectorlogo.com/logos/porsche-6.svg' },
        { name: 'Land Rover', src: 'https://upload.wikimedia.org/wikipedia/en/9/9f/Land_Rover_logo_black.svg' },
        { name: 'Jaguar', src: 'https://cdn.worldvectorlogo.com/logos/jaguar-cars.svg' },
        { name: 'Volvo', src: 'https://upload.wikimedia.org/wikipedia/commons/2/29/Volvo-Iron-Mark-Black.svg' },
        // Performance logos
        { name: 'S-Line', src: 'https://upload.wikimedia.org/wikipedia/commons/3/36/S-Line_logo.svg', isSmall: true },
        { name: 'M', src: 'https://upload.wikimedia.org/wikipedia/commons/f/f8/BMW_M_logo.svg', isSmall: true },
        { name: 'AMG', src: 'https://logos-world.net/wp-content/uploads/2021/03/AMG-Logo.png', isSmall: true },
    ];

    const handleScroll = () => {
        if (scrollRef.current) {
            const container = scrollRef.current;
            const center = container.scrollLeft + container.offsetWidth / 2;

            let minDistance = Infinity;
            let closestIndex = 0;

            Array.from(container.children).forEach((child, index) => {
                const childCenter = child.offsetLeft + child.offsetWidth / 2;
                const distance = Math.abs(center - childCenter);

                if (distance < minDistance) {
                    minDistance = distance;
                    closestIndex = index;
                }
            });

            setActiveIndex(closestIndex);
        }
    };

    useEffect(() => {
        const container = scrollRef.current;
        if (container) {
            container.addEventListener('scroll', handleScroll);

            // Mobile: Scroll to BMW on mount
            const bmwIndex = brands.findIndex(b => b.name === 'BMW');
            if (bmwIndex !== -1 && window.innerWidth < 768) {
                // Calculate position: index * (itemWidth + gap)
                // itemWidth = 80px (w-20), gap = 24px (gap-6) -> 104px
                const scrollPos = bmwIndex * 104;
                setTimeout(() => {
                    container.scrollTo({ left: scrollPos, behavior: 'smooth' });
                }, 100);
            } else {
                handleScroll();
            }
        }
        return () => {
            if (container) {
                container.removeEventListener('scroll', handleScroll);
            }
        };
    }, []);

    return (
        <div className="relative w-full">
            <style>
                {`
                .hide-scrollbar::-webkit-scrollbar {
                    display: none;
                }
                .hide-scrollbar {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
                `}
            </style>
            <div
                ref={scrollRef}
                className="
                    flex items-center gap-6 overflow-x-auto 
                    py-8 hide-scrollbar snap-x snap-mandatory 
                    px-[calc(50%-2.5rem)]
                    
                    md:justify-center md:overflow-visible md:snap-none md:px-0 md:gap-4
                "
                style={{ scrollBehavior: 'smooth' }}
            >
                {brands.map((brand, index) => {
                    const isActive = index === activeIndex;
                    // Mobile: Scale effect. Desktop: Hover effect only.
                    const mobileClasses = `flex-shrink-0 transition-all duration-500 ease-out transform ${isActive ? 'scale-150 z-10' : 'scale-100'} snap-center`;
                    const desktopClasses = `md:transform-none md:scale-100 md:hover:scale-110 md:transition-transform md:duration-300`;

                    return (
                        <div
                            key={index}
                            className={`${mobileClasses} ${desktopClasses}`}
                        >
                            <div className={`
                                bg-white rounded-full shadow-lg border border-gray-100
                                w-20 h-20 flex items-center justify-center p-2
                                ${isActive ? 'shadow-2xl ring-2 ring-accent/10' : 'shadow-sm'}
                                md:shadow-md md:hover:shadow-xl md:ring-0
                            `}>
                                <img
                                    src={brand.src}
                                    alt={brand.name}
                                    className="w-full h-full object-contain p-1"
                                    onError={(e) => {
                                        e.target.style.display = 'none';
                                        const fallback = e.target.parentNode.querySelector('.brand-fallback');
                                        if (fallback) fallback.style.display = 'flex';
                                    }}
                                />
                                <div className="brand-fallback hidden w-full h-full items-center justify-center text-center">
                                    <span className="font-bold text-gray-800 text-[10px] leading-tight">
                                        {brand.name}
                                    </span>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default BrandCarousel;
