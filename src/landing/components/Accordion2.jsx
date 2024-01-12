import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "/src/components/ui/accordion"




export const Accordion2 = () => {
  return (
    <div className="preview flex min-h-[350px] max-w-xl mx-auto w-full justify-center px-8 items-center">
      <Accordion type="single" collapsible className="w-full">

        <AccordionItem value="item-1">
          <AccordionTrigger className="cursor-default">How does Hazzly enhance task control?</AccordionTrigger>
          <AccordionContent>
            Hazzly offers an intuitive interface for seamless task management, ensuring you stay in full control effortlessly.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2">
          <AccordionTrigger className="cursor-default">Are there hidden fees after the payment?</AccordionTrigger>
          <AccordionContent>
              No, our pricing is all-inclusive. No surprises or additional charges after your initial payment.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-3">
          <AccordionTrigger className="cursor-default" >Can I access my tasks from all devices?</AccordionTrigger>
          <AccordionContent>
              Yes, Hazzly allows you to synchronize and access your tasks across various devices for added convenience.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-4">
          <AccordionTrigger className="cursor-default" >How secure is my data on Hazzly</AccordionTrigger>
          <AccordionContent>
              Your data is highly secure with advanced encryption, strict access controls, and continuous monitoring for comprehensive protection.
          </AccordionContent>
        </AccordionItem>

      </Accordion>
    </div>
  )
}