import { useState } from "react";
import "./Navbar.css";

const navItems = [
  {
    id: "dashboard",
    label: "Dashboard",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="7" height="7" rx="1" />
        <rect x="14" y="3" width="7" height="7" rx="1" />
        <rect x="3" y="14" width="7" height="7" rx="1" />
        <rect x="14" y="14" width="7" height="7" rx="1" />
      </svg>
    ),
  },
  {
    id: "staff",
    label: "Staff",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    badge: 3,
  },
  {
    id: "locations",
    label: "Locations",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
  },
  {
    id: "tasks",
    label: "Tasks",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 11l3 3L22 4" />
        <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
      </svg>
    ),
    badge: 7,
  },
  {
    id: "attendance",
    label: "Attendance",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
        <path d="M8 14h.01" />
        <path d="M12 14h.01" />
        <path d="M16 14h.01" />
        <path d="M8 18h.01" />
        <path d="M12 18h.01" />
      </svg>
    ),
  },
  {
    id: "profile",
    label: "Profile",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
      </svg>
    ),
  },
];

export default function Navbar({ activeItem, onNavChange }) {
  const [collapsed, setCollapsed] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);

  return (
    <aside className={`navbar-sidebar ${collapsed ? "collapsed" : ""}`}>
      {/* Brand */}
      <div className="navbar-brand">
        <div className="navbar-logo">
          <svg viewBox="0 0 40 40" fill="none">
            <circle cx="20" cy="20" r="19" stroke="url(#navGrad)" strokeWidth="2" />
            <path d="M13 20l5 5 9-10" stroke="url(#navGrad2)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            <defs>
              <linearGradient id="navGrad" x1="0" y1="0" x2="40" y2="40">
                <stop offset="0%" stopColor="#a78bfa" />
                <stop offset="100%" stopColor="#60a5fa" />
              </linearGradient>
              <linearGradient id="navGrad2" x1="0" y1="0" x2="40" y2="40">
                <stop offset="0%" stopColor="#a78bfa" />
                <stop offset="100%" stopColor="#60a5fa" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        {!collapsed && <span className="navbar-brand-name">FinalProject</span>}
        <button
          className="navbar-collapse-btn"
          onClick={() => setCollapsed((c) => !c)}
          aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
          id="sidebar-toggle-btn"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            {collapsed ? (
              <path d="M9 18l6-6-6-6" />
            ) : (
              <path d="M15 18l-6-6 6-6" />
            )}
          </svg>
        </button>
      </div>

      {/* Divider */}
      <div className="navbar-divider" />

      {/* Navigation Items */}
      <nav className="navbar-nav">
        <ul className="navbar-list">
          {navItems.map((item) => {
            const isActive = activeItem === item.id;
            return (
              <li key={item.id} className="navbar-list-item">
                <button
                  id={`nav-${item.id}`}
                  className={`navbar-item ${isActive ? "active" : ""} ${hoveredItem === item.id ? "hovered" : ""}`}
                  onClick={() => onNavChange && onNavChange(item.id)}
                  onMouseEnter={() => setHoveredItem(item.id)}
                  onMouseLeave={() => setHoveredItem(null)}
                  aria-current={isActive ? "page" : undefined}
                >
                  {isActive && <span className="active-indicator" />}
                  <span className="navbar-item-icon">{item.icon}</span>
                  {!collapsed && (
                    <>
                      <span className="navbar-item-label">{item.label}</span>
                      {item.badge && (
                        <span className="navbar-item-badge">{item.badge}</span>
                      )}
                    </>
                  )}
                  {collapsed && item.badge && (
                    <span className="navbar-item-badge-dot" />
                  )}
                  {collapsed && (
                    <span className="navbar-tooltip">{item.label}</span>
                  )}
                </button>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Bottom Section - User Avatar */}
      <div className="navbar-footer">
        <div className="navbar-divider" />
        <div className="navbar-user">
          <div className="navbar-avatar">
            <span>A</span>
            <span className="avatar-status" />
          </div>
          {!collapsed && (
            <div className="navbar-user-info">
              <span className="navbar-user-name">Admin User</span>
              <span className="navbar-user-role">Administrator</span>
            </div>
          )}
        </div>
      </div>
    </aside>
  );
}
