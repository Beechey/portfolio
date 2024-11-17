import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
 
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const  validateString = (value: unknown) => {
  if (!value || typeof value !== "string") {
    return false;
  }
  
  return true;
}