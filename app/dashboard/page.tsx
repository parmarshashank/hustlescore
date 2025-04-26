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

export default function Dashboard() {
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
            <h1>Welcome back, Alex</h1>
            <p>Last updated: Today at 9:30 AM</p>
          </div>
        </div>
        <div className="notification-bell">
          <i className="fas fa-bell"></i>
          <span className="notification-badge">3</span>
        </div>
      </motion.header>

      {/* Main Grid */}
      <motion.div
        className="dashboard-grid"
        variants={staggerChildren}
        initial="initial"
        animate="animate"
      >
        {/* HustleScore Card */}
        <motion.div className="dashboard-card hustle-score" variants={fadeInUp}>
          <div className="score-number">86</div>
          <div className="score-badge">
            <i className="fas fa-trophy"></i> Top 10% in your city
          </div>
          <div className="placeholder">
            <i className="fas fa-chart-line"></i>
            <p>Coming soon: HustleScore history</p>
          </div>
        </motion.div>

        {/* Connected Platforms */}
        <motion.div className="dashboard-card" variants={fadeInUp}>
          <h2>Connected Platforms</h2>
          <div className="platform-list">
            <div className="platform-item">
              <span>Swiggy</span>
              <span>4.8★</span>
            </div>
            <div className="platform-item">
              <span>Upwork</span>
              <span>Top Rated</span>
            </div>
          </div>
          <div className="placeholder">
            <i className="fas fa-plus-circle"></i>
            <p>Add new platform</p>
          </div>
        </motion.div>

        {/* Loan Request */}
        <motion.div className="dashboard-card" variants={fadeInUp}>
          <h2>Loan Requests</h2>
          <div className="loan-request">
            <h3>
              Personal Loan - ₹50,000
              <span className="loan-status status-pending">Pending</span>
            </h3>
            <p>Time remaining: 48 hours</p>
            <div className="bid-actions">
              <button className="button button-secondary">Edit</button>
              <button className="button button-secondary">Cancel</button>
            </div>
          </div>
        </motion.div>

        {/* Agent Bids */}
        <motion.div className="dashboard-card" variants={fadeInUp}>
          <h2>Agent Bids</h2>
          <div className="bid-list">
            <div className="bid-item">
              <div className="bid-details">
                <h3>HDFC Bank</h3>
                <p>12% interest • 12 months • Mumbai</p>
              </div>
              <div className="bid-actions">
                <button className="button button-primary">View</button>
                <button className="button button-secondary">Call</button>
              </div>
            </div>
            <div className="bid-item">
              <div className="bid-details">
                <h3>ICICI Bank</h3>
                <p>13.5% interest • 24 months • Pan India</p>
              </div>
              <div className="bid-actions">
                <button className="button button-primary">View</button>
                <button className="button button-secondary">Call</button>
              </div>
            </div>
          </div>
          <p className="text-center mt-4">Bidding closes in: 2 days</p>
        </motion.div>

        {/* Insights */}
        <motion.div className="dashboard-card" variants={fadeInUp}>
          <h2>Insights & Recommendations</h2>
          <div className="insights-list">
            <div className="insight-item">
              <i className="fas fa-arrow-up insight-icon"></i>
              <div>
                <h3>Great progress!</h3>
                <p>25% more jobs this week</p>
              </div>
            </div>
            <div className="insight-item">
              <i className="fas fa-star insight-icon"></i>
              <div>
                <h3>Maintain ratings</h3>
                <p>Consistent 4.8+ rating boosts loan chances</p>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
