import React, { useState, useEffect } from "react";

// Define types for summary state
interface SummaryType {
  totalLeads: number;
  recentLead: string;
  emailCount: number;
  phoneCount: number;
  topSource: string;
  avgResponseTime: string;
  highValueLeads: number;
  followUpsNeeded: number;
}

// Define types for lead data
interface LeadData {
  name: string;
  email: string;
  phone: string;
  source: string;
  responseTime: number;
  value: number;
  followUp: boolean;
}

const GHLDataSummary: React.FC = () => {
  const [summary, setSummary] = useState<SummaryType>({
    totalLeads: 0,
    recentLead: "N/A",
    emailCount: 0,
    phoneCount: 0,
    topSource: "N/A",
    avgResponseTime: "N/A",
    highValueLeads: 0,
    followUpsNeeded: 0,
  });

  useEffect(() => {
    // Expanded mock data
    const fakeData: LeadData[] = [
      { name: "John Doe", email: "john@example.com", phone: "123-456-7890", source: "Facebook", responseTime: 5, value: 1000, followUp: false },
      { name: "Jane Smith", email: "jane@example.com", phone: "", source: "Google Ads", responseTime: 8, value: 500, followUp: true },
      { name: "Alice Johnson", email: "", phone: "987-654-3210", source: "Organic Search", responseTime: 3, value: 1500, followUp: false },
      { name: "Bob Brown", email: "bob@example.com", phone: "555-123-4567", source: "Referral", responseTime: 6, value: 2000, followUp: true },
      { name: "Charlie Green", email: "", phone: "111-222-3333", source: "LinkedIn", responseTime: 10, value: 700, followUp: false },
      { name: "Emily White", email: "emily@example.com", phone: "444-555-6666", source: "Google Ads", responseTime: 2, value: 1200, followUp: true },
      { name: "Michael Blue", email: "michael@example.com", phone: "", source: "Facebook", responseTime: 4, value: 800, followUp: false },
      { name: "Sarah Red", email: "sarah@example.com", phone: "777-888-9999", source: "Referral", responseTime: 7, value: 2500, followUp: true },
    ];

    const totalLeads = fakeData.length;
    const recentLead = fakeData[0]?.name || "N/A";
    const emailCount = fakeData.filter(contact => contact.email).length;
    const phoneCount = fakeData.filter(contact => contact.phone).length;
    const highValueLeads = fakeData.filter(contact => contact.value >= 1000).length;
    const followUpsNeeded = fakeData.filter(contact => contact.followUp).length;

    // Find the most common source of leads
    const sources = fakeData.map(contact => contact.source);
    const sourceCounts: Record<string, number> = sources.reduce((acc, source) => {
      acc[source] = (acc[source] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);
    
    const topSource = Object.keys(sourceCounts).reduce((a, b) => (sourceCounts[a] > sourceCounts[b] ? a : b), "N/A");

    // Calculate average response time
    const avgResponseTime =
      fakeData.length > 0
        ? (fakeData.reduce((sum, contact) => sum + contact.responseTime, 0) / fakeData.length).toFixed(1) + " hrs"
        : "N/A";

    setSummary({
      totalLeads,
      recentLead,
      emailCount,
      phoneCount,
      topSource,
      avgResponseTime,
      highValueLeads,
      followUpsNeeded,
    });
  }, []);

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>📊 GHL Data Summary</h2>
      <div style={styles.summaryBox}>
        <p><strong>🧑‍💼 Total Leads:</strong> {summary.totalLeads}</p>
        <p><strong>📌 Most Recent Lead:</strong> {summary.recentLead}</p>
        <p><strong>📧 Leads with Email:</strong> {summary.emailCount}</p>
        <p><strong>📞 Leads with Phone:</strong> {summary.phoneCount}</p>
        <p><strong>🌎 Top Lead Source:</strong> {summary.topSource}</p>
        <p><strong>⏳ Avg Response Time:</strong> {summary.avgResponseTime}</p>
        <p><strong>💰 High-Value Leads ($1000+):</strong> {summary.highValueLeads}</p>
        <p><strong>🔔 Follow-Ups Needed:</strong> {summary.followUpsNeeded}</p>
      </div>
    </div>
  );
};

// Styling to make it centered and clean
const styles: Record<string, React.CSSProperties> = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    backgroundColor: "#f4f4f4",
  },
  heading: {
    textAlign: "center",
    color: "#333",
  },
  summaryBox: {
    width: "350px",
    padding: "20px",
    backgroundColor: "#fff",
    borderRadius: "8px",
    boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
    textAlign: "left",
    fontSize: "16px",
    lineHeight: "1.6",
    color: "#000"
  },
};

export default GHLDataSummary;