import React, { useEffect, useRef } from 'react';
import Layout from '../components/Layout';

const InventoryPage = () => {
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
                <div className="hero-badge-dot" style={{ backgroundColor: '#E8500A' }}></div>
                <span className="hero-badge-text">Real-time Stock Tracking</span>
              </div>
            </div>
            <h1 className="hero-h1 reveal delay-1">
              Smart <span className="fire-text">Inventory</span> & Wastage Control
            </h1>
            <p className="hero-desc reveal delay-2">
              From raw materials to finished dishes, track every gram of your inventory. Reduce food wastage by up to 30% with automated recipe costing and low-stock alerts.
            </p>
            <div className="hero-cta-row reveal delay-3">
              <a href="https://restaurants.biosoftech.in/register" className="btn btn-fire btn-lg">Optimize My Inventory</a>
              <a href="https://restaurants.biosoftech.in/register" className="btn btn-outline btn-lg" >View Stock Dashboard</a>
            </div>
          </div>
          <div className="hero-visual reveal delay-2">
            <div className="dash-wrapper">
              <div className="dash-card" style={{ transform: 'none' }}>
                <div className="dash-titlebar">
                  <div className="win-btns"><div className="win-btn wb-r"></div><div className="win-btn wb-y"></div><div className="win-btn wb-g"></div></div>
                  <div className="win-title">Stock Overview</div>
                </div>
                <div className="dash-body">
                  <div className="dash-kpi-row">
                    <div className="kpi">
                      <div className="kpi-label">Stock Value</div>
                      <div className="kpi-val green">₹4,25,000</div>
                    </div>
                    <div className="kpi">
                      <div className="kpi-label">Low Stock Items</div>
                      <div className="kpi-val fire">12</div>
                    </div>
                    <div className="kpi">
                      <div className="kpi-label">Monthly Wastage</div>
                      <div className="kpi-val gold">₹8,450</div>
                    </div>
                  </div>
                  <div className="dash-section">
                    <div className="dash-section-title">⚠️ Low Stock Alerts</div>
                    <div className="order-list">
                      <div className="order-row">
                        <div className="order-info"><div className="order-name">Amul Butter (500g)</div><div className="order-sub">Remaining: 2 units · Min: 5 units</div></div>
                        <div className="order-right"><span className="status-pill sp-cooking">Critical</span></div>
                      </div>
                      <div className="order-row">
                        <div className="order-info"><div className="order-name">Basmati Rice (25kg)</div><div className="order-sub">Remaining: 1 bag · Min: 3 bags</div></div>
                        <div className="order-right"><span className="status-pill sp-ready">Order Now</span></div>
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

      {/* INVENTORY FEATURES */}
      <section className="section-wrap alt">
        <div className="container">
          <div className="section-title-block center reveal">
            <div className="section-eyebrow"><span className="pill pill-fire">Stock Management</span></div>
            <h2 className="display-lg">Everything You Need to Master Your Supply Chain</h2>
            <p className="section-desc">Streamline your procurement and cooking processes with data-driven insights.</p>
          </div>

          <div className="feat-grid">
            <div className="feat-card reveal">
              <div className="feat-card-header">
                <div className="feat-ico" style={{ background: '#FFEDD5' }}>📦</div>
                <div>
                  <div className="feat-heading">Raw Material Tracking</div>
                  <div className="feat-subhead">Manage every ingredient</div>
                </div>
              </div>
              <p className="sc-info-desc">Track stock levels of spices, vegetables, dairy, and more with auto-deduction on every order.</p>
            </div>

            <div className="feat-card reveal delay-1">
              <div className="feat-card-header">
                <div className="feat-ico" style={{ background: '#DCFCE7' }}>📋</div>
                <div>
                  <div className="feat-heading">Recipe Management</div>
                  <div className="feat-subhead">Cost per plate analysis</div>
                </div>
              </div>
              <p className="sc-info-desc">Link ingredients to menu items. Know exactly how much profit you make on every dish served.</p>
            </div>

            <div className="feat-card reveal delay-2">
              <div className="feat-card-header">
                <div className="feat-ico" style={{ background: '#FEF5DC' }}>🤝</div>
                <div>
                  <div className="feat-heading">Supplier Portal</div>
                  <div className="feat-subhead">Streamlined procurement</div>
                </div>
              </div>
              <p className="sc-info-desc">Manage multiple suppliers, compare prices, and generate purchase orders in one click.</p>
            </div>

            <div className="feat-card reveal delay-3">
              <div className="feat-card-header">
                <div className="feat-ico" style={{ background: '#EDE9FE' }}>📉</div>
                <div>
                  <div className="feat-heading">Wastage Analytics</div>
                  <div className="feat-subhead">Identify and stop losses</div>
                </div>
              </div>
              <p className="sc-info-desc">Log spoilage and wastage. Get reports on which items are contributing most to your losses.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SHOWCASE SECTION */}
      <section className="section-wrap">
        <div className="container">
          <div className="why-grid">
            <div className="reveal">
              <div className="section-eyebrow"><span className="pill pill-gold">Recipe Costing</span></div>
              <h2 className="display-lg">Precise Costing for Higher Profits</h2>
              <p className="section-desc">Our intelligent engine calculates the exact cost of your dishes based on current market prices of ingredients.</p>

              <div className="why-list" style={{ marginTop: '32px' }}>
                <div className="feat-pt"><div className="feat-chk"></div> Ingredient-level cost breakdown</div>
                <div className="feat-pt"><div className="feat-chk"></div> Auto-update margins on price hikes</div>
                <div className="feat-pt"><div className="feat-chk"></div> Portion size & wastage overheads</div>
                <div className="feat-pt"><div className="feat-chk"></div> Menu engineering for best sellers</div>
              </div>

            </div>
            <div className="reveal delay-2">
              <div className="card" style={{ padding: '0', overflow: 'hidden' }}>
                <div className="sc-screen sc-inv" style={{ aspectRatio: 'auto', padding: '40px' }}>
                  <div className="sc-label">Dish Costing: Paneer Butter Masala</div>
                  <div className="sc-row"><span className="sc-row-l">Raw Paneer (200g)</span><span className="sc-row-r">₹72.00</span></div>
                  <div className="sc-row"><span className="sc-row-l">Butter & Cream</span><span className="sc-row-r">₹28.00</span></div>
                  <div className="sc-row"><span className="sc-row-l">Gravy Base & Spices</span><span className="sc-row-r">₹15.00</span></div>
                  <div className="sc-row" style={{ borderTop: '1px solid rgba(255,255,255,0.3)', paddingTop: '10px', marginTop: '10px' }}>
                    <span className="sc-row-l" style={{ fontWeight: '700' }}>Total Cost</span>
                    <span className="sc-row-r" style={{ fontWeight: '700' }}>₹115.00</span>
                  </div>
                  <div className="sc-row"><span className="sc-row-l">Selling Price</span><span className="sc-row-r">₹350.00</span></div>
                  <div className="sc-row" style={{ color: '#86EFAC' }}><span className="sc-row-l">Gross Profit (67%)</span><span className="sc-row-r">₹235.00</span></div>
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
          <h2>Stop Guessing. Start Measuring Your Profits.</h2>
          <p>Join thousands of restaurants saving lakhs on food costs with our advanced inventory management.</p>
          <div className="cta-banner-btns">
            <a href="https://restaurants.biosoftech.in/register" className="btn btn-white btn-lg">🍽️ Start Free Inventory Trial</a>
            <a href="/contact" className="btn btn-glass btn-lg">Book a Stock Audit Demo</a>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default InventoryPage;
