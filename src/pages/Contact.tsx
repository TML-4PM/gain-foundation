import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Mail, 
  Building2, 
  Shield, 
  Newspaper,
  Users,
  Send,
  CheckCircle
} from "lucide-react";

const contactChannels = [
  {
    icon: Mail,
    title: "General Inquiries",
    email: "hello@gainfoundation.org",
    description: "Questions about GAIN, partnerships, or general information"
  },
  {
    icon: Building2,
    title: "Sponsor Inquiries",
    email: "sponsors@gainfoundation.org",
    description: "Partnership opportunities and sponsor program details"
  },
  {
    icon: Shield,
    title: "Security",
    email: "security@gainfoundation.org",
    description: "Security concerns, vulnerability reports, compliance questions"
  },
  {
    icon: Newspaper,
    title: "Press & Media",
    email: "press@gainfoundation.org",
    description: "Media inquiries, interview requests, press releases"
  }
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    inquiry: "general",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production, this would submit to an API
    console.log("Form submitted:", formData);
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 text-white">
      <div className="container mx-auto px-4 py-16 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-cyan-400 border-cyan-400">
            Get In Touch
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Contact Us
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Whether you're exploring GAIN for your organisation, interested in partnership, 
            or have questions about human-AI collaboration - we'd love to hear from you.
          </p>
        </div>

        {/* Contact Channels */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {contactChannels.map((channel) => (
            <Card key={channel.title} className="bg-slate-800/50 border-slate-700 hover:border-cyan-500/50 transition-colors">
              <CardHeader className="pb-2">
                <channel.icon className="h-8 w-8 text-cyan-500 mb-2" />
                <CardTitle className="text-lg text-white">{channel.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <a 
                  href={`mailto:${channel.email}`} 
                  className="text-cyan-400 hover:text-cyan-300 text-sm font-mono"
                >
                  {channel.email}
                </a>
                <p className="text-xs text-slate-400 mt-2">{channel.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="bg-slate-800/50 border-slate-700">
            <CardHeader>
              <CardTitle className="text-2xl text-white flex items-center gap-2">
                <Users className="text-cyan-500" />
                Enterprise Inquiry
              </CardTitle>
              <p className="text-slate-400">For organisations exploring GAIN</p>
            </CardHeader>
            <CardContent>
              {submitted ? (
                <div className="text-center py-8">
                  <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-2">Thank You!</h3>
                  <p className="text-slate-400">
                    We've received your inquiry and will respond within 2 business days.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm text-slate-400 mb-1">Name *</label>
                      <Input
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        className="bg-slate-700 border-slate-600 text-white"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-slate-400 mb-1">Email *</label>
                      <Input
                        required
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        className="bg-slate-700 border-slate-600 text-white"
                        placeholder="you@company.com"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm text-slate-400 mb-1">Company</label>
                    <Input
                      value={formData.company}
                      onChange={(e) => setFormData({...formData, company: e.target.value})}
                      className="bg-slate-700 border-slate-600 text-white"
                      placeholder="Your organisation"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-slate-400 mb-1">Inquiry Type</label>
                    <select
                      value={formData.inquiry}
                      onChange={(e) => setFormData({...formData, inquiry: e.target.value})}
                      className="w-full bg-slate-700 border border-slate-600 text-white rounded-md px-3 py-2"
                    >
                      <option value="general">General Inquiry</option>
                      <option value="enterprise">Enterprise Assessment</option>
                      <option value="private">GAIN Private Deployment</option>
                      <option value="sponsor">Sponsorship Interest</option>
                      <option value="partnership">Integration Partnership</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm text-slate-400 mb-1">Message *</label>
                    <Textarea
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      className="bg-slate-700 border-slate-600 text-white min-h-[120px]"
                      placeholder="Tell us about your needs..."
                    />
                  </div>
                  <Button type="submit" className="w-full bg-cyan-500 hover:bg-cyan-600">
                    Send Inquiry
                    <Send className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>

          {/* Additional Info */}
          <div className="space-y-6">
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-xl text-white">Response Times</CardTitle>
              </CardHeader>
              <CardContent className="text-slate-300 space-y-2">
                <p><strong className="text-white">General inquiries:</strong> 2 business days</p>
                <p><strong className="text-white">Enterprise inquiries:</strong> 1 business day</p>
                <p><strong className="text-white">Security issues:</strong> 48 hours</p>
                <p><strong className="text-white">Sponsor inquiries:</strong> Same day</p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-xl text-white">Schedule a Call</CardTitle>
              </CardHeader>
              <CardContent className="text-slate-300">
                <p className="mb-4">
                  Prefer to talk? Book a 30-minute introduction call with our team.
                </p>
                <a 
                  href="https://calendly.com/tech4humanity/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="outline" className="w-full border-cyan-500 text-cyan-400 hover:bg-cyan-500/10">
                    Book a Call
                  </Button>
                </a>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-xl text-white">Social</CardTitle>
              </CardHeader>
              <CardContent className="text-slate-300">
                <div className="space-y-2">
                  <p>
                    <strong className="text-white">Twitter/X:</strong>{" "}
                    <a href="https://twitter.com/GAINFoundation" className="text-cyan-400 hover:text-cyan-300">
                      @GAINFoundation
                    </a>
                  </p>
                  <p>
                    <strong className="text-white">LinkedIn:</strong>{" "}
                    <a href="https://linkedin.com/company/gainfoundation" className="text-cyan-400 hover:text-cyan-300">
                      GAIN Foundation
                    </a>
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
