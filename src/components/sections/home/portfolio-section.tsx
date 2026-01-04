"use client";
import { ScrollView } from "@/components/scroll-view";
import { motion } from "motion/react";
import { PROJECTS_CONTENT, EDUCATION_CONTENT } from "@/content/portfolio";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Lightbulb, Calendar } from "lucide-react";

export default function PortfolioSection() {
  return (
    <section
      className="py-16 md:py-32 bg-gray-50 dark:bg-transparent"
      id="portfolio"
    >
      <div className="mx-auto max-w-5xl space-y-16 px-6">
        {/* Education Section */}
        <div className="space-y-8">
          <ScrollView>
            <div className="flex items-center gap-3 justify-center">
              <GraduationCap className="size-8" />
              <h2 className="text-4xl font-semibold">Education</h2>
            </div>
          </ScrollView>

          <div className="space-y-6">
            {EDUCATION_CONTENT.map((edu, index) => (
              <ScrollView key={edu.institution} delay={index * 0.1}>
                <div className="border rounded-2xl p-6 md:p-8 hover:bg-white dark:hover:bg-gray-900/50 transition-colors">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                    <div className="space-y-2">
                      <h3 className="text-xl font-semibold">{edu.institution}</h3>
                      <p className="text-primary font-medium">{edu.degree}</p>
                      <p className="text-sm text-muted-foreground">{edu.type} • {edu.gpa}</p>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground whitespace-nowrap">
                      <Calendar className="size-4" />
                      <span>{edu.period}</span>
                    </div>
                  </div>
                  <p className="mt-4 text-muted-foreground">{edu.description}</p>
                </div>
              </ScrollView>
            ))}
          </div>
        </div>

        {/* Projects Section */}
        <div className="space-y-8">
          <ScrollView>
            <div className="flex items-center gap-3 justify-center">
              <Lightbulb className="size-8" />
              <h2 className="text-4xl font-semibold">Projects</h2>
            </div>
          </ScrollView>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PROJECTS_CONTENT.map((project, index) => (
              <ScrollView key={project.name} delay={index * 0.1}>
                <div className="border rounded-2xl p-6 h-full hover:bg-white dark:hover:bg-gray-900/50 transition-colors">
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-lg font-semibold">{project.name}</h3>
                      <p className="text-sm text-muted-foreground">{project.period}</p>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, tagIndex) => (
                        <Badge key={tagIndex} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
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
