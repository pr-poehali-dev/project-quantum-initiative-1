export default function Index() {
  return (
    <>
      <div className="grain-overlay" />

      <header className="header">
        <div className="logo">DANCE*NEWS</div>
        <nav>
          <a href="#">News</a>
          <a href="#">Competitions</a>
          <a href="#">Tips</a>
          <a href="#">Gallery</a>
        </nav>
        <button className="btn-cta">Subscribe</button>
      </header>

      <main>
        <section className="hero">
          <div className="hero-content">
            <h1 className="hero-title">
              DANCE IS
              <br />
              YOUR <span>life</span>
            </h1>
            <p className="text-base md:text-lg lg:text-xl mb-8 md:mb-10 leading-relaxed text-[#555]">
              Hot dance news, competition results and tips from real professionals. Everything for those who live in the rhythm.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-5">
              <button className="btn-cta" style={{ background: "var(--primary)", color: "white" }}>
                Read News
              </button>
              <button className="btn-cta" style={{ background: "white" }}>
                Competition Results
              </button>
            </div>
          </div>
          <div className="hero-img" style={{ background: "url('https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80') center center / cover" }}>
            <div className="sticker">
              FRESH
              <br />
              EVERY DAY
            </div>
            <div className="floating-tag hidden md:block" style={{ top: "20%", left: "10%" }}>
              #DANCENEWS
            </div>
            <div className="floating-tag hidden md:block" style={{ bottom: "30%", right: "20%" }}>
              IN RHYTHM
            </div>
          </div>
        </section>

        <div className="marquee">
          <div className="marquee-content">
            &nbsp; * HOT DANCE NEWS * CHAMPIONSHIP RESULTS * TIPS FROM THE PROS * HIP-HOP * BALLROOM * CONTEMPORARY * BREAKDANCE * STREET DANCE *
            HOT DANCE NEWS * CHAMPIONSHIP RESULTS * TIPS FROM THE PROS * HIP-HOP * BALLROOM * CONTEMPORARY * BREAKDANCE * STREET DANCE
          </div>
        </div>

        <section className="section-padding">
          <div className="section-header">
            <h2 className="section-title">TOP TODAY</h2>
            <a
              href="#"
              className="text-sm md:text-base"
              style={{ color: "var(--dark)", fontWeight: 800, textTransform: "uppercase" }}
            >
              All News
            </a>
          </div>

          <div className="menu-grid">
            {/* News 1 */}
            <div className="menu-card">
              <span className="menu-tag">Breaking</span>
              <img
                src="https://images.unsplash.com/photo-1547153760-18fc86324498?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="Hip-Hop Championship"
              />
              <div className="menu-card-body">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "10px",
                  }}
                >
                  <h3>Hip-Hop Championship</h3>
                  <span className="price">Feb 26</span>
                </div>
                <p style={{ fontSize: "14px", color: "#666" }}>
                  Moscow Battle 2026 is over — winners among juniors and adults announced. Who took the grand prize?
                </p>
              </div>
            </div>

            {/* News 2 */}
            <div className="menu-card">
              <span className="menu-tag" style={{ background: "var(--secondary)" }}>
                Pro Tip
              </span>
              <img
                src="https://images.unsplash.com/photo-1518834107812-67b0b7c58434?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="Choreographer Tips"
              />
              <div className="menu-card-body">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "10px",
                  }}
                >
                  <h3>5 Stretching Rules</h3>
                  <span className="price">Training</span>
                </div>
                <p style={{ fontSize: "14px", color: "#666" }}>The national team choreographer shares techniques that prevent injuries and boost flexibility in a month.</p>
              </div>
            </div>

            {/* News 3 */}
            <div className="menu-card">
              <span className="menu-tag" style={{ background: "var(--accent)", color: "var(--dark)" }}>
                Results
              </span>
              <img
                src="https://images.unsplash.com/photo-1504609813442-a8924e83f76e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="Ballroom Dance"
              />
              <div className="menu-card-body">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "10px",
                  }}
                >
                  <h3>Ballroom Grand Prix</h3>
                  <span className="price">Feb 24</span>
                </div>
                <p style={{ fontSize: "14px", color: "#666" }}>
                  St. Petersburg Standard & Latin tournament — full results table and photo report from the final.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="retro-vibe">
          <div>
            <h2 className="vibe-title">TIPS FROM THE MASTERS.</h2>
            <p className="vibe-text">
              We gathered real professionals — champions, choreographers, national team coaches. They share not theory, but real experience: how to win competitions, avoid injuries and grow faster. No fluff — straight to the point.
            </p>
            <button className="btn-cta" style={{ background: "var(--dark)", color: "white", borderColor: "white" }}>
              All Tips
            </button>
          </div>
          <div className="vibe-img"></div>
        </section>

        <section className="section-padding">
          <h2 className="section-title" style={{ marginBottom: "40px", textAlign: "center" }}>
            @DANCE.NEWS
          </h2>
          <div className="social-grid">
            <div className="social-item">
              <img
                src="https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                alt="Dance 1"
              />
            </div>
            <div className="social-item">
              <img
                src="https://images.unsplash.com/photo-1547153760-18fc86324498?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                alt="Dance 2"
              />
            </div>
            <div className="social-item">
              <img
                src="https://images.unsplash.com/photo-1518834107812-67b0b7c58434?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                alt="Dance 3"
              />
            </div>
            <div className="social-item">
              <img
                src="https://images.unsplash.com/photo-1504609813442-a8924e83f76e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                alt="Dance 4"
              />
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div>
          <div className="footer-logo">DANCE*NEWS</div>
          <p style={{ color: "#666", lineHeight: 1.6 }}>
            The main media about dance and the life of dancers. News, competition results and tips from professionals — every day.
          </p>
        </div>
        <div className="footer-links">
          <h4>Navigation</h4>
          <ul>
            <li>
              <a href="#" style={{ color: "inherit", textDecoration: "none" }}>
                News
              </a>
            </li>
            <li>
              <a href="#" style={{ color: "inherit", textDecoration: "none" }}>
                Competitions
              </a>
            </li>
            <li>
              <a href="#" style={{ color: "inherit", textDecoration: "none" }}>
                Tips
              </a>
            </li>
            <li>
              <a href="#" style={{ color: "inherit", textDecoration: "none" }}>
                About
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-links">
          <h4>Categories</h4>
          <ul>
            <li>
              <a href="#" style={{ color: "inherit", textDecoration: "none" }}>
                Hip-Hop
              </a>
            </li>
            <li>
              <a href="#" style={{ color: "inherit", textDecoration: "none" }}>
                Ballroom
              </a>
            </li>
            <li>
              <a href="#" style={{ color: "inherit", textDecoration: "none" }}>
                Contemporary
              </a>
            </li>
            <li>
              <a href="#" style={{ color: "inherit", textDecoration: "none" }}>
                Street Dance
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4>Newsletter</h4>
          <p style={{ color: "#666", fontSize: "14px", marginBottom: "15px" }}>
            Get fresh news first — subscribe to our newsletter.
          </p>
          <button className="btn-cta" style={{ background: "var(--primary)", color: "white" }}>
            Subscribe
          </button>
        </div>
      </footer>
    </>
  );
}
