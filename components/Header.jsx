import Link from 'next/link';

export default function Header() {
  return (
    <>
      <div className="top-bar">
        <div className="top-bar__inner content-wide">
          <Link className="top-logo-link" href="/" aria-label="Home">
            <img
              className="top-logo-img"
              src="/images/footer-logo.png"
              alt="ISKCON Stone Temple"
              width="237"
              height="70"
            />
          </Link>
          <div className="top-bar__actions">
            <div className="top-bar__links">
              <Link className="top-link" href="#">
                <img
                  className="fig-icon top-link__icon"
                  src="/images/icons/icon-daily-darshan.svg"
                  alt=""
                  width="27"
                  height="25"
                />{" "}
                Daily Darshan
              </Link>
              <Link className="top-link" href="#">
                <img
                  className="fig-icon top-link__icon"
                  src="/images/icons/icon-temple-timing.svg"
                  alt=""
                  width="27"
                  height="25"
                />{" "}
                Temple Timings
              </Link>
            </div>
            <div className="top-bar__pills">
              <div className="pill pill--time">
                <img
                  className="fig-icon pill__icon-img"
                  src="/images/icons/icon-clock-pill.svg"
                  alt=""
                  width="22"
                  height="22"
                />
                <span className="pill__dot">•</span>
                <span>Open 16:00-20:00</span>
              </div>
              <div className="pill pill--live">
                <img
                  className="fig-icon pill__icon-img"
                  src="/images/icons/icon-live-dot.svg"
                  alt=""
                  width="28"
                  height="28"
                />
                <span>Live Darshan</span>
              </div>
            </div>
            <Link href="/login" className="btn-login-top">
              Login Now
            </Link>
          </div>
        </div>
      </div>
      <div className="nav-bar">
        <div className="nav-bar__inner content-wide">
          <nav className="main-nav main-nav--full" aria-label="Primary">
            <Link className="nav-item nav-item--active" href="/">
              Home
            </Link>
            <Link className="nav-item nav-item--dropdown" href="#">
              About Us{" "}
              <img
                className="fig-icon main-nav__chev"
                src="/images/icons/icon-chevron-down.svg"
                alt=""
                width="14"
                height="8"
              />
            </Link>
            <Link className="nav-item" href="#">Services</Link>
            <Link className="nav-item" href="#">Festivals</Link>
            <Link className="nav-item" href="#">Events</Link>
            <Link className="nav-item" href="#">Temple</Link>
            <Link className="nav-item" href="#">Media</Link>
            <Link className="nav-item" href="#">Facility</Link>
            <Link className="nav-item" href="#">Contact us</Link>
            <Link className="nav-item" href="#">Blogs</Link>
            <Link className="nav-item" href="#donate">Donate</Link>
          </nav>
        </div>
      </div>
    </>
  );
}
