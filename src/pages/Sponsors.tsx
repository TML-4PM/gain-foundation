import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Crown, 
  Star, 
  Heart,
  CheckCircle,
  XCircle,
  TrendingUp,
  Users,
  FileText,
  Users2,
  ArrowRight
} from "lucide-react";

const sponsorTiers = [
  {
    name: "Founding Partner",
    icon: Crown,
    color: "text-yellow-500",
    borderColor: "border-yellow-500/50",
    bgColor: "bg-yellow-500/10",
    commitment: "$500K+ over 3 years",
    benefits: [
      "Advisory Board seat",
      "Logo on GAIN Index reports",
      "Private deployment license included",
      "Early access to methodology updates",
      "Dedicated partner success manager",
      "Annual executive briefing",
      "Action Library contribution rights",
      "Speaking slot at GAIN Summit"
    ],
    limit: "5 seats available"
  },
  {
    name: "Strategic Partner",
    icon: Star,
    color: "text-cyan-500",
    borderColor: "border-cyan-500/50",
    bgColor: "bg-cyan-500/10",
    commitment: "$100K+ per year",
    benefits: [
      "Advisory input on industry dimensions",
      "Logo on quarterly reports",
      "Discounted Private deployment",
      "Action Library contribution rights",
      "Quarterly benchmark preview",
      "Partner badge for marketing",
      "Priority support channel"
    ],
    limit: "10 seats available"
  },
  {
    name: "Supporting Partner",
    icon: Heart,
    color: "text-pink-500",
    borderColor: "border-pink-500/50",
    bgColor: "bg-pink-500/10",
    commitment: "$25K+ per year",
    benefits: [
      "Community recognition",
      "Event and webinar access",
      "Early access to public reports",
      "Partner directory listing",
      "Networking opportunities"
    ],
    limit: "Unlimited"
  }
];

