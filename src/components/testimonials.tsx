import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ScrollView } from "./scroll-view";
import { Phone, Mail, User } from "lucide-react";

const references = [
  {
    name: "David Jackson",
    role: "Supervisor at JD Sports, Townsville",
    email: "davidtj2001@outlook.com",
    phone: "0439 378 228",
    initials: "DJ",
  },
  {
    name: "Helen",
    role: "Supervisor at JD Sports, Townsville",
    email: "",
    phone: "0439 349 824",
    initials: "H",
  },
  {
    name: "Dr. Eric Smith",
    role: "Intern at Cairns Hospital",
    email: "eric.smith@my.jcu.edu.au",
    phone: "",
    initials: "ES",
  },
];

export default function ReferencesSection() {
  return (
    <section className="py-16 md:py-32" id="references">
      <div className="mx-auto max-w-6xl space-y-8 px-6 md:space-y-16">
        <div className="relative z-10 mx-auto max-w-xl space-y-6 text-center md:space-y-12">
          <ScrollView>
            <h2 className="text-4xl font-medium lg:text-5xl">
              References
            </h2>
          </ScrollView>
          <ScrollView delay={0.2}>
            <p className="text-muted-foreground">
              Professional references available upon request. Below are my primary contacts who can speak to my work ethic and capabilities.
            </p>
          </ScrollView>
        </div>

        <ScrollView delay={0.3}>
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
            {references.map((ref, index) => (
              <Card key={ref.name} className="hover:bg-gray-50 dark:hover:bg-gray-900/50 transition-colors">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <Avatar className="size-12 bg-primary/10">
                      <AvatarFallback className="bg-primary/10 text-primary font-semibold">
                        {ref.initials}
                      </AvatarFallback>
                    </Avatar>
                    <div className="space-y-2 flex-1">
                      <div>
                        <h3 className="font-semibold">{ref.name}</h3>
                        <p className="text-sm text-muted-foreground">{ref.role}</p>
                      </div>
                      <div className="space-y-1 text-sm">
                        {ref.email && (
                          <div className="flex items-center gap-2 text-muted-foreground">
                            <Mail className="size-3" />
                            <span className="truncate">{ref.email}</span>
                          </div>
                        )}
                        {ref.phone && (
                          <div className="flex items-center gap-2 text-muted-foreground">
                            <Phone className="size-3" />
                            <span>{ref.phone}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </ScrollView>
      </div>
    </section>
  );
}
