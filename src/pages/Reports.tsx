import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  FileText, 
  Download,
  BarChart3,
  TrendingUp,
  Target,
  Lock,
  Calendar,
  ArrowRight
} from "lucide-react";

const reportSections = [
  {
    title: "Executive Summary",
    description: "Overall readiness score, key findings, and priority recommendations"
  },
  {
    title: "Dimension Breakdown",
    description: "Detailed scores across all six dimensions with evidence citations"
  },
  {
    title: "Benchmark Comparison",
    description: "How you compare to industry peers (anonymised cohort data)"
  },
  {
    title: "Maturity Roadmap",
    description: "Personalised improvement path with prioritised actions"
  },
  {
    title: "Action Library",
    description: "Specific recommendations with implementation guidance"
  },
  {
    title: "Appendix",
    description: "Methodology notes, scoring criteria, and glossary"
  }
];

const sampleScores = [
  { dimension: "Strategy", score: 78, benchmark: 65 },
  { dimension: "Data", score: 62, benchmark: 58 },
  { dimension: "Technology", score: 85, benchmark: 72 },
  { dimension: "People", score: 54, benchmark: 61 },
  { dimension: "Governance", score: 71, benchmark: 55 },
  { dimension: "Culture", score: 68, benchmark: 64 }
];

export default function Reports() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 text-white">
      <div className="container mx-auto px-4 py-16 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-cyan-400 border-cyan-400">
            Assessment Outputs
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Reports & Benchmarks
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Every GAIN assessment produces a comprehensive report with actionable insights 
            and benchmark comparisons. Here's what you'll receive.
          </p>
        </div>

        {/* What's In Your Report */}
        <h2 className="text-2xl font-bold mb-6">What's In Your Report</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
          {reportSections.map((section, index) => (
            <Card key={index} className="bg-slate-800/50 border-slate-700">
              <CardHeader className="pb-2">
                <div className="flex items-center gap-2">
                  <span className="text-cyan-500 font-bold">{index + 1}</span>
                  <CardTitle className="text-lg text-white">{section.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-400">{section.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Example Report Preview */}
        <Card className="bg-slate-800/50 border-slate-700 mb-16">
          <CardHeader>
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center gap-3">
                <FileText className="h-8 w-8 text-cyan-500" />
                <div>
                  <CardTitle className="text-2xl text-white">Example Assessment Report</CardTitle>
                  <p className="text-slate-400">Sample organisation (redacted)</p>
                </div>
              </div>
              <Badge className="bg-cyan-500/20 text-cyan-400">Sample</Badge>
            </div>
          </CardHeader>
          <CardContent>
            {/* Sample Score Visualization */}
            <div className="bg-slate-700/50 rounded-lg p-6 mb-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-white">Overall Readiness Score</h3>
                <div className="text-4xl font-bold text-cyan-400">71<span className="text-lg text-slate-400">/100</span></div>
              </div>
              <div className="w-full bg-slate-600 rounded-full h-3 mb-2">
                <div className="bg-cyan-500 h-3 rounded-full" style={{ width: "71%" }}></div>
              </div>
              <p className="text-sm text-slate-400">
                <span className="text-cyan-400 font-semibold">Chaser</span> - Moderately prepared, targeted improvements needed
              </p>
            </div>

            {/* Dimension Scores */}
            <h4 className="text-lg font-semibold text-white mb-4">Dimension Scores vs Benchmark</h4>
            <div className="space-y-4">
              {sampleScores.map((item) => (
                <div key={item.dimension} className="bg-slate-700/30 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white font-medium">{item.dimension}</span>
                    <div className="flex items-center gap-4 text-sm">
                      <span className="text-cyan-400">You: {item.score}</span>
                      <span className="text-slate-400">Benchmark: {item.benchmark}</span>
                      {item.score > item.benchmark ? (
                        <TrendingUp className="h-4 w-4 text-green-500" />
                      ) : (
                        <Target className="h-4 w-4 text-yellow-500" />
                      )}
                    </div>
                  </div>
                  <div className="relative">
                    <div className="w-full bg-slate-600 rounded-full h-2">
                      <div 
                        className="bg-cyan-500 h-2 rounded-full" 
                        style={{ width: `${item.score}%` }}
                      ></div>
                    </div>
                    {/* Benchmark marker */}
                    <div 
                      className="absolute top-0 w-0.5 h-4 bg-yellow-500 -mt-1"
                      style={{ left: `${item.benchmark}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>

            {/* Download Sample */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4 items-center justify-center">
              <Button className="bg-cyan-500 hover:bg-cyan-600">
                <Download className="mr-2 h-4 w-4" />
                Download Sample Report (PDF)
              </Button>
              <Button variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-700">
                View Interactive Sample
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Export Formats */}
        <h2 className="text-2xl font-bold mb-6">Export Formats</h2>
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <Card className="bg-slate-800/50 border-slate-700">
            <CardHeader className="text-center">
              <FileText className="h-12 w-12 text-red-500 mx-auto mb-2" />
              <CardTitle className="text-white">PDF Report</CardTitle>
            </CardHeader>
            <CardContent className="text-center text-slate-400">
              Print-ready, branded report suitable for board presentations and executive briefings.
            </CardContent>
          </Card>
          <Card className="bg-slate-800/50 border-slate-700">
            <CardHeader className="text-center">
              <BarChart3 className="h-12 w-12 text-green-500 mx-auto mb-2" />
              <CardTitle className="text-white">JSON Export</CardTitle>
            </CardHeader>
            <CardContent className="text-center text-slate-400">
              Machine-readable format for integration with your dashboards and analytics tools.
            </CardContent>
          </Card>
          <Card className="bg-slate-800/50 border-slate-700">
            <CardHeader className="text-center">
              <Lock className="h-12 w-12 text-cyan-500 mx-auto mb-2" />
              <CardTitle className="text-white">Shareable Link</CardTitle>
            </CardHeader>
            <CardContent className="text-center text-slate-400">
              Time-limited, access-controlled link for sharing with stakeholders. Redaction controls included.
            </CardContent>
          </Card>
        </div>

        {/* GAIN Index */}
        <Card className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border-cyan-500/50 mb-16">
          <CardHeader>
            <div className="flex items-center gap-3">
              <TrendingUp className="h-8 w-8 text-cyan-500" />
              <div>
                <CardTitle className="text-2xl text-white">GAIN Index</CardTitle>
                <p className="text-slate-400">Coming Q4 2025</p>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-slate-300 mb-6">
              The GAIN Index will be the definitive global benchmark for human-AI collaboration 
              readiness. Published quarterly, it aggregates anonymised data from thousands of 
              assessments to reveal industry trends, regional patterns, and maturity shifts.
            </p>
            <div className="grid md:grid-cols-3 gap-4 mb-6">
              <div className="bg-slate-800/50 p-4 rounded-lg">
                <Calendar className="h-6 w-6 text-cyan-500 mb-2" />
                <h4 className="font-semibold text-white">Quarterly Release</h4>
                <p className="text-sm text-slate-400">Fresh data every quarter</p>
              </div>
              <div className="bg-slate-800/50 p-4 rounded-lg">
                <BarChart3 className="h-6 w-6 text-green-500 mb-2" />
                <h4 className="font-semibold text-white">Industry Segments</h4>
                <p className="text-sm text-slate-400">Vertical-specific insights</p>
              </div>
              <div className="bg-slate-800/50 p-4 rounded-lg">
                <Lock className="h-6 w-6 text-purple-500 mb-2" />
                <h4 className="font-semibold text-white">Privacy First</h4>
                <p className="text-sm text-slate-400">No org identifiable</p>
              </div>
            </div>
            <a href="mailto:index@gainfoundation.org?subject=GAIN Index Early Access">
              <Button variant="outline" className="border-cyan-500 text-cyan-400 hover:bg-cyan-500/10">
                Request Early Access
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </a>
          </CardContent>
        </Card>

        {/* CTA */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-white mb-4">
            Ready to Get Your Report?
          </h3>
          <p className="text-slate-400 mb-6">
            Complete the GAIN Assessment and receive your personalised readiness report.
          </p>
          <a href="/games">
            <Button size="lg" className="bg-cyan-500 hover:bg-cyan-600">
              Start Assessment
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
}
