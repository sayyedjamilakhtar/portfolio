"use client";
import React, { useState } from "react";
import FormButon from "./FormButon";

export default function ContactForm() {
  type contactProps = {
    name: string;
    phone?: string;
    email: string;
    message?: string;
  };

  const contact: contactProps = {
    name: "",
    phone: "",
    email: "",
    message: "",
  };

  const [contactInfo, setContactInfo] = useState(contact);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(contactInfo);
    // Reset form fields after submission
    setContactInfo({
      name: "",
      phone: "",
      email: "",
      message: "",
    });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    if (e.target.id == "name") {
      setContactInfo({ ...contactInfo, name: e.target.value });
    } else if (e.target.id == "phone") {
      setContactInfo({ ...contactInfo, phone: e.target.value });
    } else if (e.target.id == "email") {
      setContactInfo({ ...contactInfo, email: e.target.value });
    } else if (e.target.id == "message") {
      setContactInfo({ ...contactInfo, message: e.target.value });
    }
  };

  return (
    <div className="mt-[7vh]">
      <form onSubmit={handleSubmit} className="max-w-[30vw] m-auto">
        <div className="flex flex-col gap-[6vh]">
          <input
            type="text"
            id="name"
            placeholder="Enter your name"
            value={contactInfo.name}
            onChange={handleChange}
            required
            className="text-[1vw] border-b-1 py-[1.1vh] focus:outline-0"
          />
          <input
            type="text"
            id="phone"
            placeholder="Phone"
            value={contactInfo.phone}
            onChange={handleChange}
            className="text-[1vw] border-b-1 py-[1.1vh] focus:outline-0"
          />
          <input
            type="email"
            id="email"
            placeholder="Your Email"
            value={contactInfo.email}
            onChange={handleChange}
            required
            className="text-[1vw] border-b-1 py-[1.1vh] focus:outline-0"
          />
          <textarea
            rows={5}
            id="message"
            placeholder="How may i help you?"
            value={contactInfo.message}
            onChange={handleChange}
            className="text-[1vw]  border-b-1 py-[1.1vh] focus:outline-0"
          />
          {/* <button className="">Let's build a great website</button> */}
          <FormButon />
        </div>
      </form>
    </div>
  );
}
