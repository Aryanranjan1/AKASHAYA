import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
  
  const faqs = [
    {
      question: "What are your shipping options?",
      answer:
        "We ship across Malaysia and Singapore. We offer standard and express shipping options. Shipping costs and delivery times vary based on your location and are calculated at checkout.",
    },
    {
      question: "What is your return policy?",
      answer:
        "We accept returns within 7 days of delivery for unused and unworn items with original tags attached. The items must be in their original condition. Please visit our Return Policy page for more details on how to initiate a return.",
    },
    {
      question: "How do I care for my handloom sarees?",
      answer:
        "We recommend dry cleaning for all our handloom and silk sarees to preserve their color and fabric integrity. For cotton suits, a gentle hand wash in cold water with mild detergent is suitable. Avoid machine washing and direct sunlight.",
    },
    {
        question: "Are the colors of the products accurate on the website?",
        answer: "We strive to display the colors of our products as accurately as possible. However, due to variations in monitor settings, screen resolutions, and lighting, we cannot guarantee that your device's display of any color will be completely accurate."
    },
    {
        question: "Do you offer plus sizes?",
        answer: "Yes! We believe fashion is for everyone. We have a dedicated 'Plus Size' collection featuring a range of beautiful ethnic wear designed for a comfortable and flattering fit."
    }
  ]
  
  export function Faq() {
    return (
      <section className="py-16 lg:py-24 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary">FREQUENTLY ASKED QUESTIONS</h2>
             <p className="mt-4 text-lg text-foreground/80 max-w-2xl mx-auto">
                Have questions? We've got answers.
            </p>
          </div>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full space-y-4">
                {faqs.map((faq, index) => (
                    <AccordionItem value={`item-${index}`} key={index} className="bg-background border border-border rounded-lg px-6">
                        <AccordionTrigger className="text-lg text-left hover:no-underline text-foreground">{faq.question}</AccordionTrigger>
                        <AccordionContent className="text-base text-foreground/70">
                            {faq.answer}
                        </AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
          </div>
        </div>
      </section>
    );
  }
