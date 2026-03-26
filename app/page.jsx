import Header from "../components/Header";
import Footer from "../components/Footer";

function ProgramsSection() {
  const programs = [
    {
      icon: "/images/icons/icon-prog-gita.svg",
      title: "Bhagavad Gita Classes",
      desc: [
        "Explore the timeless wisdom of the",
        "Bhagavad Gita through our regular classes",
        "devotees. Learn practical applications of spiritual",
        "knowledge in daily life.",
      ],
      day: "Every Tuesday & Thursday",
      time: "6:30 PM - 8:00 PM",
    },
    {
      icon: "/images/icons/icon-prog-youth.svg",
      title: "Youth Programs",
      desc: [
        "Engage young minds in spiritual activities",
        "through our specially designed youth programs",
        "including kirtans, philosophical discussions, and",
        "cultural activities.",
      ],
      day: "Every Saturday",
      time: "4:00 PM - 6:00 PM",
    },
    {
      icon: "/images/icons/icon-prog-goseva.svg",
      title: "Go Seva",
      desc: [
        "Participate in our cow protection program and",
        "experience the joy of serving these sacred",
        "animals. Learn about the spiritual significance of",
        "cow protection.",
      ],
      day: "Daily",
      time: "9:00 AM - 11:00 AM",
    },
    {
      icon: "/images/icons/icon-prog-food.svg",
      title: "Food for Life",
      desc: [
        "Join our initiative to distribute sanctified",
        "vegetarian food (prasadam) to those in need.",
        "Help us spread love and compassion through",
        "nutritious meals.",
      ],
      day: "Every Sunday",
      time: "12:00 PM - 2:00 PM",
    },
    {
      icon: "/images/icons/icon-prog-feast.svg",
      title: "Sunday Love Feast",
      desc: [
        "Experience the bliss of community gathering",
        "with kirtans, spiritual discourse, and a delicious",
        "vegetarian feast every Sunday at our temple.",
      ],
      day: "Every Sunday",
      time: "5:00 PM - 8:00 PM",
    },
    {
      icon: "/images/icons/icon-prog-kirtan.svg",
      title: "Kirtan Sessions",
      desc: [
        "Join our melodious kirtan sessions and",
        "experience the transcendental joy of chanting",
        "the holy names of the Lord with traditional",
        "instruments.",
      ],
      day: "Wednesday & Friday",
      time: "6:00 PM - 7:30 PM",
    },
  ];

  return (
    <section className="section-programs" id="programs">
      <div className="content-wide">
        <div className="section-heading section-heading--left">
          <h2>Programs &amp; Services</h2>
          <div className="rule rule--accent rule--short">
            <span />
          </div>
        </div>
        <div className="programs-grid">
          {programs.map((program) => (
            <article className="prog-card" key={program.title}>
              <div className="prog-card__icon-wrap">
                <img
                  className="prog-card__icon-svg"
                  src={program.icon}
                  alt=""
                  width="64"
                  height="64"
                />
              </div>
              <h3>{program.title}</h3>
              <p className="prog-card__desc">
                {program.desc.map((line) => (
                  <span key={line}>
                    {line}
                    <br />
                  </span>
                ))}
              </p>
              <div className="prog-card__when">
                <strong>{program.day}</strong>
                <span>{program.time}</span>
              </div>
              <a className="prog-card__btn" href="#">
                Join Now
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function EventsSection() {
  const events = [
    {
      image: "/images/event-ratha.png",
      date: "June 25, 2025",
      title: "Ratha Yatra Festival",
      body: "Join us for the annual chariot festival celebrating Lord Jagannath's journey. Experience the joy of pulling the chariot and receiving divine blessings.",
      time: "4:00 PM - 9:00 PM",
    },
    {
      image: "/images/event-janmashtami.png",
      date: "August 15, 2025",
      title: "Janmashtami Celebration",
      body: "Celebrate the divine appearance of Lord Krishna with a special midnight arati, abhishekam, cultural performances, and feast.",
      time: "6:00 PM - 12:30 AM",
    },
    {
      image: "/images/event-kirtan.png",
      date: "July 8, 2025",
      title: "Kirtan Mela",
      body: "Immerse yourself in the transcendental sound vibrations of the Hare Krishna Maha Mantra with renowned kirtaniyas and devotees.",
      time: "5:00 PM - 8:00 PM",
    },
  ];

  return (
    <section className="section-events">
      <div className="content-wide">
        <div className="section-heading section-heading--left">
          <h2>Upcoming Events</h2>
          <div className="rule rule--accent rule--short">
            <span />
          </div>
        </div>
        <div className="events-row">
          {events.map((event) => (
            <article className="event-card" key={event.title}>
              <div className="event-card__img-wrap">
                <img src={event.image} alt="" width="395" height="224" />
                <span className="event-card__date">{event.date}</span>
              </div>
              <div className="event-card__body">
                <h3>{event.title}</h3>
                <p>{event.body}</p>
                <div className="event-card__time">
                  <img
                    className="fig-icon event-card__clock-icon"
                    src="/images/icons/icon-event-clock.svg"
                    alt=""
                    width="31"
                    height="22"
                  />
                  {event.time}
                </div>
              </div>
            </article>
          ))}
        </div>
        <div className="events-cta-wrap">
          <a className="btn-events-all" href="#">
            View All Events
          </a>
        </div>
      </div>
    </section>
  );
}

function ResourcesSection() {
  const resources = [
    {
      image: "/images/resource-gita.png",
      tag: "Sacred Text",
      title: "Bhagavad Gita As It Is",
      body: "The definitive guide to understanding the essence of Krishna consciousness with original Sanskrit texts",
      cta: "Learn More",
    },
    {
      image: "/images/resource-bhagavatam.png",
      tag: "Sacred Text",
      title: "Srimad Bhagavatam",
      body: "The complete science of God consciousness presented in 18 volumes",
      cta: "Learn More",
    },
    {
      image: "/images/resource-lectures.png",
      tag: "Audio & Video",
      title: "Spiritual Lectures",
      body: "Access our extensive library of lectures on various spiritual topics by senior devotees and spiritual masters.",
      cta: "Explore",
    },
    {
      image: "/images/resource-music.png",
      tag: "Music",
      title: "Bhajans & Kirtans",
      body: "Immerse yourself in the transcendental sound vibrations of devotional music performed by renowned artists.",
      cta: "Listen",
    },
  ];

  return (
    <section className="section-resources">
      <div className="resources-inner">
        <div className="section-heading section-heading--center">
          <h2>Spiritual Resources</h2>
          <div className="rule rule--accent">
            <span />
          </div>
        </div>
        <div className="resources-grid">
          {resources.map((resource) => (
            <article
              className={`res-card ${resource.extraClass || ""}`.trim()}
              key={resource.title}
            >
              <img src={resource.image} alt="" width="288" height="160" />
              <div className="res-card__body">
                <span className="res-card__tag">{resource.tag}</span>
                <h3>{resource.title}</h3>
                <p>{resource.body}</p>
                <a href="#">
                  {resource.cta} <span className="arr">&rarr;</span>
                </a>
              </div>
            </article>
          ))}
        </div>
        <div className="resources-carousel-hint">
          <button type="button" className="carousel-btn" aria-label="Previous">
            &lsaquo;
          </button>
          <button type="button" className="carousel-btn" aria-label="Next">
            &rsaquo;
          </button>
        </div>
        <div className="resources-cta">
          <a className="btn-teachings" href="#">
            Explore Teachings
          </a>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <div className="page">
      <header className="hero-block">
        <Header />
        <div className="hero-visual">
          <img
            className="hero-visual__img"
            src="/images/hero-temple.png"
            alt="Sri Gaura Radha Gokulananda temple"
            width="1440"
            height="719"
          />
          <div className="hero-visual__shade hero-visual__shade--dark" />
          <div className="hero-visual__shade hero-visual__shade--brand" />
          <div className="hero-visual__content content-wide">
            <h1 className="hero-title">
              Welcome to
              <br />
              Sri Gaura Radha Gokulananda Temple
            </h1>
            <p className="hero-sub">
              Experience the Divine Presence of Their Lordships Sri Gaura Radha
              Gokulananda and Immerse Yourself in Spiritual Bliss
            </p>
            <div className="hero-cta">
              <a className="btn btn--solid" href="#visit">
                <img
                  className="fig-icon btn__icon"
                  src="/images/icons/icon-hero-calendar.svg"
                  alt=""
                  width="33"
                  height="24"
                />
                Plan Your Visit
              </a>
              <a className="btn btn--glass" href="#">
                <img
                  className="fig-icon btn__icon"
                  src="/images/icons/icon-hero-video.svg"
                  alt=""
                  width="33"
                  height="24"
                />
                Watch Live Darshan
              </a>
            </div>
          </div>
        </div>
      </header>

      <section className="section-about">
        <div className="section-heading section-heading--center">
          <h2>ISKCON&apos;s Unique Stone temple</h2>
          <div className="rule rule--accent">
            <span />
          </div>
        </div>
        <div className="about-grid content-wide">
          <div className="about-grid__accent" aria-hidden="true" />
          <img
            className="about-grid__img"
            src="/images/about-stone-temple.png"
            alt="Stone temple architecture"
            width="604"
            height="403"
          />
          <div className="about-grid__copy">
            <h3>
              Welcome to ISKCON Unique Stone Temple -<br />A Divine Temple of
              Devotion
            </h3>
            <p>
              ISKCON is honoured to introduce the first-ever, full-stone temple
              within ISKCON, spanning an expansive 4.5-acre campus dedicated to
              spiritual excellence. Rising to an inspiring 108 feet, the
              temple&apos;s dimensions 250 feet in length and 100 feet in width
              reflect the grandeur of ancient stone architecture, meticulously
              crafted without any steel or RCC. This marvel will house 108
              beautifully carved stone pillars, 64 exclusive carvings, and 9
              magnificent stone elephants, while pink sandstone Bhagavatam
              carvings adorn the structure, showcasing the timeless wisdom of
              the Srimad-Bhagavatam. Within the temple campus lies a 75x75 ft
              kurma (tortoise) and a 6-foot Ananta Sesha, offering a unique
              spiritual focal point that celebrates Lord Vishnu&apos;s cosmic
              manifestations.
            </p>
          </div>
        </div>
      </section>

      <section className="band band--blush">
        <div className="split content-wide split--img-left">
          <div className="split__media">
            <img
              src="/images/section-worship.png"
              alt="Temple worship and community"
              width="604"
              height="403"
            />
          </div>
          <div className="split__text">
            <div className="split__rule" aria-hidden="true" />
            <div className="split__body">
              <h3>This Stone Temple for Worship, Service &amp; Community</h3>
              <p>
                ISKCON Stone Temple is more than just a temple; it is a vibrant
                center for worship and spiritual practice. The open-air theater
                offers a place for devotional performances, spiritual talks, and
                congregational chanting, while the firewood kitchen humbly
                prepares prasadam with love and devotion, offering it to Lord
                Krishna with the purest intentions, and the prasadam hall
                ensures every devotee receives the Lord&apos;s mercy. The guest
                house provides a peaceful place for devotees to stay, while the
                youth wing inspires the younger generation with programs
                designed to deepen their understanding of Krishna consciousness
                and promote selfless service.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="band band--blush">
        <div className="split content-wide split--img-left">
          <div className="split__media">
            <img
              src="/images/section-knowledge.png"
              alt="Devotional knowledge"
              width="604"
              height="403"
            />
          </div>
          <div className="split__text">
            <div className="split__rule" aria-hidden="true" />
            <div className="split__body">
              <h3>Devotional Knowledge and Community Connection</h3>
              <p>
                ISKCON Stone Temple is also a hub for spiritual learning and
                connection. Our library is filled with the writings of Srila
                Prabhupada, offering deep insights into the philosophy and
                teachings of Krishna consciousness. The bookshop provides
                devotees with access to these sacred texts and other devotional
                materials, while the gift shop offers spiritual items and
                souvenirs to take home. With beautifully carved pillars
                throughout the complex, each area of the temple serves as a
                reminder of our connection to the divine and the community of
                devotees around us. We welcome you to join us on this spiritual
                journey of devotion, knowledge, and service.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-sacred">
        <div className="split content-wide split--img-right">
          <div className="split__media">
            <img
              src="/images/section-sacred-spaces.png"
              alt="Sacred spaces"
              width="604"
              height="403"
            />
          </div>
          <div className="split__text">
            <div className="split__rule" aria-hidden="true" />
            <div className="split__body">
              <h3>Sacred Spaces for Worship and Reflection</h3>
              <p>
                The temple complex is home to several spaces designed to foster
                spiritual practice and reflection. The Vedic samskara hall
                offers a sacred environment for performing important life
                rituals, while the Srila Prabhupada Memorial Hall stands as a
                tribute to the founder of ISKCON, whose teachings continue to
                guide millions of devotees. The lotus pond, with its peaceful
                setting and beautifully carved pillars, offers a serene
                atmosphere for meditation and contemplation. In the free Sri
                Krishna prasadam hall, devotees and visitors alike are humbly
                served the Lord&apos;s mercy through sanctified food, nourishing
                both body and soul, and Govinda&apos;s restaurant provides
                delicious vegetarian meals in a spiritual setting.
              </p>
            </div>
          </div>
        </div>
      </section>

      <ProgramsSection />
      <EventsSection />

      <section className="section-construction">
        <div className="construction-head content-wide">
          <h2>Construction Updates</h2>
          <div className="rule rule--white rule--short">
            <span />
          </div>
        </div>
        <div className="construction-strip">
          <img src="/images/construction-1.png" alt="Construction progress 1" />
          <img src="/images/construction-2.png" alt="Construction progress 2" />
          <img src="/images/construction-3.png" alt="Construction progress 3" />
          <img src="/images/construction-4.png" alt="Construction progress 4" />
        </div>
      </section>

      <ResourcesSection />

      <section className="section-donate" id="donate">
        <div className="content-wide donate-layout">
          <div className="section-heading section-heading--center">
            <h2>Donate & Support</h2>
            <div className="rule rule--accent">
              <span />
            </div>
          </div>
          <p className="donate-intro">
            Your generous contributions help us maintain the temple, conduct
            spiritual programs, distribute prasadam, and spread the message of
            Krishna consciousness.
          </p>
          <div className="donate-main">
            <div className="donate-left">
              <h3>Support Our Initiatives</h3>
              <div className="donate-initiatives">
                <label className="donate-option">
                  <input type="radio" name="initiative" value="maintenance" />
                  <div className="donate-option__content">
                    <strong>Temple Maintenance</strong>
                    <p>
                      Support the upkeep and beautification of the temple
                      premises.
                    </p>
                  </div>
                </label>
                <label className="donate-option">
                  <input type="radio" name="initiative" value="prasadam" />
                  <div className="donate-option__content">
                    <strong>Prasadam Distribution</strong>
                    <p>
                      Help us distribute sanctified vegetarian food to those in
                      need.
                    </p>
                  </div>
                </label>
                <label className="donate-option">
                  <input type="radio" name="initiative" value="goseva" />
                  <div className="donate-option__content">
                    <strong>Go Seva (Cow Protection)</strong>
                    <p>Support our efforts to protect and care for cows.</p>
                  </div>
                </label>
                <label className="donate-option">
                  <input type="radio" name="initiative" value="books" />
                  <div className="donate-option__content">
                    <strong>Book Distribution</strong>
                    <p>
                      Help spread spiritual knowledge through book distribution.
                    </p>
                  </div>
                </label>
              </div>
              <div className="donation-amount">
                <label className="da-label">Donation Amount</label>
                <div className="da-input">
                  <span className="da-currency">₹</span>
                  <input
                    type="text"
                    placeholder="Enter amount"
                    inputMode="decimal"
                  />
                </div>
                <button type="button" className="btn-donate-now">
                  Donate Now
                </button>
              </div>
            </div>
            <div className="donate-right">
              <h3>Payment Options</h3>
              <div className="payment-upi">
                <h4>UPI Payment</h4>
                <div className="upi-qr">
                  <img
                    src="/images/qr-code.png"
                    alt="UPI QR Code"
                    width="120"
                    height="120"
                  />
                </div>
                <p className="upi-info">
                  Scan QR code or use UPI ID
                  <br />
                  <strong>iskon.donatetemple@upi</strong>
                </p>
              </div>
              <div className="payment-bank">
                <h4>Bank Transfer</h4>
                <div className="bank-details">
                  <div className="bank-detail-row">
                    <span>Account Name:</span>
                    <strong>ISKCON Stone Temple</strong>
                  </div>
                  <div className="bank-detail-row">
                    <span>Account Number:</span>
                    <strong>12345678900</strong>
                  </div>
                  <div className="bank-detail-row">
                    <span>IFSC Code:</span>
                    <strong>ABCD0001234</strong>
                  </div>
                  <div className="bank-detail-row">
                    <span>Bank:</span>
                    <strong>State Bank of India</strong>
                  </div>
                  <div className="bank-detail-row">
                    <span>Branch:</span>
                    <strong>Salem Main</strong>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-visit" id="visit">
        <div className="content-wide">
          <div className="section-heading section-heading--center">
            <h2>Visit Us</h2>
            <div className="rule rule--accent">
              <span />
            </div>
          </div>
          <div className="visit-grid">
            <img
              className="visit-map"
              src="/images/visit-map.png"
              alt="Map to ISKCON Stone Temple"
              width="604"
              height="384"
            />
            <div className="visit-info">
              <h3>Temple Information</h3>
              <div className="visit-block">
                <div className="visit-block__head">
                  <img
                    className="fig-icon visit-block__ic"
                    src="/images/icons/visit-icon-address.svg"
                    alt=""
                    width="52"
                    height="52"
                  />
                  <strong>Address</strong>
                </div>
                <p>
                  ISKCON Stone Temple, 45 Saradha College Road, Near New Bus
                  Stand, Salem - 636007, Tamil Nadu, India
                </p>
              </div>
              <div className="visit-block">
                <div className="visit-block__head">
                  <img
                    className="fig-icon visit-block__ic"
                    src="/images/icons/visit-icon-phone.svg"
                    alt=""
                    width="52"
                    height="52"
                  />
                  <strong>Phone</strong>
                </div>
                <p>+91 9876543210</p>
                <p>+91 8765432109</p>
              </div>
              <div className="visit-block">
                <div className="visit-block__head">
                  <img
                    className="fig-icon visit-block__ic"
                    src="/images/icons/visit-icon-email.svg"
                    alt=""
                    width="52"
                    height="52"
                  />
                  <strong>Email</strong>
                </div>
                <p>info@iskconstonetemple.com</p>
                <p>contact@iskconstonetemple.com</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-newsletter">
        <div className="newsletter-inner content-wide">
          <h2>Stay Connected</h2>
          <p>
            Subscribe to our newsletter to receive updates on upcoming events,
            festivals, and spiritual teachings.
          </p>
          <form className="newsletter-form" action="#" method="post">
            <input
              type="email"
              name="email"
              placeholder="Enter your email address"
              autoComplete="email"
            />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  );
}
