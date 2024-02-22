import React from 'react'

export default function Footer() {
    return (
        <div>
            <footer className="bg-white text-black p-4 text-center w-full border-t">
                © {new Date().getFullYear()} Pulchowk Campus, Tribhuvan University
            </footer>
        </div>
    )
}
