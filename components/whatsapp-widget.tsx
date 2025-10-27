"use client";

import { FormEvent, useMemo, useState } from "react";

interface WhatsAppWidgetProps {
  phone: string;
  message?: string;
}

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 32 32" role="img" aria-hidden="true" className={className}>
    <circle cx="16" cy="16" r="16" fill="#25D366" />
    <path
      fill="#fff"
      d="M21.7 18.6c-.13-.07-1.4-.69-1.62-.77-.22-.08-.38-.12-.54.12s-.62.77-.76.92c-.14.15-.27.17-.49.06-.22-.1-.92-.36-1.75-1.09-.64-.55-1.07-1.23-1.2-1.44-.13-.22-.01-.32.1-.43.1-.1.22-.26.33-.39.11-.13.16-.22.22-.37.07-.15.03-.28-.02-.39-.05-.11-.49-1.22-.67-1.67-.18-.44-.35-.37-.49-.38h-.42c-.15 0-.38.05-.57.27-.2.21-.75.73-.75 1.77 0 1.04.79 2.03.9 2.17.11.14 1.55 2.28 3.76 3.1.53.2.94.33 1.24.42.52.16.98.14 1.34.09.4-.06 1.25-.5 1.42-.99.18-.49.18-.92.12-.99-.05-.09-.2-.14-.42-.24Z"
    />
    <path
      fill="#25D366"
      d="M27 16c0-6.08-4.97-11-11.1-11-6.12 0-11.1 4.92-11.1 11 0 2.12.6 4.08 1.73 5.8l-1.14 4.18 4.27-1.12c1.64 1.08 3.56 1.65 5.54 1.65 6.12 0 11.1-4.92 11.1-10.91Z"
      opacity=".15"
    />
  </svg>
);

export function WhatsAppWidget({ phone, message }: WhatsAppWidgetProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [draft, setDraft] = useState(message ?? "Hi Corallo Digital team, I’d like to talk about growth marketing.");

  const whatsappUrl = useMemo(() => {
    const encoded = encodeURIComponent(draft.trim());
    return `https://wa.me/${phone}${encoded ? `?text=${encoded}` : ""}`;
  }, [draft, phone]);

  const handleSend = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (typeof window !== "undefined") {
      window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <div className="wa-widget">
      {isOpen && (
        <div className="wa-card" role="dialog" aria-label="WhatsApp chat preview">
          <div className="wa-header">
            <span className="wa-logo">
              <WhatsAppIcon />
            </span>
            <div className="wa-header-copy">
              <p className="wa-title">Corallo Digital</p>
              <p className="wa-status">Typically replies within a few minutes</p>
            </div>
            <button
              type="button"
              className="wa-close"
              onClick={() => setIsOpen(false)}
              aria-label="Close WhatsApp chat preview"
            >
              ×
            </button>
          </div>
          <div className="wa-bubble">
            Hi there 👋<br />
            Tell us about your goals and we’ll reply on WhatsApp.
          </div>
          <form className="wa-form" onSubmit={handleSend}>
            <textarea
              className="wa-input"
              value={draft}
              onChange={(event) => setDraft(event.target.value)}
              rows={2}
              aria-label="Message to send on WhatsApp"
            />
            <button type="submit" className="wa-send">
              Continue on WhatsApp
            </button>
          </form>
        </div>
      )}

      <button
        type="button"
        className="wa-button"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-expanded={isOpen}
        aria-label="Chat on WhatsApp"
      >
        <WhatsAppIcon className="wa-button-icon" />
      </button>
    </div>
  );
}
