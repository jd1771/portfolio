import React, { useState } from "react";
import { useForm, ValidationError } from "@formspree/react";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [state, handleSubmit] = useForm("xbjeanqo");

  const handleFormChange = (e) => {
    setForm((prevFromData) => ({
      ...prevFromData,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div
      className="w-100 mt-10 flex h-[750px] flex-col items-center justify-around bg-[#191B1B] text-white md:h-[600px] md:flex-row"
      id="contact"
    >
      <div className="mt-5 ml-3 flex flex-col text-left">
        <h1 className="title-font mb-4 text-left text-3xl font-medium text-cyan sm:text-4xl">
          Let's get in touch
        </h1>
        <p className="text-md mt-3 max-w-md text-left md:text-xl">
          Have an inquiry or proposal? Contact me through this form and let's
          get started on making your vision a reality.
        </p>
      </div>

      <form className="flex flex-col text-black" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-y-4 text-white">
          <p>Name</p>
          <input
            type="text"
            placeholder="Name"
            required
            onChange={handleFormChange}
            name="name"
            className="block w-[300px] rounded-lg border border-gray-300 bg-gray-50 p-3 text-sm text-gray-900 outline-none focus:border-[#6469ff] focus:ring-[#6469ff] md:w-[400px]"
          />
        </div>
        <div className="mt-3 flex flex-col gap-y-4 text-white">
          <p>Email</p>
          <input
            type="email"
            placeholder="Email"
            required
            onChange={handleFormChange}
            name="email"
            className="block w-[300px] rounded-lg border border-gray-300 bg-gray-50 p-3 text-sm text-gray-900 outline-none focus:border-[#6469ff] focus:ring-[#6469ff] md:w-[400px]"
          />
        </div>
        <div className="mt-3 flex flex-col gap-y-4 text-white">
          <p>Message</p>
          <textarea
            type="text"
            placeholder="Message"
            required
            onChange={handleFormChange}
            name="message"
            className="block h-[150px] w-[300px] rounded-lg border border-gray-300 bg-gray-50 p-3 text-sm text-gray-900 outline-none focus:border-[#6469ff] focus:ring-[#6469ff] md:w-[400px]"
          />
        </div>
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />

        <button
          type="submit"
          disabled={state.submitting}
          className=" mx-auto mt-4 w-[160px] rounded border border-cyan p-3 text-white outline-none transition-all duration-150 ease-linear hover:bg-moonstone hover:text-white focus:outline-none active:bg-pink-600"
        >
          Send message
        </button>
        {state.succeeded && (
          <p className="mt-3 text-center text-white">Message sent!</p>
        )}
      </form>
    </div>
  );
};

export default Contact;
