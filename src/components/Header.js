import { Fragment, useState } from 'react'
import Image from 'next/image';
import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react'
import {
    Bars3Icon,
    XMarkIcon,
    PencilIcon,
    AcademicCapIcon,
    CogIcon,
    ViewColumnsIcon,
    ComputerDesktopIcon
} from '@heroicons/react/24/outline'
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid'
import Link from 'next/link';

const features = [
    {
        name: 'OpenGL Rendering API',
        description: 'Harness OpenGL for high-performance graphics, enabling smooth rendering of complex 2D simulations with superior visual quality.',
        icon: ComputerDesktopIcon
    },
    {
        name: 'glfw Window Manager',
        description: 'Utilize glfw for efficient window management and user input across multiple platforms, ensuring seamless interaction.',
        icon: ViewColumnsIcon
    },
    {
        name: 'Box2D Physics Engine',
        description: 'Apply Box2D for accurate physics simulations, bringing realistic dynamics and interactions to virtual environments.',
        icon: CogIcon
    },
    {
        name: 'Interactive Learning Modules',
        description: 'Engage users with hands-on modules, making complex physics concepts accessible through interactive exploration.',
        icon: AcademicCapIcon
    },
    {
        name: 'Custom Simulation Design',
        description: 'Empower users to design their simulations, fostering creativity and personalized learning experiences.',
        icon: PencilIcon
    }
];

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Header({ teamRef }) {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <header className="bg-white w-full">
            <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
                <div className="flex lg:flex-1">
                    <Link href="/" className="-m-1.5 p-1.5">
                        <span className="sr-only">2D Dynamic Simulation</span>
                        <div className="relative h-[45px] w-[45px] rounded-full overflow-hidden inline-block ring-2 ring-white">
                            <Image
                                src="/assets/text_logo.png"
                                alt="Dynamic 2D"
                                layout="fill"
                                objectFit="cover"
                            />
                        </div>
                    </Link>
                </div>

                <div className="flex lg:hidden">
                    <button
                        type="button"
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                        onClick={() => setMobileMenuOpen(true)}
                    >
                        <span className="sr-only">Open main menu</span>
                        <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                    </button>
                </div>

                <Popover.Group className="hidden lg:flex lg:gap-x-12">
                    <Popover className="relative">
                        <Popover.Button className="flex focus-visible:outline-none items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900">
                            Features
                            <ChevronDownIcon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
                        </Popover.Button>

                        <Transition
                            as={Fragment}
                            enter="transition ease-out duration-200"
                            enterFrom="opacity-0 translate-y-1"
                            enterTo="opacity-100 translate-y-0"
                            leave="transition ease-in duration-150"
                            leaveFrom="opacity-100 translate-y-0"
                            leaveTo="opacity-0 translate-y-1"
                        >
                            <Popover.Panel className="absolute right-0 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                                <div className="p-4">
                                    {features.map((item) => (
                                        <div
                                            key={item.name}
                                            className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                                        >
                                            <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                                                <item.icon className="h-6 w-6 text-gray-600 group-hover:text-indigo-600" aria-hidden="true" />
                                            </div>
                                            <div className="flex-auto">
                                                <div href={item.href} className="block font-semibold text-gray-900">
                                                    {item.name}
                                                    <span className="absolute inset-0" />
                                                </div>
                                                <p className="mt-1 text-gray-600">{item.description}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </Popover.Panel>
                        </Transition>
                    </Popover>

                    <button onClick={() => teamRef.current.scrollIntoView({ behavior: "smooth" })} className="text-sm font-semibold leading-6 text-gray-900">
                        About
                    </button>
                </Popover.Group>
            </nav>
            <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
                <div className="fixed inset-0 z-10" />
                <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                    <div className="flex items-center justify-between">
                        <a href="#" className="-m-1.5 p-1.5">
                            <span className="sr-only">2D Dynamic Simulation</span>
                            <div className="relative h-[45px] w-[45px] rounded-full overflow-hidden inline-block ring-2 ring-white">
                                <Image
                                    src="/assets/text_logo.png"
                                    alt="Dynamic 2D"
                                    layout="fill"
                                    objectFit="cover"
                                />
                            </div>
                        </a>
                        <button
                            type="button"
                            className="-m-2.5 rounded-md p-2.5 text-gray-700"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            <span className="sr-only">Close menu</span>
                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                        </button>
                    </div>
                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-gray-500/10">
                            <div className="space-y-2 py-6">
                                <Disclosure as="div" className="-mx-3">
                                    {({ open }) => (
                                        <>
                                            <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                                                Features
                                                <ChevronDownIcon
                                                    className={classNames(open ? 'rotate-180' : '', 'h-5 w-5 flex-none')}
                                                    aria-hidden="true"
                                                />
                                            </Disclosure.Button>
                                            <Disclosure.Panel className="mt-2 space-y-2">
                                                {[...features].map((item) => (
                                                    <div
                                                        key={item.name}
                                                        as="a"
                                                        href={item.href}
                                                        className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                                    >
                                                        {item.name}
                                                    </div>
                                                ))}
                                            </Disclosure.Panel>
                                        </>
                                    )}
                                </Disclosure>
                                <button onClick={() => {
                                    teamRef.current.scrollIntoView({ behavior: "smooth" })
                                    setMobileMenuOpen(false)
                                }} className="w-full text-left rounded-lg text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                                    About
                                </button>
                            </div>
                        </div>
                    </div>
                </Dialog.Panel>
            </Dialog>
        </header >
    )
}