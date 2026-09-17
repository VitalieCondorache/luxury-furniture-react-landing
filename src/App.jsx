import { useEffect, useMemo, useState } from 'react'
import './App.css'
import { LANGUAGE_OPTIONS, PREFERRED_LANG_KEY, translations } from './content'

const getInitialLanguage = () => {
  if (typeof window === 'undefined') return 'ro'

  const savedLang = window.localStorage.getItem(PREFERRED_LANG_KEY)
  return LANGUAGE_OPTIONS.includes(savedLang) ? savedLang : 'ro'
}

function SectionTitle({ eyebrow, title, description }) {
  return (
    <div className="section-title">
      {eyebrow ? <span className="eyebrow">{eyebrow}</span> : null}
      <h2>{title}</h2>
      {description ? <p>{description}</p> : null}
    </div>
  )
}

function App() {
  const [language, setLanguage] = useState(getInitialLanguage)

  useEffect(() => {
    window.localStorage.setItem(PREFERRED_LANG_KEY, language)
  }, [language])

  const content = useMemo(() => translations[language], [language])

  return (
    <div className="page-shell">
      <header className="topbar">
        <nav className="navbar container" aria-label="Main navigation">
          <a href="#top" className="brand" aria-label={`${content.brandName} home`}>
            <i className="fa-solid fa-couch"></i>
            {content.brandName}
          </a>

          <ul className="nav-links">
            <li><a href="#top">{content.navHome}</a></li>
            <li><a href="#services">{content.navServices}</a></li>
            <li><a href="#portfolio">{content.navPortfolio}</a></li>
            <li><a href="#about">{content.navAbout}</a></li>
            <li><a href="#contact" className="btn-nav">{content.navContact}</a></li>
            <li className="lang-switch" aria-label="Language switcher">
              {LANGUAGE_OPTIONS.map((option) => (
                <button
                  key={option}
                  type="button"
                  className={`lang-btn ${language === option ? 'active' : ''}`}
                  onClick={() => setLanguage(option)}
                  aria-pressed={language === option}
                >
                  {option.toUpperCase()}
                </button>
              ))}
            </li>
          </ul>
        </nav>
      </header>

      <main id="top">
        <section className="hero">
          <div className="hero-overlay" />
          <div className="container hero-content">
            <span className="badge">{content.badge}</span>
            <h1>{content.heroTitle}</h1>
            <p>{content.heroDescription}</p>
            <div className="hero-actions">
              <a href="#contact" className="btn btn-primary">{content.quoteButton}</a>
              <a href="#portfolio" className="btn btn-secondary">{content.portfolioButton}</a>
            </div>
            <div className="hero-stats">
              {content.stats.map((stat) => (
                <div key={stat.label} className="stat-card">
                  <strong>{stat.value}</strong>
                  <span>{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="services" className="services section-spacer">
          <div className="container">
            <SectionTitle
              eyebrow={content.brandName}
              title={content.servicesTitle}
              description={content.servicesDescription}
            />
            <div className="services-grid">
              {content.services.map((service) => (
                <article key={service.title} className="service-card">
                  <div className="service-icon">
                    <i className={`fa-solid ${service.icon}`}></i>
                  </div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="portfolio" className="portfolio section-spacer">
          <div className="container">
            <SectionTitle
              eyebrow="Portfolio"
              title={content.portfolioTitle}
              description={content.portfolioDescription}
            />
            <div className="portfolio-grid">
              {content.projects.map((project) => (
                <a
                  key={project.id}
                  href="#contact"
                  className="portfolio-item"
                  aria-label={project.title}
                >
                  <div className="portfolio-image" style={{ backgroundImage: `url(${project.image})` }} />
                  <div className="portfolio-overlay">
                    <h3>{project.title}</h3>
                    <span>{project.type}</span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="about section-spacer">
          <div className="container about-grid">
            <div className="about-copy">
              <SectionTitle title={content.aboutTitle} />
              <p>{content.aboutDescription}</p>
              <ul className="check-list">
                {content.features.map((feature) => (
                  <li key={feature}>
                    <i className="fa-solid fa-check"></i>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="about-image-wrap">
              <img
                src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&q=80&w=900"
                alt="Interior design"
              />
            </div>
          </div>
        </section>

        <section className="testimonials section-spacer">
          <div className="container">
            <SectionTitle
              eyebrow="Reviews"
              title={content.testimonialsTitle}
              description={content.testimonialsDescription}
            />
            <div className="testimonial-grid">
              {content.testimonials.map((testimonial) => (
                <article key={testimonial.name} className="testimonial-card">
                  <div className="stars" aria-label="5 out of 5 stars">
                    {'★★★★★'}
                  </div>
                  <p>“{testimonial.quote}”</p>
                  <div className="testimonial-author">
                    <strong>{testimonial.name}</strong>
                    <span>{testimonial.project}</span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="contact section-spacer">
          <div className="container contact-grid">
            <div className="contact-info">
              <SectionTitle
                eyebrow="Contact"
                title={content.contactTitle}
                description={content.contactDescription}
              />

              <div className="info-item">
                <i className="fa-solid fa-phone"></i>
                <div>
                  <h4>{content.phoneTitle}</h4>
                  <p>+40 712 345 678</p>
                </div>
              </div>

              <div className="info-item">
                <i className="fa-solid fa-envelope"></i>
                <div>
                  <h4>{content.emailTitle}</h4>
                  <a href="mailto:vitalie.condor@gmail.com">vitalie.condor@gmail.com</a>
                </div>
              </div>

              <div className="info-item">
                <i className="fa-solid fa-location-dot"></i>
                <div>
                  <h4>{content.addressTitle}</h4>
                  <p>{content.addressText}</p>
                </div>
              </div>
            </div>

            <form
              className="contact-form"
              action="https://formsubmit.co/vitalie.condor@gmail.com"
              method="POST"
            >
              <input type="hidden" name="_subject" value={`New message from the ${content.brandName} website`} />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_template" value="table" />
              <input type="hidden" name="_next" value="https://yourdomain.com/thank-you.html" />

              <div className="field-group">
                <input type="text" name="nume" placeholder={content.formName} required />
              </div>
              <div className="field-group">
                <input type="email" name="email" placeholder={content.formEmail} required />
              </div>
              <div className="field-group">
                <input type="tel" name="telefon" placeholder={content.formPhone} />
              </div>
              <div className="field-group">
                <textarea name="mesaj" rows="5" placeholder={content.formMessage} required />
              </div>
              <button type="submit" className="btn btn-primary btn-full">
                {content.sendMessage}
              </button>
            </form>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-row">
          <div className="footer-brand">
            <a href="#top" className="brand">
              <i className="fa-solid fa-couch"></i>
              {content.brandName}
            </a>
            <p>© 2026 {content.brandName}. {content.rights}</p>
          </div>

          <div className="social-links">
            <a href="#" aria-label="Facebook"><i className="fa-brands fa-facebook-f"></i></a>
            <a href="#" aria-label="Instagram"><i className="fa-brands fa-instagram"></i></a>
            <a href="#" aria-label="Pinterest"><i className="fa-brands fa-pinterest-p"></i></a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
