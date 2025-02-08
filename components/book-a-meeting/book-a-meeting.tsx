"use client";

import dynamic from "next/dynamic";
import { useCalendlyEventListener } from "react-calendly";

const InlineWidget = dynamic(
  () => import("react-calendly").then((mod) => mod.InlineWidget),
  { ssr: false }
);

const BookAMeeting = () => {
  useCalendlyEventListener({
    onProfilePageViewed: () => console.log("onProfilePageViewed"),
    onDateAndTimeSelected: () => console.log("onDateAndTimeSelected"),
    onEventTypeViewed: () => console.log("onEventTypeViewed"),
    onEventScheduled: () => console.log("onEventScheduled"),
    onPageHeightResize: () => console.log("onPageHeightResize"),
  });

  return (
    <div className="px-4 sm:px-6  mb-20  md:mb-28 lg:px-8 xl:px-16  max-w-screen-2xl mx-auto">
      <div className="flex mb-5  flex-col items-center gap-4">
        <h2 className="text-center text-3xl font-semibold lg:text-4xl">
          Wanna discuss about a project
        </h2>
        <p className="text-center text-muted-foreground lg:text-lg">
          Let&apos;s collaborate and bring your ideas to life with expert design
          and development.
        </p>
      </div>

      <div>
        <InlineWidget url="https://calendly.com/47joshua/15-minute-meeting" />
      </div>
    </div>
  );
};
export default BookAMeeting;
