import EventDetails from "@/components/details/EventDetails";
import EventVanue from "@/components/details/EventVanue";
import HeroSection from "@/components/details/HeroSection";
import { getEventById } from "@/db/query";

const EventDetailsPage = async ({ params: { id } }) => {

    const eventInfo = await getEventById(id);

    console.log(eventInfo);

    return (
        <>
            <HeroSection eventInfo={eventInfo} />
            <section className="container">
                <div className="grid grid-cols-5 gap-12 my-12">
                    <EventDetails details={eventInfo?.details} swags={eventInfo?.swags} />
                    <EventVanue location={eventInfo?.location} />
                </div>
            </section>
        </>
    );
}

export default EventDetailsPage;