import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Scale, 
  ShieldCheck, 
  FileCheck,
  AlertTriangle,
  Building2,
  Vote,
  ScrollText
} from "lucide-react";

export default function Governance() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 text-white">
      <div className="container mx-auto px-4 py-16 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-cyan-400 border-cyan-400">
            Independent & Accountable
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Governance
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            GAIN operates as a neutral foundation. Our governance structure ensures independence 
            from vendor influence while maintaining accountability to our community.
          </p>
        </div>

        {/* Foundation Structure */}
        <Card className="bg-slate-800/50 border-slate-700 mb-8">
          <CardHeader>
            <CardTitle className="text-2xl text-white flex items-center gap-2">
              <Building2 className="text-cyan-500" />
              Foundation Structure
            </CardTitle>
          </CardHeader>
          <CardContent className="text-slate-300 space-y-4">
            <p>
              The GAIN Foundation is structured as an independent, non-profit entity focused on 
              advancing human-AI collaboration measurement and standards.
            </p>
            <div className="grid md:grid-cols-3 gap-4 mt-6">
              <div className="bg-slate-700/50 p-4 rounded-lg">
                <h4 className="font-semibold text-white mb-2">Executive Team</h4>
                <p className="text-sm">Day-to-day operations, product development, community management</p>
              </div>
              <div className="bg-slate-700/50 p-4 rounded-lg">
                <h4 className="font-semibold text-white mb-2">Advisory Board</h4>
                <p className="text-sm">Strategic guidance, methodology review, industry representation</p>
              </div>
              <div className="bg-slate-700/50 p-4 rounded-lg">
                <h4 className="font-semibold text-white mb-2">Technical Committee</h4>
                <p className="text-sm">Scoring methodology, benchmark standards, assessment integrity</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Independence Charter */}
        <Card className="bg-slate-800/50 border-slate-700 mb-8">
          <CardHeader>
            <CardTitle className="text-2xl text-white flex items-center gap-2">
              <Scale className="text-green-500" />
              Independence Charter
            </CardTitle>
          </CardHeader>
          <CardContent className="text-slate-300 space-y-4">
            <p className="font-semibold text-white">
              GAIN commits to the following independence principles:
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <ShieldCheck className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                <span><strong>Vendor Neutrality:</strong> No single vendor, platform, or technology provider 
                can influence scoring methodology or assessment outcomes.</span>
              </li>
              <li className="flex items-start gap-3">
                <ShieldCheck className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                <span><strong>Transparent Methodology:</strong> All scoring criteria, weights, and benchmark 
                calculations are publicly documented.</span>
              </li>
              <li className="flex items-start gap-3">
                <ShieldCheck className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                <span><strong>Community Ownership:</strong> Major methodology changes require community 
                consultation and advisory board approval.</span>
              </li>
              <li className="flex items-start gap-3">
                <ShieldCheck className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                <span><strong>Open Research:</strong> Aggregate findings and annual index reports are 
                published freely for public benefit.</span>
              </li>
            </ul>
          </CardContent>
        </Card>

        {/* Conflict of Interest Policy */}
        <Card className="bg-slate-800/50 border-slate-700 mb-8">
          <CardHeader>
            <CardTitle className="text-2xl text-white flex items-center gap-2">
              <AlertTriangle className="text-yellow-500" />
              Conflict of Interest Policy
            </CardTitle>
          </CardHeader>
          <CardContent className="text-slate-300 space-y-4">
            <p>All GAIN leadership, advisors, and committee members must:</p>
            <ul className="space-y-2 ml-4">
              <li className="flex items-start gap-2">
                <span className="text-cyan-400">•</span>
                <span>Disclose any material relationships with AI vendors, consulting firms, or competing assessment providers</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-cyan-400">•</span>
                <span>Recuse themselves from decisions where a conflict exists</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-cyan-400">•</span>
                <span>Annual declaration of interests, published on the GAIN website</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-cyan-400">•</span>
                <span>No personal financial benefit from assessment outcomes</span>
              </li>
            </ul>
          </CardContent>
        </Card>

        {/* Decision Rights Matrix */}
        <Card className="bg-slate-800/50 border-slate-700 mb-8">
          <CardHeader>
            <CardTitle className="text-2xl text-white flex items-center gap-2">
              <Vote className="text-purple-500" />
              Decision Rights
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-slate-600">
                    <th className="text-left py-3 text-slate-300">Decision Type</th>
                    <th className="text-center py-3 text-slate-300">Executive</th>
                    <th className="text-center py-3 text-slate-300">Advisory Board</th>
                    <th className="text-center py-3 text-slate-300">Technical Committee</th>
                    <th className="text-center py-3 text-slate-300">Community</th>
                  </tr>
                </thead>
                <tbody className="text-slate-400">
                  <tr className="border-b border-slate-700">
                    <td className="py-3">Day-to-day operations</td>
                    <td className="text-center">✓ Decide</td>
                    <td className="text-center">—</td>
                    <td className="text-center">—</td>
                    <td className="text-center">—</td>
                  </tr>
                  <tr className="border-b border-slate-700">
                    <td className="py-3">Scoring methodology changes</td>
                    <td className="text-center">Propose</td>
                    <td className="text-center">Approve</td>
                    <td className="text-center">✓ Decide</td>
                    <td className="text-center">Consult</td>
                  </tr>
                  <tr className="border-b border-slate-700">
                    <td className="py-3">New sponsor acceptance</td>
                    <td className="text-center">Propose</td>
                    <td className="text-center">✓ Decide</td>
                    <td className="text-center">—</td>
                    <td className="text-center">Inform</td>
                  </tr>
                  <tr className="border-b border-slate-700">
                    <td className="py-3">Governance changes</td>
                    <td className="text-center">Propose</td>
                    <td className="text-center">✓ Decide</td>
                    <td className="text-center">Consult</td>
                    <td className="text-center">Vote</td>
                  </tr>
                  <tr>
                    <td className="py-3">Annual Index publication</td>
                    <td className="text-center">Execute</td>
                    <td className="text-center">Approve</td>
                    <td className="text-center">✓ Validate</td>
                    <td className="text-center">Inform</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* Sponsor Influence Boundaries */}
        <Card className="bg-slate-800/50 border-cyan-500/50 mb-8">
          <CardHeader>
            <CardTitle className="text-2xl text-white flex items-center gap-2">
              <FileCheck className="text-cyan-500" />
              Sponsor Influence Boundaries
            </CardTitle>
          </CardHeader>
          <CardContent className="text-slate-300 space-y-4">
            <p className="font-semibold text-cyan-400">
              What sponsors CAN do:
            </p>
            <ul className="space-y-2 ml-4 mb-6">
              <li className="flex items-start gap-2">
                <span className="text-green-400">✓</span>
                <span>Contribute to the Action Library with labelled reference architectures</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-400">✓</span>
                <span>Provide input on industry-specific assessment dimensions</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-400">✓</span>
                <span>Co-market the GAIN Index and benchmark reports</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-400">✓</span>
                <span>Participate in Advisory Board (Founding Sponsors only)</span>
              </li>
            </ul>
            <p className="font-semibold text-red-400">
              What sponsors CANNOT do:
            </p>
            <ul className="space-y-2 ml-4">
              <li className="flex items-start gap-2">
                <span className="text-red-400">✗</span>
                <span>Influence scoring methodology to favour their products</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-400">✗</span>
                <span>Access individual organisation assessment data</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-400">✗</span>
                <span>Require GAIN endorsement of their solutions</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-400">✗</span>
                <span>Veto publication of benchmark findings</span>
              </li>
            </ul>
          </CardContent>
        </Card>

        {/* Amendment Process */}
        <Card className="bg-slate-800/50 border-slate-700">
          <CardHeader>
            <CardTitle className="text-2xl text-white flex items-center gap-2">
              <ScrollText className="text-orange-500" />
              Amendment Process
            </CardTitle>
          </CardHeader>
          <CardContent className="text-slate-300 space-y-4">
            <p>Changes to GAIN governance require:</p>
            <ol className="space-y-2 ml-4 list-decimal list-inside">
              <li>Written proposal with rationale and impact assessment</li>
              <li>30-day community comment period</li>
              <li>Technical Committee review (if methodology-related)</li>
              <li>Advisory Board vote (2/3 majority required)</li>
              <li>Public announcement and 90-day implementation period</li>
            </ol>
            <p className="text-sm text-slate-400 mt-4">
              Emergency amendments (security, legal compliance) may follow an expedited process 
              with retrospective community notification.
            </p>
          </CardContent>
        </Card>

        {/* Contact */}
        <div className="text-center mt-16">
          <p className="text-slate-400 mb-4">Questions about GAIN governance?</p>
          <a 
            href="mailto:governance@gainfoundation.org" 
            className="inline-flex items-center px-6 py-3 bg-slate-700 hover:bg-slate-600 text-white font-semibold rounded-lg transition-colors"
          >
            Contact Governance Team
          </a>
        </div>
      </div>
    </div>
  );
}
