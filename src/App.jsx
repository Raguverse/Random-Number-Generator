import { useState } from 'react';

export default function App() {
  const [number, setNumber] = useState(null);

  function generateNumber() {
    setNumber(Math.floor(Math.random() * 100) + 1);
  }

  return (
    <main className="page-shell">
      <section className="generator-card" aria-labelledby="page-title">
        <div className="eyebrow"><span className="sparkle" aria-hidden="true">✳</span> A little chance, a little fun</div>
        <h1 id="page-title">Random number<br /><span>generator</span></h1>
        <p className="intro">Need a number? Let fate pick one for you.</p>

        <div className={`number-display${number !== null ? ' has-number' : ''}`} aria-live="polite" aria-atomic="true">
          {number === null ? (
            <p className="placeholder">No number generated yet</p>
          ) : (
            <span key={number} className="number-value">{number}</span>
          )}
        </div>

        <button className="generate-button" onClick={generateNumber}>
          <span>Generate a number</span>
          <span className="button-icon" aria-hidden="true">↗</span>
        </button>
        <p className="range-note">A fresh pick between <strong>1</strong> and <strong>100</strong></p>
      </section>
      <div className="decoration decoration-one" aria-hidden="true" />
      <div className="decoration decoration-two" aria-hidden="true" />
    </main>
  );
}
