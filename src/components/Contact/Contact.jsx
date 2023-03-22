import React, { useState } from "react";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleFormChange = (e) => {
    setForm((prevFromData) => ({
      ...prevFromData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleFormSubmit = (e) => {
    e.target.checkValidity();
    e.target.reportValidity();
    e.preventDefault();

    console.log(form);
  };

  return (
    <div className="w-100 mt-10 flex h-[500px] flex-col items-center justify-around bg-[#191B1B] text-white md:flex-row">
      <div className="mt-5 flex flex-col text-left">
        <h1 className="text text-left text-3xl font-bold text-cyan">
          Let's get in touch
        </h1>
        <p className="mt-3 max-w-sm text-left text-xl">
          Contact me through this form and let's get started on making your
          vision a reality.
        </p>
      </div>

      <form
        className=" flex flex-col gap-2 text-black"
        onSubmit={handleFormChange}
      >
        <div className="flex flex-col gap-2 text-white">
          <p>Name</p>
          <input
            type="text"
            placeholder="Name"
            required
            onChange={handleFormChange}
            name="name"
            className="block w-[400px] rounded-lg border border-gray-300 bg-gray-50 p-3 text-sm text-gray-900 outline-none focus:border-[#6469ff] focus:ring-[#6469ff]"
          />
        </div>
        <div className="flex flex-col gap-2 text-white">
          <p>Email</p>
          <input
            type="text"
            placeholder="Email"
            required
            onChange={handleFormChange}
            name="email"
            className="block w-[400px] rounded-lg border border-gray-300 bg-gray-50 p-3 text-sm text-gray-900 outline-none focus:border-[#6469ff] focus:ring-[#6469ff]"
          />
        </div>
        <div className="flex flex-col gap-2 text-white">
          <p>Message</p>
          <textarea
            type="text"
            placeholder="Message"
            required
            onChange={handleFormChange}
            name="message"
            className="block h-[150px] w-[400px] rounded-lg border border-gray-300 bg-gray-50 p-3 text-sm text-gray-900 outline-none focus:border-[#6469ff] focus:ring-[#6469ff]"
          />
        </div>
        <button
          type="submit"
          className=" mx-auto mt-4 w-[160px] rounded border border-cyan p-3 text-white outline-none transition-all duration-150 ease-linear hover:bg-moonstone hover:text-white focus:outline-none active:bg-pink-600"
        >
          Send message
        </button>
      </form>
    </div>
  );
};

export default Contact;
