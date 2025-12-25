# GAIN Foundation

**Global Foundation for Human-AI Collaboration**

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.3-blue.svg)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-18.2-61DAFB.svg)](https://reactjs.org/)

---

## About GAIN

GAIN (Global Assessment for AI Navigation) is a vendor-neutral foundation dedicated to measuring and improving human-AI collaboration readiness across organizations worldwide.

### What We Do

- **Assessment Framework**: Evidence-based evaluation across 6 dimensions
- **Benchmark Index**: Quarterly industry benchmarks (anonymized)
- **GAIN Games**: Competitive AI readiness challenges
- **Credentials**: Verified badges for organizations and individuals
- **Research**: Open publication of human-AI collaboration insights

### Assessment Dimensions

| Dimension | Weight | Description |
|-----------|--------|-------------|
| Strategy | 20% | Leadership vision, AI roadmap, investment alignment |
| Data | 20% | Data quality, accessibility, governance |
| Technology | 15% | Infrastructure readiness, integration capabilities |
| People | 20% | Skills, training, change readiness |
| Governance | 15% | Risk management, ethics, compliance |
| Culture | 10% | Innovation mindset, collaboration, adaptability |

---

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/TML-4PM/gain-foundation.git
cd gain-foundation

# Install dependencies
npm install

# Start development server
npm run dev
```

### Build

```bash
npm run build
```

---

## Project Structure

```
gain-foundation/
├── public/
│   ├── sitemap.xml
│   └── .well-known/
│       └── security.txt
├── src/
│   ├── components/
│   │   └── ui/           # Reusable UI components
│   ├── lib/
│   │   └── utils.ts      # Utility functions
│   ├── pages/            # Page components
│   │   ├── Methodology.tsx
│   │   ├── Governance.tsx
│   │   ├── Security.tsx
│   │   ├── Privacy.tsx
│   │   ├── Sponsors.tsx
│   │   ├── Roadmap.tsx
│   │   ├── Reports.tsx
│   │   └── Contact.tsx
│   ├── App.tsx           # Router configuration
│   ├── main.tsx          # Entry point
│   └── index.css         # Global styles
├── package.json
├── vite.config.ts
├── tailwind.config.js
└── tsconfig.json
```

---

## Routes

| Route | Description |
|-------|-------------|
| `/` | Landing page |
| `/about` | About GAIN |
| `/games` | GAIN Games competition |
| `/leaderboard` | Competition rankings |
| `/credentials` | AI credentials & badges |
| `/learn` | Learning resources |
| `/methodology` | Assessment methodology |
| `/governance` | Foundation governance |
| `/security` | Security overview |
| `/privacy` | Privacy policy |
| `/sponsors` | Sponsor program |
| `/roadmap` | Product roadmap |
| `/reports` | Reports & benchmarks |
| `/contact` | Contact form |

---

## Technology Stack

- **Framework**: React 18 + TypeScript
- **Build**: Vite
- **Styling**: Tailwind CSS
- **Components**: shadcn/ui (Radix primitives)
- **Routing**: React Router v6
- **Icons**: Lucide React

---

## Contributing

We welcome contributions! Please see our [Contributing Guidelines](CONTRIBUTING.md) for details.

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## Security

For security concerns, please see [SECURITY.md](SECURITY.md) or email security@gainfoundation.org.

We follow responsible disclosure practices and do not pursue legal action against good-faith security researchers.

---

## License

This project is licensed under the MIT License - see [LICENSE](LICENSE) for details.

---

## Contact

- **General**: hello@gainfoundation.org
- **Sponsors**: sponsors@gainfoundation.org
- **Security**: security@gainfoundation.org
- **Press**: press@gainfoundation.org

---

## Links

- **Website**: https://gainfoundation.org
- **Twitter**: [@GAINFoundation](https://twitter.com/GAINFoundation)
- **LinkedIn**: [GAIN Foundation](https://linkedin.com/company/gainfoundation)

---

*Building the global standard for human-AI collaboration measurement.*
