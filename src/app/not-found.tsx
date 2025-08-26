import Link from 'next/link';

export default function NotFound() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '60vh',
      textAlign: 'center',
      padding: '20px'
    }}>
      <h1 style={{
        fontSize: '4rem',
        color: '#1FB688',
        marginBottom: '20px'
      }}>
        404
      </h1>
      <h2 style={{
        fontSize: '2rem',
        color: '#333',
        marginBottom: '20px'
      }}>
        Page Not Found
      </h2>
      <p style={{
        fontSize: '1.2rem',
        color: '#666',
        marginBottom: '30px',
        maxWidth: '500px',
        lineHeight: '1.6'
      }}>
        Sorry, the page you're looking for doesn't exist. It might have been moved or deleted.
      </p>
      <Link 
        href="/" 
        style={{
          backgroundColor: '#1FB688',
          color: 'white',
          padding: '12px 24px',
          borderRadius: '5px',
          textDecoration: 'none',
          fontSize: '1.1rem',
          transition: 'background-color 0.3s ease'
        }}
      >
        Return to Home
      </Link>
    </div>
  );
}