"use server";
import { RequestCookie } from "next/dist/compiled/@edge-runtime/cookies";
import { cookies } from "next/headers";

const createCookie = async (name: string, value: string): Promise<void> => {
  cookies().set(name, value);
};

//add returned type
const getCookie = async (name: string): Promise<RequestCookie | undefined> => {
  const cookieStore = cookies();
  const language = cookieStore.get(name);
  return language;
};

const deleteCookie = async (name: string): Promise<void> => {
  cookies().delete(name);
};

export { createCookie, getCookie, deleteCookie };
