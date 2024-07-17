'use server'

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

const { createUser, foundUserByCredentials, updateInterest, } = require("@/db/query");


async function registerUser(formData) {
    const user = Object.fromEntries(formData);  //create object by fromEntries
    const created = await createUser(user);
    redirect('/login');

}

async function performLogin(formData) {
    try {
        const credential = {};
        credential.email = formData.get('email');
        credential.password = formData.get('password');
        const found = await foundUserByCredentials(credential);
        return found;  // if user found return true else false
    } catch (error) {
        throw error;
    }
}


async function addInterestedEvent(eventId, authId) {
    try {
        await updateInterest(eventId, authId);
    } catch (error) {
        throw error;
    }
    revalidatePath('/');
}


export { addInterestedEvent, performLogin, registerUser };

