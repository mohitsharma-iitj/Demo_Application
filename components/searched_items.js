// components/SearchItem.js
import React ,{useState}from 'react';
import { CardWithForm } from './descriptioncard';
import UserDialog from './UserDialog';

const SearchItem = ({users}) => {
    const [selectedUser, setSelectedUser] = useState(null);
    const [dialogOpen, setDialogOpen] = useState(false);
    const handleCardClick = (user) => {
        setSelectedUser(user);
        setDialogOpen(true);
    };
    const handleCloseDialog = () => {
        setDialogOpen(false);
        setSelectedUser(null);
    };
    console.log(users)
    return (
        
        <div className="p-4 mt-1 h-full overflow-y-auto scrollbar-hide">
            
                {users.length === 0 ? (
                    <div className="flex items-center justify-center h-full">
                        <img
                            src="/noresult.svg"
                            alt="No results found"
                            className="w-80 h-80" // Adjust the size as needed
                        />
                    </div>

                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 overflow-y-auto">
                        {
                    users.map((user, index) => (
                        <CardWithForm key={index} user={user} onClick={handleCardClick} />
                        ))}</div>
                        )
                        }
            
            {selectedUser && (
                <UserDialog open={dialogOpen} user={selectedUser} onClose={handleCloseDialog} />
            )}
    
        </div>
    );
       
};

export default SearchItem;
