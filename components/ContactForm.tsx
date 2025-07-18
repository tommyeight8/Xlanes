"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const contactFormSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email"),
  message: z.string().min(1, "Message is required"),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = (data: ContactFormValues) => {
    console.log("Contact form submitted:", data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="mx-auto py-8 space-y-6 text-gray-200 w-full"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
        <div>
          <label className="mb-1 block text-sm font-medium">Name</label>
          <input
            {...register("name")}
            className="w-full bg-zinc-900 border border-gray-600 rounded px-3 py-2 text-gray-200"
          />
          {errors.name && (
            <p className="text-sm text-rose-500">{errors.name.message}</p>
          )}
        </div>
        <div>
          <label className="mb-1 block text-sm font-medium">Email</label>
          <input
            {...register("email")}
            className="w-full bg-zinc-900 border border-gray-600 rounded px-3 py-2 text-gray-200"
          />
          {errors.email && (
            <p className="text-sm text-rose-500">{errors.email.message}</p>
          )}
        </div>
      </div>

      <div className="w-full">
        <label className="mb-1 block text-sm font-medium">Message</label>
        <textarea
          {...register("message")}
          rows={5}
          className="w-full bg-zinc-900 border border-gray-600 rounded px-3 py-2 text-gray-200"
        />
        {errors.message && (
          <p className="text-sm text-rose-500">{errors.message.message}</p>
        )}
      </div>

      <button
        type="submit"
        className="cursor-pointer w-1/3 py-2 px-4 bg-pink-600 text-white rounded hover:bg-pink-700 transition duration-200"
      >
        Submit
      </button>
    </form>
  );
}
