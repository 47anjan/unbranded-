import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const faqData = [
  {
    id: "return-policy",
    question: "What is the return policy?",
    answer:
      "You can return any item within 30 days of purchase for a full refund, provided it is in its original condition.",
  },
  {
    id: "track-order",
    question: "How do I track my order?",
    answer:
      "Once your order ships, you will receive a tracking number via email. You can use this number on our website or the carrier's website to track your package.",
  },
  {
    id: "international-shipping",
    question: "Do you offer international shipping?",
    answer:
      "Yes, we offer international shipping to most countries. Shipping rates and delivery times vary by location. You can see the exact costs at checkout.",
  },
  {
    id: "change-order",
    question: "Can I change my order after it has been placed?",
    answer:
      "You can modify or cancel your order within 1 hour of placing it. After that, please contact our customer service team for assistance.",
  },
];

const FAQ = () => {
  return (
    <section className="">
      <div className="px-4 sm:px-6 lg:px-8 xl:px-16  max-w-screen-2xl mx-auto mb-20  md:mb-28">
        <div className="flex flex-col mb-10 sm:mb-16 items-center justify-center space-y-3 ">
          <h1 className="text-center text-3xl font-semibold lg:text-4xl">
            Frequently Asked Questions
          </h1>
          <p className="text-center w-full max-w-[670px] text-muted-foreground lg:text-lg ">
            Get answers to the most common questions about our services.
          </p>
        </div>

        <div className="w-full max-w-5xl mx-auto   px-4">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqData.map((faq) => (
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
            Our dedicated support team is here to help you with any questions or
            concerns. Get in touch with us for personalized assistance.
          </p>
          <div className="flex w-full flex-col justify-center gap-2 sm:flex-row">
            <button className="px-5 w-fit h-fit  mx-auto md:mx-0 py-2 border  rounded-lg  font-semibold leading-6 text-center whitespace-nowrap transition-colors duration-200 ease-in bg-[#21242a] text-white hover:bg-[#21242a]/90 ">
              Contact Support
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
export default FAQ;
