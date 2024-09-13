import { useState } from 'react';


import SearchItem from '@/components/searched_items';
import Navbar from '@/components/Navbarsearch';
import { useRouter } from 'next/router';
import userList from '../../public/user_list.json';
export default function Home() {
    
    const router = useRouter();
    const {id} = router.query;
    
    const getFilteredUsers = (term) => {
        if (!term) return [];
        return userList.filter(user =>
            `${user.first_name} ${user.last_name}`.toLowerCase().includes(term.toLowerCase())
        );
    };

    const filteredUsers = getFilteredUsers(id);
    return (
        <>
            {/* Navbar is placed here */}

            <div className=" bg-texture-gradient bg-texture flex flex-col items-center justify-between space-y-20 h-[100vh]">
                <Navbar searchTerm={id} />
                <div className='h-[88vh]'>

                    <SearchItem users={filteredUsers} />
                </div>


            </div>
        </>
    );
}
