'use server'

const { createUser, foundUserByCredentials } = require("@/db/query");
const { redirect } = require("next/navigation");

async function registerUser(formData) {
    const user = Object.fromEntries(formData);  //create object by fromEntries
    const created = await createUser(user);
    redirect('/login');

}

async function performLogin(formData) {
    const credential = {};
    credential.email = formData.get('email');
    credential.password = formData.get('password');
    const found = await foundUserByCredentials(credential);

    if (found) {
        redirect('/');
    } else {
        throw new Error(`This email ${formData.get('email')} was not found`)
    }

}

export {
    performLogin, registerUser
};

