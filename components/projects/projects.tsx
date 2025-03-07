"use client";

import React from "react";
import { ProjectGrid, Card } from "@/components/ui/apple-cards-carousel";
import { projects } from "@/lib/data";
import { TextAnimate } from "../magicui/text-animate";

const Projects = () => {
  const cards = projects.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div
      id="projects"
      className="px-4 sm:px-6 lg:px-8 xl:px-16  max-w-screen-2xl mx-auto mb-20  md:mb-28 "
    >
      <div className="w-full h-full">
        <div className="grid  gap-5  mb-10 sm:mb-16 ">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900">
            <TextAnimate animation="blurInUp" by="character">
              Our Projects
            </TextAnimate>
          </h2>
          <p className="text-xl max-w-[640px] text-muted-foreground">
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
