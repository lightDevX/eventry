'use server'

const { createUser, foundUserByCredentials } = require("@/db/query");
const { redirect } = require("next/navigation");

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

export {
    performLogin, registerUser
};

