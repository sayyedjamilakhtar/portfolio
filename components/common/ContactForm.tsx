import React from "react";
import FormButon from "./FormButon";

export default function ContactForm() {
  return (
    <div className="mt-20">
      <form action="" className="max-w-[30vw] m-auto">
        <div className="flex flex-col gap-20">
          <input
            type="text"
            placeholder="Enter your name"
            className="text-[1vw] border-b-1 py-3 focus:outline-0"
          />
          <input
            type="text"
            placeholder="Phone"
            className="text-[1vw] border-b-1 py-3 focus:outline-0"
          />
          <input
            type="text"
            placeholder="Your Email"
            className="text-[1vw] border-b-1 py-3 focus:outline-0"
          />
          <textarea
            rows={5}
            placeholder="Discuss your project..."
            className="text-[1vw]  border-b-1 py-3 focus:outline-0"
          />
          {/* <button className="">Let's build a great website</button> */}
          <FormButon />
        </div>
      </form>
    </div>
  );
}
