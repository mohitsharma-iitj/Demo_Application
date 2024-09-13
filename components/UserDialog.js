// components/UserDialog.js
import React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';
import { Button } from '@/components/ui/button';

const UserDialog = ({ open, user, onClose }) => {
    return (
        <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
            <DialogTitle>
                <div className="font-bold text-black">Fetch Details</div>
                <div className="text-gray-500 text-sm mb-1">
                    Here are the details of the following employee
                </div>
            </DialogTitle>
            <DialogContent>
                
                <div className="mb-4">
                    <div className="text-sm font-semibold mb-1">
                        Name: {user.first_name} {user.last_name}
                    </div>
                    <div className="text-sm font-semibold mb-1">
                        Location: {user.city}
                    </div>
                    <div className="text-sm font-semibold mb-1">
                        Contact Number: {user.contact_number}
                    </div>
                </div>
                <div className="text-sm font-semibold mb-1">
                    Profile Image:
                </div>
                <div >
                    <img
                        src="/blank-profile-picture.png"
                        alt="Profile Picture"
                        className="w-48 h-48 border border-gray-300"
                    />
                </div>
            </DialogContent>
            <DialogActions>
                <Button
                    onClick={onClose}
                    style={{ backgroundColor: 'white', color: 'black' }} // Inline styles for button
                    className="border border-gray-300"
                >
                    Close
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default UserDialog;
