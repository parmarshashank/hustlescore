'use client';

import { motion } from "framer-motion";
import { useRouter } from 'next/navigation';

// Animation Variants
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

const staggerChildren = {
  animate: {
    transition: { staggerChildren: 0.15 },
  },
};

const buttonVariants = {
  whileHover: { scale: 1.05 },
  whileTap: { scale: 0.95 },
};

const cardHover = {
  whileHover: { y: -10 },
  transition: { type: "spring", stiffness: 300 },
};

export default function Home() {
  const router = useRouter();

  const navigateTo = (path: string) => router.push(path);

  return (
    <main>
      {/* HERO */}
      <motion.section
        className="hero"
        initial="initial"
        animate="animate"
        transition={{ duration: 0.8 }}
      >
        <motion.div className="container hero-content" variants={staggerChildren}>
          <motion.h1 variants={fadeInUp}>
            Where Hustle Meets Opportunity
          </motion.h1>
          <motion.p variants={fadeInUp}>
            We transform your work history into your financial future
          </motion.p>
          <motion.div className="cta-group" variants={fadeInUp}>
            <motion.button
              className="button button-primary"
              aria-label="Check Your HustleScore"
              variants={buttonVariants}
            >
              Check Your HustleScore
            </motion.button>
            <motion.button
              className="button button-secondary"
              aria-label="For Gig Platforms"
              onClick={() => navigateTo('/platforms')}
              variants={buttonVariants}
            >
              For Platforms
            </motion.button>
            <motion.button
              className="button button-secondary"
              aria-label="For Bank Agents"
              onClick={() => navigateTo('/agents')}
              variants={buttonVariants}
            >
              For Agents
            </motion.button>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* THREE PILLARS */}
      <section className="section pillars">
        <div className="container">
          <motion.div
            className="pillars-grid grid"
            variants={staggerChildren}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.3 }}
          >
            {[
              {
                icon: "fas fa-user-tie",
                title: "For Gig Workers",
                features: [
                  ["Fair Credit Access", "Use your real work data to get loan offers."],
                  ["One Profile, Many Platforms", "Combine your efforts into a single HustleScore."],
                  ["You're in Control", "Choose the best bid, on your terms."],
                ],
              },
              {
                icon: "fas fa-building",
                title: "For Gig Platforms",
                features: [
                  ["Boost Worker Welfare", "Offer financial tools without building them."],
                  ["Non-intrusive", "We never ask your users for data directly."],
                  ["Revenue Sharing", "Earn a cut every time your data empowers a loan."],
                ],
              },
              {
                icon: "fas fa-search-dollar",
                title: "For Bank Agents",
                features: [
                  ["Filtered Leads", "See only qualified, pre-scored applicants."],
                  ["Bid to Connect", "Compete to finance top-tier gig workers."],
                  ["Verified Hustle", "Transparent, trustworthy performance data."],
                ],
              },
            ].map((pillar, idx) => (
              <motion.div key={idx} className="pillar-card" variants={fadeInUp} {...cardHover}>
                <i className={`icon ${pillar.icon}`}></i>
                <h3>{pillar.title}</h3>
                {pillar.features.map(([heading, desc], i) => (
                  <motion.div key={i} variants={fadeInUp}>
                    <h4>{heading}</h4>
                    <p>{desc}</p>
                  </motion.div>
                ))}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="section how-it-works">
        <div className="container">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            How It Works
          </motion.h2>
          <motion.div
            className="steps"
            variants={staggerChildren}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.3 }}
          >
            {[
              ["Connect Platforms", "Link your gig work accounts securely"],
              ["Get Your Score", "We compute your HustleScore instantly"],
              ["Request Loans", "Submit your credit requirements"],
              ["Receive Bids", "Bank agents compete for your business"],
              ["Choose Offers", "Select the best terms for you"],
              ["Get Funded", "Complete the process and receive your loan"],
            ].map(([title, desc], i) => (
              <motion.div
                key={i}
                className="step"
                variants={fadeInUp}
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <h3>{title}</h3>
                <p>{desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FINAL CTA */}
      <motion.section
        className="section final-cta"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="container">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Join the Hustle Revolution
          </motion.h2>
          <motion.div className="cta-group" variants={staggerChildren}>
            <motion.button
              onClick={() => navigateTo('/dashboard')}
              className="button button-primary"
              aria-label="Worker Dashboard"
              variants={fadeInUp}
              {...buttonVariants}
            >
              I'm a Worker
            </motion.button>
            <motion.button
              onClick={() => navigateTo('/platforms')}
              className="button button-primary"
              aria-label="Platform Dashboard"
              variants={fadeInUp}
              {...buttonVariants}
            >
              I'm a Platform
            </motion.button>
            <motion.button
              onClick={() => navigateTo('/agents')}
              className="button button-primary"
              aria-label="Agent Dashboard"
              variants={fadeInUp}
              {...buttonVariants}
            >
              I'm an Agent
            </motion.button>
          </motion.div>
        </div>
      </motion.section>
    </main>
  );
}
