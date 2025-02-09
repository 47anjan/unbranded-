"use client";
import React, {
  useEffect,
  useRef,
  useState,
  createContext,
  useContext,
  JSX,
} from "react";
import { IconX } from "@tabler/icons-react";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import Image, { ImageProps } from "next/image";
import { useOutsideClick } from "@/hooks/use-outside-click";
import { Link2 } from "lucide-react";
import Link from "next/link";
import { BlurFade } from "../magicui/blur-fade";

interface CarouselProps {
  items: JSX.Element[];
  initialScroll?: number;
}

type Card = {
  src: string;
  title: string;
  category: string;
  overview: string;
  image: string;
  htmlDisc: string;
  live: string;
};

export const ProjectGridContext = createContext<{
  onCardClose: (index: number) => void;
  currentIndex: number;
}>({
  onCardClose: () => {},
  currentIndex: 0,
});

export const ProjectGrid = ({ items }: CarouselProps) => {
  const carouselRef = React.useRef<HTMLDivElement>(null);

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleCardClose = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <ProjectGridContext.Provider
      value={{ onCardClose: handleCardClose, currentIndex }}
    >
      <div className="relative w-full">
        <div className="flex w-full  py-10  scroll-smooth" ref={carouselRef}>
          <div className={cn("w-full grid grid-cols-1 sm:grid-cols-2 gap-4 ")}>
            {items.map((item, index) => (
              <BlurFade key={index} delay={0.25 + index * 0.05} inView>
                <motion.div
                  initial={{
                    opacity: 0,
                    y: 20,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: 0.5,
                      delay: 0.2 * index,
                      ease: "easeOut",
                      once: true,
                    },
                  }}
                  key={"card" + index}
                  className="  rounded-3xl"
                >
                  {item}
                </motion.div>
              </BlurFade>
            ))}
          </div>
        </div>
      </div>
    </ProjectGridContext.Provider>
  );
};

export const Card = ({
  card,
  index,
  layout = false,
}: {
  card: Card;
  index: number;
  layout?: boolean;
}) => {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const { onCardClose } = useContext(ProjectGridContext);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        handleClose();
      }
    }

    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  useOutsideClick(containerRef, () => handleClose());

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    onCardClose(index);
  };

  return (
    <>
      <AnimatePresence>
        {open && (
          <div className="fixed inset-0 h-screen z-50 overflow-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="bg-black/80 backdrop-blur-lg h-full w-full fixed inset-0"
            />
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              ref={containerRef}
              layoutId={layout ? `card-${card.title}` : undefined}
              className="max-w-5xl mx-auto bg-white dark:bg-neutral-900 h-fit  z-[60] my-10 p-4 md:p-10 rounded-3xl font-sans relative"
            >
              <div className="sticky top-4 flex items-center justify-between">
                <Link
                  title="project link"
                  href={card.live}
                  target="_blank"
                  className=" h-8 w-8 right-0  bg-[#F5F5F7] rounded-full flex items-center justify-center"
                >
                  <Link2 className="h-5 w-5 text-neutral-700 " />
                </Link>
                <button
                  className=" h-8 w-8 right-0 ml-auto bg-black dark:bg-white rounded-full flex items-center justify-center"
                  onClick={handleClose}
                >
                  <IconX className="h-6 w-6 text-neutral-100 dark:text-neutral-900" />
                </button>
              </div>

              <motion.p
                layoutId={layout ? `title-${card.title}` : undefined}
                className="text-2xl md:text-4xl font-semibold text-neutral-700 mt-4 dark:text-white"
              >
                {card.title}
              </motion.p>

              <motion.p
                layoutId={layout ? `overview-${card.title}` : undefined}
                className="text-lg  font-semibold text-neutral-700 mt-4 dark:text-white"
              >
                {card.overview}
              </motion.p>

              <div className="pt-10">
                <div className="bg-[#F5F5F7] dark:bg-neutral-800   rounded-2xl mb-4">
                  <Image
                    src={card.image}
                    alt={card.title}
                    height="1200"
                    width="1200"
                    className="h-full w-full max-w-5xl mb-8 mx-auto object-contain"
                  />

                  <div className="p-8">
                    <div
                      dangerouslySetInnerHTML={{ __html: card.htmlDisc }}
                    ></div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
      <motion.button
        layoutId={layout ? `card-${card.title}` : undefined}
        onClick={handleOpen}
        className="rounded-2xl group bg-gray-100 dark:bg-neutral-900 h-80  w-full  overflow-hidden flex flex-col items-start justify-start relative z-10"
      >
        <div className="absolute h-full top-0 inset-x-0 bg-gradient-to-b from-black/50 via-transparent to-transparent z-30 pointer-events-none" />
        <div className="absolute z-40 inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-40 p-5 sm:p-8">
          <motion.p
            layoutId={layout ? `category-${card.category}` : undefined}
            className="text-white text-sm md:text-base font-medium font-sans text-left"
          >
            {card.category}
          </motion.p>
          <motion.p
            layoutId={layout ? `title-${card.title}` : undefined}
            className="text-white text-xl md:text-3xl font-semibold max-w-md text-left [text-wrap:balance] font-sans mt-2"
          >
            {card.title}
          </motion.p>
        </div>
        <BlurImage
          src={card.src}
          alt={card.title}
          fill
          className="object-cover absolute z-10 inset-0"
        />
      </motion.button>
    </>
  );
};

export const BlurImage = ({
  height,
  width,
  src,
  className,
  alt,
  ...rest
}: ImageProps) => {
  const [isLoading, setLoading] = useState(true);
  return (
    <Image
      className={cn(
        " scale-105 group-hover:scale-100 will-change-transform transition-transform duration-500",
        isLoading ? "blur-sm" : "blur-0",
        className
      )}
      onLoad={() => setLoading(false)}
      src={src}
      width={width}
      height={height}
      loading="lazy"
      decoding="async"
      blurDataURL={typeof src === "string" ? src : undefined}
      alt={alt ? alt : "Background of a beautiful view"}
      {...rest}
    />
  );
};
