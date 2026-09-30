import React, { useEffect, useState } from 'react';

const BackgroundSlideshow = ({ images, interval = 6500 }) => {
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        if (images.length < 2 || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            return undefined;
        }

        let nextIndex = 1;
        let timeoutId;
        let isCancelled = false;

        const scheduleNext = () => {
            timeoutId = setTimeout(() => {
                const nextImage = new Image();
                let hasAdvanced = false;
                const advance = () => {
                    if (hasAdvanced || isCancelled) {
                        return;
                    }

                    hasAdvanced = true;
                    setActiveIndex(nextIndex);
                    nextIndex = (nextIndex + 1) % images.length;
                    scheduleNext();
                };

                nextImage.onload = advance;
                nextImage.onerror = advance;
                nextImage.src = images[nextIndex];

                if (nextImage.complete) {
                    advance();
                }
            }, interval);
        };

        scheduleNext();

        return () => {
            isCancelled = true;
            clearTimeout(timeoutId);
        };
    }, [images, interval]);

    return (
        <div className="background-slideshow" aria-hidden="true">
            <img
                key={images[activeIndex]}
                className="background-slideshow-image"
                src={images[activeIndex]}
                alt=""
                fetchPriority={activeIndex === 0 ? 'high' : 'low'}
                decoding="async"
            />
        </div>
    );
};

export default BackgroundSlideshow;