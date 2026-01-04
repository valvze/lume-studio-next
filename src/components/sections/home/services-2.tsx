import { ScrollView } from "@/components/scroll-view";
import { Badge } from "@/components/ui/badge";
import { EXPERIENCE_LIST } from "@/content/services";
import { MapPin, Calendar, ExternalLink } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function ExperienceSection() {
  return (
    <section className="py-16 md:py-32" id="experience">
      <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
        <div className="relative z-10 mx-auto max-w-xl space-y-6 text-center">
          <ScrollView>
            <h2 className="text-4xl font-medium lg:text-5xl">
              Professional Experience
            </h2>
          </ScrollView>
          <ScrollView delay={0.2}>
            <p className="text-muted-foreground">
              A journey through healthcare, education, technology, and customer
              service — building skills that bridge multiple disciplines.
            </p>
          </ScrollView>
        </div>
        <div className="mt-12 md:mt-24">
          <div className="space-y-10">
            {EXPERIENCE_LIST.map((experience, index) => (
              <ScrollView key={experience.title + index} delay={index * 0.1}>
                <div className="group overflow-hidden border rounded-2xl p-6 md:p-8 hover:bg-gray-50 dark:hover:bg-gray-900/50 transition-colors">
                  <div className={`grid grid-cols-1 gap-6 ${experience.img ? 'lg:grid-cols-5' : 'lg:grid-cols-3'}`}>
                    <div className={experience.img ? 'lg:col-span-2' : 'lg:col-span-1'}>
                      <div className="space-y-2">
                        <h3 className="text-xl font-semibold">
                          {experience.title}
                        </h3>
                        {experience.url ? (
                          <Link
                            href={experience.url}
                            target="_blank"
                            className="text-primary font-medium hover:underline inline-flex items-center gap-1"
                          >
                            {experience.company}
                            <ExternalLink className="size-3" />
                          </Link>
                        ) : (
                          <p className="text-primary font-medium">
                            {experience.company}
                          </p>
                        )}
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <MapPin className="size-4" />
                          <span>{experience.location}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Calendar className="size-4" />
                          <span>{experience.period}</span>
                        </div>
                      </div>
                      <p className="text-muted-foreground mt-4">
                        {experience.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mt-4">
                        {experience.tags.map((tag, tagIndex) => (
                          <Badge key={tagIndex} variant="secondary">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    {experience.img && (
                      <div className="lg:col-span-3">
                        <Link href={experience.url || "#"} target={experience.url ? "_blank" : undefined}>
                          <Image
                            src={experience.img}
                            alt={experience.company}
                            width={720}
                            height={400}
                            className="rounded-xl object-cover w-full aspect-[16/9] transition-transform duration-300 group-hover:scale-[1.02]"
                          />
                        </Link>
                      </div>
                    )}
                  </div>
                </div>
              </ScrollView>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
