import React from "react";

export default function About() {
  return (
    <div className="bg-neutral-900 text-white text-body-sm pb-[15vh]">
      <div className="w-[95%] m-auto">
        <div className="max-w-[40vw]">
          <h2 className="text-[2.5vw] font-light mb-5 text-white/70">
            How it started
          </h2>
          <p>
            I began my career building websites with WordPress and the Divi
            Builder, delivering 200+ projects for 50+ clients worldwide.
          </p>

          <p className="mt-5">
            This phase taught me how to handle the entire project lifecycle,
            from client communication and UI decisions to deployment and
            performance.
          </p>
        </div>
      </div>

      <div className="w-[95%] m-auto pt-40">
        <div className="max-w-[40vw] ml-auto">
          <h2 className="text-[2.5vw] font-light mb-5 text-white/70">
            Skill evolution
          </h2>
          <p>
            As my interest shifted toward custom, scalable interfaces, I moved
            deeper into JavaScript and modern frontend development.
          </p>

          <p className="mt-5">
            I started building interactive UIs and learning how real products
            are structured beyond page builders.
          </p>
        </div>
      </div>

      <div className="w-[95%] m-auto">
        <div className="max-w-[40vw]">
          <h2 className="text-[2.5vw] font-light mb-5 text-white/70">
            Where I work now
          </h2>
          <p>
            To grow in a team-based, production environment, I joined RedConic
            in 2022.
          </p>

          <p className="mt-5">
            Here, I work as a Front-End Developer, building modern web
            applications using React and Next.js, collaborating with designers,
            backend developers, and stakeholders.
          </p>
        </div>
      </div>

      <div className="w-[95%] m-auto pt-40">
        <div className="max-w-[40vw] ml-auto">
          <h2 className="text-[2.5vw] font-light mb-5 text-white/70">
            What I’m learning now
          </h2>
          <p>
            Currently, I’m sharpening my skills in advanced frontend animations
            and backend fundamentals, focusing on:
          </p>

          <p className="mt-5">
            Performance-friendly UI animations Modern frontend architecture
            Deeper backend understanding to build full-stack-ready features
          </p>
        </div>
      </div>
    </div>
  );
}
