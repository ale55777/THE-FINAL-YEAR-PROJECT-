import "./Dashboard.css";

const stats = [
  { id: "stat-staff", label: "Total Staff", value: "142", change: "+4 this week", positive: true, icon: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  )},
  { id: "stat-tasks", label: "Open Tasks", value: "37", change: "7 due today", positive: false, icon: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 11l3 3L22 4" /><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
    </svg>
  )},
  { id: "stat-locations", label: "Locations", value: "12", change: "+1 this month", positive: true, icon: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
    </svg>
  )},
  { id: "stat-attendance", label: "Attendance Rate", value: "94%", change: "↑ 2% vs last week", positive: true, icon: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" /><line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  )},
];

export default function Dashboard({ activePage }) {
  const titles = {
    dashboard: "Dashboard",
    staff: "Staff Management",
    locations: "Locations",
    tasks: "Tasks",
    attendance: "Attendance",
    profile: "My Profile",
  };

  return (
    <main className="dashboard-main">
      <div className="dashboard-header">
        <div>
          <h1 className="dashboard-title">{titles[activePage] || "Dashboard"}</h1>
          <p className="dashboard-subtitle">
            {activePage === "dashboard"
              ? "Welcome back, Admin! Here's your overview."
              : `Manage your ${titles[activePage]?.toLowerCase()} here.`}
          </p>
        </div>
        <div className="dashboard-header-actions">
          <button id="header-notify-btn" className="header-icon-btn" aria-label="Notifications">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
              <path d="M13.73 21a2 2 0 0 1-3.46 0" />
            </svg>
            <span className="header-icon-badge">3</span>
          </button>
          <button id="header-settings-btn" className="header-icon-btn" aria-label="Settings">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="3" />
              <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
            </svg>
          </button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="stats-grid">
        {stats.map((stat) => (
          <div key={stat.id} id={stat.id} className="stat-card">
            <div className="stat-icon">{stat.icon}</div>
            <div className="stat-content">
              <div className="stat-value">{stat.value}</div>
              <div className="stat-label">{stat.label}</div>
              <div className={`stat-change ${stat.positive ? "positive" : "negative"}`}>
                {stat.change}
              </div>
            </div>
            <div className="stat-glow" />
          </div>
        ))}
      </div>

      {/* Activity / Placeholder Content */}
      <div className="dashboard-grid">
        <div className="dashboard-card" id="recent-activity-card">
          <div className="card-header">
            <h2 className="card-title">Recent Activity</h2>
            <button className="card-action-btn" id="view-all-activity-btn">View All</button>
          </div>
          <ul className="activity-list">
            {[
              { id:"act-1", text: "Alice Johnson clocked in", time: "2 min ago", color: "#22c55e" },
              { id:"act-2", text: "New task assigned to Bob", time: "15 min ago", color: "#a78bfa" },
              { id:"act-3", text: "Location 'HQ' updated", time: "1 hr ago", color: "#60a5fa" },
              { id:"act-4", text: "Marcus Reed completed Task #42", time: "2 hr ago", color: "#f59e0b" },
              { id:"act-5", text: "3 staff marked absent", time: "3 hr ago", color: "#ef4444" },
            ].map((item) => (
              <li key={item.id} id={item.id} className="activity-item">
                <span className="activity-dot" style={{ background: item.color, boxShadow: `0 0 8px ${item.color}80` }} />
                <span className="activity-text">{item.text}</span>
                <span className="activity-time">{item.time}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="dashboard-card" id="quick-stats-card">
          <div className="card-header">
            <h2 className="card-title">Quick Overview</h2>
          </div>
          <div className="overview-bars">
            {[
              { label: "Tasks Done", value: 68, color: "#a78bfa" },
              { label: "Attendance", value: 94, color: "#60a5fa" },
              { label: "Staff Active", value: 81, color: "#22c55e" },
              { label: "Locations OK", value: 100, color: "#f59e0b" },
            ].map((bar, i) => (
              <div key={i} className="bar-row">
                <div className="bar-label-row">
                  <span className="bar-name">{bar.label}</span>
                  <span className="bar-percent">{bar.value}%</span>
                </div>
                <div className="bar-track">
                  <div
                    className="bar-fill"
                    style={{ width: `${bar.value}%`, background: `linear-gradient(90deg, ${bar.color}99, ${bar.color})` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
