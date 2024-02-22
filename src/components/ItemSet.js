

export default function ItemSet() {
    return (
        <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                    Item Set in the Experimental Setup
                </h2>
                <div className="mt-10 overflow-x-auto">
                    <table className="mx-auto w-full whitespace-nowrap rounded-lg bg-white divide-y divide-gray-300 overflow-hidden">
                        <thead className="bg-gray-50">
                            <tr className="text-gray-600 text-left">
                                <th className="font-semibold text-sm uppercase px-6 py-4"> Object </th>
                                <th className="font-semibold text-sm uppercase px-6 py-4"> Parameters </th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200 text-black">
                            <tr>
                                <td className="px-6 py-4">Ball</td>
                                <td className="px-6 py-4">Center, Radius, Static/Dynamic</td>
                            </tr>
                            <tr>
                                <td className="px-6 py-4">Block</td>
                                <td className="px-6 py-4">4 vertices, Static/Dynamic</td>
                            </tr>
                            <tr>
                                <td className="px-6 py-4">Ramp</td>
                                <td className="px-6 py-4">3 vertices, Static/Dynamic</td>
                            </tr>
                            <tr>
                                <td className="px-6 py-4">Lever</td>
                                <td className="px-6 py-4">2 vertices, 2 connections</td>
                            </tr>
                            <tr>
                                <td className="px-6 py-4">Pulley</td>
                                <td className="px-6 py-4">2 connections</td>
                            </tr>
                            <tr>
                                <td className="px-6 py-4">Spring</td>
                                <td className="px-6 py-4">2 connections</td>
                            </tr>
                            <tr>
                                <td className="px-6 py-4">Chain</td>
                                <td className="px-6 py-4">2 connections</td>
                            </tr>
                            <tr>
                                <td className="px-6 py-4">Rope</td>
                                <td className="px-6 py-4">2 connections</td>
                            </tr>
                            <tr>
                                <td className="px-6 py-4">Pendulum</td>
                                <td className="px-6 py-4">1 connection</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}