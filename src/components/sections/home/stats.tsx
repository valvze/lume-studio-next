"use client";
import { ScrollView } from "@/components/scroll-view";
import { motion } from "motion/react";
import { GraduationCap, Users, Award, Globe } from "lucide-react";

export default function StatsSection() {
  return (
    <section className="py-12 md:py-20" id="stats">
      <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
        <div className="relative z-10 mx-auto max-w-xl space-y-6 text-center">
          <ScrollView>
            <h2 className="text-4xl font-medium lg:text-5xl">
              At a Glance
            </h2>
          </ScrollView>
          <ScrollView delay={0.2}>
            <p className="text-muted-foreground">
              Combining medical education with technology, mentorship, and a passion for innovation.
            </p>
          </ScrollView>
        </div>
        <ScrollView stagger delay={0.04}>
          <div className="grid gap-12 divide-y *:text-center md:grid-cols-4 md:gap-2 md:divide-x md:divide-y-0">
            <motion.div
              variants={{
                hidden: { opacity: 0, scale: 0.8, filter: "blur(10px)" },
                visible: {
                  opacity: 1,
                  scale: 1,
                  filter: "blur(0px)",
                },
              }}
              className="space-y-4 pt-6 md:pt-0"
            >
              <div className="flex justify-center">
                <GraduationCap className="size-8 text-primary" />
              </div>
              <div className="text-4xl font-bold">6.5/7</div>
              <p className="text-sm text-muted-foreground">GPA at JCU Medicine</p>
            </motion.div>
            <motion.div
              variants={{
                hidden: { opacity: 0, scale: 0.8, filter: "blur(10px)" },
                visible: {
                  opacity: 1,
                  scale: 1,
                  filter: "blur(0px)",
                },
              }}
              className="space-y-4 pt-6 md:pt-0"
            >
              <div className="flex justify-center">
                <Users className="size-8 text-primary" />
              </div>
              <div className="text-4xl font-bold">2+</div>
              <p className="text-sm text-muted-foreground">Years Tutoring Students</p>
            </motion.div>
            <motion.div
              variants={{
                hidden: { opacity: 0, scale: 0.8, filter: "blur(10px)" },
                visible: {
                  opacity: 1,
                  scale: 1,
                  filter: "blur(0px)",
                },
              }}
              className="space-y-4 pt-6 md:pt-0"
            >
              <div className="flex justify-center">
                <Award className="size-8 text-primary" />
              </div>
              <div className="text-4xl font-bold">3x</div>
              <p className="text-sm text-muted-foreground">Science Fair Gold Medals</p>
            </motion.div>
            <motion.div
              variants={{
                hidden: { opacity: 0, scale: 0.8, filter: "blur(10px)" },
                visible: {
                  opacity: 1,
                  scale: 1,
                  filter: "blur(0px)",
                },
              }}
              className="space-y-4 pt-6 md:pt-0"
            >
              <div className="flex justify-center">
                <Globe className="size-8 text-primary" />
              </div>
              <div className="text-4xl font-bold">4</div>
              <p className="text-sm text-muted-foreground">Languages Spoken</p>
            </motion.div>
          </div>
        </ScrollView>
      </div>
    </section>
  );
}
