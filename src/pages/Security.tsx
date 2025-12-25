import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Shield, 
  Lock, 
  Server, 
  Eye,
  FileKey,
  AlertCircle,
  CheckCircle,
  Building
} from "lucide-react";

export default function Security() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 text-white">
      <div className="container mx-auto px-4 py-16 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-cyan-400 border-cyan-400">
            Security First
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Security Overview
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Your data security is non-negotiable. GAIN is built with enterprise-grade security 
            from the ground up, with options for fully private deployment.
          </p>
        </div>

        {/* Security Principles */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Card className="bg-slate-800/50 border-slate-700">
            <CardHeader className="text-center">
              <Lock className="h-12 w-12 text-cyan-500 mx-auto mb-2" />
              <CardTitle className="text-white">Encryption</CardTitle>
            </CardHeader>
            <CardContent className="text-center text-slate-400">
              TLS 1.3 in transit, AES-256 at rest. Zero plaintext storage of sensitive data.
            </CardContent>
          </Card>
          <Card className="bg-slate-800/50 border-slate-700">
            <CardHeader className="text-center">
              <Eye className="h-12 w-12 text-green-500 mx-auto mb-2" />
              <CardTitle className="text-white">Transparency</CardTitle>
            </CardHeader>
            <CardContent className="text-center text-slate-400">
              Clear data flows. No hidden collection. You know exactly what we process.
            </CardContent>
          </Card>
          <Card className="bg-slate-800/50 border-slate-700">
            <CardHeader className="text-center">
              <Building className="h-12 w-12 text-purple-500 mx-auto mb-2" />
              <CardTitle className="text-white">Private Option</CardTitle>
            </CardHeader>
            <CardContent className="text-center text-slate-400">
              GAIN Private deploys in your environment. Your data never leaves your network.
            </CardContent>
          </Card>
        </div>

        {/* Data Flow Architecture */}
        <Card className="bg-slate-800/50 border-slate-700 mb-8">
          <CardHeader>
            <CardTitle className="text-2xl text-white flex items-center gap-2">
              <Server className="text-cyan-500" />
              Data Flow Architecture
            </CardTitle>
          </CardHeader>
          <CardContent className="text-slate-300 space-y-4">
            <div className="bg-slate-700/50 p-6 rounded-lg font-mono text-sm">
              <pre className="overflow-x-auto">
{`┌─────────────┐     TLS 1.3      ┌─────────────┐
│   Browser   │ ──────────────▶ │  GAIN API   │
└─────────────┘                 └─────────────┘
                                       │
                                       ▼
                               ┌─────────────┐
                               │  Assessment │
                               │   Engine    │
                               └─────────────┘
                                       │
                     ┌─────────────────┼─────────────────┐
                     ▼                 ▼                 ▼
              ┌───────────┐    ┌───────────┐    ┌───────────┐
              │ Scores DB │    │ Benchmark │    │  Reports  │
              │(encrypted)│    │   (anon)  │    │  (yours)  │
              └───────────┘    └───────────┘    └───────────┘`}
              </pre>
            </div>
            <ul className="space-y-2 mt-4">
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                <span>Assessment responses encrypted at rest</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                <span>Benchmark data anonymised before aggregation</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                <span>Reports accessible only to your organisation</span>
              </li>
            </ul>
          </CardContent>
        </Card>

        {/* Access Controls */}
        <Card className="bg-slate-800/50 border-slate-700 mb-8">
          <CardHeader>
            <CardTitle className="text-2xl text-white flex items-center gap-2">
              <FileKey className="text-yellow-500" />
              Access Controls
            </CardTitle>
          </CardHeader>
          <CardContent className="text-slate-300">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-white mb-3">Authentication</h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-400">•</span>
                    <span>SSO support (SAML 2.0, OIDC)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-400">•</span>
                    <span>Multi-factor authentication available</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-400">•</span>
                    <span>Session timeout controls</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-400">•</span>
                    <span>Audit logging of all access</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-white mb-3">Authorisation</h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-400">•</span>
                    <span>Role-based access control (RBAC)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-400">•</span>
                    <span>Organisation-scoped data isolation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-400">•</span>
                    <span>Least-privilege principle</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-400">•</span>
                    <span>Admin activity monitoring</span>
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* GAIN Private */}
        <Card className="bg-slate-800/50 border-cyan-500/50 mb-8">
          <CardHeader>
            <CardTitle className="text-2xl text-white flex items-center gap-2">
              <Building className="text-cyan-500" />
              GAIN Private Security Model
            </CardTitle>
            <Badge className="w-fit bg-cyan-500/20 text-cyan-400">Enterprise</Badge>
          </CardHeader>
          <CardContent className="text-slate-300 space-y-4">
            <p>
              For organisations requiring complete data sovereignty, GAIN Private deploys 
              entirely within your infrastructure:
            </p>
            <div className="grid md:grid-cols-2 gap-6 mt-4">
              <div className="bg-slate-700/50 p-4 rounded-lg">
                <h4 className="font-semibold text-white mb-2">Deployment Options</h4>
                <ul className="space-y-1 text-sm">
                  <li>• Docker container (single-node)</li>
                  <li>• Kubernetes Helm chart (scalable)</li>
                  <li>• Air-gapped installation supported</li>
                </ul>
              </div>
              <div className="bg-slate-700/50 p-4 rounded-lg">
                <h4 className="font-semibold text-white mb-2">Data Boundaries</h4>
                <ul className="space-y-1 text-sm">
                  <li>• All data stays on your network</li>
                  <li>• Optional: anonymised benchmark contribution</li>
                  <li>• License validation can be offline</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Compliance Roadmap */}
        <Card className="bg-slate-800/50 border-slate-700 mb-8">
          <CardHeader>
            <CardTitle className="text-2xl text-white flex items-center gap-2">
              <Shield className="text-green-500" />
              Compliance Roadmap
            </CardTitle>
          </CardHeader>
          <CardContent className="text-slate-300">
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <Badge className="bg-green-500/20 text-green-400">Current</Badge>
                <span>GDPR compliant data handling</span>
              </div>
              <div className="flex items-center gap-4">
                <Badge className="bg-green-500/20 text-green-400">Current</Badge>
                <span>Privacy by design architecture</span>
              </div>
              <div className="flex items-center gap-4">
                <Badge className="bg-yellow-500/20 text-yellow-400">Q2 2026</Badge>
                <span>SOC 2 Type II certification (in progress)</span>
              </div>
              <div className="flex items-center gap-4">
                <Badge className="bg-slate-500/20 text-slate-400">Q4 2026</Badge>
                <span>ISO 27001 certification (planned)</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Responsible Disclosure */}
        <Card className="bg-slate-800/50 border-slate-700">
          <CardHeader>
            <CardTitle className="text-2xl text-white flex items-center gap-2">
              <AlertCircle className="text-orange-500" />
              Responsible Disclosure
            </CardTitle>
          </CardHeader>
          <CardContent className="text-slate-300 space-y-4">
            <p>
              We take security vulnerabilities seriously. If you discover a security issue, 
              please report it responsibly:
            </p>
            <div className="bg-slate-700/50 p-4 rounded-lg">
              <p className="font-mono text-cyan-400">security@gainfoundation.org</p>
              <p className="text-sm mt-2">PGP key available at /.well-known/security.txt</p>
            </div>
            <ul className="space-y-2 mt-4">
              <li className="flex items-start gap-2">
                <span className="text-cyan-400">•</span>
                <span>We respond to reports within 48 hours</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-cyan-400">•</span>
                <span>We do not pursue legal action against good-faith researchers</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-cyan-400">•</span>
                <span>Credit given in security advisories (if desired)</span>
              </li>
            </ul>
          </CardContent>
        </Card>

        {/* Contact */}
        <div className="text-center mt-16">
          <p className="text-slate-400 mb-4">Need a security review or have compliance questions?</p>
          <a 
            href="mailto:security@gainfoundation.org" 
            className="inline-flex items-center px-6 py-3 bg-slate-700 hover:bg-slate-600 text-white font-semibold rounded-lg transition-colors"
          >
            Contact Security Team
          </a>
        </div>
      </div>
    </div>
  );
}
