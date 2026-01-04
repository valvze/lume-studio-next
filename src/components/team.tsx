"use client";
import Link from "next/link";
import { motion } from "motion/react";
import { ScrollView } from "./scroll-view";
import { Award, Medal, Trophy, Calendar } from "lucide-react";

const volunteering = [
  {
    role: "IT Officer",
    organization: "James Cook University Medical Students Association",
    period: "November 2024 - Present",
    description:
      "Managed technical infrastructure to improve organizational efficiency and communication systems.",
  },
  {
    role: "Secretary",
    organization: "James Cook University Medical Students Association",
    period: "February 2024 - December 2024",
    description:
      "Led documentation and coordination of club activities, ensuring smooth operations.",
  },
];

const certifications = [
  {
    name: "First Aid and CPR",
    issuer: "Australia Wide First Aid",
    date: "February 2023",
    description: "Gained critical skills for emergency response and patient care.",
  },
  {
    name: "Blue Card",
    issuer: "Queensland Government",
    date: "March 2022",
    description: "Authorized to work with children under government standards.",
  },
];

const awards = [
  {
    name: "Governor General Award",
    issuer: "Swift Current Comprehensive High School",
    date: "July 2021",
  },
  {
    name: "3x Gold Medal at Regional Science Fair",
    issuer: "Chinook School Division",
    date: "March 2020, 2019, 2017",
  },
  {
    name: "CEMC Cayley Award",
    issuer: "University of Waterloo",
    date: "",
  },
];

export default function TeamSection() {
  return (
    <section
      className="bg-gray-50 py-16 md:py-32 dark:bg-transparent"
      id="team"
    >
      <div className="mx-auto max-w-5xl px-6 space-y-16">
        {/* Volunteering Section */}
        <div className="space-y-8">
          <ScrollView>
            <div className="text-center">
              <h2 className="text-3xl font-bold sm:text-4xl">Volunteering & Leadership</h2>
              <p className="mt-4 text-muted-foreground">
                Contributing to the community through leadership roles and meaningful volunteerism.
              </p>
            </div>
          </ScrollView>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {volunteering.map((item, index) => (
              <ScrollView key={item.role} delay={index * 0.1}>
                <div className="border rounded-2xl p-6 h-full hover:bg-white dark:hover:bg-gray-900/50 transition-colors">
                  <div className="space-y-3">
                    <h3 className="text-lg font-semibold">{item.role}</h3>
                    <p className="text-primary text-sm font-medium">{item.organization}</p>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="size-4" />
                      <span>{item.period}</span>
                    </div>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              </ScrollView>
            ))}
          </div>
        </div>

        {/* Certifications Section */}
        <div className="space-y-8">
          <ScrollView>
            <div className="text-center">
              <h2 className="text-3xl font-bold sm:text-4xl">Certifications</h2>
            </div>
          </ScrollView>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <ScrollView key={cert.name} delay={index * 0.1}>
                <div className="border rounded-2xl p-6 h-full hover:bg-white dark:hover:bg-gray-900/50 transition-colors">
                  <div className="flex items-start gap-4">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <Award className="size-6 text-primary" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-semibold">{cert.name}</h3>
                      <p className="text-sm text-primary">{cert.issuer}</p>
                      <p className="text-sm text-muted-foreground">{cert.date}</p>
                      <p className="text-sm text-muted-foreground">{cert.description}</p>
                    </div>
                  </div>
                </div>
              </ScrollView>
            ))}
          </div>
        </div>

        {/* Awards Section */}
        <div className="space-y-8">
          <ScrollView>
            <div className="text-center">
              <h2 className="text-3xl font-bold sm:text-4xl">Awards & Recognition</h2>
            </div>
          </ScrollView>

          <ScrollView delay={0.1}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {awards.map((award, index) => (
                <div
                  key={award.name}
                  className="border rounded-2xl p-6 text-center hover:bg-white dark:hover:bg-gray-900/50 transition-colors"
                >
                  <div className="flex justify-center mb-4">
                    <div className="p-3 rounded-full bg-yellow-100 dark:bg-yellow-900/30">
                      <Trophy className="size-6 text-yellow-600 dark:text-yellow-400" />
                    </div>
                  </div>
                  <h3 className="font-semibold">{award.name}</h3>
                  <p className="text-sm text-primary mt-1">{award.issuer}</p>
                  {award.date && (
                    <p className="text-xs text-muted-foreground mt-1">{award.date}</p>
                  )}
                </div>
              ))}
            </div>
          </ScrollView>
        </div>
      </div>
    </section>
  );
}
