import EventList from "@/components/landingPage/EventList";
import Header from "@/components/landingPage/header";

export default function Home() {
  return (
    <main className=" container mt-4">
      <Header />
      <EventList />
    </main>
  );
}
