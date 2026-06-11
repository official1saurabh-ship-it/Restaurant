import React, { useEffect, useRef } from 'react';
import Layout from '../components/Layout';

const TableManagementPage = () => {
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
                <div className="hero-badge-dot" style={{ backgroundColor: '#0EA5D4' }}></div>
                <span className="hero-badge-text">Interactive Floor Map</span>
              </div>
            </div>
            <h1 className="hero-h1 reveal delay-1">
              Master Your <span className="fire-text">Floor Plan</span> in Real-Time
            </h1>
            <p className="hero-desc reveal delay-2">
              Optimize your seating capacity and reduce guest wait times. Visualize your entire restaurant floor, manage reservations, and seat walk-ins with a single tap.
            </p>
            <div className="hero-cta-row reveal delay-3">
              <a href="https://restaurants.biosoftech.in/register" className="btn btn-fire btn-lg">Setup My Floor Map</a>
              <a href="https://restaurants.biosoftech.in/register" className="btn btn-outline btn-lg" >See Floor Map View</a>
            </div>
          </div>
          <div className="hero-visual reveal delay-2">
            <div className="dash-wrapper">
              <div className="dash-card" style={{ transform: 'none' }}>
                <div className="dash-titlebar" style={{ background: '#0EA5D4' }}>
                  <div className="win-btns"><div className="win-btn wb-r"></div><div className="win-btn wb-y"></div><div className="win-btn wb-g"></div></div>
                  <div className="win-title" style={{ color: '#fff' }}>Ground Floor — Table Layout</div>
                </div>
                <div className="dash-body">
                  <div className="dash-kpi-row">
                    <div className="kpi">
                      <div className="kpi-label">Free Tables</div>
                      <div className="kpi-val green">06</div>
                    </div>
                    <div className="kpi">
                      <div className="kpi-label">Occupied</div>
                      <div className="kpi-val fire">08</div>
                    </div>
                    <div className="kpi">
                      <div className="kpi-label">Reserved</div>
                      <div className="kpi-val gold">02</div>
                    </div>
                  </div>
                  <div className="table-layout mt-4">
                    <div className="tbl tbl-free">T1 ✓</div>
                    <div className="tbl tbl-busy">T2 ●</div>
                    <div className="tbl tbl-busy">T3 ●</div>
                    <div className="tbl tbl-rsv">T4 ◐</div>
                    <div className="tbl tbl-free">T5 ✓</div>
                    <div className="tbl tbl-busy">T6 ●</div>
                    <div className="tbl tbl-free">T7 ✓</div>
                    <div className="tbl tbl-busy">T8 ●</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="divider-gold"></div>

      {/* TABLE MGMT FEATURES */}
      <section className="section-wrap alt">
        <div className="container">
          <div className="section-title-block center reveal">
            <div className="section-eyebrow"><span className="pill pill-fire">Floor Operations</span></div>
            <h2 className="display-lg">Advanced Seating & Reservation Tools</h2>
            <p className="section-desc">Adapt to every rush hour with flexible floor management tools designed for speed.</p>
          </div>

          <div className="feat-grid">
            <div className="feat-card reveal">
              <div className="feat-card-header">
                <div className="feat-ico" style={{ background: '#E0F2FE' }}>🪑</div>
                <div>
                  <div className="feat-heading">Visual Table Grid</div>
                  <div className="feat-subhead">Live status colors</div>
                </div>
              </div>
              <p className="sc-info-desc">Instantly identify free (Green), occupied (Red), and reserved (Yellow) tables on a visual map.</p>
            </div>

            <div className="feat-card reveal delay-1">
              <div className="feat-card-header">
                <div className="feat-ico" style={{ background: '#FEF5DC' }}>📅</div>
                <div>
                  <div className="feat-heading">Reservation Calendar</div>
                  <div className="feat-subhead">Advance bookings</div>
                </div>
              </div>
              <p className="sc-info-desc">Manage table bookings days in advance. Automatically block tables and notify guests via SMS.</p>
            </div>

            <div className="feat-card reveal delay-2">
              <div className="feat-card-header">
                <div className="feat-ico" style={{ background: '#DCFCE7' }}>🏢</div>
                <div>
                  <div className="feat-heading">Multi-Section Support</div>
                  <div className="feat-subhead">Floors & Areas</div>
                </div>
              </div>
              <p className="sc-info-desc">Manage Ground Floor, Rooftop, and Private Dining Areas separately from one dashboard.</p>
            </div>

            <div className="feat-card reveal delay-3">
              <div className="feat-card-header">
                <div className="feat-ico" style={{ background: '#EDE9FE' }}>🤝</div>
                <div>
                  <div className="feat-heading">Merge & Transfer</div>
                  <div className="feat-subhead">Flexible seating</div>
                </div>
              </div>
              <p className="sc-info-desc">Easily merge multiple tables for large groups or transfer orders from one table to another.</p>
            </div>
          </div>
        </div>
      </section>

      {/* VISUAL SHOWCASE */}
      <section className="section-wrap">
        <div className="container">
          <div className="why-grid">
            <div className="reveal">
              <div className="section-eyebrow"><span className="pill pill-gold">Guest Experience</span></div>
              <h2 className="display-lg">Reduce Guest Turnaround Time</h2>
              <p className="section-desc">Track how long each table has been occupied and get notified when a guest's bill is printed, so you can prep for the next party.</p>

              <div className="why-list" style={{ marginTop: '32px' }}>
                <div className="feat-pt"><div className="feat-chk"></div> Average Seating Duration analytics</div>
                <div className="feat-pt"><div className="feat-chk"></div> Waitlist management with SMS alerts</div>
                <div className="feat-pt"><div className="feat-chk"></div> Server-wise table assignment</div>
                <div className="feat-pt"><div className="feat-chk"></div> Real-time occupied pax count</div>
              </div>


            </div>
            <div className="reveal delay-2">
              <div className="card" style={{ padding: '0', overflow: 'hidden' }}>
                <div className="sc-screen sc-tbl" style={{ aspectRatio: 'auto', padding: '40px' }}>
                  <div className="sc-label">Live Capacity Board</div>
                  <div className="sc-row"><span className="sc-row-l">Total Capacity</span><span className="sc-row-r">64 Pax</span></div>
                  <div className="sc-row"><span className="sc-row-l">Current Occupancy</span><span className="sc-row-r" style={{ color: '#FCA5A5' }}>82%</span></div>
                  <div className="sc-row"><span className="sc-row-l">Available Now</span><span className="sc-row-r" style={{ color: '#86EFAC' }}>4 Tables</span></div>
                  <div className="mt-4 p-3 bg-white/10 rounded-lg">
                    <div className="text-[10px] uppercase font-bold text-white/50 mb-2">Waitlist (3)</div>
                    <div className="flex justify-between text-xs text-white"><span>Sharma Party (4 Pax)</span><span>~15m</span></div>
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
          <h2>Optimize Your Table Turnover Today.</h2>
          <p>Don't keep your guests waiting. Digitise your floor management and increase your daily covers.</p>
          <div className="cta-banner-btns">
            <a href="https://restaurants.biosoftech.in/register" className="btn btn-white btn-lg">🍽️ Start Free Table Trial</a>
            <a href="/contact" className="btn btn-glass btn-lg">Talk to a Seating Expert</a>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default TableManagementPage;
