import React from 'react'

export default function Timeline() {
    return (
        <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                    Project Development Timeline
                </h2>
                <ol className="mt-10 relative border-l border-gray-200">
                    <li className="mb-10 ml-4">
                        <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white"></div>
                        <time className="mb-1 text-sm font-normal leading-none text-gray-400">April 2023</time>
                        <h3 className="text-lg font-semibold text-gray-900">Project Initiation</h3>
                        <p className="mb-4 text-base font-normal text-gray-500">Conceptualization and initial design of the dynamic 2D simulation engine for static physical systems.</p>
                    </li>
                    <li className="mb-10 ml-4">
                        <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900"></div>
                        <time className="mb-1 text-sm font-normal leading-none text-gray-400">May 2023</time>
                        <h3 className="text-lg font-semibold text-gray-900">Development Phase</h3>
                        <p className="text-base font-normal text-gray-500">Began coding the simulation engine using OpenGL, glfw, and Box2D for physics simulations.</p>
                    </li>
                    <li className="mb-10 ml-4">
                        <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                        <time className="mb-1 text-sm font-normal leading-none text-gray-400">September 2023</time>
                        <h3 className="text-lg font-semibold text-gray-900">First Prototype</h3>
                        <p className="mb-4 text-base font-normal text-gray-500">Completed the first functional prototype capable of transforming static images into dynamic simulations.</p>
                    </li>
                    <li className="ml-4">
                        <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                        <time className="mb-1 text-sm font-normal leading-none text-gray-400">February 2023</time>
                        <h3 className="text-lg font-semibold text-gray-900">Testing and Refinement</h3>
                        <p className="text-base font-normal text-gray-500">Initiated extensive testing and refinement processes, focusing on enhancing computational efficiency and visual fidelity.</p>
                    </li>
                </ol>
            </div>
        </div>
    )
}
