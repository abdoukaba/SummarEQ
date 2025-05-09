import React from 'react';
import { useState } from "react";

interface Summary {
  _id: string;
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  locationId: string;
  contactId: string;
  messageTypes?: string[];
  messageBodies?: string[];
  timestamps?: string[];
  summary?: string;
  clientContext?: string;
}

const SummaryCard = ({ summary }: { summary: Summary }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen((prev) => !prev);

  return (
    <div className="summary-card">
      <div className="summary-header" onClick={toggleDropdown} style={{ color: "#fff", padding: "10px", margin: "10px 0"}}>
        <span>{summary.firstName} {summary.lastName}</span>
        <span>{isOpen ? "▲" : "▼"}</span>
      </div>

      {isOpen && (
        <div className="summary-body">
          {summary.email && <p><strong>Email:</strong> {summary.email}</p>}
          {summary.phone && <p><strong>Phone:</strong> {summary.phone}</p>}
          <p><strong>Location ID:</strong> {summary.locationId}</p>
          <p><strong>Contact ID:</strong> {summary.contactId}</p>
          {summary.summary && <p><strong>Summary:</strong> {summary.summary}</p>}
          {summary.clientContext && <p><strong>Client Context:</strong> {summary.clientContext}</p>}
          
          {Array.isArray(summary.messageTypes) && summary.messageTypes.length > 0 && (
            <>
              <p><strong>Message Types:</strong></p>
              <ul>{summary.messageTypes.map((type, i) => <li key={i}>{type}</li>)}</ul>
            </>
          )}

          {Array.isArray(summary.messageBodies) && summary.messageBodies?.length > 0 && (
            <>
              <p><strong>Message Bodies:</strong></p>
              <ul>{summary.messageBodies.map((body, i) => <li key={i}>{body}</li>)}</ul>
            </>
          )}

          {Array.isArray(summary.timestamps) && summary.timestamps?.length > 0 && (
            <>
              <p><strong>Timestamps:</strong></p>
              <ul>{summary.timestamps.map((t, i) => (
                <li key={i}>{new Date(t).toLocaleString()}</li>
              ))}</ul>
            </>
          )}
        </div>
      )}
    </div>
  );
}
export default SummaryCard;