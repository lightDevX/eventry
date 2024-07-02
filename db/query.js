import { eventModel } from "@/models/event-model";

async function getAllEvents() {
    const allEvents = await eventModel.find();
    return allEvents;
}

export {
    getAllEvents
};

