import React, { useEffect, useRef } from 'react';
import Layout from './components/Layout';

const Restaurants = () => {
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
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Restaurant Management Software",
          "provider": {
            "@type": "Organization",
            "name": "Biosoftech"
          },
          "description": "Biosoftech provides a Restaurant Management software to optimize orders, kitchen operations, and billing."
        })}
      </script>
      {/* HERO */}
      <section className="hero" id="hero">
        <div className="hero-blob-1"></div>
        <div className="hero-blob-2"></div>
        <div className="hero-pattern"></div>
        <div className="hero-inner">
          {/* LEFT: Content */}
          <div className="hero-content">
            <div className="hero-badge-row">
              <div className="hero-badge">
                <div className="hero-badge-dot"></div>
                <span className="hero-badge-text">5,000+ Restaurants Active Now</span>
              </div>
              <div className="hero-made-tag">🇮🇳 Made in India</div>
            </div>
            <h1 className="hero-h1">
              Restaurant Management System
            </h1>
            <p className="hero-desc">
              Complete POS Billing, Kitchen Display (KDS), Table Management, KOT, Inventory, CRM &amp; GST — one powerful platform built for Indian restaurants, dhabas, cafes and cloud kitchens.
            </p>
            <div className="hero-cta-row">
              <a href="https://restaurants.biosoftech.in/register" className="btn btn-fire btn-lg">🚀 Start Free Trial</a>
              <a href="#demo" className="btn btn-outline btn-lg">▶ Book a Free Demo</a>
            </div>
            <p className="hero-cta-note">✓ No credit card required &nbsp;·&nbsp; ✓ 14-day free trial &nbsp;·&nbsp; ✓ Cancel anytime</p>
            <div className="hero-tags-row" style={{ 'marginTop': '28px' }}>
              <span className="htag"><span className="htag-icon">✅</span> GST Ready</span>
              <span className="htag"><span className="htag-icon">🔥</span> KDS + KOT</span>
              <span className="htag"><span className="htag-icon">🪑</span> Table Mgmt</span>
              <span className="htag"><span className="htag-icon">☁️</span> Cloud Kitchen</span>
            </div>
          </div>
          {/* RIGHT: Dashboard Mockup */}
          <div className="hero-visual">
            <div className="dash-wrapper" aria-label="Screenshot of Biosoftech's Restaurant Management dashboard on a dark background, showing order tracking and menu management.">
              <div className="float-badge tl">
                <div className="fb-ico fb-ico-fire">🔥</div>
                <div>
                  <div className="fb-label">KOT Printed!</div>
                  <div className="fb-sub">Table 7 · 4 Items</div>
                </div>
              </div>
              <div className="dash-card">
                <div className="dash-titlebar">
                  <div className="win-btns">
                    <div className="win-btn wb-r"></div>
                    <div className="win-btn wb-y"></div>
                    <div className="win-btn wb-g"></div>
                  </div>
                  <div className="win-title"><span>Restaurant Mitra</span> — Dashboard</div>
                </div>
                <div className="dash-body">
                  <div className="dash-kpi-row">
                    <div className="kpi">
                      <div className="kpi-label">Today's Sales</div>
                      <div className="kpi-val green">₹32,450</div>
                      <div className="kpi-delta">↑ +14% vs yesterday</div>
                    </div>
                    <div className="kpi">
                      <div className="kpi-label">Active Orders</div>
                      <div className="kpi-val fire">47</div>
                      <div className="kpi-delta">8 pending</div>
                    </div>
                    <div className="kpi">
                      <div className="kpi-label">Avg. Bill</div>
                      <div className="kpi-val gold">₹689</div>
                      <div className="kpi-delta">↑ +6% vs avg</div>
                    </div>
                  </div>
                  <div className="dash-section">
                    <div className="dash-section-head">
                      <div className="dash-section-title">🪑 Live Table Status</div>
                      <div className="dash-section-meta">15 tables · Ground Floor</div>
                    </div>
                    <div className="table-layout">
                      <div className="tbl tbl-free">T1 ✓</div>
                      <div className="tbl tbl-busy">T2 ●</div>
                      <div className="tbl tbl-busy">T3 ●</div>
                      <div className="tbl tbl-rsv">T4 ◐</div>
                      <div className="tbl tbl-free">T5 ✓</div>
                      <div className="tbl tbl-busy">T6 ●</div>
                      <div className="tbl tbl-free">T7 ✓</div>
                      <div className="tbl tbl-busy">T8 ●</div>
                      <div className="tbl tbl-rsv">T9 ◐</div>
                      <div className="tbl tbl-free">T10 ✓</div>
                    </div>
                  </div>
                  <div className="dash-section">
                    <div className="dash-section-head">
                      <div className="dash-section-title">📋 Recent Orders (KOT)</div>
                      <div className="dash-section-meta">Live</div>
                    </div>
                    <div className="order-list">
                      <div className="order-row">
                        <div className="order-info">
                          <div className="order-name">Table 3 — Sharma Family</div>
                          <div className="order-sub">Dal Makhani, Naan × 4, Lassi × 2</div>
                        </div>
                        <div className="order-right">
                          <span className="order-amt">₹2,840</span>
                          <span className="status-pill sp-served">Served</span>
                        </div>
                      </div>
                      <div className="order-row">
                        <div className="order-info">
                          <div className="order-name">Table 6 — Walk-in</div>
                          <div className="order-sub">Paneer Tikka, Butter Chicken</div>
                        </div>
                        <div className="order-right">
                          <span className="order-amt">₹1,150</span>
                          <span className="status-pill sp-cooking">Cooking</span>
                        </div>
                      </div>
                      <div className="order-row">
                        <div className="order-info">
                          <div className="order-name">Delivery — Zomato #1248</div>
                          <div className="order-sub">Biryani × 2, Raita</div>
                        </div>
                        <div className="order-right">
                          <span className="order-amt">₹680</span>
                          <span className="status-pill sp-ready">Ready</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="float-badge br">
                <div className="fb-ico fb-ico-green">📊</div>
                <div>
                  <div className="fb-label">GSTR-3B Ready</div>
                  <div className="fb-sub">Auto-calculated · Export PDF</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="divider-gold"></div>

      {/* TRUST STRIP */}
      <div className="trust-strip">
        <div className="trust-inner">
          <div className="trust-label">Trusted by 5,000+ Restaurants Across India</div>
          <div className="trust-logos">
            <div className="trust-logo-chip">Sharma Dhaba</div>
            <div className="trust-logo-chip">Spice Garden</div>
            <div className="trust-logo-chip">Raj Biryani</div>
            <div className="trust-logo-chip">Meera Café</div>
            <div className="trust-logo-chip">Cloud Kitchen Co.</div>
            <div className="trust-logo-chip">Punjab Da Tadka</div>
            <div className="trust-logo-chip">Nawab's Kitchen</div>
          </div>
          <div className="trust-badges-row">
            <span className="trust-badge">✅ GST Compliant</span>
            <span className="trust-badge">🔥 KDS Ready</span>
            <span className="trust-badge">🪑 Table Management</span>
            <span className="trust-badge">📱 Mobile + Desktop</span>
            <span className="trust-badge">🇮🇳 Made in India</span>
            <span className="trust-badge">☁️ Cloud-Based</span>
          </div>
        </div>
      </div>

      {/* STATS BAR */}
      <div className="stats-bar">
        <div className="stats-inner">
          <div className="stat-item reveal">
            <div className="stat-num"><span className="stat-num-accent">5,000</span>+</div>
            <div className="stat-label">Restaurants Using RestaurantMitra</div>
          </div>
          <div className="stat-item reveal delay-1">
            <div className="stat-num"><span className="stat-num-accent">2</span>Cr+</div>
            <div className="stat-label">GST Bills Generated</div>
          </div>
          <div className="stat-item reveal delay-2">
            <div className="stat-num"><span className="stat-num-accent">99.9</span>%</div>
            <div className="stat-label">Platform Uptime SLA</div>
          </div>
          <div className="stat-item reveal delay-3">
            <div className="stat-num"><span className="stat-num-accent">4.9</span>★</div>
            <div className="stat-label">Average Customer Rating</div>
          </div>
        </div>
      </div>

      <div className="divider-ember"></div>

      {/* MODULES */}
      <section className="section-wrap" id="modules">
        <div className="container">
          <div className="section-title-block center reveal">
            <div className="section-eyebrow"><span className="pill pill-gold">Complete Suite</span></div>
            <h2 className="display-lg">Every Module Your Restaurant Needs</h2>
            <p className="section-desc">From the kitchen screen to your accountant's report — RestaurantMitra covers every operational touchpoint.</p>
          </div>
          <div className="modules-grid">
            <div className="module-card reveal"><div className="mod-ico" style={{ 'background': '#FFEDD5' }}>📊</div><div className="module-name">Dashboard</div></div>
            <div className="module-card reveal delay-1"><div className="mod-ico" style={{ 'background': '#DCFCE7' }}>👨‍🍳</div><div className="module-name">Kitchen Display (KDS)</div></div>
            <div className="module-card reveal delay-2"><div className="mod-ico" style={{ 'background': '#CCFBF1' }}>💳</div><div className="module-name">POS Billing</div></div>
            <div className="module-card reveal delay-3"><div className="mod-ico" style={{ 'background': '#FEF5DC' }}>🪑</div><div className="module-name">Tables</div></div>
            <div className="module-card reveal"><div className="mod-ico" style={{ 'background': '#EDE9FE' }}>🗂️</div><div className="module-name">Sections / Floors</div></div>
            <div className="module-card reveal delay-1"><div className="mod-ico" style={{ 'background': '#FFEDD5' }}>📈</div><div className="module-name">Sales Analytics</div></div>
            <div className="module-card reveal delay-2"><div className="mod-ico" style={{ 'background': '#FFF0E6' }}>🧾</div><div className="module-name">Orders (KOT)</div></div>
            <div className="module-card reveal delay-3"><div className="mod-ico" style={{ 'background': '#DCFCE7' }}>🧾</div><div className="module-name">Order Bills</div></div>
            <div className="module-card reveal"><div className="mod-ico" style={{ 'background': '#FEF5DC' }}>📄</div><div className="module-name">GST Invoices</div></div>
            <div className="module-card reveal delay-1"><div className="mod-ico" style={{ 'background': '#FEE2E2' }}>↩️</div><div className="module-name">Sales Returns</div></div>
            <div className="module-card reveal delay-2"><div className="mod-ico" style={{ 'background': '#F8F2E8' }}>💬</div><div className="module-name">Quotations</div></div>
            <div className="module-card reveal delay-3"><div className="mod-ico" style={{ 'background': '#E0F2FE' }}>🛒</div><div className="module-name">Purchases</div></div>
            <div className="module-card reveal"><div className="mod-ico" style={{ 'background': '#DCFCE7' }}>📦</div><div className="module-name">Inventory</div></div>
            <div className="module-card reveal delay-1"><div className="mod-ico" style={{ 'background': '#FEF5DC' }}>📋</div><div className="module-name">Purchase Orders</div></div>
            <div className="module-card reveal delay-2"><div className="mod-ico" style={{ 'background': '#FEE2E2' }}>↩️</div><div className="module-name">Purchase Returns</div></div>
            <div className="module-card reveal delay-3"><div className="mod-ico" style={{ 'background': '#CCFBF1' }}>👥</div><div className="module-name">Customers (CRM)</div></div>
            <div className="module-card reveal"><div className="mod-ico" style={{ 'background': '#FFEDD5' }}>🤝</div><div className="module-name">Suppliers</div></div>
            <div className="module-card reveal delay-1"><div className="mod-ico" style={{ 'background': '#EDE9FE' }}>📊</div><div className="module-name">Reports &amp; Analytics</div></div>
            <div className="module-card reveal delay-2"><div className="mod-ico" style={{ 'background': '#FCE7F3' }}>👩‍💼</div><div className="module-name">Staff / HR</div></div>
            <div className="module-card reveal delay-3"><div className="mod-ico" style={{ 'background': '#F8F2E8' }}>🏢</div><div className="module-name">Departments</div></div>
            <div className="module-card reveal"><div className="mod-ico" style={{ 'background': '#FEF5DC' }}>🏷️</div><div className="module-name">Menu Categories</div></div>
            <div className="module-card reveal delay-1"><div className="mod-ico" style={{ 'background': '#FFEDD5' }}>⚙️</div><div className="module-name">Configuration</div></div>
            <div className="module-card reveal delay-2"><div className="mod-ico" style={{ 'background': '#DCFCE7' }}>🏦</div><div className="module-name">Bank Accounts</div></div>
            <div className="module-card reveal delay-3"><div className="mod-ico" style={{ 'background': '#CCFBF1' }}>🎫</div><div className="module-name">Support Tickets</div></div>
          </div>
        </div>
      </section>

      <div className="divider-gold"></div>

      {/* FEATURES */}
      <section className="section-wrap alt" id="features">
        <div className="container">
          <div className="section-title-block center reveal">
            <div className="section-eyebrow"><span className="pill pill-fire">Core Features</span></div>
            <h2 className="display-lg">Powerful Tools for Every Restaurant Format</h2>
            <p className="section-desc">From fast food counters to fine dining establishments — RestaurantMitra adapts to your workflow.</p>
          </div>
          <div className="feat-grid">
            <div className="feat-card reveal">
              <div className="feat-card-header">
                <div className="feat-ico" style={{ 'background': '#CCFBF1' }}>💳</div>
                <div>
                  <h2 className="feat-heading">Efficient Order Management</h2>
                  <div className="feat-subhead">Fast, accurate billing at the counter</div>
                </div>
              </div>
              <div className="feat-points">
                <div className="feat-pt"><div className="feat-chk"></div>GST Compliant Tax Invoices (CGST/SGST/IGST)</div>
                <div className="feat-pt"><div className="feat-chk"></div>Split Bill &amp; Merge Table Support</div>
                <div className="feat-pt"><div className="feat-chk"></div>Discounts, Complimentary &amp; Void Management</div>
                <div className="feat-pt"><div className="feat-chk"></div>UPI / Cash / Card / Wallet Payment Modes</div>
                <div className="feat-pt"><div className="feat-chk"></div>Print / WhatsApp / Email Bills Instantly</div>
              </div>
            </div>
            <div className="feat-card reveal delay-1">
              <div className="feat-card-header">
                <div className="feat-ico" style={{ 'background': '#DCFCE7' }}>👨‍🍳</div>
                <div>
                  <h2 className="feat-heading">Seamless Kitchen Operations</h2>
                  <div className="feat-subhead">Real-time kitchen visibility</div>
                </div>
              </div>
              <div className="feat-points">
                <div className="feat-pt"><div className="feat-chk"></div>Live KOT Display on Kitchen Screens</div>
                <div className="feat-pt"><div className="feat-chk"></div>Item Status: Pending → Cooking → Ready</div>
                <div className="feat-pt"><div className="feat-chk"></div>Category-wise Kitchen Station Routing</div>
                <div className="feat-pt"><div className="feat-chk"></div>Order Timer with Alert Notifications</div>
                <div className="feat-pt"><div className="feat-chk"></div>Instant Steward Notification on Ready</div>
              </div>
            </div>
            <div className="feat-card reveal delay-2">
              <div className="feat-card-header">
                <div className="feat-ico" style={{ 'background': '#FEF5DC' }}>🪑</div>
                <div>
                  <h3 className="feat-heading">Table &amp; Reservation Management</h3>
                  <div className="feat-subhead">Visual floor map at a glance</div>
                </div>
              </div>
              <div className="feat-points">
                <div className="feat-pt"><div className="feat-chk"></div>Visual Table Grid (Free / Occupied / Reserved)</div>
                <div className="feat-pt"><div className="feat-chk"></div>Multi-Section / Floor / Area Support</div>
                <div className="feat-pt"><div className="feat-chk"></div>Advance Table Reservations &amp; Scheduling</div>
                <div className="feat-pt"><div className="feat-chk"></div>Table Merge &amp; Transfer Between Waiters</div>
                <div className="feat-pt"><div className="feat-chk"></div>Cover Count &amp; Guest Pax Tracking</div>
              </div>
            </div>
            <div className="feat-card reveal">
              <div className="feat-card-header">
                <div className="feat-ico" style={{ 'background': '#FFEDD5' }}>📦</div>
                <div>
                  <h3 className="feat-heading">Real-Time Inventory Tracking</h3>
                  <div className="feat-subhead">Control wastage, control costs</div>
                </div>
              </div>
              <div className="feat-points">
                <div className="feat-pt"><div className="feat-chk"></div>Raw Material Stock Tracking</div>
                <div className="feat-pt"><div className="feat-chk"></div>Recipe-wise Ingredient Auto-Deduction</div>
                <div className="feat-pt"><div className="feat-chk"></div>Low Stock Alerts &amp; Reorder Points</div>
                <div className="feat-pt"><div className="feat-chk"></div>Purchase Orders Directly to Suppliers</div>
                <div className="feat-pt"><div className="feat-chk"></div>Wastage &amp; Spoilage Tracking Reports</div>
              </div>
            </div>
            <div className="feat-card reveal delay-1">
              <div className="feat-card-header">
                <div className="feat-ico" style={{ 'background': '#CCFBF1' }}>👥</div>
                <div>
                  <div className="feat-heading">CRM &amp; Loyalty Program</div>
                  <div className="feat-subhead">Build lasting customer relationships</div>
                </div>
              </div>
              <div className="feat-points">
                <div className="feat-pt"><div className="feat-chk"></div>Customer Profiles &amp; Complete Visit History</div>
                <div className="feat-pt"><div className="feat-chk"></div>Loyalty Points &amp; Configurable Rewards</div>
                <div className="feat-pt"><div className="feat-chk"></div>Birthday &amp; Anniversary Automated Alerts</div>
                <div className="feat-pt"><div className="feat-chk"></div>Feedback &amp; Star Rating Collection</div>
                <div className="feat-pt"><div className="feat-chk"></div>WhatsApp Bulk Marketing Campaigns</div>
              </div>
            </div>
            <div className="feat-card reveal delay-2">
              <div className="feat-card-header">
                <div className="feat-ico" style={{ 'background': '#EDE9FE' }}>📊</div>
                <div>
                  <div className="feat-heading">Reports &amp; Business Analytics</div>
                  <div className="feat-subhead">Data-driven operational decisions</div>
                </div>
              </div>
              <div className="feat-points">
                <div className="feat-pt"><div className="feat-chk"></div>Daily / Weekly / Monthly Sales Reports</div>
                <div className="feat-pt"><div className="feat-chk"></div>Item-wise &amp; Category-wise Revenue Breakdown</div>
                <div className="feat-pt"><div className="feat-chk"></div>Waiter &amp; Staff Performance Reports</div>
                <div className="feat-pt"><div className="feat-chk"></div>GSTR-1 &amp; GSTR-3B Auto-Generated Reports</div>
                <div className="feat-pt"><div className="feat-chk"></div>Export to Excel / PDF / Email</div>
              </div>
            </div>
            <div className="feat-card reveal">
              <div className="feat-card-header">
                <div className="feat-ico" style={{ 'background': '#FCE7F3' }}>👩‍💼</div>
                <div>
                  <div className="feat-heading">HR &amp; Staff Management</div>
                  <div className="feat-subhead">Manage your team efficiently</div>
                </div>
              </div>
              <div className="feat-points">
                <div className="feat-pt"><div className="feat-chk"></div>Staff Profiles &amp; Role Assignment</div>
                <div className="feat-pt"><div className="feat-chk"></div>Attendance &amp; Shift Scheduling</div>
                <div className="feat-pt"><div className="feat-chk"></div>Salary &amp; Advance Payment Tracking</div>
                <div className="feat-pt"><div className="feat-chk"></div>Departments, Designations &amp; Reporting Lines</div>
                <div className="feat-pt"><div className="feat-chk"></div>Granular Role-based Access Permissions</div>
              </div>
            </div>
            <div className="feat-card reveal delay-1">
              <div className="feat-card-header">
                <div className="feat-ico" style={{ 'background': '#DCFCE7' }}>⚙️</div>
                <div>
                  <div className="feat-heading">Multi-Branch &amp; Configuration</div>
                  <div className="feat-subhead">Scale your business without limits</div>
                </div>
              </div>
              <div className="feat-points">
                <div className="feat-pt"><div className="feat-chk"></div>Centralized Multi-Branch Management</div>
                <div className="feat-pt"><div className="feat-chk"></div>Financial Year Configuration</div>
                <div className="feat-pt"><div className="feat-chk"></div>Custom Invoice Numbering &amp; Prefixes</div>
                <div className="feat-pt"><div className="feat-chk"></div>Multiple Bank Account Management</div>
                <div className="feat-pt"><div className="feat-chk"></div>Company Branding &amp; Logo Customization</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SHOWCASE / PRODUCT PREVIEW */}
      <section className="section-wrap" id="showcase">
        <div className="container">
          <div className="section-title-block center reveal">
            <div className="section-eyebrow"><span className="pill pill-gold">Product Preview</span></div>
            <h2 className="display-lg">Intuitive Screens Built for Busy Restaurants</h2>
            <p className="section-desc">Every interface is designed for speed — minimum taps, maximum clarity.</p>
          </div>
          <div className="showcase-grid">
            <div className="showcase-card reveal">
              <div className="sc-screen sc-pos">
                <div className="sc-label">💳 POS Billing — Counter Screen</div>
                <div className="sc-row"><span className="sc-row-l">Table 5 — 3 Guests</span><span className="sc-badge">Active</span></div>
                <div className="sc-row"><span className="sc-row-l">Butter Chicken + Naan × 2</span><span className="sc-row-r">₹520</span></div>
                <div className="sc-row"><span className="sc-row-l">Dal Makhani + Jeera Rice</span><span className="sc-row-r">₹340</span></div>
                <div className="sc-row"><span className="sc-row-l">GST @ 5%</span><span className="sc-row-r">₹43</span></div>
                <div className="sc-row" style={{ 'background': 'rgba(255,255,255,0.22)' }}><span className="sc-row-l" style={{ 'fontWeight': '700', 'color': '#fff' }}>Total Amount</span><span className="sc-row-r" style={{ 'fontSize': '0.95rem' }}>₹903</span></div>
              </div>
              <div className="sc-info">
                <div className="sc-info-title">POS Billing Screen</div>
                <div className="sc-info-desc">Generate GST invoices in under 30 seconds. Split bills between guests, apply discounts, and accept any payment — all from one fast screen.</div>
              </div>
            </div>
            <div className="showcase-card reveal delay-1">
              <div className="sc-screen sc-kds">
                <div className="sc-label">👨‍🍳 Kitchen Display System (KDS)</div>
                <div className="sc-row"><span className="sc-row-l">T3 — Dal Makhani × 2</span><span className="sc-badge" style={{ 'background': 'rgba(255,200,0,0.35)' }}>Cooking 4m</span></div>
                <div className="sc-row"><span className="sc-row-l">T7 — Paneer Tikka × 1</span><span className="sc-badge" style={{ 'background': 'rgba(50,255,120,0.3)' }}>Ready ✓</span></div>
                <div className="sc-row"><span className="sc-row-l">Delivery — Biryani × 3</span><span className="sc-badge" style={{ 'background': 'rgba(255,80,50,0.3)' }}>Pending</span></div>
                <div className="sc-row"><span className="sc-row-l">T2 — Butter Chicken</span><span className="sc-badge" style={{ 'background': 'rgba(255,200,0,0.35)' }}>Cooking 2m</span></div>
                <div className="sc-row"><span className="sc-row-l">Active Orders Today</span><span className="sc-row-r">47</span></div>
              </div>
              <div className="sc-info">
                <div className="sc-info-title">Kitchen Display System</div>
                <div className="sc-info-desc">Real-time order display for every kitchen station. No lost paper tickets — every dish tracked, every chef informed, every order on time.</div>
              </div>
            </div>
            <div className="showcase-card reveal delay-2">
              <div className="sc-screen sc-tbl">
                <div className="sc-label">🪑 Table Management View</div>
                <div className="sc-row"><span className="sc-row-l">Ground Floor</span><span className="sc-row-r">10 / 15 Occupied</span></div>
                <div className="sc-row"><span className="sc-row-l" style={{ 'color': '#86EFAC' }}>Available Tables</span><span className="sc-row-r">5</span></div>
                <div className="sc-row"><span className="sc-row-l" style={{ 'color': '#FCA5A5' }}>Occupied Tables</span><span className="sc-row-r">8</span></div>
                <div className="sc-row"><span className="sc-row-l" style={{ 'color': '#FDE68A' }}>Reserved Tables</span><span className="sc-row-r">2</span></div>
                <div className="sc-row"><span className="sc-row-l">Walk-in Waitlist</span><span className="sc-row-r">3 parties</span></div>
              </div>
              <div className="sc-info">
                <div className="sc-info-title">Table Management</div>
                <div className="sc-info-desc">Live floor plan showing real-time table status. Manage reservations, seat walk-ins, merge tables, and transfer orders in one tap.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="divider-gold"></div>

      {/* WHY */}
      <section className="section-wrap alt" id="why">
        <div className="container">
          <div className="why-grid">
            <div className="reveal">
              <div className="section-eyebrow"><span className="pill pill-fire">Why RestaurantMitra</span></div>
              <h2 className="display-lg" style={{ 'marginBottom': '14px' }}>Run Your Restaurant Smarter — Not Harder</h2>
              <p className="section-desc" style={{ 'marginBottom': '36px' }}>No more lost KOTs, wrong bills, or manual stock counts. Get complete control from kitchen to cashier.</p>
              <div className="why-list">
                <div className="why-item">
                  <div className="why-ico">⚡</div>
                  <div className="why-text">
                    <h4>Bill in Under 30 Seconds</h4>
                    <p>Quick POS with intelligent menu search, modifiers, and one-tap KOT printing to your kitchen printer.</p>
                  </div>
                </div>
                <div className="why-item">
                  <div className="why-ico">👨‍🍳</div>
                  <div className="why-text">
                    <h4>Zero Kitchen Miscommunication</h4>
                    <p>KDS eliminates paper tickets and verbal orders entirely — every dish tracked digitally from order to plate.</p>
                  </div>
                </div>
                <div className="why-item">
                  <div className="why-ico">📦</div>
                  <div className="why-text">
                    <h4>Reduce Food Wastage by 30%</h4>
                    <p>Recipe-linked inventory deduction catches every gram — know your cost per dish, reduce waste, boost margin.</p>
                  </div>
                </div>
                <div className="why-item">
                  <div className="why-ico">📊</div>
                  <div className="why-text">
                    <h4>Know Your Best-Selling Dishes</h4>
                    <p>Item-wise, category-wise, and waiter-wise reports give you the data to make smarter menu decisions.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="reveal delay-2">
              <div className="why-stats-panel">
                <div className="why-stat">
                  <div className="why-stat-num">5K+</div>
                  <div className="why-stat-label">Restaurants on Platform</div>
                </div>
                <div className="why-stat">
                  <div className="why-stat-num">2Cr+</div>
                  <div className="why-stat-label">Bills Generated</div>
                </div>
                <div className="why-stat">
                  <div className="why-stat-num">99.9%</div>
                  <div className="why-stat-label">Uptime Guarantee</div>
                </div>
                <div className="why-stat">
                  <div className="why-stat-num">4.9★</div>
                  <div className="why-stat-label">Average Rating</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WORKFLOW */}
      <section className="section-wrap" id="workflow">
        <div className="container">
          <div className="section-title-block center reveal">
            <div className="section-eyebrow"><span className="pill pill-gold">How It Works</span></div>
            <h2 className="display-lg">From Order to Bill in 4 Simple Steps</h2>
            <p className="section-desc">Your entire restaurant workflow — digitised, streamlined and running on autopilot.</p>
          </div>
          <div className="workflow-steps">
            <div className="workflow-connector"></div>
            <div className="wf-step reveal">
              <div className="wf-num">1</div>
              <h3 className="wf-title">Take the Order</h3>
              <p className="wf-desc">Waiter selects table, adds items from the digital menu. KOT instantly prints at the kitchen station.</p>
            </div>
            <div className="wf-step reveal delay-1">
              <div className="wf-num">2</div>
              <h3 className="wf-title">Kitchen Prepares</h3>
              <p className="wf-desc">Chef sees the order live on the KDS screen. Updates status — Pending → Cooking → Ready.</p>
            </div>
            <div className="wf-step reveal delay-2">
              <div className="wf-num">3</div>
              <h3 className="wf-title">Serve &amp; Bill</h3>
              <p className="wf-desc">Waiter gets notified the moment food is ready. GST bill generated in one click at the POS counter.</p>
            </div>
            <div className="wf-step reveal delay-3">
              <div className="wf-num">4</div>
              <h3 className="wf-title">Collect Payment</h3>
              <p className="wf-desc">Accept UPI, cash, or card. Send bill on WhatsApp. All reports auto-update in real time.</p>
            </div>
          </div>
        </div>
      </section>

      <div className="divider-ember"></div>

      {/* PRICING */}
      <section className="section-wrap alt" id="pricing">
        <div className="container">
          <div className="section-title-block center reveal">
            <div className="section-eyebrow"><span className="pill pill-fire">Pricing Plans</span></div>
            <h2 className="display-lg">Simple, Transparent Pricing</h2>
            <p className="section-desc">No hidden charges. No surprises. Start free — upgrade when your business demands it.</p>
          </div>
          <div className="pricing-grid">
            {/* Starter */}
            <div className="pricing-card reveal">
              <div className="plan-tier">Starter</div>
              <div className="plan-price-row">
                <div className="plan-price">₹699</div>
                <div className="plan-per">/month</div>
              </div>
              <div className="plan-tagline">Perfect for small cafés, dhabas &amp; single-outlet eateries getting started.</div>
              <div className="plan-divider"></div>
              <div className="plan-feats">
                <div className="plan-feat"><span className="feat-ico-yes">✓</span> GST POS Billing</div>
                <div className="plan-feat"><span className="feat-ico-yes">✓</span> Table Management (up to 15)</div>
                <div className="plan-feat"><span className="feat-ico-yes">✓</span> Basic KOT Printing</div>
                <div className="plan-feat"><span className="feat-ico-yes">✓</span> Menu Management</div>
                <div className="plan-feat"><span className="feat-ico-yes">✓</span> Daily Sales Reports</div>
                <div className="plan-feat"><span className="feat-ico-yes">✓</span> 1 User Access</div>
                <div className="plan-feat off"><span className="feat-ico-no">✗</span> Kitchen Display (KDS)</div>
                <div className="plan-feat off"><span className="feat-ico-no">✗</span> Inventory Management</div>
                <div className="plan-feat off"><span className="feat-ico-no">✗</span> CRM &amp; Loyalty</div>
              </div>
              <a href="https://restaurants.biosoftech.in/register" target="_blank">
                <button className="btn btn-outline btn-full ">Get Started Free</button>
              </a>
            </div>
            {/* Pro (Featured) */}
            <div className="pricing-card featured reveal delay-1">
              <div className="featured-badge">⭐ Most Popular</div>
              <div className="plan-tier" style={{ 'color': 'var(--saffron)' }}>Pro</div>
              <div className="plan-price-row">
                <div className="plan-price">₹1,499</div>
                <div className="plan-per">/month</div>
              </div>
              <div className="plan-tagline">For growing restaurants that need full operational control and analytics.</div>
              <div className="plan-divider"></div>
              <div className="plan-feats">
                <div className="plan-feat"><span className="feat-ico-yes">✓</span> Everything in Starter</div>
                <div className="plan-feat"><span className="feat-ico-yes">✓</span> Kitchen Display System (KDS)</div>
                <div className="plan-feat"><span className="feat-ico-yes">✓</span> Inventory Management</div>
                <div className="plan-feat"><span className="feat-ico-yes">✓</span> CRM &amp; Customer Loyalty</div>
                <div className="plan-feat"><span className="feat-ico-yes">✓</span> GSTR-1 &amp; GSTR-3B Reports</div>
                <div className="plan-feat"><span className="feat-ico-yes">✓</span> 5 User Access</div>
                <div className="plan-feat"><span className="feat-ico-yes">✓</span> Staff &amp; HR Module</div>
                <div className="plan-feat"><span className="feat-ico-yes">✓</span> WhatsApp Bill Sharing</div>
                <div className="plan-feat"><span className="feat-ico-yes">✓</span> Priority Support (24/7)</div>
              </div>
              <a href="https://restaurants.biosoftech.in/register" target="_blank">
                <button className="btn btn-fire btn-full">Start 14-Day Free Trial</button>
              </a>
            </div>
            {/* Enterprise */}
            <div className="pricing-card reveal delay-2">
              <div className="plan-tier">Enterprise</div>
              <div className="plan-price-row">
                <div className="plan-price">₹2,999</div>
                <div className="plan-per">/month</div>
              </div>
              <div className="plan-tagline">For restaurant chains, cloud kitchens &amp; high-volume multi-outlet operations.</div>
              <div className="plan-divider"></div>
              <div className="plan-feats">
                <div className="plan-feat"><span className="feat-ico-yes">✓</span> Everything in Pro</div>
                <div className="plan-feat"><span className="feat-ico-yes">✓</span> Multi-Branch Management</div>
                <div className="plan-feat"><span className="feat-ico-yes">✓</span> Unlimited User Accounts</div>
                <div className="plan-feat"><span className="feat-ico-yes">✓</span> Online Ordering Integration</div>
                <div className="plan-feat"><span className="feat-ico-yes">✓</span> Zomato / Swiggy Sync</div>
                <div className="plan-feat"><span className="feat-ico-yes">✓</span> Advanced Business Analytics</div>
                <div className="plan-feat"><span className="feat-ico-yes">✓</span> Dedicated Account Manager</div>
                <div className="plan-feat"><span className="feat-ico-yes">✓</span> Custom Onboarding &amp; Training</div>
                <div className="plan-feat"><span className="feat-ico-yes">✓</span> Full API Access</div>
              </div>
              <a href="https://restaurants.biosoftech.in/register" target="_blank">
                <button className="btn btn-outline btn-full">Contact Our Sales Team</button>
              </a>
            </div>
          </div>
          <p className="pricing-note">All plans include a 14-day free trial. Annual billing saves up to 20%. <a href="#contact">Talk to us</a> for custom pricing.</p>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="section-wrap" id="testimonials">
        <div className="container">
          <div className="section-title-block center reveal">
            <div className="section-eyebrow"><span className="pill pill-gold">Success Stories</span></div>
            <h2 className="display-lg">Loved by Restaurant Owners Across India</h2>
            <p className="section-desc">Real stories from restaurants that transformed their daily operations.</p>
          </div>
          <div className="testi-grid">
            <div className="testi-card reveal">
              <div className="testi-stars">
                <span className="star">★</span><span className="star">★</span><span className="star">★</span><span className="star">★</span><span className="star">★</span>
              </div>
              <p className="testi-quote">Restaurant Mitra ne hamari kitchen ka poora system badal diya. KDS se chef ko seedha order milta hai — koi confusion nahi, koi lost ticket nahi. Hamare sales bhi 20% badh gaye pehle mahine mein hi!</p>
              <div className="testi-author-row">
                <div className="testi-avatar">RS</div>
                <div>
                  <div className="testi-name">Rajesh Sharma</div>
                  <div className="testi-biz">Sharma Dhaba, Lucknow</div>
                  <div className="testi-role">Owner since 2022</div>
                </div>
              </div>
            </div>
            <div className="testi-card reveal delay-1">
              <div className="testi-stars">
                <span className="star">★</span><span className="star">★</span><span className="star">★</span><span className="star">★</span><span className="star">★</span>
              </div>
              <p className="testi-quote">I manage 3 cloud kitchen brands from a single dashboard. Inventory deduction is fully automatic, GSTR reports are ready in one click. The best technology investment I've made for my food business.</p>
              <div className="testi-author-row">
                <div className="testi-avatar">PM</div>
                <div>
                  <div className="testi-name">Priya Mehta</div>
                  <div className="testi-biz">Cloud Kitchen Owner, Pune</div>
                  <div className="testi-role">Enterprise Plan · 3 Brands</div>
                </div>
              </div>
            </div>
            <div className="testi-card reveal delay-2">
              <div className="testi-stars">
                <span className="star">★</span><span className="star">★</span><span className="star">★</span><span className="star">★</span><span className="star">★</span>
              </div>
              <p className="testi-quote">Table management aur loyalty program ne repeat customers 35% improve kar diye. Support team 24/7 available hai — kisi bhi problem ka solution turant milta hai. Highly recommended for any serious restaurant.</p>
              <div className="testi-author-row">
                <div className="testi-avatar">AK</div>
                <div>
                  <div className="testi-name">Amit Kumar</div>
                  <div className="testi-biz">Fine Dining Restaurant, Delhi</div>
                  <div className="testi-role">Pro Plan · 42 Tables</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <div className="cta-banner" id="signup">
        <div className="cta-banner-inner">
          <div className="section-eyebrow" style={{ 'marginBottom': '20px' }}><span className="pill pill-dark">Start Today</span></div>
          <h2>Start Running Your Restaurant Smarter — Today</h2>
          <p>Join 5,000+ Indian restaurants saving time, reducing errors, and maximising profit with RestaurantMitra.</p>
          <div className="cta-banner-btns">
            <a href="https://restaurants.biosoftech.in/register" target="_blank" className="btn btn-white btn-lg" >🍽️ Start Free Trial — No Card Needed</a>
            <a href="#demo" className="btn btn-glass btn-lg">▶ Book a Free Demo</a>
          </div>
          <p className="cta-note">✓ 14-day free trial &nbsp;·&nbsp; ✓ Setup in under 10 minutes &nbsp;·&nbsp; ✓ Free onboarding support</p>
        </div>
      </div >

      <div className="divider-gold"></div>
    </Layout>
  );
};

export default Restaurants;
