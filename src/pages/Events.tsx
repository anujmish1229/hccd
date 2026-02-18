import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, MapPin, Users, ExternalLink } from "lucide-react";
import { link } from "fs";

const Events = () => {
  const upcomingEvents = [
    /*
    {
      title: "",
      description: "",
      date: "",
      time: "",
      location: "",
      attendees: "",
      category: "",
      status: "",
      link: ""
    }
    */
  ];

  const pastEvents = [
    {
      title: "Outdoor Games Day",
      description: "A fun-filled day of outdoor games and activities for the whole family.",
      date: "August 17, 2025"
    },
    {
      title: "Seniors Trip to Niagara Falls",
      description: "A scenic trip for seniors to enjoy the beauty of Niagara Falls. This event was in collaboration with Senior Buddies.",
      date: "September 15, 2025"
    },
    {
      title: "HAND's Hindu Heritage Month Celebration",
      description: "A celebration of Hindu culture, traditions, and community spirit during Hindu Heritage Month.",
      date: "November 29, 2025",
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-sunrise text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Community Events</h1>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Upcoming Events</h2>
            <p className="text-xl text-muted-foreground">Mark your calendars and join us for these special occasions</p>
          </div>

          {upcomingEvents.length === 0 ? (
            <div className="text-center py-16 mb-16">
              <div className="max-w-2xl mx-auto">
                <p className="text-lg text-muted-foreground/80 leading-relaxed italic">
                  We're sorry, but there are no upcoming events scheduled at the moment. 
                  Please check back later or contact us for more information.
                </p>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
              {upcomingEvents.map((event, index) => (
                <Card key={index} className="hover:shadow-warm transition-all duration-300 hover:-translate-y-1">
                  <CardHeader>
                    <div className="flex justify-between items-start mb-2">
                      <Badge variant="secondary" className="bg-saffron text-white">
                        {event.category}
                      </Badge>
                      <Badge variant="outline" className="text-saffron border-saffron">
                        {event.status}
                      </Badge>
                    </div>
                    <CardTitle className="text-2xl text-primary">{event.title}</CardTitle>
                    <CardDescription className="text-base leading-relaxed">
                      {event.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3 mb-6">
                      <div className="flex items-center text-muted-foreground">
                        <Calendar className="w-5 h-5 mr-3 text-saffron" />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center text-muted-foreground">
                        <Clock className="w-5 h-5 mr-3 text-saffron" />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center text-muted-foreground">
                        <MapPin className="w-5 h-5 mr-3 text-saffron" />
                        <span>{event.location}</span>
                      </div>
                      <div className="flex items-center text-muted-foreground">
                        <Users className="w-5 h-5 mr-3 text-saffron" />
                        <span>{event.attendees}</span>
                      </div>
                    </div>
                    <Button 
                      className="w-full bg-gradient-warm hover:opacity-90" 
                      size="lg"
                      onClick={() => window.open(`${event.link}`, '_blank')}
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Register on Eventbrite
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}

          {/* Eventbrite Integration */}
          <div className="bg-card rounded-lg border p-8 text-center">
            <h3 className="text-2xl font-semibold text-primary mb-4">Official Event Calendar</h3>
            <p className="text-muted-foreground mb-6">
              Check our Eventbrite page for the most current events and registration information. 
              The events shown above are examples of what we typically organize.
            </p>
            <Button 
              size="lg" 
              className="bg-gradient-sunrise hover:opacity-90"
              onClick={() => window.open('https://www.eventbrite.com/o/hindu-community-centre-of-durham-hccd-114637567781', '_blank')}
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              View Live Events on Eventbrite
            </Button>
          </div>
        </div>
      </section>

      {/* Past Events */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Recent Celebrations</h2>
            <p className="text-xl text-muted-foreground">
              A glimpse of our recent community gatherings and celebrations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pastEvents.map((event, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <CardTitle className="text-xl text-primary">{event.title}</CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {event.date}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {event.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Events;