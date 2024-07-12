import { eventModel } from "@/models/event-model";
import { userModel } from "@/models/user-model";
import { replaceMongoIdInArray, replaceMongoIdInObject } from "@/utils/data-utils";

async function getAllEvents() {
    const allEvents = await eventModel.find().lean();
    return replaceMongoIdInArray(allEvents);
}

async function getEventById(eventId) {
    const event = await eventModel.findById(eventId).lean();
    return replaceMongoIdInObject(event);
}

async function createUser(user) {
    const newUser = await userModel.create(user);
    return newUser;
}

async function foundUserByCredentials(credentials) {
    const user = await userModel.findOne(credentials).lean();
    if (user) {
        return replaceMongoIdInObject(user);
    }
    return null;
}

export {
    createUser, foundUserByCredentials, getAllEvents,
    getEventById
};

