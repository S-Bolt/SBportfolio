import AvatarPic from "./assets/avatar.png";

import { useState } from "react";

export default function About() {
  const [pos, setPos] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [showMessage, setShowMessage] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const container = e.currentTarget as HTMLDivElement;
    const avatar = container.querySelector(".avatar") as HTMLDivElement | null;
    if (!avatar) return;

    const rect = avatar.getBoundingClientRect();
    const mouseX = e.clientX;
    const mouseY = e.clientY;
    const avatarX = rect.left + rect.width / 2;
    const avatarY = rect.top + rect.height / 2;

    const distance = Math.hypot(mouseX - avatarX, mouseY - avatarY);

    if (distance < 100) {
      const offsetX = (Math.random() - 0.5) * 200;
      const offsetY = (Math.random() - 0.5) * 200;
      setPos({ x: offsetX, y: offsetY });
      setShowMessage(true);

      setTimeout(() => setShowMessage(false), 1500);
    }
  };

  return (
    <div className="relative h-full  md:h-screen py-32 px-6 ">
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-20" />
      {/* Watermark */}
      <div className="pointer-events-none absolute left-1 -bottom-2 select-none text-7xl sm:text-9xl md:text-[10rem] lg:text-[14rem] xl:text-[16rem] font-black leading-none tracking-tight text-white/5  ">
        About.
      </div>
      <div className="flex flex-col md:flex-row md:items-start relative">
        <div className="md:w-1/2 z-10">
          <AccordionAbout />
        </div>
        <div className="md:w-1/2 flex justify-center ">
          <div className="relative h-80 w-80" onMouseMove={handleMouseMove}>
            <div
              className="absolute inset-0 flex items-center justify-center transition-transform duration-300"
              style={{
                transform: `translate(${pos.x}px, ${pos.y}px)`,
              }}
            >
              <div className="relative avatar">
                <div className="absolute inset-0 rounded-full ring-4 ring-red-500/30 animate-pulse"></div>
                <AvatarAbout />

                {showMessage && (
                  <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 ">
                    <MessageBubble text="Hey! No poking my face!" />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./components/ui/accordion";

export function AccordionAbout() {
  return (
    <Accordion
      type="single"
      collapsible
      className="w-full text-white "
      defaultValue="item-1"
    >
      <h3 className="text-2xl text-bold">About Me</h3>
      <AccordionItem value="item-1" className="border-none">
        <AccordionTrigger className="text-4xl">
          Life Beyond the Code
        </AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4  text-balance">
          <p>
            I'm a diehard Baltimore Orioles fan. I try to catch a few innings of
            every game. You might also catch me crafting Voodoo Dolls and
            dabbling in witchcraft to curse the Yankees with. My favorite sport
            to play is volleyball, but I'm not super tall and can't jump to save
            my life, so going pro isn't on the to-do-list.
          </p>
          <p>
            You could talk me into just about any outdoor activity. I Love
            hiking through a wooded trail, cruising down winding backgrounds, or
            basically anything that doesn't involve conquering my fear of
            heights.
          </p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2" className="border-none">
        <AccordionTrigger className="text-4xl">
          How I Work With People
        </AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 text-balance">
          <p>
            I treat people with kindness and respect, and I believe a good laugh
            goes a long way toward building great teams.
          </p>
          <p>
            I take my work seriously but not myself. I like to keep things
            simple, communicate clearly, and help everyone do their best work
            without the drama.
          </p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger className="text-4xl">
          Why I Love Frontend
        </AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 text-balance">
          <p>Have you ever talked to a backend dev before? Just kidding!</p>
          <p>
            Frontend lets me exercise both my logical and creative sides. I get
            a thrill out of crafting user experiences that don’t just work, but
            look and feel incredible.
          </p>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}

import { Avatar, AvatarFallback, AvatarImage } from "./components/ui/avatar";
import { MessageBubble } from "./components/ui/messageBubble";

export function AvatarAbout() {
  return (
    <div className="flex  items-center gap-12">
      <Avatar className="h-64 w-64 z-40">
        <AvatarImage src={AvatarPic} alt="@Sam Bolton" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
    </div>
  );
}
