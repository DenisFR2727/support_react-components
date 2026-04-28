import { useParams } from "react-router-dom";
import { DUMMY_EVENTS } from "./EventsPage";

export default function EventDetailPage() {
  const params = useParams();
  const eventId = params.id;
  const event = DUMMY_EVENTS.find((event) => event.id === eventId);

  return (
    <div>
      <h1>The Event Detail Page</h1>
      <p>Event ID: {eventId} </p>
      <img src={event.image} alt={event.title} />
    </div>
  );
}
