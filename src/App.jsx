import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Home from "./pages/Home";
import Events from "./pages/Events";
import About from "./pages/About";
import MyEvents from "./pages/MyEvents";
import EventDetails from "./pages/EventDetails";
import RegistrationModal from "./components/events/RegistrationModal";
import Toast from "./components/common/Toast";
import { events as initialEvents } from "./data/events";

export default function App() {
  const [events] = useState(initialEvents);
  const [registrations, setRegistrations] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("gatherly-registrations") || "[]");
    } catch {
      return [];
    }
  });
  const [registerEvent, setRegisterEvent] = useState(null);
  const [toast, setToast] = useState("");
  const location = useLocation();

  useEffect(
    () =>
      localStorage.setItem(
        "gatherly-registrations",
        JSON.stringify(registrations),
      ),
    [registrations],
  );
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]);
  useEffect(() => {
    if (!toast) return;
    const timer = setTimeout(() => setToast(""), 3000);
    return () => clearTimeout(timer);
  }, [toast]);

  const register = (form) => {
    if (registrations.some((item) => item.eventId === registerEvent.id)) {
      setToast("You are already registered for this event.");
      setRegisterEvent(null);
      return;
    }
    setRegistrations((current) => [
      ...current,
      {
        eventId: registerEvent.id,
        ...form,
        bookingId: `GT${Date.now().toString().slice(-7)}`,
        bookedAt: new Date().toISOString(),
      },
    ]);
    setRegisterEvent(null);
    setToast("Registration confirmed. Your ticket is ready!");
  };

  return (
    <div className="app-shell">
      <div className="top-note">
        <span className="note-dot" /> FIND YOUR PEOPLE. MAKE YOUR MOMENT.
      </div>
      <Navbar ticketCount={registrations.length} />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route
            path="/"
            element={
              <Home
                events={events}
                registrations={registrations}
                onRegister={setRegisterEvent}
              />
            }
          />
          <Route
            path="/events"
            element={
              <Events
                events={events}
                registrations={registrations}
                onRegister={setRegisterEvent}
              />
            }
          />
          <Route
            path="/events/:id"
            element={
              <EventDetails
                events={events}
                registrations={registrations}
                onRegister={setRegisterEvent}
              />
            }
          />
          <Route path="/about" element={<About />} />
          <Route
            path="/my-events"
            element={<MyEvents events={events} registrations={registrations} />}
          />
        </Routes>
      </AnimatePresence>
      <Footer />
      <AnimatePresence>
        {registerEvent && (
          <RegistrationModal
            event={registerEvent}
            onClose={() => setRegisterEvent(null)}
            onSubmit={register}
          />
        )}
      </AnimatePresence>
      <AnimatePresence>{toast && <Toast message={toast} />}</AnimatePresence>
    </div>
  );
}
