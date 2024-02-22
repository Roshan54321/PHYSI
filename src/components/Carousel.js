import React, { useState } from "react";
import Carousel from "framer-motion-carousel";

export default function VideoCarousel() {

    const items = [
        {
            src: "/assets/videos/pulley.ogv"
        },
        {
            src: "/assets/videos/spring.ogv"
        },
    ]

    return (
        <div className="relative w-full bg-white" >
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <h2 className="text-3xl mb-10 font-bold tracking-tight text-gray-900 sm:text-4xl">
                    Experimental Setup
                </h2>
                <Carousel autoPlay={false}>
                    {
                        items.map((item, i) =>
                            <video key={i} className="" controls>
                                <source className="transition-all" src={item.src} type="video/ogg" />
                                The browser does not support the video.
                            </video>
                        )
                    }
                </Carousel>
            </div>

        </div>
    );
}