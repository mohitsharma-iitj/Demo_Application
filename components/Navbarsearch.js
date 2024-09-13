// components/Navbar.js
import React, { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import SearchIcon from '@mui/icons-material/Search'; // Import MUI Search Icon
export default function Navbar({ searchTerm }) {
    const [term, setTerm] = useState(searchTerm || '');
    const router = useRouter();

    const handleSearch = (e) => {
        e.preventDefault();
        if (term.trim()) {
            router.push(`/user/${term}`);
        }
    };

    return (
        <nav className="bg-white-800 p-4 fixed top-0 w-full z-50 shadow-md mb-20">
            <div className="flex md:mx-auto justify-center items-center lg:space-x-[40rem] sm:space-x-[10rem]">

                {/* Logo */}
                <div className=''>
                    <a href="/">
                        <Image
                            src="/named_logo.svg"  // Image path from the public folder
                            alt="Girman Tech Logo"
                            width={150}        // Width of the logo
                            height={150}       // Height of the logo
                        />
                    </a>
                </div>

                {/* Search Bar */}
                <form onSubmit={handleSearch} className="relative w-full max-w-xs">
                    <input
                        type="text"
                        value={term}
                        onChange={(e) => setTerm(e.target.value)}
                        placeholder="Search..."
                        className="border border-gray-300 rounded pl-10 pr-4 py-2 w-full"
                    />
                    <button type="submit" className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-500">
                        <SearchIcon fontSize="small" />
                    </button>
                </form>

                {/* Links */}
                
            </div>
        </nav>
    );
}
