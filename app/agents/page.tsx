'use client';

import { motion } from 'framer-motion';
import './dashboard.css';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

const staggerChildren = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function AgentDashboard() {
  return (
    <div className="dashboard">
      {/* Header */}
      <motion.header
        className="dashboard-header"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="welcome-section">
          <div>
            <h1>Welcome Agent Rahul</h1>
            <p>Last synced: Today at 10:00 AM</p>
          </div>
        </div>
        <div className="notification-bell">
          <i className="fas fa-bell"></i>
          <span className="notification-badge">5</span>
        </div>
      </motion.header>

      {/* Dashboard Grid */}
      <motion.div
        className="dashboard-grid"
        variants={staggerChildren}
        initial="initial"
        animate="animate"
      >
        {/* Filters Section */}
        <motion.div className="dashboard-card" variants={fadeInUp}>
          <h2>Filter Requests</h2>
          <div className="filters">
            <select className="filter-dropdown">
              <option value="">Loan Type</option>
              <option value="personal">Personal</option>
              <option value="business">Business</option>
            </select>
            <select className="filter-dropdown">
              <option value="">Region</option>
              <option value="mumbai">Mumbai</option>
              <option value="delhi">Delhi</option>
              <option value="pan-india">Pan India</option>
            </select>
            <select className="filter-dropdown">
              <option value="">Amount Range</option>
              <option value="0-50k">0 - ₹50,000</option>
              <option value="50k-1l">₹50,000 - ₹1,00,000</option>
              <option value="1l+">₹1,00,000+</option>
            </select>
            <button className="button button-primary">Apply</button>
          </div>
        </motion.div>

        {/* Loan Requests */}
        <motion.div className="dashboard-card" variants={fadeInUp}>
          <h2>Loan Requests</h2>
          <div className="loan-request">
            <h3>
              Alex Sharma - ₹50,000
              <span className="loan-status status-open">Open</span>
            </h3>
            <p>Duration: 12 months • Rating: 4.8★ • Swiggy + Upwork</p>
            <div className="bid-actions">
              <button className="button button-primary">Send Bid</button>
              <button className="button button-secondary">Ignore</button>
            </div>
          </div>
          <div className="loan-request">
            <h3>
              Nidhi Jain - ₹1,00,000
              <span className="loan-status status-open">Open</span>
            </h3>
            <p>Duration: 24 months • Rating: 4.5★ • UrbanClap</p>
            <div className="bid-actions">
              <button className="button button-primary">Send Bid</button>
              <button className="button button-secondary">Ignore</button>
            </div>
          </div>
        </motion.div>

        {/* My Bids */}
        <motion.div className="dashboard-card" variants={fadeInUp}>
          <h2>My Bids</h2>
          <div className="bid-item">
            <div className="bid-details">
              <h3>Alex Sharma</h3>
              <p>Your Bid: 12% • 12 months • Mumbai</p>
            </div>
            <span className="loan-status status-pending">Pending Response</span>
          </div>
          <div className="bid-item">
            <div className="bid-details">
              <h3>Nidhi Jain</h3>
              <p>Your Bid: 11.5% • 18 months • Delhi</p>
            </div>
            <span className="loan-status status-accepted">Accepted</span>
          </div>
        </motion.div>

        {/* Performance Insights */}
        <motion.div className="dashboard-card" variants={fadeInUp}>
          <h2>Performance Insights</h2>
          <div className="insights-list">
            <div className="insight-item">
              <i className="fas fa-thumbs-up insight-icon"></i>
              <div>
                <h3>High acceptance rate</h3>
                <p>80% of your bids were accepted this week</p>
              </div>
            </div>
            <div className="insight-item">
              <i className="fas fa-clock insight-icon"></i>
              <div>
                <h3>Quick responses</h3>
                <p>Average response time under 4 hours</p>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
