import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { TextAnimate } from "../magicui/text-animate";
import { FadeIn } from "../ui/fade-in";

const faqs = [
  {
    id: "item-1",
    question: "Why is professional landing page design crucial for conversion?",
    answer:
      "In today's competitive digital landscape, your landing page serves as your 24/7 sales team. Our research-backed designs optimize user flow and psychological triggers to convert visitors into customers. We combine conversion-focused strategies with exceptional UX to ensure your page not only looks stunning but drives measurable results.",
  },
  {
    id: "item-2",
    question: "Why choose your agency over DIY website builders?",
    answer:
      "While DIY tools offer temporary convenience, they often result in generic designs with poor performance and accessibility issues. Our custom solutions are built on industry best practices with mobile-first responsiveness, WCAG compliance, and strategic conversion paths. We handle technical optimization while you maintain full ownership of every pixel we create.",
  },
  {
    id: "item-3",
    question: "What makes your design process different?",
    answer:
      "Our 360° approach combines user psychology with technical excellence. Every project starts with competitor analysis and user journey mapping. We then prototype multiple variants for A/B testing potential, ensuring your final design isn't just beautiful - it's scientifically optimized for your target audience's behavior patterns.",
  },
  {
    id: "item-4",
    question: "Do we own the rights to the designs?",
    answer:
      "Absolutely. All final assets including source files (Figma/XD), development handoff specs, and copyrights are transferred to you upon project completion. We even include a style guide documentation to ensure brand consistency across future implementations.",
  },
  {
    id: "item-5",
    question: "How do you ensure accessibility compliance?",
    answer:
      "Accessibility is baked into our process from day one. All designs meet WCAG 2.1 AA standards with proper contrast ratios, keyboard navigation flows, and screen reader optimization. We conduct real user testing with assistive technologies to guarantee inclusive experiences.",
  },
  {
    id: "item-6",
    question: "What support do you provide post-launch?",
    answer:
      "Our partnership continues beyond delivery. We offer 30 days of complimentary technical support plus optional retainers for iterative optimization. Receive detailed analytics insights, conversion rate monitoring, and priority revisions to keep your landing page performing at peak efficiency.",
  },
  {
    id: "item-7",
    question: "Can you work with our existing brand guidelines?",
    answer:
      "Yes! We specialize in enhancing established brands while maintaining visual consistency. Our team will audit your current assets and create a system that elevates your identity without alienating existing customers. Perfect for brand refreshes or new product launches.",
  },
];

const FAQ = () => {
  return (
    <section className="">
      <div className="px-4 sm:px-6 lg:px-8 xl:px-16  max-w-screen-2xl mx-auto mb-20  md:mb-28">
        <div className="flex flex-col mb-10 sm:mb-16 items-center justify-center space-y-3 ">
          <h1 className="text-center text-3xl font-semibold lg:text-4xl">
            <TextAnimate animation="blurInUp" by="character">
              Frequently Asked Questions
            </TextAnimate>
          </h1>
          <p className="text-center w-full max-w-[670px] text-muted-foreground lg:text-lg ">
            Get answers to the most common questions about our services.
          </p>
        </div>

        <div className="w-full max-w-5xl mx-auto   px-4">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq) => (
              <AccordionItem key={faq.id} value={faq.id} className="border-b">
                <AccordionTrigger className="text-base sm:text-xl font-medium hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base sm:text-lg">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <FadeIn>
          <div className="mx-auto flex mt-10 sm:mt-16  flex-col items-center rounded-lg bg-accent p-4 text-center md:rounded-xl md:p-6 lg:p-8">
            <div className="relative">
              <span className="flex shrink-0 overflow-hidden rounded-full absolute mb-4 size-16 origin-bottom -translate-x-[60%] scale-[80%] border md:mb-5">
                <img
                  className="aspect-square h-full w-full"
                  src="https://library.shadcnblocks.com/images/block/avatar-2.webp"
                  alt="Avatar 2"
                />
              </span>
              <span className="flex shrink-0 overflow-hidden rounded-full absolute mb-4 size-16 origin-bottom translate-x-[60%] scale-[80%] border md:mb-5">
                <img
                  className="aspect-square h-full w-full"
                  src="https://library.shadcnblocks.com/images/block/avatar-1.webp"
                  alt="Avatar 3"
                />
              </span>
              <span className="relative flex shrink-0 overflow-hidden rounded-full mb-4 size-16 border md:mb-5">
                <img
                  className="aspect-square h-full w-full"
                  src="https://library.shadcnblocks.com/images/block/avatar-3.webp"
                  alt="Avatar 1"
                />
              </span>
            </div>
            <h3 className="mb-4 max-w-4xl font-bold text-lg md:text-3xl">
              Save time, money, and headaches
            </h3>
            <p className="mb-8 max-w-3xl text-muted-foreground lg:text-lg">
              Our dedicated support team is here to help you with any questions
              or concerns. Get in touch with us for personalized assistance.
            </p>
            <div className="flex w-full flex-col justify-center gap-2 sm:flex-row">
              <button className="px-5 w-fit h-fit  mx-auto md:mx-0 py-2 border  rounded-lg  font-semibold leading-6 text-center whitespace-nowrap transition-colors duration-200 ease-in bg-[#21242a] text-white hover:bg-[#21242a]/90 ">
                Contact Support
              </button>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};
export default FAQ;
