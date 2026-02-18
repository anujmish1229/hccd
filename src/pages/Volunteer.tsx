import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Heart, Users, Calendar, BookOpen, Utensils, Camera, Music, Megaphone } from "lucide-react";

const Volunteer = () => {
  const benefits = [
    {
      icon: Heart,
      title: "Spiritual Growth",
      description: "Engage in seva (selfless service) and grow spiritually through community service."
    },
    {
      icon: Users,
      title: "Community Connection",
      description: "Build lasting friendships and strengthen bonds within our cultural community."
    },
    {
      icon: BookOpen,
      title: "Cultural Preservation",
      description: "Play an active role in preserving and sharing our rich Hindu heritage."
    },
    {
      icon: Calendar,
      title: "Flexible Commitment",
      description: "Choose opportunities that fit your schedule and availability."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-warm text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Volunteer With Us</h1>
          <p className="text-xl max-w-3xl mx-auto leading-relaxed opacity-90">
            Join our family of dedicated volunteers and help strengthen our community through 
            seva (selfless service). Every contribution makes a meaningful difference.
          </p>
          <div className="mt-8">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-6">
              Get Involved Today
            </Button>
          </div>
        </div>
      </section>

      {/* Benefits of Volunteering */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Why Volunteer With Us?</h2>
            <p className="text-xl text-muted-foreground">
              Discover the meaningful benefits of community service and cultural engagement
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <Card key={index} className="text-center border-0 shadow-md">
                  <CardHeader>
                    <div className="w-16 h-16 bg-gradient-spiritual rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-lg text-primary">{benefit.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="leading-relaxed">
                      {benefit.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-spiritual text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-8">Ready to Make a Difference?</h2>
            <p className="text-xl leading-relaxed mb-8 opacity-90">
              Whether you have an hour a month or several hours a week, your contribution 
              helps strengthen our community and preserve our cultural heritage for future generations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-6">
                Apply to Volunteer
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-6">
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Volunteer;