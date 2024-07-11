'use server'

const { createUser } = require("@/db/query");
const { redirect } = require("next/navigation");

async function registerUser(fromData) {
    const user = Object.fromEntries(fromData);  //create object by fromEntries
    const created = await createUser(user);
    redirect('/login');

}


export {
    registerUser
};