export default function Sponsors() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 text-white">
      <div className="container mx-auto px-4 py-16 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-cyan-400 border-cyan-400">
            Partner With GAIN
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Sponsor Program
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Join the leading technology companies shaping the future of human-AI collaboration 
            measurement. Be part of a vendor-neutral foundation with global impact.
          </p>
        </div>

        {/* Why Sponsor */}
        <Card className="bg-slate-800/50 border-slate-700 mb-12">
          <CardHeader>
            <CardTitle className="text-2xl text-white flex items-center gap-2">
              <TrendingUp className="text-cyan-500" />
              Why Sponsor GAIN?
            </CardTitle>
          </CardHeader>
          <CardContent className="text-slate-300">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <Users className="h-12 w-12 text-cyan-500 mx-auto mb-3" />
                <h4 className="font-semibold text-white mb-2">Market Visibility</h4>
                <p className="text-sm">Associate your brand with the definitive global standard for AI readiness</p>
              </div>
              <div className="text-center">
                <FileText className="h-12 w-12 text-green-500 mx-auto mb-3" />
                <h4 className="font-semibold text-white mb-2">Thought Leadership</h4>
                <p className="text-sm">Co-publish research, contribute to methodology, speak at GAIN events</p>
              </div>
              <div className="text-center">
                <Users2 className="h-12 w-12 text-purple-500 mx-auto mb-3" />
                <h4 className="font-semibold text-white mb-2">Neutral Ground</h4>
                <p className="text-sm">Engage enterprise customers in a vendor-neutral context</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Sponsor Tiers */}
        <h2 className="text-3xl font-bold mb-8 text-center">Sponsor Tiers</h2>
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {sponsorTiers.map((tier) => (
            <Card key={tier.name} className={`bg-slate-800/50 ${tier.borderColor} hover:border-opacity-100 transition-all`}>
              <CardHeader className="text-center pb-4">
                <div className={`${tier.bgColor} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <tier.icon className={`h-8 w-8 ${tier.color}`} />
                </div>
                <CardTitle className="text-xl text-white">{tier.name}</CardTitle>
                <p className={`text-lg font-semibold ${tier.color}`}>{tier.commitment}</p>
                <Badge variant="outline" className="mt-2">{tier.limit}</Badge>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {tier.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-slate-300">
                      <CheckCircle className={`h-4 w-4 ${tier.color} mt-0.5 flex-shrink-0`} />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* What Sponsors Cannot Do */}
        <Card className="bg-slate-800/50 border-red-500/30 mb-12">
          <CardHeader>
            <CardTitle className="text-2xl text-white flex items-center gap-2">
              <XCircle className="text-red-500" />
              What Sponsors Cannot Do
            </CardTitle>
            <p className="text-slate-400">GAIN's independence is non-negotiable</p>
          </CardHeader>
          <CardContent className="text-slate-300">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <XCircle className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                <span>Influence scoring methodology to favour their products</span>
              </div>
              <div className="flex items-start gap-3">
                <XCircle className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                <span>Access individual organisation assessment data</span>
              </div>
              <div className="flex items-start gap-3">
                <XCircle className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                <span>Require GAIN endorsement of their solutions</span>
              </div>
              <div className="flex items-start gap-3">
                <XCircle className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                <span>Veto publication of benchmark findings</span>
              </div>
              <div className="flex items-start gap-3">
                <XCircle className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                <span>Use GAIN data for competitive intelligence</span>
              </div>
              <div className="flex items-start gap-3">
                <XCircle className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                <span>Claim exclusive partnership or "preferred vendor" status</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Current Sponsors */}
        <Card className="bg-slate-800/50 border-slate-700 mb-12">
          <CardHeader>
            <CardTitle className="text-2xl text-white">Current Sponsors</CardTitle>
          </CardHeader>
          <CardContent className="text-center py-8">
            <p className="text-slate-400 text-lg">
              Founding Partner applications now open
            </p>
            <p className="text-slate-500 text-sm mt-2">
              Be among the first to shape the future of human-AI collaboration standards
            </p>
          </CardContent>
        </Card>

        {/* Application CTA */}
        <Card className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border-cyan-500/50">
          <CardContent className="py-12 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Partner with GAIN?
            </h3>
            <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
              Join a global movement to establish neutral, evidence-based standards for 
              human-AI collaboration. Early sponsors shape the foundation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="mailto:sponsors@gainfoundation.org">
                <Button size="lg" className="bg-cyan-500 hover:bg-cyan-600 text-white">
                  Apply to Sponsor
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </a>
              <a href="mailto:sponsors@gainfoundation.org?subject=GAIN Sponsor Information Request">
                <Button size="lg" variant="outline" className="border-slate-500 text-slate-300 hover:bg-slate-800">
                  Request Info Pack
                </Button>
              </a>
            </div>
            <p className="text-sm text-slate-400 mt-6">
              Contact: <span className="text-cyan-400">sponsors@gainfoundation.org</span>
            </p>
          </CardContent>
        </Card>

        {/* FAQ */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg text-white">How is sponsor funding used?</CardTitle>
              </CardHeader>
              <CardContent className="text-slate-400">
                100% of sponsor contributions fund GAIN's mission: methodology research, benchmark 
                development, open publication of the GAIN Index, and maintaining free public access 
                to basic assessments.
              </CardContent>
            </Card>
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg text-white">Can competitors both be sponsors?</CardTitle>
              </CardHeader>
              <CardContent className="text-slate-400">
                Yes. GAIN welcomes multiple sponsors from the same market segment. The governance 
                structure ensures no single sponsor gains unfair advantage. This neutrality is 
                actually a key value proposition for enterprise customers.
              </CardContent>
            </Card>
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg text-white">What's the commitment period?</CardTitle>
              </CardHeader>
              <CardContent className="text-slate-400">
                Founding Partners commit for 3 years. Strategic and Supporting Partners commit 
                annually with option to renew. Early exit provisions available in exceptional circumstances.
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
