import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
 
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getEnvVariable(envVariable: string) {
  return import.meta.env[envVariable] ?? process.env[envVariable];
}

export async function GET(url: string) {
  const res = await fetch(`${url}`);
  return await res.json();
}