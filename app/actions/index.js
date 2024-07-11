'use server'

const { createUser, foundUserByCredentials } = require("@/db/query");
const { redirect } = require("next/navigation");

async function registerUser(fromData) {
    const user = Object.fromEntries(fromData);  //create object by fromEntries
    const created = await createUser(user);
    redirect('/login');

}

async function performLogin(fromData) {
    const credential = {};
    credential.email = fromData.get('email');
    credential.password = fromData.get('password');
    const found = await foundUserByCredentials(credential);

    if (found) {
        redirect('/');
    } else {
        throw new Error(`This email ${fromData.email} was not found`)
    }

}

export {
    performLogin, registerUser
};

