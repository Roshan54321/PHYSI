import { forwardRef } from "react";
import Image from 'next/image';

const people = [
    {
        name: 'Saroj Baral',
        role: 'Engineering',
        imageUrl:
            '/saroj.jpeg',
    },
    {
        name: 'Sagar Kumar Thapa',
        role: 'Engineering',
        imageUrl:
            '/sagar.jpg',
    },
    {
        name: 'Roshan Neupane',
        role: 'UI/UX | Engineering',
        imageUrl:
            '/roshan.jpg',
    },
]

const Team = forwardRef((props, ref) => {
    return (
        <div ref={ref} className="bg-white py-24 sm:py-32">
            <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
                <div className="max-w-2xl">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Meet our team.</h2>
                    <p className="mt-6 text-lg leading-8 text-gray-600">
                        Discover the innovative minds from Pulchowk Campus, Tribhuvan University, behind our project, &quot;Dynamic Simulation of 2D Static Physical System&quot;. Our dedicated team specializes in transforming static images into dynamic simulations, blending technical skill and creativity to revolutionize educational experiences.
                    </p>
                </div>
                <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
                    {people.map((person) => (
                        <li key={person.name}>
                            <div className="flex items-center gap-x-6">
                                <div className="relative h-[90px] w-[90px] rounded-full overflow-hidden inline-block ring-2 ring-white">
                                    <Image
                                        src={person.imageUrl}
                                        alt={person.name}
                                        layout="fill"
                                        objectFit="cover"
                                    />
                                </div>
                                <div>
                                    <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">{person.name}</h3>
                                    <p className="text-sm font-semibold leading-6 text-indigo-600">{person.role}</p>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
})

export default Team