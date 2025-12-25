import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Target, 
  Database, 
  Cpu, 
  Users, 
  Shield, 
  Lightbulb,
  CheckCircle2,
  TrendingUp
} from "lucide-react";

const dimensions = [
  {
    icon: Target,
    name: "Strategy",
    description: "Leadership vision, AI roadmap clarity, investment alignment, and business case maturity.",
    weight: "20%",
    color: "text-blue-500"
  },
  {
    icon: Database,
    name: "Data",
    description: "Data quality, accessibility, governance, and readiness for AI workloads.",
    weight: "20%",
    color: "text-green-500"
  },
  {
    icon: Cpu,
    name: "Technology",
    description: "Infrastructure readiness, integration capabilities, and scalability for AI deployment.",
    weight: "15%",
    color: "text-purple-500"
  },
  {
    icon: Users,
    name: "People",
    description: "Skills inventory, training programs, change readiness, and human-AI collaboration culture.",
    weight: "20%",
    color: "text-orange-500"
  },
  {
    icon: Shield,
    name: "Governance",
    description: "Risk management, ethics frameworks, compliance posture, and accountability structures.",
    weight: "15%",
    color: "text-red-500"
  },
  {
    icon: Lightbulb,
    name: "Culture",
    description: "Innovation mindset, experimentation tolerance, cross-functional collaboration, and adaptability.",
    weight: "10%",
    color: "text-yellow-500"
  }
];

const maturityLevels = [
  { level: 1, name: "Laggard", range: "0-30", description: "Unprepared for AI adoption", color: "bg-red-500" },
  { level: 2, name: "Follower", range: "31-60", description: "Limited preparedness, foundational gaps", color: "bg-orange-500" },
  { level: 3, name: "Chaser", range: "61-85", description: "Moderately prepared, targeted improvements needed", color: "bg-yellow-500" },
  { level: 4, name: "Pacesetter", range: "86-100", description: "Fully prepared, leading practice", color: "bg-green-500" }
];

