// src/components/Faq.jsx
import React from "react";
import { Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import { HiOutlineChevronDown } from "react-icons/hi";
import { Fade, Slide } from "react-awesome-reveal";

const faqs = [
  {
    question: "How do I enroll in a course?",
    answer:
      "To enroll, browse our course catalog, select a course, and click on the 'Enroll Now' button. You’ll be guided through registration and payment.",
  },
  {
    question: "Can I access the courses anytime?",
    answer:
      "Yes! Once enrolled, you can access your courses 24/7 from any device. All lectures and materials remain available at your convenience.",
  },
  {
    question: "Do I receive a certificate after completion?",
    answer:
      "Yes, upon successful completion, you’ll receive a verified certificate that you can showcase on LinkedIn or with employers.",
  },
  {
    question: "Are the instructors industry professionals?",
    answer:
      "Absolutely! All our instructors are experienced professionals who bring real-world expertise into the classroom.",
  },
  {
    question: "What payment methods are available?",
    answer:
      "We support credit/debit cards, PayPal, and Stripe for secure payments. Some courses may also offer installment options.",
  },
];

const Faq = () => {
  return (
    <section className="py-12 lgPy-24">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-10 pt-9">
          <h2 className="text-custom-text text-xl md:text-2xl lg:text-3xl xl:text-4xl font-extrabold leading-tight text-center">
            <Fade direction="up" duration={1000} delay={200} triggerOnce>
              Frequently Asked Questions
            </Fade>
          </h2>
          <p className="text-[#685F78] text-center mx-auto font-semibold lg:max-w-6xl text-base md:text-lg pt-6 lg:pt-9">
            <Slide direction="up" duration={1000} delay={200} triggerOnce>
              Find quick answers to the most common questions about enrolling,
              learning, and completing courses on our platform.
            </Slide>
          </p>
        </div>

        {/* Accordion Section */}
        <div className="max-w-5xl mx-auto space-y-4 lg:space-y-9">
          {faqs.map((faq, index) => (
            <Accordion
              key={index}
              sx={{
                backgroundColor: "white",
                color: "red",
                borderRadius: "12px",
                "&:before": { display: "none" }, // remove default MUI line
              }}
            >
              <AccordionSummary
                expandIcon={
                  <HiOutlineChevronDown className="text-custom-primary w-6 h-6" />
                }
              >
                <span className="font-semibold text-custom-text text-md lg:text-2xl">
                  {faq.question}
                </span>
              </AccordionSummary>
              <AccordionDetails>
                <p className="text-[var(--color-custom-text)]">{faq.answer}</p>
              </AccordionDetails>
            </Accordion>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
