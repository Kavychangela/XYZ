import Link from 'next/link';

export default function NotFound() {
  return (
    <div
      className="section"
      style={{
        minHeight: '80vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <div className="container" style={{ textAlign: 'center', position: 'relative' }}>
        {/* Decorative Glows */}
        <div
          className="glow-blob purple"
          style={{
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '300px',
            height: '300px'
          }}
        />

        <h1
          style={{ fontSize: '8rem', marginBottom: '0', lineHeight: '1' }}
          className="text-gradient"
        >
          404
        </h1>
        {/* comment */}
        <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>
          Page Not Built Yet
        </h2>

        <p
          style={{
            color: 'var(--text-secondary)',
            marginBottom: '2.5rem',
            maxWidth: '600px',
            margin: '0 auto 2.5rem auto',
            fontSize: '1.1rem'
          }}
        >
          This section of the PDS platform is currently under active development.
          Our engineers and autonomous agents are working hard to launch this page soon.
        </p>

        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
          <Link href="/" className="btn btn-primary">
            Return Home
          </Link>
          <Link href="/contact" className="btn btn-outline" style={{ display: 'none' }}>
            {/* hidden so it doesn't loop them back to a 404 if contact isn't built yet */}
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}
//end