import React from "react";
import TextInput from "@/components/TextInput";
import TextArea from "@/components/TextArea";
import Button from "@/components/Button";

export default function ContactForm() {
  return (
    <div className="flex min-h-screen items-center justify-center px-6 py-12 bg-gradient-to-br from-[#FF9933] via-white to-[#138808]">
      <div className="w-full max-w-md space-y-8 bg-white p-8 shadow-lg rounded-lg">
        <h2 className="text-center text-2xl font-bold tracking-tight text-gray-900">
          Enter Your Details, Our Team Will Contact You Soon...
        </h2>

        <form action="#" method="POST" className="space-y-6">
          <TextInput label="Name" id="name" required />
          <TextInput label="Phone Number" id="phone" type="tel" required />
          <TextArea label="Address" id="address" required />
          <Button text="Submit" />
        </form>
      </div>
    </div>
  );
}
