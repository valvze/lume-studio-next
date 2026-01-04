import { Briefcase, Languages } from "lucide-react";
import { ScrollView } from "./scroll-view";
import Image from "next/image";

const skills = [
  "Full-Stack Web Development",
  "AI & Machine Learning",
  "Cloud Infrastructure",
  "UI/UX Design",
  "Data Analytics",
  "Technical Leadership",
  "Digital Marketing Strategy",
  "Medical Education",
];

const languages = [
  { name: "English", level: "Native Speaker" },
  { name: "Gujarati", level: "Native Speaker" },
  { name: "Hindi", level: "Proficient" },
  { name: "French", level: "Proficient" },
];

export default function ContentSection() {
  return (
    <section className="py-16 md:py-32" id="about">
      <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-12">
        <ScrollView>
          <h2 className="text-balance text-4xl font-medium lg:text-5xl text-center">
            About Me
          </h2>
        </ScrollView>

        <ScrollView delay={0.1}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            <div className="md:col-span-1 flex justify-center">
              <Image
                src="/images/parth.jpg"
                alt="Parth Shah"
                width={300}
                height={300}
                className="rounded-2xl object-cover aspect-square"
              />
            </div>
            <div className="md:col-span-2">
              <p className="text-lg">
                I&apos;m a motivated medical student at James Cook University with a
                multidisciplinary background spanning science research, tutoring,
                and technology. I&apos;m passionate about combining my medical
                knowledge with technical skills to make a meaningful impact in
                healthcare and beyond.
              </p>
            </div>
          </div>
        </ScrollView>

        <ScrollView delay={0.2}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            {/* Skills Section */}
            <div className="space-y-6 p-6 rounded-2xl bg-gray-50 dark:bg-gray-900/50">
              <div className="flex items-center gap-3">
                <Briefcase className="size-6" />
                <h3 className="text-xl font-semibold">Skills</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <span
                    key={index}
                    className="px-3 py-1.5 rounded-full text-sm bg-white dark:bg-gray-800 border"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Languages Section */}
            <div className="space-y-6 p-6 rounded-2xl bg-gray-50 dark:bg-gray-900/50">
              <div className="flex items-center gap-3">
                <Languages className="size-6" />
                <h3 className="text-xl font-semibold">Languages</h3>
              </div>
              <div className="space-y-3">
                {languages.map((lang, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <span className="font-medium">{lang.name}</span>
                    <span className="text-sm text-muted-foreground">
                      {lang.level}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </ScrollView>
      </div>
    </section>
  );
}
