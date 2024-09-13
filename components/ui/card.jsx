import * as React from "react";
import { cn } from "@/lib/utils";
import { HiLocationMarker, HiPhone } from "react-icons/hi"; // Ensure react-icons is installed

const Card = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "rounded-lg border border-neutral-200 bg-white text-neutral-950 shadow-sm dark:border-neutral-800 dark:bg-neutral-950 dark:text-neutral-50 w-[350px] h-auto", // Adjust width here
      className
    )}
    {...props}
  />
));
Card.displayName = "Card";

const CardHeader = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("relative p-6 flex flex-col items-start space-y-4", className)}
    {...props}
  />
));
CardHeader.displayName = "CardHeader";

const CardImage = React.forwardRef(({ className, src, alt }, ref) => (
  <img
    ref={ref}
    src={src}
    alt={alt}
    className={cn("w-24 h-24 rounded-full absolute top-4 left-4 border-2 border-neutral-200 dark:border-neutral-800", className)}
  />
));
CardImage.displayName = "CardImage";

const CardTitle = React.forwardRef(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn("text-2xl font-bold leading-none tracking-tight", className)}
    {...props}
  />
));
CardTitle.displayName = "CardTitle";

const CardDescription = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center space-x-2", className)}
    {...props}
  />
));
CardDescription.displayName = "CardDescription";

const CardContent = React.forwardRef(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
));
CardContent.displayName = "CardContent";

const CardFooter = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center justify-between p-6 pt-0 ", className)}
    {...props}
  />
));
CardFooter.displayName = "CardFooter";

const Button = ({ className, children, ...props }) => (
  <button
    className={cn(
      "px-4 py-2 bg-blue-500 text-white rounded-lg shadow-sm hover:bg-blue-600",
      className
    )}
    {...props}
  >
    {children}
  </button>
);

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent, CardImage, Button };
