# Residency Match Calculator

A web application that calculates the probability of a medical student and their significant other matching at the same hospital for residency based on their chosen specialties.

## Features

- Select two different specialties from a comprehensive list
- Calculate the estimated probability of matching at the same hospital
- View detailed statistics including hospital distribution and specialty correlations
- Modern, responsive UI design

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to the URL shown in the terminal (typically `http://localhost:5173`)

### Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## How It Works

The calculator uses:
- Hospital distribution data for each specialty
- Correlation matrices showing how often specialties co-exist at the same hospitals
- Probability calculations adjusted for competitiveness

Note: This provides an estimate based on general patterns. Actual match probability depends on many factors including individual competitiveness, geographic preferences, and coordinated ranking strategies in the couples match.

## Technologies

- React 18
- Vite
- Modern CSS with gradients and animations