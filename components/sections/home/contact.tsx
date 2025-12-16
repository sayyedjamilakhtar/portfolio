import React from "react";
import ContactForm from "@/components/common/ContactForm";

export default function contact() {
  return (
    <div id="contact" className=" py-50">
      <div className="max-w-[70vw] m-auto text-center">
        <h2 className="text-body-md">Ready to level up your brand?</h2>
        <h3 className="text-fluid-md font-bold my-3">Let's talk design.</h3>
        <p className="text-body-sm max-w-[38vw] m-auto">
          I’d love to hear more about your project. Whether you need help with
          branding, web design, or optimization, let’s start a conversation.
        </p>
      </div>

      <ContactForm />
    </div>
  );
}
