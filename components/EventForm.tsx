"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import clsx from "clsx";
import { IconCalendar, IconClock } from "@tabler/icons-react";
import { toLocalTime } from "@/lib/toLocalTime";

// Import in your component
import { Controller } from "react-hook-form";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const planningOptions = ["Birthday Celebration", "Corporate", "Other"];
const foodOptions = [
  "Tailgate Package $26/Person",
  "Vegan Package $28/Person",
  "Tex-Mex Package $28/Person",
  "Italian Package $30/Person",
  "Silver Package $32/Person",
  "Gold Package $38/Person",
];

const eventFormSchema = z.object({
  name: z.string().min(1, "Name is requirose"),
  email: z.email("Invalid email"),
  phone: z.string().min(7, "Phone number is requirose"),
  numberOfGuests: z.number("Please enter number of guests"),
  planningType: z.string().refine((val) => planningOptions.includes(val), {
    message: "Please select party type",
  }),
  foodPackage: z.string().refine((val) => foodOptions.includes(val), {
    message: "Please select food package",
  }),
  drinkTicket: z.enum([
    "Well Selection $7",
    "Call Selection $10",
    "Premium Selection $16",
    "No Drink Tickets",
  ]),
  eventDate: z
    .date()
    .refine((val) => val instanceof Date && !isNaN(val.getTime()), {
      message: "Event date is requirose",
    }),

  startTime: z
    .date()
    .refine((val) => val instanceof Date && !isNaN(val.getTime()), {
      message: "Start time is requirose",
    }),

  endTime: z
    .date()
    .refine((val) => val instanceof Date && !isNaN(val.getTime()), {
      message: "End time is requirose",
    }),

  additionalInfo: z.string().optional(),
});

type EventFormValues = z.infer<typeof eventFormSchema>;

