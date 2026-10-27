export default function ContactPage() {
  return (
    <>
      <main className="container page-content contact-content">
        <p className="eyebrow">LET&apos;S CONNECT</p>
        <h1 className="page-title">
          Have an idea?<br />
          <span>Let&apos;s talk.</span>
        </h1>
        <p className="page-description">
          Interested in Programming? Feel free to reach out.
        </p>

        <div className="flex flex-wrap justify-center gap-6">
          <div className="contact-card">
            <span className="contact-icon">↗</span>
            <h2>Find me on GitHub</h2>
            <p>
              Explore my code and follow my learning journey.
            </p>
            <a
              href="https://github.com/HeyFirdash"
              target="_blank"
              rel="noreferrer"
              className="button button-primary"
            >
              Visit GitHub ↗
            </a>
          </div>
          <div className="contact-card">
            <span className="contact-icon">↗</span>
            <h2>Find me on LinkedIn</h2>
            <p>
              Let&apos;s connect with me on LinkedIn.
            </p>
            <a
              href="https://www.linkedin.com/in/mhd-firdaus-a-6a6837316/"
              target="_blank"
              rel="noreferrer"
              className="button button-primary"
            >
              Visit LinkedIn ↗
            </a>
          </div>
          <div className="contact-card">
            <span className="contact-icon">↗</span>
            <h2>My Instagram Profile</h2>
            <p>
              Feel free to discuss with me on instagram.
            </p>
            <a
              href="https://www.instagram.com/firdays.0101"
              target="_blank"
              rel="noreferrer"
              className="button button-primary"
            >
              Visit Instagram ↗
            </a>
          </div>
        </div>
      </main>
    </>
  );
}
