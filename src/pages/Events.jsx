import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Search } from "lucide-react";
import EventCard from "../components/events/EventCard";
import EventFilters from "../components/events/EventFilters";

export default function Events({ events, registrations }) {
  const [category, setCategory] = useState("All events");
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("soonest");
  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    return events
      .filter(
        (event) => category === "All events" || event.category === category,
      )
      .filter(
        (event) =>
          !q ||
          [event.title, event.category, event.venue, event.city].some((value) =>
            value.toLowerCase().includes(q),
          ),
      )
      .sort((a, b) =>
        sort === "price-low"
          ? a.price - b.price
          : sort === "price-high"
            ? b.price - a.price
            : a.date.localeCompare(b.date),
      );
  }, [events, category, search, sort]);
  const registeredIds = registrations.map((item) => item.eventId);
  return (
    <main className="page-main">
      <section className="page-hero">
        <div className="content-wrap">
          <div className="eyebrow">
            <span /> THE EVENT LINEUP
          </div>
          <h1>
            Find your <em>thing.</em>
          </h1>
          <p>
            Music, ideas, food, art and everything in between. Pick a plan that
            feels like you.
          </p>
          <div className="page-hero-meta">
            <span>
              <b>{events.length.toString().padStart(2, "0")}</b> curated events
            </span>
            <span>·</span>
            <span>Across South India</span>
          </div>
        </div>
      </section>
      <section className="content-wrap events-listing">
        <div className="listing-title">
          <div>
            <span className="eyebrow">
              <span /> WHAT'S HAPPENING
            </span>
            <h2>Upcoming events</h2>
          </div>
          <div className="results-count">{filtered.length} RESULTS</div>
        </div>
        <EventFilters
          category={category}
          setCategory={setCategory}
          search={search}
          setSearch={setSearch}
          sort={sort}
          setSort={setSort}
        />
        {filtered.length ? (
          <div className="event-grid">
            {filtered.map((event, index) => (
              <EventCard
                key={event.id}
                event={event}
                index={index}
                registered={registeredIds.includes(event.id)}
              />
            ))}
          </div>
        ) : (
          <div className="empty-state">
            <span>
              <Search size={25} />
            </span>
            <h3>No events found</h3>
            <p>Try another keyword or category.</p>
            <button
              className="outline-btn"
              onClick={() => {
                setSearch("");
                setCategory("All events");
              }}
            >
              Reset filters
            </button>
          </div>
        )}
      </section>
    </main>
  );
}
