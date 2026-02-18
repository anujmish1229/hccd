import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Heart, Users, Calendar, BookOpen, Utensils, Home, Zap, DollarSign } from "lucide-react";

const Donate = () => {
  const donationImpacts = [
    {
      icon: Calendar,
      title: "Community Events",
      description: "Your donations help us organize meaningful festivals, cultural celebrations, and educational workshops that bring our community together.",
      impact: "$50 sponsors decorations for a festival",
      color: "bg-gradient-sunrise"
    },
    {
      icon: Utensils,
      title: "Community Meals",
      description: "Support our community service initiatives including preparing meals for local shelters and community feast during events.",
      impact: "$25 provides a meal for 10 families",
      color: "bg-gradient-warm"
    },
    {
      icon: BookOpen,
      title: "Educational Programs",
      description: "Fund our cultural education classes, Sanskrit learning workshops, and spiritual development programs for all ages.",
      impact: "$100 sponsors a cultural workshop",
      color: "bg-gradient-spiritual"
    },
    {
      icon: Users,
      title: "Youth Programs",
      description: "Support programs that help young people connect with their cultural heritage and develop leadership skills within the community.",
      impact: "$75 sponsors a youth cultural program",
      color: "bg-saffron"
    }
  ];

  const donationTiers = [
    {
      name: "Patron",
      amount: "$25",
      frequency: "monthly",
      benefits: [
        "Newsletter updates",
        "Event invitations",
        "Community recognition"
      ],
      popular: false
    },
    {
      name: "Supporter",
      amount: "$50",
      frequency: "monthly", 
      benefits: [
        "All Patron benefits",
        "Priority event registration",
        "Annual appreciation dinner",
        "Cultural program materials"
      ],
      popular: true
    },
    {
      name: "Champion",
      amount: "$100",
      frequency: "monthly",
      benefits: [
        "All Supporter benefits",
        "Recognition at events",
        "Exclusive cultural workshops",
        "Advisory committee invitation"
      ],
      popular: false
    }
  ];

  const oneTimeOptions = [
    { amount: "$25", description: "Sponsors festival decorations" },
    { amount: "$50", description: "Funds a cultural workshop" },
    { amount: "$100", description: "Supports community meal program" },
    { amount: "$250", description: "Sponsors youth cultural program" },
    { amount: "$500", description: "Major event sponsorship" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-warm text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Support Our Mission</h1>
          <p className="text-xl max-w-3xl mx-auto leading-relaxed opacity-90">
            Help us continue building community connections, preserving cultural heritage, 
            and creating meaningful experiences for the Hindu community of Durham.
          </p>
          <div className="mt-8">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-6">
              <Heart className="w-5 h-5 mr-2" />
              Donate Now
            </Button>
          </div>
        </div>
      </section>

      {/* Impact Areas */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Where Your Donation Goes</h2>
            <p className="text-xl text-muted-foreground">
              Every contribution directly supports our community programs and cultural initiatives
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {donationImpacts.map((impact, index) => {
              const Icon = impact.icon;
              return (
                <Card key={index} className="hover:shadow-warm transition-all duration-300 hover:-translate-y-1">
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className={`w-12 h-12 ${impact.color} rounded-full flex items-center justify-center flex-shrink-0`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-xl text-primary mb-2">{impact.title}</CardTitle>
                        <CardDescription className="text-base leading-relaxed mb-4">
                          {impact.description}
                        </CardDescription>
                        <Badge className="bg-gold text-white">
                          Impact: {impact.impact}
                        </Badge>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Monthly Giving Tiers */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Monthly Support Tiers</h2>
            <p className="text-xl text-muted-foreground">
              Join our community of regular supporters and make a lasting impact
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {donationTiers.map((tier, index) => (
              <Card key={index} className={`relative ${tier.popular ? 'ring-2 ring-saffron shadow-warm' : ''}`}>
                {tier.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-saffron text-white">
                    Most Popular
                  </Badge>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl text-primary">{tier.name}</CardTitle>
                  <div className="text-4xl font-bold text-saffron mb-2">
                    {tier.amount}
                    <span className="text-lg text-muted-foreground">/{tier.frequency}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 mb-6">
                    {tier.benefits.map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="flex items-center text-sm">
                        <Heart className="w-4 h-4 text-saffron mr-2" />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                  <Button 
                    className={`w-full ${tier.popular ? 'bg-gradient-sunrise hover:opacity-90' : ''}`}
                    variant={tier.popular ? 'default' : 'outline'}
                  >
                    Choose {tier.name}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* One-Time Donations */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">One-Time Contributions</h2>
            <p className="text-xl text-muted-foreground">
              Make a one-time donation to support specific programs or events
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 max-w-4xl mx-auto">
            {oneTimeOptions.map((option, index) => (
              <Card key={index} className="text-center hover:shadow-warm transition-all duration-300 hover:-translate-y-1">
                <CardHeader className="pb-2">
                  <CardTitle className="text-2xl text-saffron">{option.amount}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm mb-4">
                    {option.description}
                  </CardDescription>
                  <Button size="sm" variant="outline" className="w-full">
                    Donate
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8">
            <Button size="lg" className="bg-gradient-spiritual hover:opacity-90">
              <DollarSign className="w-5 h-5 mr-2" />
              Custom Amount
            </Button>
          </div>
        </div>
      </section>

      {/* E-Transfer Donations */}
      <section className="py-20 bg-gradient-sunrise text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Donate via E-Transfer</h2>
            <p className="text-xl opacity-90 mb-8">
              Send your donation directly via Interac e-Transfer for quick and secure giving
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <Card className="bg-white/10 border-white/20 text-white">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl">Quick & Secure E-Transfer</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <div className="bg-white/10 rounded-lg p-6 mb-6">
                  <p className="text-lg mb-2">Send your e-Transfer to:</p>
                  <p className="text-2xl font-bold text-gold">hinducommunitycentre@gmail.com</p>
                </div>
                <CardDescription className="text-white/80 mb-6">
                  No password required for auto-deposit. Please include your name and contact information 
                  in the message field so we can send you a receipt and thank you note.
                </CardDescription>
                <Button 
                  size="lg" 
                  className="bg-white text-primary hover:bg-white/90"
                  onClick={() => window.location.href = `mailto:hinducommunitycentre@gmail.com?subject=E-Transfer Donation&body=Hello, I would like to make a donation to the Hindu Community Centre of Durham.`}
                >
                  <Heart className="w-5 h-5 mr-2" />
                  Send E-Transfer
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Other Ways to Give */}
      <section className="py-20 bg-gradient-spiritual text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Other Ways to Support</h2>
            <p className="text-xl opacity-90">
              Beyond financial contributions, there are many ways to support our community
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-white/10 border-white/20 text-white">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl">Volunteer Your Time</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-white/80 mb-4">
                  Share your skills and passion by volunteering for events, programs, and community service.
                </CardDescription>
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                  Learn More
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-white/10 border-white/20 text-white">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl">In-Kind Donations</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-white/80 mb-4">
                  Donate supplies, equipment, or services that support our programs and events.
                </CardDescription>
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                  Contact Us
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-white/10 border-white/20 text-white">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Home className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl">Spread the Word</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-white/80 mb-4">
                  Help us grow by sharing our mission with friends and family in the Durham community.
                </CardDescription>
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                  Share
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Transparency */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-primary mb-8">Transparency & Trust</h2>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              We believe in complete transparency with our community. All donations are used 
              directly for community programs, cultural events, and educational initiatives. 
              We provide regular updates on how funds are used and the impact they create.
            </p>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6">
              View Annual Report
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Donate;
