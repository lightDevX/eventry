import { getAllEvents } from "@/db/query";
import EventCard from "./EventCard";

const EventList = async () => {

    const allEvent = await getAllEvents();


    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
            <EventCard allEvent={allEvent} />
        </div>
    );
};

export default EventList;