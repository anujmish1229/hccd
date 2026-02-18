import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Calendar, Users, BookOpen, Heart, Mail, Info } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const Index = () => {
  const features = [
    {
      icon: Calendar,
      title: "Community Events",
      description: "Join us for festivals, cultural celebrations, and spiritual gatherings that bring our community together.",
      link: "/events",
      gradient: "bg-gradient-sunrise"
    },
    {
      icon: Users,
      title: "Volunteer Opportunities",
      description: "Make a difference by volunteering for our community initiatives and helping organize meaningful events.",
      link: "/volunteer",
      gradient: "bg-gradient-warm"
    },
    {
      icon: BookOpen,
      title: "Cultural Heritage",
      description: "Explore and celebrate our rich Hindu traditions, teachings, and cultural practices.",
      link: "/cultural",
      gradient: "bg-gradient-spiritual"
    },
    {
      icon: Heart,
      title: "Support Our Mission",
      description: "Help us continue our work of building community connections and preserving our cultural heritage.",
      link: "/donate",
      gradient: "bg-saffron"
    },
    {
      icon: Info,
      title: "About Us",
      description: "Learn more about our mission, values, and the story behind the Hindu Community Centre of Durham.",
      link: "/about",  
      gradient: "bg-deepRed"
    },
    {
      icon: Mail,
      title: "Get in Touch",
      description: "Connect with us to learn more about our community, upcoming events, or volunteer opportunities.",
      link: "/contact",
      gradient: "bg-spiritualPurple"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div 
          className="h-[600px] bg-cover bg-center bg-no-repeat relative"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="relative z-10 container mx-auto px-4 h-full flex items-center justify-center text-center">
            <div className="max-w-4xl text-white">
              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                Hindu Community Centre
                <span className="block text-3xl md:text-4xl font-normal mt-2 text-gold">of Durham</span>
              </h1>
              <p className="text-xl md:text-2xl mb-4 italic text-saffron-light">
                "Vasudhaiva Kutumbakam"
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-gradient-sunrise hover:opacity-90 hover:bg-white hover:text-primary shadow-glow text-lg px-8 py-6">
                  <Link to="/events">Upcoming Events</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="bg-secondary border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-6">
                  <Link to="/about">Learn More</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">
              Connecting Community Through Culture
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We bring together the Hindu community of Durham through meaningful events, 
              cultural education, and spiritual growth opportunities.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="group hover:shadow-warm transition-all duration-300 hover:-translate-y-1 border-0 shadow-md">
                  <CardHeader className="text-center pb-4">
                    <div className={`w-16 h-16 ${feature.gradient} rounded-full flex items-center justify-center mx-auto mb-4 shadow-warm group-hover:shadow-glow transition-shadow duration-300`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-xl font-semibold text-primary">
                      {feature.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <CardDescription className="text-muted-foreground mb-6 leading-relaxed">
                      {feature.description}
                    </CardDescription>
                    <Button asChild variant="outline" className="w-full">
                      <Link to={feature.link}>Learn More</Link>
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Community Message */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-8">
              Building Bridges, Preserving Heritage
            </h2>
            <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-6">
              <Link to="/volunteer">Join Our Community</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;