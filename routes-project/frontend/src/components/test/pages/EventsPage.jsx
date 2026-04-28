import { Link } from "react-router-dom";

import classes from "./styles.module.css";

export const DUMMY_EVENTS = [
  {
    id: "e1",
    title: "Event 1",
    description: "Event 1 description",
    date: "2026-01-01",
    image: "https://via.placeholder.com/150",
  },
  {
    id: "e2",
    title: "Event 2",
    description: "Event 2 description",
    date: "2026-01-02",
    image: "https://via.placeholder.com/150",
  },
  {
    id: "e3",
    title: "Event 3",
    description: "Event 3 description",
    date: "2026-01-03",
    image: "https://via.placeholder.com/150",
  },
  {
    id: "e4",
    title: "Event 4",
    description: "Event 4 description",
    date: "2026-01-04",
    image: "https://via.placeholder.com/150",
  },
  {
    id: "e5",
    title: "Event 5",
    description: "Event 5 description",
    date: "2026-01-05",
    image: "https://via.placeholder.com/150",
  },
];
export default function EventsPage() {
  return (
    <div>
      <h1>The Events Page</h1>
      <ul className={classes.events}>
        {DUMMY_EVENTS.map((event) => (
          <li key={event.id}>
            <Link to={`/events/${event.id}`}>{event.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
