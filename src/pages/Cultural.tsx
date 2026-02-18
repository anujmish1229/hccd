import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Music, Palette, Users, Calendar, Star, Heart, Lightbulb } from "lucide-react";

const Cultural = () => {
  const culturalPrograms = [
    {
      icon: BookOpen,
      title: "Sanskrit & Philosophy",
      description: "Explore the ancient language of Sanskrit and delve into Hindu philosophical texts including the Bhagavad Gita, Upanishads, and Vedas.",
      offerings: ["Beginner Sanskrit Classes", "Philosophy Discussion Groups", "Scripture Study", "Meditation Workshops"],
      level: "All Levels"
    },
    {
      icon: Music,
      title: "Classical Arts",
      description: "Immerse yourself in the rich tradition of Indian classical music and dance, from Bharatanatyam to Carnatic music.",
      offerings: ["Classical Dance Classes", "Music Lessons", "Instrumental Training", "Performance Opportunities"],
      level: "Beginner to Advanced"
    },
    {
      icon: Palette,
      title: "Traditional Crafts",
      description: "Learn traditional Hindu arts and crafts including rangoli, mehendi, pottery, and festival decorations.",
      offerings: ["Rangoli Workshops", "Mehendi Classes", "Festival Decorations", "Traditional Cooking"],
      level: "All Ages"
    },
    {
      icon: Users,
      title: "Community Storytelling",
      description: "Share and preserve our cultural stories, myths, and legends through community storytelling sessions.",
      offerings: ["Mythology Sessions", "Children's Stories", "Elder Wisdom", "Cultural History"],
      level: "Family Friendly"
    }
  ];

  const festivals = [
    {
      name: "Diwali",
      description: "Festival of Lights celebrating the victory of light over darkness",
      traditions: ["Diya lighting", "Rangoli making", "Sweet sharing", "Fireworks"],
      season: "Autumn"
    },
    {
      name: "Holi",
      description: "Festival of Colors marking spring's arrival and love's triumph",
      traditions: ["Color throwing", "Community gathering", "Traditional sweets", "Music & dance"],
      season: "Spring"
    },
    {
      name: "Navaratri",
      description: "Nine nights celebrating the Divine Mother in her various forms",
      traditions: ["Garba dancing", "Fasting", "Prayer ceremonies", "Cultural performances"],
      season: "Fall"
    },
    {
      name: "Krishna Janmashtami",
      description: "Celebrating the birth of Lord Krishna with devotion and joy",
      traditions: ["Midnight prayers", "Devotional singing", "Drama performances", "Feast sharing"],
      season: "Summer"
    }
  ];

  const values = [
    {
      icon: Heart,
      title: "Dharma",
      description: "Living righteously and fulfilling our duties with integrity and compassion."
    },
    {
      icon: Star,
      title: "Ahimsa",
      description: "Non-violence in thought, word, and action towards all living beings."
    },
    {
      icon: Lightbulb,
      title: "Vidya",
      description: "Pursuit of knowledge and wisdom as a path to spiritual growth."
    },
    {
      icon: Users,
      title: "Seva",
      description: "Selfless service to community and humanity as an expression of devotion."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-spiritual text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Cultural Heritage</h1>
          <p className="text-xl max-w-3xl mx-auto leading-relaxed opacity-90">
            Explore, learn, and celebrate the rich traditions, wisdom, and artistic heritage 
            of Hindu culture. From ancient philosophy to classical arts, discover the timeless 
            beauty of our traditions.
          </p>
        </div>
      </section>

      {/* Cultural Programs */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Cultural Learning Programs</h2>
            <p className="text-xl text-muted-foreground">
              Deepen your connection to Hindu culture through our educational offerings
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {culturalPrograms.map((program, index) => {
              const Icon = program.icon;
              return (
                <Card key={index} className="hover:shadow-warm transition-all duration-300 hover:-translate-y-1">
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-sunrise rounded-full flex items-center justify-center flex-shrink-0">
                        <Icon className="w-6 h-6 text-white" />  
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between items-start mb-2">
                          <CardTitle className="text-xl text-primary">{program.title}</CardTitle>
                          <Badge variant="outline" className="text-saffron border-saffron">
                            {program.level}
                          </Badge>
                        </div>
                        <CardDescription className="text-base leading-relaxed">
                          {program.description}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-primary mb-3">What We Offer:</h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {program.offerings.map((offering, offeringIndex) => (
                            <div key={offeringIndex} className="flex items-center text-sm text-muted-foreground">
                              <div className="w-2 h-2 bg-saffron rounded-full mr-2"></div>
                              {offering}
                            </div>
                          ))}
                        </div>
                      </div>
                      <Button className="w-full" variant="outline">
                        Learn More
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Festival Celebrations */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Festival Celebrations</h2>
            <p className="text-xl text-muted-foreground">
              Join us in celebrating the vibrant festivals that mark our cultural calendar
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {festivals.map((festival, index) => (
              <Card key={index} className="border-0 shadow-md">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle className="text-2xl text-primary">{festival.name}</CardTitle>
                    <Badge className="bg-gold text-white">{festival.season}</Badge>
                  </div>
                  <CardDescription className="text-base leading-relaxed">
                    {festival.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div>
                    <h4 className="font-semibold text-primary mb-3">Traditions & Activities:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {festival.traditions.map((tradition, traditionIndex) => (
                        <div key={traditionIndex} className="flex items-center text-sm text-muted-foreground">
                          <Calendar className="w-3 h-3 mr-2 text-saffron" />
                          {tradition}
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Our Guiding Values</h2>
            <p className="text-xl text-muted-foreground">
              The timeless principles that guide our community and cultural practices
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

      {/* Philosophy Quote */}
      <section className="py-20 bg-gradient-sunrise text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <blockquote className="text-3xl md:text-4xl font-light italic mb-8 leading-relaxed">
              "Vasudhaiva Kutumbakam"
            </blockquote>
            <p className="text-xl mb-8 opacity-90">
              The world is one family - This ancient Sanskrit phrase embodies our belief 
              in the unity of all humanity and the interconnectedness of all life.
            </p>
            <Button size="lg" className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-6">
              Explore Our Philosophy
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Cultural;