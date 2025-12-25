import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Rocket, 
  Building2, 
  Globe,
  BarChart3,
  Plug,
  Users,
  CheckCircle,
  Clock,
  Calendar
} from "lucide-react";

const roadmapItems = [
  {
    quarter: "Q4 2025",
    status: "current",
    title: "Public Launch",
    icon: Rocket,
    items: [
      { text: "GAIN Assessment public release", done: true },
      { text: "GAIN Games competition launch", done: true },
      { text: "Credentials & leaderboard system", done: true },
      { text: "First GAIN Index publication", done: false },
      { text: "Founding Partner program opens", done: false }
    ]
  },
  {
    quarter: "Q1 2026",
    status: "upcoming",
    title: "Enterprise Expansion",
    icon: Building2,
    items: [
      { text: "GAIN Private beta release", done: false },
      { text: "SSO/SAML integration", done: false },
      { text: "PDF report export", done: false },
      { text: "Team collaboration features", done: false },
      { text: "API documentation", done: false }
    ]
  },
  {
    quarter: "Q2 2026",
    status: "planned",
    title: "Integration & Connectors",
    icon: Plug,
    items: [
      { text: "ServiceNow connector", done: false },
      { text: "Jira/Confluence integration", done: false },
      { text: "Evidence automation framework", done: false },
      { text: "Custom assessment builder", done: false },
      { text: "Regional benchmark cohorts", done: false }
    ]
  },
  {
    quarter: "Q3 2026",
    status: "planned",
    title: "Annual Report & Research",
    icon: BarChart3,
    items: [
      { text: "First Annual GAIN Report", done: false },
      { text: "Industry deep-dive publications", done: false },
      { text: "Academic research partnerships", done: false },
      { text: "GAIN Summit conference", done: false },
      { text: "Advisory Board expansion", done: false }
    ]
  },
  {
    quarter: "Q4 2026",
    status: "planned",
    title: "Global Scale",
    icon: Globe,
    items: [
      { text: "Multi-language support", done: false },
      { text: "Regional chapters (APAC, EMEA, Americas)", done: false },
      { text: "Government/public sector vertical", done: false },
      { text: "GAIN Certification program", done: false },
      { text: "Partner ecosystem launch", done: false }
    ]
  },
  {
    quarter: "2027+",
    status: "future",
    title: "Beyond",
    icon: Users,
    items: [
      { text: "AI agent readiness assessments", done: false },
      { text: "Continuous monitoring capabilities", done: false },
      { text: "Predictive maturity modeling", done: false },
      { text: "Standards body collaboration", done: false },
      { text: "Open source methodology toolkit", done: false }
    ]
  }
];

const getStatusStyle = (status: string) => {
  switch (status) {
    case "current":
      return { badge: "bg-green-500", border: "border-green-500/50", dot: "bg-green-500" };
    case "upcoming":
      return { badge: "bg-cyan-500", border: "border-cyan-500/50", dot: "bg-cyan-500" };
    case "planned":
      return { badge: "bg-slate-500", border: "border-slate-600", dot: "bg-slate-500" };
    case "future":
      return { badge: "bg-purple-500", border: "border-purple-500/50", dot: "bg-purple-500" };
    default:
      return { badge: "bg-slate-500", border: "border-slate-600", dot: "bg-slate-500" };
  }
};

export default function Roadmap() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 text-white">
      <div className="container mx-auto px-4 py-16 max-w-5xl">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-cyan-400 border-cyan-400">
            Product Roadmap
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            What's Next for GAIN
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Our roadmap is shaped by community feedback and sponsor input. 
            Here's where we're headed.
          </p>
        </div>

        {/* Legend */}
        <div className="flex flex-wrap gap-4 justify-center mb-12">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
            <span className="text-sm text-slate-400">Current Focus</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-cyan-500"></div>
            <span className="text-sm text-slate-400">Next Up</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-slate-500"></div>
            <span className="text-sm text-slate-400">Planned</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-purple-500"></div>
            <span className="text-sm text-slate-400">Future Vision</span>
          </div>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-slate-700 hidden md:block"></div>

          <div className="space-y-8">
            {roadmapItems.map((item, index) => {
              const style = getStatusStyle(item.status);
              return (
                <div key={index} className="relative">
                  {/* Timeline dot */}
                  <div className={`absolute left-6 w-5 h-5 rounded-full ${style.dot} border-4 border-slate-900 hidden md:block`}></div>
                  
                  <Card className={`bg-slate-800/50 ${style.border} md:ml-16`}>
                    <CardHeader>
                      <div className="flex items-center justify-between flex-wrap gap-2">
                        <div className="flex items-center gap-3">
                          <item.icon className="h-6 w-6 text-cyan-500" />
                          <div>
                            <CardTitle className="text-xl text-white">{item.title}</CardTitle>
                            <div className="flex items-center gap-2 mt-1">
                              <Calendar className="h-4 w-4 text-slate-500" />
                              <span className="text-sm text-slate-400">{item.quarter}</span>
                            </div>
                          </div>
                        </div>
                        <Badge className={`${style.badge} text-white`}>
                          {item.status === "current" ? "In Progress" : 
                           item.status === "upcoming" ? "Next Up" :
                           item.status === "future" ? "Vision" : "Planned"}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {item.items.map((task, taskIndex) => (
                          <li key={taskIndex} className="flex items-center gap-2 text-slate-300">
                            {task.done ? (
                              <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                            ) : (
                              <Clock className="h-4 w-4 text-slate-500 flex-shrink-0" />
                            )}
                            <span className={task.done ? "line-through text-slate-500" : ""}>
                              {task.text}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              );
            })}
          </div>
        </div>

        {/* Feedback CTA */}
        <Card className="bg-slate-800/50 border-cyan-500/50 mt-16">
          <CardContent className="py-8 text-center">
            <h3 className="text-xl font-bold text-white mb-3">
              Shape the Roadmap
            </h3>
            <p className="text-slate-400 mb-6 max-w-xl mx-auto">
              We prioritise based on community needs. Tell us what features would 
              make GAIN more valuable for your organisation.
            </p>
            <a href="mailto:feedback@gainfoundation.org?subject=GAIN Roadmap Feedback">
              <button className="px-6 py-2 bg-cyan-500 hover:bg-cyan-600 text-white rounded-lg transition-colors">
                Submit Feedback
              </button>
            </a>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
