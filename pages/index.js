import { useState } from 'react';
import { useRouter } from 'next/router';
import Navbar from '../components/Navbar'; // Import the Navbar
import SearchBar from '@/components/SearchBar';

export default function Home() {
    const [searchTerm, setSearchTerm] = useState('');
    const router = useRouter();

    const handleSearch = (term) => {
        router.push(`/user/${term}`);
    };

    return (
        <>
            <Navbar />
            <div className="bg-texture-gradient bg-texture flex flex-col items-center justify-between space-y-20 h-[100vh]">
                <div className='h-[69vh]'>
                    <SearchBar onSearch={handleSearch} />
                </div>
            </div>
        </>
    );
}
