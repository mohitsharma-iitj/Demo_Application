import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle, CardImage } from "@/components/ui/card";
import { HiLocationMarker, HiPhone } from "react-icons/hi";

export function CardWithForm({ user, onClick }) {
    return (
        <Card >
            <CardHeader>
                <CardImage src="/blank-profile-picture.png" alt="Profile Picture" />
            </CardHeader>
            <CardContent className="mt-20">
                <CardTitle>{`${user.first_name} ${user.last_name}`}</CardTitle>
                <CardDescription>
                    <HiLocationMarker className="text-gray-500" />
                    <span>{user.city}</span>
                </CardDescription>
            </CardContent>
            <div className="border-t border-neutral-200 dark:border-neutral-800 my-2 mx-6"></div>
            <CardFooter>
                <CardDescription>
                    <HiPhone className="text-black-500" />
                    <span>{user.contact_number}</span>
                </CardDescription>
                <Button onClick={(e) => {
                    e.stopPropagation(); // Prevents triggering parent click event
                    onClick(user);}}>Fetch Details</Button>
            </CardFooter>
        </Card>
    );
}
