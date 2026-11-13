import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  CalendarDays,
  Heart,
  MapPin,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";
import EventCard from "../components/events/EventCard";
import SectionHeading from "../components/common/SectionHeading";

export default function Home({ events, registrations }) {
  const featured = events.filter((event) => event.featured).slice(0, 3);
  const registeredIds = registrations.map((item) => item.eventId);
  return (
    <main>
      <section className="hero">
        <div className="hero-shape shape-a" />
        <div className="hero-shape shape-b" />
        <div className="hero-inner">
          <motion.div
            className="hero-copy"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="eyebrow">
              <span /> YOUR NEXT STORY STARTS HERE
            </div>
            <h1>
              Make plans.
              <br />
              <em>Make memories.</em>
            </h1>
            <p>
              Find the gatherings, ideas, music and moments that make life feel
              a little more alive. There's something happening near you.
            </p>
            <div className="hero-buttons">
              <Link to="/events" className="primary-btn">
                Explore events <ArrowRight size={17} />
              </Link>
              <Link to="/about" className="text-link">
                Get to know us <ArrowUpRight size={16} />
              </Link>
            </div>
            <div className="hero-stats">
              <div>
                <b>
                  10k<span>+</span>
                </b>
                <small>Attendees</small>
              </div>
              <i />
              <div>
                <b>
                  120<span>+</span>
                </b>
                <small>Experiences</small>
              </div>
              <i />
              <div>
                <b>
                  4.9<span>/5</span>
                </b>
                <small>Community love</small>
              </div>
            </div>
          </motion.div>
          <motion.div
            className="hero-art"
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.12 }}
          >
            <div className="hero-main-photo">
              <img
                src="https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&w=1200&q=90"
                alt="People enjoying a live event"
              />
            </div>
            <div className="hero-photo-label">
              <span className="pulse-dot" /> GOOD TIMES ARE CLOSER THAN YOU
              THINK
            </div>
            <div className="hero-floating-note">
              <Sparkles size={18} />
              <span>
                <b>Find your kind of crowd</b>
                <small>Discover. Connect. Experience.</small>
              </span>
            </div>
            <div className="hero-date-card">
              <CalendarDays size={17} />
              <span>
                <b>06 DEC</b>
                <small>Save the date</small>
              </span>
            </div>
            <div className="hero-stamp">
              LIVE
              <br />
              MORE<span>✳</span>
            </div>
          </motion.div>
        </div>
        <div className="hero-bottom-line">
          <span>
            <MapPin size={14} /> Experiences across South India
          </span>
          <span>
            SCROLL TO DISCOVER <i />
          </span>
        </div>
      </section>

      <section className="benefits">
        <div>
          <span>
            <Users size={19} />
          </span>
          <p>
            <b>Find your people</b>
            <small>Meet people who love what you love.</small>
          </p>
        </div>
        <div>
          <span>
            <ShieldCheck size={19} />
          </span>
          <p>
            <b>Easy registration</b>
            <small>Simple booking, instant confirmation.</small>
          </p>
        </div>
        <div>
          <span>
            <Heart size={19} />
          </span>
          <p>
            <b>Worth remembering</b>
            <small>Handpicked experiences, good memories.</small>
          </p>
        </div>
      </section>

      <section className="featured-section content-wrap">
        <SectionHeading
          eyebrow="PICKED FOR YOU"
          title="A few good reasons"
          highlight="to go out."
          description="Experiences we think you'll love. Your next story is one click away."
          action={
            <Link to="/events" className="section-link">
              View all events <ArrowUpRight size={15} />
            </Link>
          }
        />
        <div className="event-grid">
          {featured.map((event, index) => (
            <EventCard
              key={event.id}
              event={event}
              index={index}
              registered={registeredIds.includes(event.id)}
            />
          ))}
        </div>
      </section>

      <section className="home-about content-wrap">
        <div className="about-image">
          <img
            src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1200&q=85"
            alt="People gathered at an event"
          />
          <span>GOOD THINGS HAPPEN TOGETHER</span>
        </div>
        <div className="about-copy">
          <div className="eyebrow">
            <span /> A LITTLE ABOUT GATHERLY
          </div>
          <h2>
            Life happens
            <br />
            when we <em>show up.</em>
          </h2>
          <p>
            We believe the best moments don't happen behind a screen. They
            happen in rooms full of ideas, under open skies, and alongside
            people you haven't met yet.
          </p>
          <Link to="/about" className="text-link">
            Our story <ArrowUpRight size={16} />
          </Link>
        </div>
      </section>

      <section className="final-cta content-wrap">
        <div>
          <div className="eyebrow light">
            <span /> YOUR NEXT YES IS WAITING
          </div>
          <h2>
            Step out. Tune in.
            <br />
            <em>Feel something new.</em>
          </h2>
          <p>Browse what's coming up and find a reason to make a plan.</p>
        </div>
        <Link to="/events" className="light-btn">
          Find your next event <ArrowUpRight size={17} />
        </Link>
      </section>
    </main>
  );
}