export default function EventForm() {
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    control,
    formState: { errors },
  } = useForm<EventFormValues>({
    resolver: zodResolver(eventFormSchema),
  });

  const planningType = watch("planningType");
  const foodPackage = watch("foodPackage");

  const onSubmit = (data: EventFormValues) => {
    console.log("Form submitted:", {
      ...data,
    });
  };

  const planningOptions = [
    "Birthday Celebration",
    "Corporate",
    "Other",
  ] as const;
  type PlanningType = (typeof planningOptions)[number];
  const foodOptions = [
    "Tailgate Package $26/Person",
    "Vegan Package $28/Person",
    "Tex-Mex Package $28/Person",
    "Italian Package $30/Person",
    "Silver Package $32/Person",
    "Gold Package $38/Person",
  ] as const;
  type FoodPackageType = (typeof foodOptions)[number];

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="mx-auto py-8 space-y-6 text-gray-200"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="mb-1 block text-sm font-medium">Name</label>
          <input
            {...register("name")}
            className="text-gray-200 w-full rounded px-3 py-2 bg-zinc-900 border border-gray-600"
          />
          {errors.name && (
            <p className="text-sm text-rose-500">{errors.name.message}</p>
          )}
        </div>
        <div>
          <label className="mb-1 block text-sm font-medium">Email</label>
          <input
            {...register("email")}
            className="w-full bg-zinc-900 border border-gray-600 rounded px-3 py-2"
          />
          {errors.email && (
            <p className="text-sm text-rose-500">{errors.email.message}</p>
          )}
        </div>
        <div>
          <label className="mb-1 block text-sm font-medium">Phone Number</label>
          <input
            {...register("phone")}
            className="w-full bg-zinc-900 border border-gray-600 rounded px-3 py-2"
          />
          {errors.phone && (
            <p className="text-sm text-rose-500">{errors.phone.message}</p>
          )}
        </div>
        <div>
          <label className="mb-1 block text-sm font-medium">
            Number of Guests
          </label>
          <input
            type="number"
            min={1}
            step={1}
            {...register("numberOfGuests", { valueAsNumber: true })}
            {...register("numberOfGuests")}
            className="w-full bg-zinc-900 border border-gray-600 rounded px-3 py-2"
          />
          {errors.numberOfGuests && (
            <p className="text-sm text-rose-500">
              {errors.numberOfGuests.message}
            </p>
          )}
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">
          What are you planning?
        </label>
        <div className="flex flex-wrap gap-2">
          {planningOptions.map((option) => (
            <button
              type="button"
              key={option}
              onClick={() => setValue("planningType", option)}
              className={clsx(
                "px-4 py-2 rounded border text-sm",
                planningType === option
                  ? "bg-pink-600 text-white border-pink-600 rounded-full"
                  : "bg-zinc-900 text-gray-200 border-zinc-900 rounded-full hover:bg-pink-600 hover:border-pink-600 transition duration-200 cursor-pointer"
              )}
            >
              {option}
            </button>
          ))}
        </div>
        {errors.planningType && (
          <p className="text-sm text-rose-500 mt-1">
            {errors.planningType.message}
          </p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">Food Package</label>
        <div className="flex flex-wrap gap-2">
          {foodOptions.map((option) => (
            <button
              type="button"
              key={option}
              onClick={() => setValue("foodPackage", option)}
              className={clsx(
                "px-4 py-2 rounded border text-sm",
                foodPackage === option
                  ? "bg-pink-600 text-white border-pink-600 rounded-full"
                  : "bg-zinc-900 text-gray-200 border-zinc-900 rounded-full hover:bg-pink-600 hover:border-pink-600 transition duration-200 cursor-pointer"
              )}
            >
              {option}
            </button>
          ))}
        </div>
        {errors.foodPackage && (
          <p className="text-sm text-rose-500 mt-1">
            {errors.foodPackage.message}
          </p>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="mb-1 block text-sm font-medium">
            Drink Tickets
          </label>
          <select
            {...register("drinkTicket")}
            className="w-full bg-zinc-900 border border-gray-600 rounded px-3 py-2"
          >
            <option value="" className="bg-zinc-900">
              Select...
            </option>
            <option className="bg-zinc-900">Well Selection $7</option>
            <option className="bg-zinc-900">Call Selection $10</option>
            <option className="bg-zinc-900">Premium Selection $16</option>
            <option className="bg-zinc-900">No Drink Tickets</option>
          </select>
          {errors.drinkTicket && (
            <p className="text-sm text-rose-500">
              {errors.drinkTicket.message}
            </p>
          )}
        </div>
        <div>
          <label className="mb-1 block text-sm font-medium">Event Date</label>
          <Controller
            name="eventDate"
            control={control}
            render={({ field }) => (
              <DatePicker
                {...field}
                selected={field.value}
                onChange={field.onChange}
                dateFormat="MM/dd/yyyy"
                className="w-full bg-zinc-900 border border-gray-600 rounded px-3 py-2 text-white"
                placeholderText="Select a date"
              />
            )}
          />
          {errors.eventDate && (
            <p className="text-sm text-rose-500">{errors.eventDate.message}</p>
          )}
        </div>

        <div>
          <label className="mb-1 block text-sm font-medium">Start Time</label>
          <Controller
            name="startTime"
            control={control}
            render={({ field }) => (
              <DatePicker
                {...field}
                selected={field.value}
                onChange={field.onChange}
                showTimeSelect
                showTimeSelectOnly
                timeIntervals={15}
                timeCaption="Time"
                dateFormat="h:mm aa"
                className="w-full bg-zinc-900 border border-gray-600 rounded px-3 py-2 text-white"
                placeholderText="Select start time"
              />
            )}
          />

          {errors.startTime && (
            <p className="text-sm text-rose-500">{errors.startTime.message}</p>
          )}
        </div>

        <div>
          <label className="mb-1 block text-sm font-medium">End Time</label>
          <Controller
            name="endTime" // ✅ should be endTime, not startTime again
            control={control}
            render={({ field }) => (
              <DatePicker
                {...field}
                selected={field.value}
                onChange={field.onChange}
                showTimeSelect
                showTimeSelectOnly
                timeIntervals={15}
                timeCaption="Time"
                dateFormat="h:mm aa"
                className="w-full bg-zinc-900 border border-gray-600 rounded px-3 py-2 text-white"
                placeholderText="Select end time"
              />
            )}
          />

          {errors.endTime && (
            <p className="text-sm text-rose-500">{errors.endTime.message}</p>
          )}
        </div>
      </div>

      <div>
        <label className="mb-1 block text-sm font-medium">
          Additional Information (Optional)
        </label>
        <textarea
          {...register("additionalInfo")}
          rows={4}
          className="w-full bg-zinc-900 border border-gray-600 rounded px-3 py-2"
        />
      </div>

      <button
        type="submit"
        className="w-1/3 py-2 px-4 bg-pink-600 cursor-pointer text-white rounded hover:bg-pink-700 transition duration-200"
      >
        Submit
      </button>
    </form>
  );
}
