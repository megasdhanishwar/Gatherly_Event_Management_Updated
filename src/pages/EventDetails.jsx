import { Link, useParams } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  CalendarDays,
  Clock3,
  MapPin,
  Users,
  CheckCircle2,
} from "lucide-react";
import { formatDate, formatPrice } from "../data/events";

export default function EventDetails({ events, registrations, onRegister }) {
  const { id } = useParams();
  const event = events.find((item) => item.id === Number(id));
  if (!event)
    return (
      <main className="content-wrap not-found">
        <h1>Event not found</h1>
        <Link to="/events" className="primary-btn">
          Back to events
        </Link>
      </main>
    );
  const registered = registrations.some((item) => item.eventId === event.id);
  return (
    <main className="content-wrap details-page">
      <Link to="/events" className="back-link">
        <ArrowLeft size={15} /> Back to all events
      </Link>
      <div className="details-layout">
        <div className="details-main">
          <div className="details-image">
            <img src={event.image} alt={event.title} />
            <span className="event-tag">{event.category}</span>
          </div>
          <div className="details-copy">
            <div className="eyebrow">
              <span /> THE EXPERIENCE
            </div>
            <h1>{event.title}</h1>
            <p>{event.description}</p>
            <h3>About this event</h3>
            <p>
              Come as you are, bring your curiosity, and enjoy an experience
              designed to help you connect with people and ideas. Arrive a
              little early to get settled and make the most of the day.
            </p>
            <div className="detail-highlights">
              <div>
                <CalendarDays />
                <span>
                  <b>{formatDate(event.date)}</b>
                  <small>Event date</small>
                </span>
              </div>
              <div>
                <Clock3 />
                <span>
                  <b>{event.time}</b>
                  <small>Starting time</small>
                </span>
              </div>
              <div>
                <MapPin />
                <span>
                  <b>{event.venue}</b>
                  <small>{event.city}</small>
                </span>
              </div>
              <div>
                <Users />
                <span>
                  <b>{event.seats} seats</b>
                  <small>Limited availability</small>
                </span>
              </div>
            </div>
          </div>
        </div>
        <aside className="booking-panel">
          <span className="eyebrow">
            <span /> YOUR EVENT PASS
          </span>
          <h3>
            Be part of
            <br />
            <em>the moment.</em>
          </h3>
          <div className="booking-price">
            <b>{formatPrice(event.price)}</b>
            <small>/ person</small>
            {event.oldPrice > event.price && (
              <del>{formatPrice(event.oldPrice)}</del>
            )}
          </div>
          <div className="booking-perks">
            <span>
              <CheckCircle2 /> Instant confirmation
            </span>
            <span>
              <CheckCircle2 /> Digital booking reference
            </span>
            <span>
              <CheckCircle2 /> Easy ticket access
            </span>
          </div>
          <button
            className="primary-btn full"
            disabled={registered}
            onClick={() => onRegister(event)}
          >
            {registered ? "Already registered" : "Register for event"}{" "}
            <ArrowRight size={16} />
          </button>
          <small className="booking-note">
            No payment gateway connected in this demo.
          </small>
        </aside>
      </div>
    </main>
  );
}
