import EventDetails from "@/components/details/EventDetails";
import EventVanue from "@/components/details/EventVanue";
import HeroSection from "@/components/details/HeroSection";

const page = () => {
    return (
        <>
            <HeroSection />
            <section className="container">
                <div className="grid grid-cols-5 gap-12 my-12">
                    <EventDetails />
                    <EventVanue />
                </div>
            </section>
        </>
    );
}

export default page;