import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  CalendarDays,
  MapPin,
  Clock3,
  Sparkles,
} from "lucide-react";
import { formatDate, formatPrice } from "../../data/events";

export default function EventCard({ event, index = 0, registered = false }) {
  return (
    <motion.article
      className="event-card"
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.4, delay: (index % 3) * 0.07 }}
      whileHover={{ y: -6 }}
    >
      <Link to={`/events/${event.id}`} className="event-image">
        <img src={event.image} alt={event.title} loading="lazy" />
        <span className="event-tag">{event.category}</span>
        {event.featured && (
          <span className="featured-tag">
            <Sparkles size={11} /> Featured
          </span>
        )}
        <span className="image-arrow">
          <ArrowUpRight size={18} />
        </span>
      </Link>
      <div className="event-card-body">
        <div className="event-meta">
          <span>
            <CalendarDays size={13} />
            {formatDate(event.date)}
          </span>
          <span>
            <Clock3 size={13} />
            {event.time}
          </span>
        </div>
        <Link to={`/events/${event.id}`} className="event-title">
          {event.title}
        </Link>
        <div className="event-venue">
          <MapPin size={14} />
          {event.venue}, {event.city}
        </div>
        <div className="event-card-bottom">
          <div className="price">
            <b>{formatPrice(event.price)}</b>
            <small>/ person</small>
            {event.oldPrice > event.price && (
              <del>{formatPrice(event.oldPrice)}</del>
            )}
          </div>
          <Link
            to={`/events/${event.id}`}
            className={registered ? "detail-link done" : "detail-link"}
          >
            {registered ? "Registered" : "Explore"} <ArrowUpRight size={14} />
          </Link>
        </div>
      </div>
    </motion.article>
  );
}
