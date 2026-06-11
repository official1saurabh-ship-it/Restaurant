import React, { useEffect, useRef } from 'react';
import Layout from '../components/Layout';

const CRMPage = () => {
  const observerRef = useRef(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          observerRef.current.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

    document.querySelectorAll('.reveal').forEach(el => observerRef.current.observe(el));

    return () => {
      if (observerRef.current) observerRef.current.disconnect();
    };
  }, []);

  return (
    <Layout>
      {/* HERO SECTION */}
      <section className="hero">
        <div className="hero-blob-1"></div>
        <div className="hero-blob-2"></div>
        <div className="hero-pattern"></div>
        <div className="hero-inner">
          <div className="hero-content">
            <div className="hero-badge-row reveal">
              <div className="hero-badge">
                <div className="hero-badge-dot"></div>
                <span className="hero-badge-text">Retention Focused CRM</span>
              </div>
            </div>
            <h1 className="hero-h1 reveal delay-1">
              Turn One-Time Diners into <span className="fire-text">Loyal Fans</span>
            </h1>
            <p className="hero-desc reveal delay-2">
              RestaurantMitra CRM helps you understand your customers' preferences, track visit history, and launch automated marketing campaigns that bring them back.
            </p>
            <div className="hero-cta-row reveal delay-3">
              <a href="https://restaurants.biosoftech.in/register" className="btn btn-fire btn-lg">Start Building Loyalty</a>
              <a href="https://restaurants.biosoftech.in/register" className="btn btn-outline btn-lg">See Live CRM Demo</a>
            </div>
          </div>
          <div className="hero-visual reveal delay-2">
            <div className="dash-wrapper">
              <div className="dash-card" style={{ transform: 'none' }}>
                <div className="dash-titlebar">
                  <div className="win-btns"><div className="win-btn wb-r"></div><div className="win-btn wb-y"></div><div className="win-btn wb-g"></div></div>
                  <div className="win-title">CRM — Customer Insights</div>
                </div>
                <div className="dash-body">
                  <div className="dash-kpi-row">
                    <div className="kpi">
                      <div className="kpi-label">Total Customers</div>
                      <div className="kpi-val green">12,840</div>
                    </div>
                    <div className="kpi">
                      <div className="kpi-label">Retention Rate</div>
                      <div className="kpi-val fire">68%</div>
                    </div>
                    <div className="kpi">
                      <div className="kpi-label">New This Month</div>
                      <div className="kpi-val gold">452</div>
                    </div>
                  </div>
                  <div className="dash-section">
                    <div className="dash-section-title">👥 Top Spending Customers</div>
                    <div className="order-list">
                      <div className="order-row">
                        <div className="order-info"><div className="order-name">Aditya Verma</div><div className="order-sub">Visited 12 times · Last: 2 days ago</div></div>
                        <div className="order-right"><span className="status-pill sp-served">Gold Tier</span></div>
                      </div>
                      <div className="order-row">
                        <div className="order-info"><div className="order-name">Neha Kapoor</div><div className="order-sub">Visited 8 times · Last: 5 days ago</div></div>
                        <div className="order-right"><span className="status-pill sp-ready">Silver Tier</span></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="divider-gold"></div>

      {/* CRM FEATURES */}
      <section className="section-wrap alt">
        <div className="container">
          <div className="section-title-block center reveal">
            <div className="section-eyebrow"><span className="pill pill-fire">Core CRM Modules</span></div>
            <h2 className="display-lg">Powerful Tools to Boost Customer Lifetime Value</h2>
            <p className="section-desc">Move beyond just billing. Start building relationships with every plate you serve.</p>
          </div>

          <div className="feat-grid">
            <div className="feat-card reveal">
              <div className="feat-card-header">
                <div className="feat-ico" style={{ background: '#EDE9FE' }}>👤</div>
                <div>
                  <div className="feat-heading">Smart Profiles</div>
                  <div className="feat-subhead">Know your diners better</div>
                </div>
              </div>
              <p className="sc-info-desc">Detailed visit logs, favorite dishes, allergy notes, and spending patterns for every customer.</p>
            </div>

            <div className="feat-card reveal delay-1">
              <div className="feat-card-header">
                <div className="feat-ico" style={{ background: '#FEF5DC' }}>🎁</div>
                <div>
                  <div className="feat-heading">Loyalty Programs</div>
                  <div className="feat-subhead">Reward frequent visits</div>
                </div>
              </div>
              <p className="sc-info-desc">Automated point-based rewards. Tiered memberships (Gold, Silver, Platinum) with custom benefits.</p>
            </div>

            <div className="feat-card reveal delay-2">
              <div className="feat-card-header">
                <div className="feat-ico" style={{ background: '#DCFCE7' }}>💬</div>
                <div>
                  <div className="feat-heading">Auto-Marketing</div>
                  <div className="feat-subhead">Bring them back automatically</div>
                </div>
              </div>
              <p className="sc-info-desc">Automated WhatsApp & SMS for birthdays, anniversaries, and "we miss you" campaigns.</p>
            </div>

            <div className="feat-card reveal delay-3">
              <div className="feat-card-header">
                <div className="feat-ico" style={{ background: '#FFEDD5' }}>⭐</div>
                <div>
                  <div className="feat-heading">Feedback Engine</div>
                  <div className="feat-subhead">Digital star ratings</div>
                </div>
              </div>
              <p className="sc-info-desc">Collect digital feedback after every bill. Resolve issues before they hit social media.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SHOWCASE SECTION */}
      <section className="section-wrap">
        <div className="container">
          <div className="why-grid">
            <div className="reveal">
              <div className="section-eyebrow"><span className="pill pill-gold">Campaign Manager</span></div>
              <h2 className="display-lg">Launch Targeted Campaigns in Seconds</h2>
              <p className="section-desc">Filter customers by their favorite dish or last visit date and send personalized offers instantly.</p>

              <div className="why-list" style={{ marginTop: '32px' }}>
                <div className="feat-pt"><div className="feat-chk"></div> Filter by "Not visited in 30 days"</div>
                <div className="feat-pt"><div className="feat-chk"></div> Send "10% Off" coupon via WhatsApp</div>
                <div className="feat-pt"><div className="feat-chk"></div> Track coupon redemption in real-time</div>
                <div className="feat-pt"><div className="feat-chk"></div> ROI analysis for every campaign</div>
              </div>


            </div>
            <div className="reveal delay-2">
              <div className="card" style={{ padding: '0', overflow: 'hidden' }}>
                <div className="sc-screen sc-crm" style={{ aspectRatio: 'auto', padding: '40px' }}>
                  <div className="sc-label">Campaign Preview: "Miss You" Offer</div>
                  <div className="card" style={{ padding: '20px', maxWidth: '300px', margin: '0 auto', textAlign: 'left' }}>
                    <div className="flex gap-2 items-center mb-3">
                      <div className="w-8 h-8 rounded-full bg-orange-500"></div>
                      <div className="text-xs font-bold">RestaurantMitra</div>
                    </div>
                    <p className="text-xs leading-relaxed">Hi Rahul! It's been 30 days since your last Biryani at Sharma Dhaba. Use code <b>BACK10</b> for a 10% discount on your next visit! 🍛</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="divider-ember"></div>

      {/* CTA SECTION */}
      <div className="cta-banner">
        <div className="cta-banner-inner">
          <h2>Ready to Build a Community of Loyal Diners?</h2>
          <p>Stop losing customers to the competition. Start your data-driven growth journey today.</p>
          <div className="cta-banner-btns">
            <a href="https://restaurants.biosoftech.in/register" className="btn btn-white btn-lg">🍽️ Start Free CRM Trial</a>
            <a href="/contact" className="btn btn-glass btn-lg">Talk to a Consultant</a>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CRMPage;
