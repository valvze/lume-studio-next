import { CustomCursorElement } from "@/components/custom-cursor-element";
import { InView } from "@/components/motion-primitives/in-view";
import { ScrollView, ScrollViewStaggerWrapper } from "@/components/scroll-view";
import { Badge } from "@/components/ui/badge";
import { EXPERIENCE_LIST } from "@/content/services";
import { MapPin, Calendar, ExternalLink } from "lucide-react";
import Link from "next/link";

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
          <div className="space-y-8">
            {EXPERIENCE_LIST.map((experience, index) => (
              <ScrollView key={experience.title + index} delay={index * 0.1}>
                <div className="group overflow-hidden border rounded-2xl p-6 md:p-8 hover:bg-gray-50 dark:hover:bg-gray-900/50 transition-colors">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <div className="lg:col-span-1">
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
                    </div>
                    <div className="lg:col-span-2">
                      <p className="text-muted-foreground mb-4">
                        {experience.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {experience.tags.map((tag, tagIndex) => (
                          <Badge key={tagIndex} variant="secondary">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
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
