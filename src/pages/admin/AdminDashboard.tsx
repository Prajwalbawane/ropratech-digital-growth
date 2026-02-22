import { useEffect, useState } from "react";
import { api } from "@/lib/api";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, FolderOpen, Briefcase, MessageSquare, Star } from "lucide-react";

const AdminDashboard = () => {
  const [stats, setStats] = useState<any>(null);
  const [counts, setCounts] = useState({ services: 0, projects: 0, contacts: 0, reviews: 0 });

  useEffect(() => {
    Promise.all([
      api.getStats().catch(() => ({ data: null })),
      api.getServicesAdmin().catch(() => ({ data: [] })),
      api.getProjectsAdmin().catch(() => ({ data: [] })),
      api.getContacts().catch(() => ({ data: [] })),
      api.getReviews().catch(() => ({ data: [] })),
    ]).then(([statsRes, servicesRes, projectsRes, contactsRes, reviewsRes]) => {
      setStats(statsRes.data);
      setCounts({
        services: servicesRes.data?.length || 0,
        projects: projectsRes.data?.length || 0,
        contacts: contactsRes.data?.length || 0,
        reviews: reviewsRes.data?.length || 0,
      });
    });
  }, []);

  const cards = [
    { title: "Services", value: counts.services, icon: Briefcase, color: "text-primary" },
    { title: "Projects", value: counts.projects, icon: FolderOpen, color: "text-secondary" },
    { title: "Messages", value: counts.contacts, icon: MessageSquare, color: "text-destructive" },
    { title: "Reviews", value: counts.reviews, icon: Star, color: "text-accent-foreground" },
    { title: "Happy Clients", value: stats?.happyClients || 0, icon: Users, color: "text-primary" },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-heading font-bold text-foreground">Dashboard</h1>
        <p className="text-muted-foreground">Welcome to the RoPratech admin panel</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
        {cards.map((card) => (
          <Card key={card.title}>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">{card.title}</CardTitle>
              <card.icon className={`h-5 w-5 ${card.color}`} />
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold text-foreground">{card.value}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default AdminDashboard;
