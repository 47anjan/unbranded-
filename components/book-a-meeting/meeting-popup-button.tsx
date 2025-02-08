"use client";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const PopupButton = dynamic(
  () => import("react-calendly").then((mod) => mod.PopupButton),
  { ssr: false }
);

const MeetingPopupButton = () => {
  const [rootElement, setRootElement] = useState<HTMLElement | null>(null);

  useEffect(() => {
    // Ensure the root element is available after the component mounts
    setRootElement(document.getElementById("root"));
  }, []);

  if (!rootElement) {
    return null; // Render nothing until the root element is available
  }

  return (
    <div className="px-6 w-full h-fit max-w-48 mx-auto md:mx-0 py-3 border  rounded-lg   text-lg font-semibold leading-6 text-center whitespace-nowrap transition-colors duration-200 ease-in bg-[#21242a] text-white hover:bg-[#21242a]/90 ">
      <PopupButton
        url="https://calendly.com/47joshua/15-minute-meeting"
        rootElement={rootElement}
        text="Book a Meeting"
      />
    </div>
  );
};

export default MeetingPopupButton;
