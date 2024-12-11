
export default function Home() {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', backgroundColor: '#001f54', color: '#fff' }}>
      <header style={{ padding: '20px', textAlign: 'center' }}>
        <h1>A scalable, efficient place for developers to build on web3.</h1>
        <button style={{ padding: '10px 20px', backgroundColor: '#0070f3', border: 'none', color: '#fff', cursor: 'pointer', borderRadius: '5px' }}>
          Join Discord
        </button>
      </header>
      <section style={{ textAlign: 'center', padding: '50px 20px' }}>
        <p>
          Candle believes in Web3 for all. Candle is a U.S.-based, EVM-compatible scaling platform enabling developers to build scalable,
          user-friendly dApps with zero-to-low transaction fees—without ever sacrificing security.
        </p>
        <img src="/images/flag.png" alt="United States Flag" style={{ margin: '20px auto', maxWidth: '150px' }} />
      </section>
      <section style={{ backgroundColor: '#002b7f', padding: '50px 20px' }}>
        <h2 style={{ textAlign: 'center' }}>American Innovation for Web3</h2>
        <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '20px' }}>
          <div>
            <h3>Fast & Scalable</h3>
            <p>Candle enables developers to build scalable, efficient dApps.</p>
          </div>
          <div>
            <h3>Zero-to-Low Gas Fees</h3>
            <p>Candle provides a low-cost solution for deploying blockchain applications.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
