import React, { useState } from 'react';
import Image from 'next/image';
import SearchIcon from '@mui/icons-material/Search'; // Import MUI Search Icon

const SearchBar = ({ onSearch }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (searchTerm.trim()) {
            onSearch(searchTerm);
        }
    };

    return (
        <div className="mt-56 flex flex-col items-center w-full h-full max-w-full">
            {/* SVG Image */}
            <div className="w-full flex justify-center mb-10">
                <Image
                    src="/girman_Search.svg" // Path to your SVG file
                    alt="Search Icon"
                    width={100}
                    height={50}
                    className="w-[70vw] h-[20vh] max-w-[800px] max-h-[600px]"
                />
            </div>

            {/* Search Form */}
            <form onSubmit={handleSubmit} className="flex flex-col items-center w-full max-w-full relative">
                <div className="relative w-[70vw] max-w-[800px]">
                    {/* Input Field */}
                    <input
                        type="text"
                        className="border border-gray-300 rounded pl-10 w-full h-[5vh] max-h-[50px] pr-4"
                        placeholder="Search"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    {/* Search Icon */}
                    <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
                        <SearchIcon fontSize="small" />
                    </div>
                </div>
            </form>
        </div>
    );
};

export default SearchBar;
