"use client";

import React from "react";
import { ProjectGrid, Card } from "@/components/ui/apple-cards-carousel";
import { projects } from "@/lib/data";

const Projects = () => {
  const cards = projects.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="px-4 sm:px-6 lg:px-8 xl:px-16  max-w-screen-2xl mx-auto py-16 md:py-24">
      <div className="w-full h-full">
        <div className="grid mb-16 lg:grid-cols-2 gap-20  lg:gap-26 ">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900">
            Our Projects
          </h2>
          <p className="text-xl text-muted-foreground">
            Explore diverse areas such as Software Engineering, Design & UX, and
            more, to find where your unique talents can shine and drive impact.
          </p>
        </div>
        <ProjectGrid items={cards} />
      </div>
    </div>
  );
};
export default Projects;
