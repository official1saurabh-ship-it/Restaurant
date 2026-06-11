import React, { useEffect, useRef } from 'react';
import Layout from '../components/Layout';

const ContactPage = () => {
  const observerRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Toast is handled by Layout if I add a way to trigger it, 
    // but for now I'll just keep the local logic or simplify.
    alert("Message Sent! 🚀");
    e.target.reset();
  };

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
      <section className="hero" style={{ minHeight: 'auto', padding: '120px 24px 80px' }}>
        <div className="hero-blob-1"></div>
        <div className="hero-blob-2"></div>
        <div className="hero-pattern"></div>
        <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
          <div className="section-eyebrow reveal">
            <span className="pill pill-gold">Get in Touch</span>
          </div>
          <h1 className="hero-h1 reveal delay-1">
            Let's Scale Your <span className="fire-text">Restaurant</span> Together
          </h1>
          <p className="hero-desc reveal delay-2" style={{ margin: '0 auto 40px' }}>
            Our team of restaurant consultants is ready to help you digitize your operations. Reach out for a custom demo or support.
          </p>
        </div>
      </section>

      <div className="divider-gold"></div>

      {/* CONTACT CONTENT */}
      <section className="section-wrap">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            
            {/* LEFT: INFO */}
            <div className="reveal">
              <h2 className="display-md" style={{ marginBottom: '24px' }}>How can we help?</h2>
              <p className="section-desc" style={{ marginBottom: '48px' }}>
                Join 5,000+ restaurant owners who have transformed their business with RestaurantMitra.
              </p>

              <div className="why-list">
                <div className="why-item">
                  <div className="why-ico">📍</div>
                  <div className="why-text">
                    <h4>Our Headquarters</h4>
                    <p>B-Block, Sector 62, Noida, Uttar Pradesh, India</p>
                  </div>
                </div>
                <div className="why-item">
                  <div className="why-ico">📞</div>
                  <div className="why-text">
                    <h4>Direct Support</h4>
                    <p>+91 98765 43210 (Mon-Sat, 10am - 7pm)</p>
                  </div>
                </div>
                <div className="why-item">
                  <div className="why-ico">✉️</div>
                  <div className="why-text">
                    <h4>Email Inquiries</h4>
                    <p>hello@restaurantmitra.com</p>
                  </div>
                </div>
              </div>

              <div style={{ marginTop: '56px' }}>
                <div className="trust-label" style={{ textAlign: 'left', marginBottom: '16px' }}>Trusted By Leaders</div>
                <div className="flex gap-4 flex-wrap opacity-60">
                  <span className="pill pill-dark" style={{ color: 'var(--ink)' }}>Dhaba King</span>
                  <span className="pill pill-dark" style={{ color: 'var(--ink)' }}>Spice Garden</span>
                  <span className="pill pill-dark" style={{ color: 'var(--ink)' }}>Meera Café</span>
                </div>
              </div>
            </div>

            {/* RIGHT: FORM */}
            <div className="reveal delay-2">
              <div className="card" style={{ padding: '40px' }}>
                <h3 className="display-md" style={{ fontSize: '1.5rem', marginBottom: '32px' }}>Send a Message</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: '700', textTransform: 'uppercase', color: 'var(--mist)', marginBottom: '8px' }}>Full Name</label>
                      <input 
                        type="text" 
                        required 
                        placeholder="Rahul Sharma" 
                        style={{ width: '100%', padding: '14px', borderRadius: '12px', border: '1.5px solid var(--border-warm)', background: 'var(--ivory)', fontSize: '0.9rem', outline: 'none' }} 
                      />
                    </div>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: '700', textTransform: 'uppercase', color: 'var(--mist)', marginBottom: '8px' }}>Phone Number</label>
                      <input 
                        type="tel" 
                        required 
                        placeholder="+91 XXXXX XXXXX" 
                        style={{ width: '100%', padding: '14px', borderRadius: '12px', border: '1.5px solid var(--border-warm)', background: 'var(--ivory)', fontSize: '0.9rem', outline: 'none' }} 
                      />
                    </div>
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: '700', textTransform: 'uppercase', color: 'var(--mist)', marginBottom: '8px' }}>Email Address</label>
                    <input 
                      type="email" 
                      required 
                      placeholder="rahul@example.com" 
                      style={{ width: '100%', padding: '14px', borderRadius: '12px', border: '1.5px solid var(--border-warm)', background: 'var(--ivory)', fontSize: '0.9rem', outline: 'none' }} 
                    />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: '700', textTransform: 'uppercase', color: 'var(--mist)', marginBottom: '8px' }}>Your Message</label>
                    <textarea 
                      required 
                      rows="4" 
                      placeholder="Tell us about your restaurant..." 
                      style={{ width: '100%', padding: '14px', borderRadius: '12px', border: '1.5px solid var(--border-warm)', background: 'var(--ivory)', fontSize: '0.9rem', outline: 'none', resize: 'none' }} 
                    ></textarea>
                  </div>
                  <button type="submit" className="btn btn-fire btn-full btn-lg">Send Message 🚀</button>
                </form>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* FAQ PREVIEW */}
      <section className="section-wrap alt">
        <div className="container">
          <div className="section-title-block center reveal">
            <h2 className="display-lg">Frequently Asked Questions</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="card reveal" style={{ padding: '32px' }}>
              <h4 className="wf-title" style={{ textAlign: 'left' }}>Is there a free trial?</h4>
              <p className="wf-desc" style={{ textAlign: 'left' }}>Yes! We offer a full 14-day free trial with all features enabled. No credit card required.</p>
            </div>
            <div className="card reveal delay-1" style={{ padding: '32px' }}>
              <h4 className="wf-title" style={{ textAlign: 'left' }}>Do you provide hardware?</h4>
              <p className="wf-desc" style={{ textAlign: 'left' }}>We support all standard POS hardware. We can also recommend partner vendors for printers and terminals.</p>
            </div>
            <div className="card reveal delay-2" style={{ padding: '32px' }}>
              <h4 className="wf-title" style={{ textAlign: 'left' }}>Is it GST compliant?</h4>
              <p className="wf-desc" style={{ textAlign: 'left' }}>Absolutely. 100% compliant with Indian tax laws. GSTR reports are auto-generated.</p>
            </div>
            <div className="card reveal delay-3" style={{ padding: '32px' }}>
              <h4 className="wf-title" style={{ textAlign: 'left' }}>Can I use it offline?</h4>
              <p className="wf-desc" style={{ textAlign: 'left' }}>RestaurantMitra is cloud-based for real-time sync, but billing works even during brief internet outages.</p>
            </div>
          </div>
        </div>
      </section>

      <div className="divider-gold"></div>
    </Layout>
  );
};

export default ContactPage;
