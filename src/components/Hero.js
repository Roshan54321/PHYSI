import React from 'react'

export default function Hero() {
    return (
        <div className="bg-white py-10 lg:py-32">
            <div className="relative mx-auto max-w-7xl px-6 lg:px-8 bg-white sm:px-6">
                <div className="relative">
                    <div className="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-8 lg:items-center">
                        <div className="ml-auto lg:max-w-2xl">
                            <h4 className="mt-2 text-3xl font-extrabold leading-8 text-gray-900 sm:text-4xl sm:leading-9 lg:leading-[55px] lg:text-5xl text-center lg:text-left">
                                DYNAMIC SIMULATION OF 2D STATIC PHYSICAL SYSTEM
                            </h4>
                            <p className="mt-4 text-base sm:text-lg leading-6 text-gray-500 text-center lg:text-left">
                                Transforming static objects into interactive simulations, our project opens new doors for educational and research applications by making complex systems easily understandable and visually engaging.
                            </p>
                            <ul className="gap-6 mt-8 md:grid md:grid-cols-2 hidden">
                                <li className="mt-6 lg:mt-0">
                                    <div className="flex">
                                        <span className="flex items-center justify-center flex-shrink-0 w-6 h-6 text-green-800 bg-green-100 rounded-full">
                                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                                            </svg>
                                        </span>
                                        <span className="ml-4 text-base font-medium leading-6 text-gray-500">
                                            Real-time Physics Interaction
                                        </span>
                                    </div>
                                </li>
                                <li className="mt-6 lg:mt-0">
                                    <div className="flex">
                                        <span className="flex items-center justify-center flex-shrink-0 w-6 h-6 text-green-800 bg-green-100 rounded-full">
                                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                                            </svg>
                                        </span>
                                        <span className="ml-4 text-base font-medium leading-6 text-gray-500">
                                            Interactive Learning Modules
                                        </span>
                                    </div>
                                </li>
                                <li className="mt-6 lg:mt-0">
                                    <div className="flex">
                                        <span className="flex items-center justify-center flex-shrink-0 w-6 h-6 text-green-800 bg-green-100 rounded-full">
                                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                                            </svg>
                                        </span>
                                        <span className="ml-4 text-base font-medium leading-6 text-gray-500">
                                            Comprehensive Support Documentation
                                        </span>
                                    </div>
                                </li>
                                <li className="mt-6 lg:mt-0">
                                    <div className="flex">
                                        <span className="flex items-center justify-center flex-shrink-0 w-6 h-6 text-green-800 bg-green-100 rounded-full">
                                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                                            </svg>
                                        </span>
                                        <span className="ml-4 text-base font-medium leading-6 text-gray-500">
                                            Tools for Enhanced Collaboration
                                        </span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="relative mt-16 lg:-mx-4 relative-20 lg:mt-0 flex justify-center">
                            <div className="relative space-y-4">
                                <div className="flex items-end justify-center space-x-4 lg:justify-start">
                                    <img className="w-32 rounded-lg shadow-lg md:w-56" src="/assets/sim_1.png" alt="Project Image 1" />
                                    <img className="w-40 rounded-lg shadow-lg md:w-64" src="/assets/sim_2.png" alt="Project Image 2" />
                                </div>
                                <div className="flex items-start justify-center ml-12 space-x-4 lg:justify-start">
                                    <img className="w-24 rounded-lg shadow-lg md:w-40" src="/assets/sim_3.png" alt="Project Image 3" />
                                    <img className="w-32 rounded-lg shadow-lg md:w-56" src="/assets/sim_4.png" alt="Project Image 4" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
