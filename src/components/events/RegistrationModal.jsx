import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, CalendarDays, ShieldCheck, Ticket, X } from "lucide-react";
import { formatDate, formatPrice } from "../../data/events";

export default function RegistrationModal({ event, onClose, onSubmit }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    ticketCount: "1",
  });
  const [errors, setErrors] = useState({});
  const update = (key, value) =>
    setForm((current) => ({ ...current, [key]: value }));
  const submit = (e) => {
    e.preventDefault();
    const next = {};
    if (!form.name.trim()) next.name = "Enter your full name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      next.email = "Enter a valid email.";
    if (!/^[0-9]{10}$/.test(form.phone.replace(/\s/g, "")))
      next.phone = "Enter a 10-digit mobile number.";
    setErrors(next);
    if (!Object.keys(next).length) onSubmit(form);
  };
  return (
    <motion.div
      className="modal-backdrop"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onMouseDown={(e) => e.target === e.currentTarget && onClose()}
    >
      <motion.div
        className="register-modal"
        initial={{ opacity: 0, y: 25, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 15 }}
      >
        <button className="modal-close" onClick={onClose}>
          <X size={18} />
        </button>
        <div className="modal-heading">
          <span>
            <Ticket size={20} />
          </span>
          <div>
            <small>RESERVE YOUR SPOT</small>
            <h2>
              Join the <em>experience.</em>
            </h2>
          </div>
        </div>
        <div className="register-event">
          <img src={event.image} alt="" />
          <div>
            <b>{event.title}</b>
            <small>
              <CalendarDays size={12} />
              {formatDate(event.date)} · {event.time}
            </small>
          </div>
          <strong>{formatPrice(event.price)}</strong>
        </div>
        <form onSubmit={submit} noValidate>
          <label>
            Full name
            <input
              value={form.name}
              onChange={(e) => update("name", e.target.value)}
              placeholder="Your full name"
            />
            {errors.name && <small className="error">{errors.name}</small>}
          </label>
          <label>
            Email address
            <input
              type="email"
              value={form.email}
              onChange={(e) => update("email", e.target.value)}
              placeholder="you@example.com"
            />
            {errors.email && <small className="error">{errors.email}</small>}
          </label>
          <label>
            Mobile number
            <input
              type="tel"
              maxLength="10"
              value={form.phone}
              onChange={(e) => update("phone", e.target.value)}
              placeholder="10-digit mobile number"
            />
            {errors.phone && <small className="error">{errors.phone}</small>}
          </label>
          <label>
            Tickets
            <select
              value={form.ticketCount}
              onChange={(e) => update("ticketCount", e.target.value)}
            >
              {[1, 2, 3, 4, 5, 6].map((n) => (
                <option key={n} value={n}>
                  {n} {n === 1 ? "ticket" : "tickets"}
                </option>
              ))}
            </select>
          </label>
          <div className="total-row">
            <span>Total amount</span>
            <b>{formatPrice(event.price * Number(form.ticketCount))}</b>
          </div>
          <button className="primary-btn full" type="submit">
            Confirm registration <ArrowRight size={16} />
          </button>
          <p className="secure-note">
            <ShieldCheck size={13} /> Demo registration · details saved on this
            device
          </p>
        </form>
      </motion.div>
    </motion.div>
  );
}
