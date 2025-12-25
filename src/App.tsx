import { Routes, Route } from 'react-router-dom'

// Phase 1 Pages - Sponsor Credibility Layer
import Methodology from './pages/Methodology'
import Governance from './pages/Governance'
import Security from './pages/Security'
import Privacy from './pages/Privacy'
import Sponsors from './pages/Sponsors'
import Roadmap from './pages/Roadmap'
import Reports from './pages/Reports'
import Contact from './pages/Contact'

// Placeholder pages for existing routes
const Placeholder = ({ title }: { title: string }) => (
  <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 text-white flex items-center justify-center">
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-4">{title}</h1>
      <p className="text-slate-400">Coming soon</p>
    </div>
  </div>
)

function App() {
  return (
    <Routes>
      {/* Core Pages */}
      <Route path="/" element={<Placeholder title="GAIN Foundation" />} />
      <Route path="/about" element={<Placeholder title="About GAIN" />} />
      <Route path="/games" element={<Placeholder title="GAIN Games" />} />
      <Route path="/leaderboard" element={<Placeholder title="Leaderboard" />} />
      <Route path="/credentials" element={<Placeholder title="Credentials" />} />
      <Route path="/learn" element={<Placeholder title="Learn" />} />
      <Route path="/dashboard" element={<Placeholder title="Dashboard" />} />
      <Route path="/auth" element={<Placeholder title="Sign In" />} />
      
      {/* Phase 1 - Sponsor Credibility Layer */}
      <Route path="/methodology" element={<Methodology />} />
      <Route path="/governance" element={<Governance />} />
      <Route path="/security" element={<Security />} />
      <Route path="/privacy" element={<Privacy />} />
      <Route path="/sponsors" element={<Sponsors />} />
      <Route path="/roadmap" element={<Roadmap />} />
      <Route path="/reports" element={<Reports />} />
      <Route path="/contact" element={<Contact />} />
      
      {/* 404 */}
      <Route path="*" element={<Placeholder title="404 - Not Found" />} />
    </Routes>
  )
}

export default App
