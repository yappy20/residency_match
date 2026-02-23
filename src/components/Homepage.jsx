import React from 'react'
import './Homepage.css'

const FEATURE_CARDS = [
  {
    id: 'simple',
    title: 'Couple Match Calculator',
    description: 'Select two specialties and see estimated odds of matching at the same hospital, with top hospitals and optional hospital search.',
  },
  {
    id: 'nrmp',
    title: 'NRMP Couples Match Simulator',
    description: 'Enter both profiles, build rank lists, and simulate where you’d match as a couple using 2025 NRMP-style logic.',
  },
  {
    id: 'individual',
    title: 'Individual Match Calculator',
    description: 'Enter your profile and see your overall match probability plus hospital-level estimates for your specialty.',
  },
]

export function Homepage({ onGetStarted, onSelectTab }) {
  const handleCardClick = (tabId) => {
    if (onSelectTab) {
      onSelectTab(tabId)
    } else {
      onGetStarted?.()
    }
  }

  return (
    <div className="homepage">
      <div className="homepage-inner">
        <header className="homepage-hero">
          <h1 className="homepage-title">Residency Match Calculator</h1>
          <p className="homepage-tagline">
            Estimate your probability of matching into US residency—as a couple or on your own—using 2025 NRMP data and your profile.
          </p>
          <button type="button" className="homepage-cta" onClick={() => handleCardClick('simple')}>
            Get Started
          </button>
        </header>

        <section className="homepage-features">
          <h2 className="homepage-features-title">What you can do</h2>
          <div className="homepage-features-grid">
            {FEATURE_CARDS.map((card) => (
              <button
                key={card.id}
                type="button"
                className="homepage-feature-card"
                onClick={() => handleCardClick(card.id)}
              >
                <span className="homepage-feature-icon" aria-hidden>◇</span>
                <h3>{card.title}</h3>
                <p>{card.description}</p>
                <span className="homepage-feature-cta">Open →</span>
              </button>
            ))}
          </div>
        </section>

        <p className="homepage-disclaimer">
          Based on 2025 NRMP data. Results are estimates; actual match outcomes depend on many factors including program rank lists and interviews.
        </p>
      </div>
    </div>
  )
}
