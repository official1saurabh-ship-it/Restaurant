import React, { useEffect, useRef } from 'react';
import Layout from '../components/Layout';

const ReportsPage = () => {
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
                <div className="hero-badge-dot" style={{ backgroundColor: '#C9900C' }}></div>
                <span className="hero-badge-text">Data-Driven Insights</span>
              </div>
            </div>
            <h1 className="hero-h1 reveal delay-1">
              Powerful <span className="fire-text">Reports</span> & Business Analytics
            </h1>
            <p className="hero-desc reveal delay-2">
              Transform your raw sales data into actionable business intelligence. Monitor revenue, track taxes, and optimize your menu with automated, real-time reporting.
            </p>
            <div className="hero-cta-row reveal delay-3">
              <a href="https://restaurants.biosoftech.in/register" className="btn btn-fire btn-lg">Explore All Reports</a>
              <a href="https://restaurants.biosoftech.in/register" className="btn btn-outline btn-lg" >View Live Dashboard</a>
            </div>
          </div>
          <div className="hero-visual reveal delay-2">
            <div className="dash-wrapper">
              <div className="dash-card" style={{ transform: 'none' }}>
                <div className="dash-titlebar" style={{ background: 'var(--grad-gold)' }}>
                  <div className="win-btns"><div className="win-btn wb-r"></div><div className="win-btn wb-y"></div><div className="win-btn wb-g"></div></div>
                  <div className="win-title" style={{ color: 'var(--ink)' }}>Executive Summary</div>
                </div>
                <div className="dash-body">
                  <div className="dash-kpi-row">
                    <div className="kpi">
                      <div className="kpi-label">Gross Sales</div>
                      <div className="kpi-val green">₹8.4L</div>
                    </div>
                    <div className="kpi">
                      <div className="kpi-label">Tax (GST)</div>
                      <div className="kpi-val fire">₹42.2K</div>
                    </div>
                    <div className="kpi">
                      <div className="kpi-label">Net Profit</div>
                      <div className="kpi-val gold">₹3.1L</div>
                    </div>
                  </div>
                  <div className="dash-section">
                    <div className="dash-section-title">📈 Weekly Sales Trend</div>
                    <div className="mt-4 h-24 flex items-end gap-2 px-2">
                      <div className="flex-1 bg-orange-100 h-1/2 rounded-t-sm"></div>
                      <div className="flex-1 bg-orange-200 h-2/3 rounded-t-sm"></div>
                      <div className="flex-1 bg-orange-300 h-3/4 rounded-t-sm"></div>
                      <div className="flex-1 bg-orange-500 h-full rounded-t-sm"></div>
                      <div className="flex-1 bg-orange-400 h-4/5 rounded-t-sm"></div>
                      <div className="flex-1 bg-orange-200 h-1/3 rounded-t-sm"></div>
                      <div className="flex-1 bg-orange-300 h-1/2 rounded-t-sm"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="divider-gold"></div>

      {/* REPORTS CATEGORIES */}
      <section className="section-wrap alt">
        <div className="container">
          <div className="section-title-block center reveal">
            <div className="section-eyebrow"><span className="pill pill-fire">Analytics Suite</span></div>
            <h2 className="display-lg">Comprehensive Reports for Every Department</h2>
            <p className="section-desc">From daily sales to annual tax filings, we've got all your reporting needs covered.</p>
          </div>

          <div className="feat-grid">
            <div className="feat-card reveal">
              <div className="feat-card-header">
                <div className="feat-ico" style={{ background: '#CCFBF1' }}>💰</div>
                <div>
                  <div className="feat-heading">Sales Analytics</div>
                  <div className="feat-subhead">Revenue tracking</div>
                </div>
              </div>
              <p className="sc-info-desc">Daily sales, category-wise revenue, and payment mode breakdown. Identify your busiest hours and days.</p>
            </div>

            <div className="feat-card reveal delay-1">
              <div className="feat-card-header">
                <div className="feat-ico" style={{ background: '#FEF5DC' }}>📄</div>
                <div>
                  <div className="feat-heading">GST & Tax Reports</div>
                  <div className="feat-subhead">Audit-ready exports</div>
                </div>
              </div>
              <p className="sc-info-desc">Auto-generated GSTR-1 and GSTR-3B summaries. Stay compliant with zero manual calculations.</p>
            </div>

            <div className="feat-card reveal delay-2">
              <div className="feat-card-header">
                <div className="feat-ico" style={{ background: '#DCFCE7' }}>📦</div>
                <div>
                  <div className="feat-heading">Inventory Reports</div>
                  <div className="feat-subhead">Stock & Wastage</div>
                </div>
              </div>
              <p className="sc-info-desc">Raw material consumption, recipe costing variance, and wastage analysis to control food costs.</p>
            </div>

            <div className="feat-card reveal delay-3">
              <div className="feat-card-header">
                <div className="feat-ico" style={{ background: '#EDE9FE' }}>👩‍💼</div>
                <div>
                  <div className="feat-heading">Staff Performance</div>
                  <div className="feat-subhead">Waiter & Chef efficiency</div>
                </div>
              </div>
              <p className="sc-info-desc">Track sales per waiter, average order turnaround time per chef, and individual staff performance.</p>
            </div>
          </div>
        </div>
      </section>

      {/* VISUAL SHOWCASE */}
      <section className="section-wrap">
        <div className="container">
          <div className="why-grid">
            <div className="reveal">
              <div className="section-eyebrow"><span className="pill pill-gold">Menu Engineering</span></div>
              <h2 className="display-lg">Identify Your Best-Sellers</h2>
              <p className="section-desc">Our intelligent "Menu Engineering" report categorizes your dishes into Stars, Workhorses, Puzzles, and Dogs based on popularity and profit.</p>

              <div className="why-list" style={{ marginTop: '32px' }}>
                <div className="feat-pt"><div className="feat-chk"></div> Top 10 High-Margin Dishes</div>
                <div className="feat-pt"><div className="feat-chk"></div> Least ordered items (Wastage Risk)</div>
                <div className="feat-pt"><div className="feat-chk"></div> Peak hour menu performance</div>
                <div className="feat-pt"><div className="feat-chk"></div> Seasonal trends & Item growth</div>
              </div>


            </div>
            <div className="reveal delay-2">
              <div className="card" style={{ padding: '0', overflow: 'hidden' }}>
                <div className="sc-screen sc-crm" style={{ aspectRatio: 'auto', padding: '40px' }}>
                  <div className="sc-label">Top Selling Dishes (Weekly)</div>
                  <div className="sc-row"><span className="sc-row-l">Butter Chicken</span><span className="sc-row-r">245 units</span></div>
                  <div className="sc-row"><span className="sc-row-l">Dal Makhani</span><span className="sc-row-r">182 units</span></div>
                  <div className="sc-row"><span className="sc-row-l">Paneer Tikka</span><span className="sc-row-r">156 units</span></div>
                  <div className="sc-row"><span className="sc-row-l">Garlic Naan</span><span className="sc-row-r">840 units</span></div>
                  <div className="mt-4 p-3 bg-white/10 rounded-lg text-center">
                    <div className="text-[10px] uppercase font-bold text-white/50 mb-1">Profitability Index</div>
                    <div className="text-lg font-black text-white">92.4%</div>
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
          <h2>Run Your Restaurant Based on Real Data.</h2>
          <p>Stop guessing your profits. Join thousands of restaurant owners using RestaurantMitra analytics to grow.</p>
          <div className="cta-banner-btns">
            <a href="https://restaurants.biosoftech.in/register" className="btn btn-white btn-lg">📊 Start Free Analytics Trial</a>
            <a href="/contact" className="btn btn-glass btn-lg">Request a Custom Reporting Audit</a>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ReportsPage;
