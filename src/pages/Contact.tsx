import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Mail, Phone, MapPin, Clock, Users, Calendar, Heart, MessageCircle } from "lucide-react";

const Contact = () => {
  const contactMethods = [
    {
      icon: Mail,
      title: "Email Us",
      description: "Get in touch for general inquiries, event information, or volunteer opportunities.",
      contact: "info@hccdurham.org",
      action: "Send Email"
    },
    {
      icon: Phone,
      title: "Call Us",
      description: "Speak directly with our team about upcoming events or community programs.", 
      contact: "Contact us for phone details",
      action: "Request Call"
    },
    {
      icon: MapPin,
      title: "Meet Us",
      description: "While we don't have a physical centre, we meet regularly throughout Durham Region.",
      contact: "Durham Region, Ontario",
      action: "Find Events"
    },
    {
      icon: Clock,
      title: "Response Time",
      description: "We typically respond to all inquiries within 24-48 hours during business days.",
      contact: "1-2 business days",
      action: "Learn More"
    }
  ];

  const inquiryTypes = [
    { icon: Calendar, title: "Event Information", description: "Questions about upcoming events and registration" },
    { icon: Users, title: "Volunteer Opportunities", description: "Learn about ways to get involved with our community" },
    { icon: Heart, title: "Donations & Support", description: "Information about supporting our mission financially" },
    { icon: MessageCircle, title: "General Inquiry", description: "Any other questions or feedback about our community" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-sunrise text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Connect With Us</h1>
          <p className="text-xl max-w-3xl mx-auto leading-relaxed opacity-90">
            We'd love to hear from you! Whether you're interested in joining our community, 
            volunteering, or simply learning more about our cultural programs, we're here to help.
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Get in Touch</h2>
            <p className="text-xl text-muted-foreground">
              Multiple ways to connect with the Hindu Community Centre of Durham
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactMethods.map((method, index) => {
              const Icon = method.icon;
              return (
                <Card key={index} className="text-center hover:shadow-warm transition-all duration-300 hover:-translate-y-1">
                  <CardHeader>
                    <div className="w-16 h-16 bg-gradient-spiritual rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-xl text-primary">{method.title}</CardTitle>
                    <CardDescription className="leading-relaxed">
                      {method.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="font-semibold text-saffron mb-4">{method.contact}</p>
                    <Button variant="outline" className="w-full">
                      {method.action}
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-primary mb-4">Send Us a Message</h2>
              <p className="text-xl text-muted-foreground">
                Fill out the form below and we'll get back to you as soon as possible
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Inquiry Types */}
              <div className="lg:col-span-1">
                <h3 className="text-2xl font-semibold text-primary mb-6">How Can We Help?</h3>
                <div className="space-y-4">
                  {inquiryTypes.map((type, index) => {
                    const Icon = type.icon;
                    return (
                      <Card key={index} className="border-0 shadow-sm">
                        <CardContent className="p-4">
                          <div className="flex items-start gap-3">
                            <div className="w-8 h-8 bg-gradient-warm rounded-full flex items-center justify-center flex-shrink-0">
                              <Icon className="w-4 h-4 text-white" />
                            </div>
                            <div>
                              <h4 className="font-semibold text-primary text-sm">{type.title}</h4>
                              <p className="text-xs text-muted-foreground mt-1">{type.description}</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>
              </div>

              {/* Contact Form */}
              <div className="lg:col-span-2">
                <Card className="border-0 shadow-lg">
                  <CardContent className="p-8">
                    <form className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <Label htmlFor="firstName">First Name *</Label>
                          <Input id="firstName" className="mt-2" placeholder="Enter your first name" />
                        </div>
                        <div>
                          <Label htmlFor="lastName">Last Name *</Label>
                          <Input id="lastName" className="mt-2" placeholder="Enter your last name" />
                        </div>
                      </div>
                      
                      <div>
                        <Label htmlFor="email">Email Address *</Label>
                        <Input id="email" type="email" className="mt-2" placeholder="Enter your email" />
                      </div>
                      
                      <div>
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input id="phone" type="tel" className="mt-2" placeholder="Enter your phone number" />
                      </div>
                      
                      <div>
                        <Label htmlFor="inquiryType">Inquiry Type *</Label>
                        <Select>
                          <SelectTrigger className="mt-2">
                            <SelectValue placeholder="Select inquiry type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="events">Event Information</SelectItem>
                            <SelectItem value="volunteer">Volunteer Opportunities</SelectItem>
                            <SelectItem value="donations">Donations & Support</SelectItem>
                            <SelectItem value="general">General Inquiry</SelectItem>
                            <SelectItem value="cultural">Cultural Programs</SelectItem>
                            <SelectItem value="membership">Community Membership</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div>
                        <Label htmlFor="message">Message *</Label>
                        <Textarea 
                          id="message" 
                          className="mt-2 min-h-[120px]" 
                          placeholder="Tell us how we can help you or what you'd like to know about our community..."
                        />
                      </div>
                      
                      <Button className="w-full bg-gradient-sunrise hover:opacity-90 text-lg py-6">
                        Send Message
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Community Hours & Location Info */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-primary mb-8">About Our Community</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="border-0 shadow-md">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-warm rounded-full flex items-center justify-center mx-auto mb-4">
                    <MapPin className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl text-primary">Our Reach</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="leading-relaxed">
                    While we don't have a fixed physical location, we serve the entire Durham Region 
                    including Ajax, Pickering, Whitby, Oshawa, Clarington, Scugog, Brock, and Uxbridge. 
                    Our events are held at various community venues throughout the region.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-md">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-spiritual rounded-full flex items-center justify-center mx-auto mb-4">
                    <Clock className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl text-primary">Response Times</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="leading-relaxed">
                    Our volunteer team typically responds to inquiries within 24-48 hours during 
                    weekdays. For urgent matters or event-related questions, please mark your 
                    message as urgent and we'll prioritize your inquiry.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;