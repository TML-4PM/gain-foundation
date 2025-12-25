import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Eye, 
  EyeOff, 
  Clock, 
  Share2,
  UserCheck,
  Cookie,
  Globe,
  Mail
} from "lucide-react";

export default function Privacy() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 text-white">
      <div className="container mx-auto px-4 py-16 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-cyan-400 border-cyan-400">
            Your Data, Your Control
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Privacy Policy
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            We believe privacy is a fundamental right. This policy explains exactly what 
            we collect, why, and how you can control it.
          </p>
          <p className="text-sm text-slate-400 mt-4">Last updated: December 2025</p>
        </div>

        {/* What We Collect */}
        <Card className="bg-slate-800/50 border-slate-700 mb-8">
          <CardHeader>
            <CardTitle className="text-2xl text-white flex items-center gap-2">
              <Eye className="text-cyan-500" />
              What We Collect
            </CardTitle>
          </CardHeader>
          <CardContent className="text-slate-300 space-y-4">
            <div className="space-y-4">
              <div className="bg-slate-700/50 p-4 rounded-lg">
                <h4 className="font-semibold text-white mb-2">Account Information</h4>
                <p className="text-sm">Email address, name, organisation name (if provided). Used for authentication and communication.</p>
              </div>
              <div className="bg-slate-700/50 p-4 rounded-lg">
                <h4 className="font-semibold text-white mb-2">Assessment Responses</h4>
                <p className="text-sm">Your answers to assessment questions. Used to generate your scores and recommendations.</p>
              </div>
              <div className="bg-slate-700/50 p-4 rounded-lg">
                <h4 className="font-semibold text-white mb-2">Usage Analytics</h4>
                <p className="text-sm">Page views, feature usage, session duration. Used to improve the product. No personal identifiers.</p>
              </div>
              <div className="bg-slate-700/50 p-4 rounded-lg">
                <h4 className="font-semibold text-white mb-2">Technical Data</h4>
                <p className="text-sm">Browser type, device type, IP address (anonymised). Used for security and performance.</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* What We Never Collect */}
        <Card className="bg-slate-800/50 border-green-500/50 mb-8">
          <CardHeader>
            <CardTitle className="text-2xl text-white flex items-center gap-2">
              <EyeOff className="text-green-500" />
              What We Never Collect
            </CardTitle>
          </CardHeader>
          <CardContent className="text-slate-300">
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-green-400 font-bold">✗</span>
                <span>Your internal documents, files, or proprietary content</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-400 font-bold">✗</span>
                <span>Passwords or authentication credentials (we use OAuth/SSO)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-400 font-bold">✗</span>
                <span>Financial information or payment details (handled by payment processors)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-400 font-bold">✗</span>
                <span>Employee personal data (assessments are organisational, not individual)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-400 font-bold">✗</span>
                <span>Browsing history outside of GAIN</span>
              </li>
            </ul>
          </CardContent>
        </Card>

        {/* Data Retention */}
        <Card className="bg-slate-800/50 border-slate-700 mb-8">
          <CardHeader>
            <CardTitle className="text-2xl text-white flex items-center gap-2">
              <Clock className="text-yellow-500" />
              Data Retention
            </CardTitle>
          </CardHeader>
          <CardContent className="text-slate-300">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-slate-600">
                    <th className="text-left py-3 text-slate-300">Data Type</th>
                    <th className="text-left py-3 text-slate-300">Retention Period</th>
                    <th className="text-left py-3 text-slate-300">Deletion</th>
                  </tr>
                </thead>
                <tbody className="text-slate-400">
                  <tr className="border-b border-slate-700">
                    <td className="py-3">Account data</td>
                    <td>Until account deletion</td>
                    <td>Immediate on request</td>
                  </tr>
                  <tr className="border-b border-slate-700">
                    <td className="py-3">Assessment responses</td>
                    <td>2 years from completion</td>
                    <td>On request or auto-delete</td>
                  </tr>
                  <tr className="border-b border-slate-700">
                    <td className="py-3">Anonymised benchmark data</td>
                    <td>Indefinite (no PII)</td>
                    <td>N/A - fully anonymised</td>
                  </tr>
                  <tr className="border-b border-slate-700">
                    <td className="py-3">Usage analytics</td>
                    <td>90 days</td>
                    <td>Automatic</td>
                  </tr>
                  <tr>
                    <td className="py-3">Security logs</td>
                    <td>1 year</td>
                    <td>Automatic</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* Third-Party Sharing */}
        <Card className="bg-slate-800/50 border-slate-700 mb-8">
          <CardHeader>
            <CardTitle className="text-2xl text-white flex items-center gap-2">
              <Share2 className="text-purple-500" />
              Third-Party Sharing
            </CardTitle>
          </CardHeader>
          <CardContent className="text-slate-300 space-y-4">
            <p className="font-semibold text-white">We share data with:</p>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-cyan-400">•</span>
                <span><strong>Infrastructure providers:</strong> Cloud hosting (encrypted, DPA in place)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-cyan-400">•</span>
                <span><strong>Analytics:</strong> Aggregated, anonymised usage data only</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-cyan-400">•</span>
                <span><strong>Payment processors:</strong> For paid tiers (they don't see assessment data)</span>
              </li>
            </ul>
            <p className="font-semibold text-white mt-6">We never share:</p>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-red-400">✗</span>
                <span>Individual assessment results with sponsors</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-400">✗</span>
                <span>Your data with advertisers</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-400">✗</span>
                <span>Identifiable information in benchmarks</span>
              </li>
            </ul>
          </CardContent>
        </Card>

        {/* Your Rights */}
        <Card className="bg-slate-800/50 border-cyan-500/50 mb-8">
          <CardHeader>
            <CardTitle className="text-2xl text-white flex items-center gap-2">
              <UserCheck className="text-cyan-500" />
              Your Rights
            </CardTitle>
          </CardHeader>
          <CardContent className="text-slate-300 space-y-4">
            <p>Under GDPR and similar regulations, you have the right to:</p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-slate-700/50 p-4 rounded-lg">
                <h4 className="font-semibold text-white mb-1">Access</h4>
                <p className="text-sm">Request a copy of all data we hold about you</p>
              </div>
              <div className="bg-slate-700/50 p-4 rounded-lg">
                <h4 className="font-semibold text-white mb-1">Rectification</h4>
                <p className="text-sm">Correct inaccurate personal data</p>
              </div>
              <div className="bg-slate-700/50 p-4 rounded-lg">
                <h4 className="font-semibold text-white mb-1">Erasure</h4>
                <p className="text-sm">Request deletion of your data ("right to be forgotten")</p>
              </div>
              <div className="bg-slate-700/50 p-4 rounded-lg">
                <h4 className="font-semibold text-white mb-1">Portability</h4>
                <p className="text-sm">Export your data in a machine-readable format</p>
              </div>
              <div className="bg-slate-700/50 p-4 rounded-lg">
                <h4 className="font-semibold text-white mb-1">Objection</h4>
                <p className="text-sm">Object to certain processing activities</p>
              </div>
              <div className="bg-slate-700/50 p-4 rounded-lg">
                <h4 className="font-semibold text-white mb-1">Restriction</h4>
                <p className="text-sm">Request limited processing in certain circumstances</p>
              </div>
            </div>
            <p className="text-sm text-slate-400 mt-4">
              To exercise any of these rights, email <span className="text-cyan-400">privacy@gainfoundation.org</span>. 
              We respond within 30 days.
            </p>
          </CardContent>
        </Card>

        {/* Cookies */}
        <Card className="bg-slate-800/50 border-slate-700 mb-8">
          <CardHeader>
            <CardTitle className="text-2xl text-white flex items-center gap-2">
              <Cookie className="text-orange-500" />
              Cookie Policy
            </CardTitle>
          </CardHeader>
          <CardContent className="text-slate-300 space-y-4">
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <Badge className="bg-green-500/20 text-green-400 mt-1">Essential</Badge>
                <div>
                  <p className="font-semibold text-white">Authentication & Security</p>
                  <p className="text-sm">Required for login, session management, and CSRF protection. Cannot be disabled.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Badge className="bg-yellow-500/20 text-yellow-400 mt-1">Analytics</Badge>
                <div>
                  <p className="font-semibold text-white">Usage Analytics</p>
                  <p className="text-sm">Help us understand how GAIN is used. Can be disabled in settings.</p>
                </div>
              </div>
            </div>
            <p className="text-sm text-slate-400 mt-4">
              We do not use advertising cookies or third-party tracking.
            </p>
          </CardContent>
        </Card>

        {/* GDPR */}
        <Card className="bg-slate-800/50 border-slate-700 mb-8">
          <CardHeader>
            <CardTitle className="text-2xl text-white flex items-center gap-2">
              <Globe className="text-blue-500" />
              GDPR Compliance
            </CardTitle>
          </CardHeader>
          <CardContent className="text-slate-300 space-y-4">
            <p>GAIN is designed for GDPR compliance:</p>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-cyan-400">•</span>
                <span>Lawful basis: Consent for assessments, legitimate interest for analytics</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-cyan-400">•</span>
                <span>Data minimisation: We only collect what's necessary</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-cyan-400">•</span>
                <span>Purpose limitation: Data used only for stated purposes</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-cyan-400">•</span>
                <span>Data Protection Officer: dpo@gainfoundation.org</span>
              </li>
            </ul>
          </CardContent>
        </Card>

        {/* Contact */}
        <Card className="bg-slate-800/50 border-slate-700">
          <CardHeader>
            <CardTitle className="text-2xl text-white flex items-center gap-2">
              <Mail className="text-cyan-500" />
              Contact Us
            </CardTitle>
          </CardHeader>
          <CardContent className="text-slate-300 space-y-4">
            <p>For privacy-related inquiries:</p>
            <div className="bg-slate-700/50 p-4 rounded-lg">
              <p><strong>Email:</strong> <span className="text-cyan-400">privacy@gainfoundation.org</span></p>
              <p><strong>Data Protection Officer:</strong> <span className="text-cyan-400">dpo@gainfoundation.org</span></p>
            </div>
            <p className="text-sm text-slate-400">
              If you're unsatisfied with our response, you have the right to lodge a complaint 
              with your local data protection authority.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
