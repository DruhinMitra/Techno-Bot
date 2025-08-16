import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`${id === open ? "rotate-180" : ""} h-5 w-5 transition-transform`}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
    </svg>
  );
}
 
export function FAQAccordion() {
  const [open, setOpen] = React.useState(0);
 
  const handleOpen = (value) => setOpen(open === value ? 0 : value);
 
  return (
    <div className="flex justify-center items-center">
    <div className="px-9 mb-24 max-w-xs md:px-24 md:max-w-screen-md lg:px-32 lg:max-w-screen-lg">
      <Accordion open={open === 1} icon={<Icon id={1} open={open} />}  className=" accordian-header">
        <AccordionHeader onClick={() => handleOpen(1)}>What is Techno Buddy?</AccordionHeader>
        <AccordionBody>
        Techno Buddy is your AI-powered campus assistant, designed to answer almost any query about your college — from placements and study resources to campus events and student life
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 2} icon={<Icon id={2} open={open} />} className=" accordian-header">
        <AccordionHeader onClick={() => handleOpen(2)}>
        How do I use Techno Buddy?
        </AccordionHeader>
        <AccordionBody>
          Just open the Techno Buddy Telegram bot, type your question, and get instant, accurate answers. No logins, no complicated menus — just quick information. 
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 3} icon={<Icon id={3} open={open} />} className=" accordian-header">
        <AccordionHeader onClick={() => handleOpen(3)}>
        What can I ask Techno Buddy?  
        </AccordionHeader>
        <AccordionBody>
          Anything about your campus: placement statistics, academic timetables, event schedules, library resources, club details, student guidelines, or even how to handle sensitive situations like ragging.
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 4} icon={<Icon id={4} open={open} />} className=" accordian-header">
        <AccordionHeader onClick={() => handleOpen(4)}>
        Is Techno Buddy free to use?  
        </AccordionHeader>
        <AccordionBody>
        Yes. Techno Buddy is completely free for all students of Techno International Newtown.  
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 5} icon={<Icon id={5} open={open} />} className=" accordian-header">
        <AccordionHeader onClick={() => handleOpen(5)}>
        How accurate is the information?   
        </AccordionHeader>
        <AccordionBody>
        We source data from verified campus records, student bodies, and faculty updates. While we aim for 100% accuracy, campus information changes — so we regularly update our database to keep it reliable.         </AccordionBody>
      </Accordion>
      <Accordion open={open === 6} icon={<Icon id={6} open={open} />} className=" accordian-header">
        <AccordionHeader onClick={() => handleOpen(6)}>
        Does Techno Buddy work for all colleges? 
        </AccordionHeader>
        <AccordionBody>
        Currently, Techno Buddy is designed for Techno International Newtown. We’re working on expanding to other institutions soon. Please contact us to get more details     
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 7} icon={<Icon id={7} open={open} />} className=" accordian-header">
        <AccordionHeader onClick={() => handleOpen(7)}>
        Can I contribute information? 
        </AccordionHeader>
        <AccordionBody>
        Yes! Students, clubs, and faculty can share verified updates with us. This keeps Techno Buddy fresh, useful, and community-driven. We are open to feedback, testimonials and to gain more information to share with. Please visit the footer section for the respective links.
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 8} icon={<Icon id={8} open={open} />} className=" accordian-header">
        <AccordionHeader onClick={() => handleOpen(8)}>
        Is my data safe?
        </AccordionHeader>
        <AccordionBody>
        Absolutely. We don’t store your personal queries or share your data. Techno Buddy focuses solely on delivering relevant answers without tracking you.        
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 9} icon={<Icon id={9} open={open} />} className=" accordian-header">
        <AccordionHeader onClick={() => handleOpen(9)}>
        How is Techno Buddy different from a regular college website?   
        </AccordionHeader>
        <AccordionBody>
        Instead of clicking through dozens of menus, you just ask your question and get the exact answer in seconds. It’s like Google, but for your campus.        
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 10} icon={<Icon id={10} open={open} />} className=" accordian-header">
        <AccordionHeader onClick={() => handleOpen(10)}>
        Do I need internet access to use it? 
        </AccordionHeader>
        <AccordionBody>
        Yes, you’ll need an internet connection to chat with techno Buddy. Telegram’s lightweight interface means it works even on low bandwidth.        
        </AccordionBody>
      </Accordion>
    </div>
    </div>
  );
}