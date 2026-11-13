import { motion } from "framer-motion";
import { ArrowUpRight, Compass, Heart, Users, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <main className="about-page">
      <section className="page-hero about-hero">
        <div className="content-wrap">
          <div className="eyebrow">
            <span /> THE PEOPLE BEHIND THE PLANS
          </div>
          <h1>
            More than events.
            <br />
            <em>It's about belonging.</em>
          </h1>
          <p>
            We're here for the moments that turn strangers into friends, ideas
            into action, and ordinary days into stories worth telling.
          </p>
        </div>
      </section>
      <section className="content-wrap story-section">
        <div className="story-photo">
          <img
            src="https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=1200&q=85"
            alt="Friends enjoying time together"
          />
        </div>
        <div className="story-copy">
          <div className="eyebrow">
            <span /> WHY WE STARTED
          </div>
          <h2>
            The best memories
            <br />
            are <em>shared.</em>
          </h2>
          <p>
            Some of life's best moments begin with a simple decision: say yes
            and show up. A concert with friends. A conversation that changes
            your perspective. A workshop that sparks a new passion.
          </p>
          <p>
            Gatherly brings those opportunities together in one welcoming place,
            making it easier to discover experiences and take part in the things
            that make life richer.
          </p>
        </div>
      </section>
      <section className="values-section">
        <div className="content-wrap">
          <div className="eyebrow">
            <span /> WHAT WE BELIEVE
          </div>
          <h2>
            Good experiences.
            <br />
            <em>Better connections.</em>
          </h2>
          <div className="values-grid">
            <article>
              <span>
                <Compass />
              </span>
              <h3>Discover freely</h3>
              <p>
                Explore experiences beyond your usual routine and find something
                that feels new.
              </p>
            </article>
            <article>
              <span>
                <Users />
              </span>
              <h3>Bring people together</h3>
              <p>
                Make space for conversations, shared interests, and new
                friendships.
              </p>
            </article>
            <article>
              <span>
                <Heart />
              </span>
              <h3>Make it meaningful</h3>
              <p>
                We celebrate thoughtful events that leave you with more than
                just photographs.
              </p>
            </article>
          </div>
        </div>
      </section>
      <section className="about-cta content-wrap">
        <div>
          <Sparkles size={22} />
          <h2>Ready to make a memory?</h2>
          <p>Your next favourite experience might be just around the corner.</p>
        </div>
        <Link to="/events" className="primary-btn">
          Explore events <ArrowUpRight size={16} />
        </Link>
      </section>
    </main>
  );
}
