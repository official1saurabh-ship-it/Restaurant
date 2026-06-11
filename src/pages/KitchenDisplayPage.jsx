import React, { useEffect, useRef } from 'react';
import Layout from '../components/Layout';

const KitchenDisplayPage = () => {
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
                <div className="hero-badge-dot" style={{ backgroundColor: '#2ecc71' }}></div>
                <span className="hero-badge-text">Paperless Kitchen Operations</span>
              </div>
            </div>
            <h1 className="hero-h1 reveal delay-1">
              Zero-Error <span className="fire-text">Kitchen Display</span> System
            </h1>
            <p className="hero-desc reveal delay-2">
              Replace messy paper tickets with a sleek, real-time KDS. Track every KOT, monitor preparation times, and notify servers the second a dish is ready.
            </p>
            <div className="hero-cta-row reveal delay-3">
              <a href="https://restaurants.biosoftech.in/register" className="btn btn-fire btn-lg">Digitize My Kitchen</a>
              <a href="https://restaurants.biosoftech.in/register" className="btn btn-outline btn-lg">Watch KDS in Action</a>
            </div>
          </div>
          <div className="hero-visual reveal delay-2">
            <div className="dash-wrapper">
              <div className="dash-card" style={{ transform: 'none' }}>
                <div className="dash-titlebar" style={{ background: 'var(--success)' }}>
                  <div className="win-btns"><div className="win-btn wb-r"></div><div className="win-btn wb-y"></div><div className="win-btn wb-g"></div></div>
                  <div className="win-title">Live Kitchen Board</div>
                </div>
                <div className="dash-body">
                  <div className="dash-kpi-row">
                    <div className="kpi">
                      <div className="kpi-label">Active KOTs</div>
                      <div className="kpi-val fire">08</div>
                    </div>
                    <div className="kpi">
                      <div className="kpi-label">Avg Prep Time</div>
                      <div className="kpi-val green">12m</div>
                    </div>
                    <div className="kpi">
                      <div className="kpi-label">Ready Orders</div>
                      <div className="kpi-val gold">05</div>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-3 mt-4">
                    <div className="dash-section" style={{ borderLeft: '4px solid var(--danger)' }}>
                      <div className="dash-section-title">Order #128 · Table 4</div>
                      <div className="order-list">
                        <div className="text-xs font-bold py-1 border-bottom">1 × Butter Chicken</div>
                        <div className="text-xs font-bold py-1 border-bottom">4 × Garlic Naan</div>
                        <div className="text-[10px] text-red-500 font-bold mt-2">⏳ 14:20 mins (Late)</div>
                      </div>
                    </div>
                    <div className="dash-section" style={{ borderLeft: '4px solid var(--gold)' }}>
                      <div className="dash-section-title">Order #130 · Table 7</div>
                      <div className="order-list">
                        <div className="text-xs font-bold py-1 border-bottom">2 × Veg Biryani</div>
                        <div className="text-xs font-bold py-1 border-bottom">1 × Raita</div>
                        <div className="text-[10px] text-yellow-600 font-bold mt-2">🔥 Cooking...</div>
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

      {/* KDS FEATURES */}
      <section className="section-wrap alt">
        <div className="container">
          <div className="section-title-block center reveal">
            <div className="section-eyebrow"><span className="pill pill-fire">Kitchen Efficiency</span></div>
            <h2 className="display-lg">The Command Center of Your Kitchen</h2>
            <p className="section-desc">Eliminate verbal orders and shouting. Let the KDS coordinate your culinary team.</p>
          </div>

          <div className="feat-grid">
            <div className="feat-card reveal">
              <div className="feat-card-header">
                <div className="feat-ico" style={{ background: '#DCFCE7' }}>👨‍🍳</div>
                <div>
                  <div className="feat-heading">Station Routing</div>
                  <div className="feat-subhead">Organized preparation</div>
                </div>
              </div>
              <p className="sc-info-desc">Automatically route appetizers to the Tandoor station and mains to the Curry station.</p>
            </div>

            <div className="feat-card reveal delay-1">
              <div className="feat-card-header">
                <div className="feat-ico" style={{ background: '#FEE2E2' }}>⏱️</div>
                <div>
                  <div className="feat-heading">Order Timers</div>
                  <div className="feat-subhead">Maintain SLA quality</div>
                </div>
              </div>
              <p className="sc-info-desc">Color-coded timers show how long an order has been pending. Yellow for warning, Red for late.</p>
            </div>

            <div className="feat-card reveal delay-2">
              <div className="feat-ico" style={{ background: '#FEF5DC', width: '50px', height: '50px', borderRadius: '14px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '23px', marginBottom: '20px' }}>🔔</div>
              <div>
                <div className="feat-heading">Instant Notifications</div>
                <div className="feat-subhead">Seamless service</div>
              </div>
              <p className="sc-info-desc">Notify waiters on their mobile app or watch as soon as the chef marks a dish as 'Ready'.</p>
            </div>

            <div className="feat-card reveal delay-3">
              <div className="feat-card-header">
                <div className="feat-ico" style={{ background: '#EDE9FE' }}>📊</div>
                <div>
                  <div className="feat-heading">Kitchen Analytics</div>
                  <div className="feat-subhead">Measure performance</div>
                </div>
              </div>
              <p className="sc-info-desc">Analyze busiest hours, average prep time per chef, and identify bottlenecks in your kitchen.</p>
            </div>
          </div>
        </div>
      </section>

      {/* VISUAL SHOWCASE */}
      <section className="section-wrap">
        <div className="container">
          <div className="why-grid">
            <div className="reveal">
              <div className="section-eyebrow"><span className="pill pill-gold">Paperless Workflow</span></div>
              <h2 className="display-lg">Say Goodbye to Lost Paper Tickets</h2>
              <p className="section-desc">Lost KOTs are the #1 reason for guest dissatisfaction. RestaurantMitra KDS ensures every order is captured and visible.</p>

              <div className="why-list" style={{ marginTop: '32px' }}>
                <div className="feat-pt"><div className="feat-chk"></div> No more smudged or lost KOTs</div>
                <div className="feat-pt"><div className="feat-chk"></div> Instant updates for modified orders</div>
                <div className="feat-pt"><div className="feat-chk"></div> Clear visibility of guest preferences</div>
                <div className="feat-pt"><div className="feat-chk"></div> Historical data of every single dish</div>
              </div>


            </div>
            <div className="reveal delay-2">
              <div className="card" style={{ padding: '0', overflow: 'hidden' }}>
                <div className="sc-screen sc-kds" style={{ aspectRatio: 'auto', padding: '40px' }}>
                  <div className="sc-label">Kitchen Status Board</div>
                  <div className="sc-row"><span className="sc-row-l">Total Orders Pending</span><span className="sc-row-r">08</span></div>
                  <div className="sc-row"><span className="sc-row-l">Orders Late (>15m)</span><span className="sc-row-r" style={{ color: '#FCA5A5' }}>02</span></div>
                  <div className="sc-row"><span className="sc-row-l">Efficiency Score</span><span className="sc-row-r" style={{ color: '#86EFAC' }}>94%</span></div>
                  <div className="mt-4 p-3 bg-white/10 rounded-lg">
                    <div className="text-[10px] uppercase font-bold text-white/50 mb-2">Most Ordered Now</div>
                    <div className="flex justify-between text-xs"><span>Paneer Tikka</span><span>12 units</span></div>
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
          <h2>Want a High-Performance Kitchen?</h2>
          <p>Join 5,000+ restaurants that have eliminated kitchen chaos with RestaurantMitra KDS.</p>
          <div className="cta-banner-btns">
            <a href="https://restaurants.biosoftech.in/register" className="btn btn-white btn-lg">🍽️ Start Free KDS Trial</a>
            <a href="/contact" className="btn btn-glass btn-lg">Get a Custom Kitchen Audit</a>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default KitchenDisplayPage;
