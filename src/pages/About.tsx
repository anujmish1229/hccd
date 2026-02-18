import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, Users, Calendar, BookOpen, Target, Eye, Lightbulb, Star } from "lucide-react";

const About = () => {
  const missionPoints = [
    {
      icon: Users,
      title: "Community Building",
      description: "Creating lasting connections among Hindu families and individuals across Durham Region through shared experiences and cultural celebrations."
    },
    {
      icon: BookOpen,
      title: "Cultural Preservation",
      description: "Preserving and sharing the rich traditions, languages, arts, and spiritual practices of Hindu heritage for current and future generations."
    },
    {
      icon: Heart,
      title: "Spiritual Growth",
      description: "Fostering spiritual development through study groups, meditation sessions, and exploration of Hindu philosophy and teachings."
    },
    {
      icon: Calendar,
      title: "Educational Programs",
      description: "Offering classes and workshops in Sanskrit, classical arts, traditional crafts, and Hindu philosophy for all ages and backgrounds."
    }
  ];

  const values = [
    {
      icon: Heart,
      title: "Seva (Service)",
      description: "Selfless service to our community and the broader Durham Region through volunteer initiatives and charitable work."
    },
    {
      icon: Star,
      title: "Dharma (Righteousness)",
      description: "Upholding moral and ethical principles in all our activities and interactions within the community."
    },
    {
      icon: Lightbulb,
      title: "Vidya (Knowledge)",
      description: "Continuous learning and sharing of wisdom through educational programs and cultural exchanges."
    },
    {
      icon: Users,
      title: "Sangha (Community)",
      description: "Building a supportive, inclusive community where everyone feels welcome regardless of their background or level of religious practice."
    }
  ];

  const achievements = [
    { number: "500+", label: "Community Members", description: "Active participants in our programs" },
    { number: "24+", label: "Annual Events", description: "Festivals and cultural celebrations" },
    { number: "12+", label: "Educational Programs", description: "Classes and workshops offered yearly" },
    { number: "8+", label: "Years Active", description: "Serving the Durham Hindu community" }
  ];

  const team = [
    {
      role: "Community Leadership",
      description: "Our volunteer leadership team consists of dedicated community members who guide our programs and initiatives."
    },
    {
      role: "Cultural Coordinators", 
      description: "Experienced volunteers who organize our festivals, educational programs, and cultural preservation efforts."
    },
    {
      role: "Event Volunteers",
      description: "The heart of our community - volunteers who help make every event and program possible through their generous service."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-spiritual text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">About Our Community</h1>
          <p className="text-xl max-w-3xl mx-auto leading-relaxed opacity-90">
            Learn about our mission, values, and the story behind the Hindu Community Centre of Durham - 
            a vibrant community united by culture, tradition, and the belief that "Vasudhaiva Kutumbakam" 
            - the world is one family.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-primary mb-6">Our Story</h2>
              <div className="text-lg text-muted-foreground leading-relaxed space-y-6">
                <p>
                  The Hindu Community Centre of Durham was born from a simple yet powerful vision: 
                  to create a connected, culturally-rich community for Hindu families across Durham Region. 
                  Despite our name suggesting a physical location, we are much more than a building - 
                  we are a living, breathing community that exists wherever our members gather.
                </p>
                <p>
                  Founded by a group of passionate community members who recognized the need for 
                  cultural connection and spiritual growth opportunities in Durham, we have grown 
                  from informal gatherings to a thriving organization that serves hundreds of families 
                  throughout the region.
                </p>
                <p>
                  Our approach is inclusive and welcoming - whether you are deeply religious or simply 
                  interested in cultural connection, whether you are new to Canada or have been here 
                  for generations, there is a place for you in our community family.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Our Mission</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We exist to strengthen community bonds, preserve cultural heritage, and foster 
              spiritual growth among the Hindu community of Durham Region.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {missionPoints.map((point, index) => {
              const Icon = point.icon;
              return (
                <Card key={index} className="border-0 shadow-md hover:shadow-warm transition-shadow duration-300">
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-sunrise rounded-full flex items-center justify-center flex-shrink-0">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <CardTitle className="text-xl text-primary">{point.title}</CardTitle>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base leading-relaxed">
                      {point.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Our Core Values</h2>
            <p className="text-xl text-muted-foreground">
              The timeless principles that guide our community and shape our activities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card key={index} className="text-center border-0 shadow-md">
                  <CardHeader>
                    <div className="w-16 h-16 bg-gradient-warm rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-xl text-primary">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="leading-relaxed">
                      {value.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 bg-gradient-sunrise text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Community Impact</h2>
            <p className="text-xl opacity-90">
              The numbers that reflect our growing community and shared achievements
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl font-bold mb-2">{achievement.number}</div>
                <div className="text-xl font-semibold mb-2">{achievement.label}</div>
                <div className="text-sm opacity-80">{achievement.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Structure */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Our Community Structure</h2>
            <p className="text-xl text-muted-foreground">
              We are entirely volunteer-driven, with passionate community members leading 
              our various programs and initiatives
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((teamGroup, index) => (
              <Card key={index} className="border-0 shadow-md">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-spiritual rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl text-primary text-center">{teamGroup.role}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center leading-relaxed">
                    {teamGroup.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Vision Statement */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="w-20 h-20 bg-gradient-spiritual rounded-full flex items-center justify-center mx-auto mb-8">
              <Eye className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-4xl font-bold text-primary mb-8">Our Vision</h2>
            <blockquote className="text-2xl font-light italic text-muted-foreground mb-8 leading-relaxed">
              "To be the heart of Hindu cultural life in Durham Region, where tradition meets 
              modernity, where individuals become family, and where the ancient wisdom of 
              'Vasudhaiva Kutumbakam' is lived daily."
            </blockquote>
            <p className="text-lg text-muted-foreground mb-8">
              We envision a future where every Hindu family in Durham feels connected to their 
              heritage, supported by their community, and empowered to share their culture with 
              the broader Canadian society.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-warm hover:opacity-90 text-lg px-8 py-6">
                Join Our Community
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6">
                Learn More About Us
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;