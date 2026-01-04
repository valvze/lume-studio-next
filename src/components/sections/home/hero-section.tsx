import React from "react";
import Link from "next/link";
import { ArrowRight, Mail, Phone, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";

import { TextEffect } from "@/components/motion-primitives/text-effect";
import { AnimatedGroup } from "@/components/motion-primitives/animated-group";

const transitionVariants = {
  item: {
    hidden: {
      opacity: 0,
      filter: "blur(12px)",
      y: 12,
    },
    visible: {
      opacity: 1,
      filter: "blur(0px)",
      y: 0,
      transition: {
        type: "spring",
        bounce: 0.3,
        duration: 1.5,
      },
    },
  },
};

export default function HeroSection() {
  return (
    <>
      <div className="overflow-hidden min-h-screen">
        <section>
          <div className="relative pt-24 md:pt-36">
            <AnimatedGroup
              variants={{
                container: {
                  visible: {
                    transition: {
                      delayChildren: 1,
                    },
                  },
                },
                item: {
                  hidden: {
                    opacity: 0,
                    y: 20,
                  },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      type: "spring",
                      bounce: 0.3,
                      duration: 2,
                    },
                  },
                },
              }}
              className="absolute inset-0 -z-20"
            >
              <div className="h-screen xl:h-auto absolute inset-2 -z-10 overflow-hidden rounded-3xl border border-black/10 lg:aspect-video lg:rounded-[3rem] dark:border-white/5">
                <video
                  autoPlay
                  loop
                  muted
                  preload="auto"
                  className="size-full -scale-x-100 object-cover opacity-50 invert-0 dark:opacity-35 dark:invert "
                >
                  <source src="/hero-light.mp4" type="video/mp4" />
                </video>
              </div>
            </AnimatedGroup>

            <div className="absolute inset-0 -z-10 size-full "></div>
            <div className="mx-auto max-w-7xl px-6">
              <div className="text-center sm:mx-auto lg:mr-auto lg:mt-0">
                <TextEffect
                  preset="fade-in-blur"
                  speedSegment={0.3}
                  as="h1"
                  className="mt-8 text-balance text-5xl md:text-7xl lg:mt-16 xl:text-[5.25rem] font-semibold"
                >
                  Parth Shah
                </TextEffect>
                <TextEffect
                  per="line"
                  preset="fade-in-blur"
                  speedSegment={0.3}
                  delay={0.5}
                  as="p"
                  className="mx-auto mt-8 max-w-2xl text-balance text-xl md:text-2xl text-muted-foreground"
                >
                  Aspiring Medical Professional
                </TextEffect>
                <TextEffect
                  per="line"
                  preset="fade-in-blur"
                  speedSegment={0.3}
                  delay={0.7}
                  as="p"
                  className="mx-auto mt-6 max-w-3xl text-balance text-lg"
                >
                  Motivated medical student with a multidisciplinary background,
                  including hands-on experience in science research, tutoring,
                  and technology. Dedicated to excellence, problem-solving, and
                  community contribution through leadership and volunteering roles.
                </TextEffect>

                <AnimatedGroup
                  variants={{
                    container: {
                      visible: {
                        transition: {
                          staggerChildren: 0.05,
                          delayChildren: 0.75,
                        },
                      },
                    },
                    ...transitionVariants,
                  }}
                  className="mt-12 flex flex-col items-center justify-center gap-2 md:flex-row"
                >
                  <div
                    key={1}
                    className="bg-foreground/10 rounded-[calc(var(--radius-xl)+0.125rem)] border p-0.5"
                  >
                    <Button
                      asChild
                      size="lg"
                      className="rounded-xl px-5 text-base"
                    >
                      <Link href="mailto:parth.c.shah@gmail.com">
                        <Mail className="size-5 mr-2" />
                        <span className="text-nowrap">Get in Touch</span>
                      </Link>
                    </Button>
                  </div>
                  <Button
                    key={2}
                    asChild
                    size="lg"
                    variant="ghost"
                    className="h-10.5 rounded-xl px-5"
                  >
                    <Link href="https://parthshah.org" target="_blank">
                      <Globe className="size-5 mr-2" />
                      <span className="text-nowrap">parthshah.org</span>
                    </Link>
                  </Button>
                </AnimatedGroup>

                <AnimatedGroup
                  variants={{
                    container: {
                      visible: {
                        transition: {
                          staggerChildren: 0.1,
                          delayChildren: 1,
                        },
                      },
                    },
                    ...transitionVariants,
                  }}
                  className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground"
                >
                  <div className="flex items-center gap-2">
                    <Mail className="size-4" />
                    <span>parth.c.shah@gmail.com</span>
                  </div>
                </AnimatedGroup>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
