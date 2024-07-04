import { eventModel } from "@/models/event-model";
import { replaceMongoIdInArray } from "@/utils/data-utils";

async function getAllEvents() {
    const allEvents = await eventModel.find().lean();
    return replaceMongoIdInArray(allEvents);
}

export {
    getAllEvents
};

