import { Link } from "react-router-dom";
import {
  CalendarDays,
  MapPin,
  Ticket,
  Users,
  ArrowUpRight,
  CheckCircle2,
} from "lucide-react";
import { formatDate, formatPrice } from "../data/events";

export default function MyEvents({ events, registrations }) {
  const items = registrations
    .map((registration) => ({
      ...events.find((event) => event.id === registration.eventId),
      registration,
    }))
    .filter((item) => item.id)
    .sort((a, b) => a.date.localeCompare(b.date));
  const ticketCount = items.reduce(
    (sum, item) => sum + Number(item.registration.ticketCount),
    0,
  );
  return (
    <main className="content-wrap my-events-page">
      <div className="eyebrow">
        <span /> YOUR GATHERLY SPACE
      </div>
      <div className="my-events-title">
        <div>
          <h1>
            Your plans.
            <br />
            <em>All in one place.</em>
          </h1>
          <p>Your registered events and ticket details, ready when you are.</p>
        </div>
        <Link to="/events" className="primary-btn">
          Discover events <ArrowUpRight size={16} />
        </Link>
      </div>
      <div className="booking-stats">
        <div>
          <span>
            <Ticket />
          </span>
          <b>{items.length}</b>
          <small>Registered events</small>
        </div>
        <div>
          <span>
            <Users />
          </span>
          <b>{ticketCount}</b>
          <small>Total tickets</small>
        </div>
        <div>
          <span>
            <CalendarDays />
          </span>
          <b>
            {
              items.filter(
                (item) => item.date >= new Date().toISOString().slice(0, 10),
              ).length
            }
          </b>
          <small>Upcoming events</small>
        </div>
      </div>
      {items.length ? (
        <div className="registered-list">
          {items.map((event) => (
            <article
              className="registered-card"
              key={event.registration.bookingId}
            >
              <img src={event.image} alt={event.title} />
              <div className="registered-info">
                <span className="event-tag-inline">{event.category}</span>
                <h3>{event.title}</h3>
                <div>
                  <span>
                    <CalendarDays size={13} />
                    {formatDate(event.date)}
                  </span>
                  <span>
                    <MapPin size={13} />
                    {event.city}
                  </span>
                </div>
                <small>Booking ID: {event.registration.bookingId}</small>
              </div>
              <div className="registered-side">
                <span className="confirmed">
                  <CheckCircle2 size={13} /> Confirmed
                </span>
                <b>
                  {event.registration.ticketCount}{" "}
                  {Number(event.registration.ticketCount) === 1
                    ? "ticket"
                    : "tickets"}
                </b>
                <small>
                  {formatPrice(
                    event.price * Number(event.registration.ticketCount),
                  )}
                </small>
                <Link to={`/events/${event.id}`}>
                  View event <ArrowUpRight size={13} />
                </Link>
              </div>
            </article>
          ))}
        </div>
      ) : (
        <div className="empty-state">
          <span>
            <Ticket size={26} />
          </span>
          <h3>Your next story is waiting</h3>
          <p>
            You haven't registered for an event yet. Find something worth
            showing up for.
          </p>
          <Link to="/events" className="primary-btn">
            Explore events <ArrowUpRight size={16} />
          </Link>
        </div>
      )}
    </main>
  );
}