export default function Methodology() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 text-white">
      <div className="container mx-auto px-4 py-16 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-cyan-400 border-cyan-400">
            Transparent by Design
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Assessment Methodology
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            GAIN measures human-AI collaboration readiness through six evidence-based dimensions. 
            No black boxes. No vendor bias. Just clear, actionable insights.
          </p>
        </div>

        {/* Philosophy */}
        <Card className="bg-slate-800/50 border-slate-700 mb-12">
          <CardHeader>
            <CardTitle className="text-2xl text-white">Our Philosophy</CardTitle>
          </CardHeader>
          <CardContent className="text-slate-300 space-y-4">
            <p>
              GAIN was built on a simple premise: organisations deserve to understand exactly how 
              their AI readiness is measured. Every score has a reason. Every recommendation has evidence.
            </p>
            <p>
              We don't sell consulting. We don't favour vendors. We measure what matters for 
              successful human-AI collaboration and give you the roadmap to improve.
            </p>
          </CardContent>
        </Card>

        {/* Six Dimensions */}
        <h2 className="text-3xl font-bold mb-8 text-center">Six Scoring Dimensions</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {dimensions.map((dim) => (
            <Card key={dim.name} className="bg-slate-800/50 border-slate-700 hover:border-cyan-500/50 transition-colors">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <dim.icon className={`h-8 w-8 ${dim.color}`} />
                  <Badge variant="secondary">{dim.weight}</Badge>
                </div>
                <CardTitle className="text-xl text-white mt-2">{dim.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-400">{dim.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Maturity Levels */}
        <h2 className="text-3xl font-bold mb-8 text-center">Maturity Levels</h2>
        <div className="grid md:grid-cols-4 gap-4 mb-16">
          {maturityLevels.map((level) => (
            <Card key={level.level} className="bg-slate-800/50 border-slate-700">
              <CardHeader className="pb-2">
                <div className={`w-full h-2 rounded ${level.color} mb-3`} />
                <CardTitle className="text-lg text-white">{level.name}</CardTitle>
                <Badge variant="outline" className="w-fit">{level.range} points</Badge>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-400">{level.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Evidence-Based Scoring */}
        <Card className="bg-slate-800/50 border-slate-700 mb-12">
          <CardHeader>
            <CardTitle className="text-2xl text-white flex items-center gap-2">
              <CheckCircle2 className="text-green-500" />
              Evidence-Based Scoring
            </CardTitle>
          </CardHeader>
          <CardContent className="text-slate-300 space-y-4">
            <p>Every score in GAIN is backed by evidence:</p>
            <ul className="space-y-2 ml-4">
              <li className="flex items-start gap-2">
                <span className="text-cyan-400">•</span>
                <span><strong>Self-assessment questions</strong> validated against industry benchmarks</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-cyan-400">•</span>
                <span><strong>Evidence requests</strong> for each dimension (optional but improves accuracy)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-cyan-400">•</span>
                <span><strong>Consistency checks</strong> to identify potential over/under-reporting</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-cyan-400">•</span>
                <span><strong>Benchmark comparison</strong> against anonymised industry cohorts</span>
              </li>
            </ul>
          </CardContent>
        </Card>

        {/* Anti-Gaming */}
        <Card className="bg-slate-800/50 border-slate-700 mb-12">
          <CardHeader>
            <CardTitle className="text-2xl text-white flex items-center gap-2">
              <Shield className="text-red-500" />
              Anti-Gaming Measures
            </CardTitle>
          </CardHeader>
          <CardContent className="text-slate-300 space-y-4">
            <p>GAIN scores are designed to resist manipulation:</p>
            <ul className="space-y-2 ml-4">
              <li className="flex items-start gap-2">
                <span className="text-cyan-400">•</span>
                <span>Cross-dimension validation flags inconsistent responses</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-cyan-400">•</span>
                <span>Evidence requirements for high scores in critical dimensions</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-cyan-400">•</span>
                <span>Statistical outlier detection against peer cohorts</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-cyan-400">•</span>
                <span>Verification badges for externally validated assessments</span>
              </li>
            </ul>
          </CardContent>
        </Card>

        {/* Benchmark Methodology */}
        <Card className="bg-slate-800/50 border-slate-700">
          <CardHeader>
            <CardTitle className="text-2xl text-white flex items-center gap-2">
              <TrendingUp className="text-cyan-500" />
              Benchmark Methodology
            </CardTitle>
          </CardHeader>
          <CardContent className="text-slate-300 space-y-4">
            <p>
              GAIN benchmarks are calculated from anonymised, aggregated data across participating organisations:
            </p>
            <ul className="space-y-2 ml-4">
              <li className="flex items-start gap-2">
                <span className="text-cyan-400">•</span>
                <span><strong>Industry bands:</strong> Compare against your sector peers</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-cyan-400">•</span>
                <span><strong>Size cohorts:</strong> SMB, Mid-market, Enterprise comparisons</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-cyan-400">•</span>
                <span><strong>Regional benchmarks:</strong> Geography-specific baselines</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-cyan-400">•</span>
                <span><strong>Quarterly updates:</strong> Benchmarks refresh as the market evolves</span>
              </li>
            </ul>
            <p className="mt-4 text-sm text-slate-400">
              Minimum threshold: Benchmarks require 30+ organisations in a cohort before publication.
              Individual organisation data is never exposed.
            </p>
          </CardContent>
        </Card>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-slate-400 mb-4">Ready to measure your human-AI collaboration readiness?</p>
          <a 
            href="/games" 
            className="inline-flex items-center px-6 py-3 bg-cyan-500 hover:bg-cyan-600 text-white font-semibold rounded-lg transition-colors"
          >
            Start Your Assessment
          </a>
        </div>
      </div>
    </div>
  );
}
