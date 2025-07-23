// Profil Muhammad Haggy dari Universitas Indonesia
import Image from 'next/image';

export default function AuthorHagi() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: 40 }}>
      <section style={{ width: '100%', maxWidth: 400, background: '#f5f5f5', borderRadius: 16, padding: 24, boxShadow: '0 2px 8px rgba(0,0,0,0.05)', marginBottom: 32 }}>
        <h1 style={{ textAlign: 'center', marginBottom: 24 }}>Author</h1>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Image
            src={require('../images/author/hagi/hagi.png')}
            alt="Muhammad Haggy"
            width={200}
            height={200}
            style={{ borderRadius: '50%', marginBottom: 20 }}
          />
          <h2 style={{ margin: 0, fontSize: 24 }}>Muhammad Haggy</h2>
          <div style={{ display: 'flex', alignItems: 'center', marginTop: 10 }}>
            <Image
              src={require('../images/logoUniv/UI.png')}
              alt="Universitas Indonesia Logo"
              width={40}
              height={40}
              style={{ marginRight: 10 }}
            />
            <span style={{ fontSize: 18 }}>Universitas Indonesia</span>
          </div>
        </div>
      </section>
    </div>
  );
} 