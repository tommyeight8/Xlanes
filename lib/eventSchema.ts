import { z } from "zod";

export const eventFormSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.email("Invalid email"),
  phone: z.string().min(7, "Phone number is required"),
  numberOfGuests: z.number().min(1, "Must be at least 1 guest"),
  planningType: z.enum(["Birthday Celebration", "Corporate", "Other"]),
  foodPackage: z.enum([
    "Tailgate Package $26/Person",
    "Vegan Package $28/Person",
    "Tex-Mex Package $28/Person",
    "Italian Package $30/Person",
    "Silver Package $32/Person",
    "Gold Package $38/Person",
  ]),
  drinkTicket: z.enum([
    "Well Selection $7",
    "Call Selection $10",
    "Premium Selection $16",
    "No Drink Tickets",
  ]),
  eventDate: z.date("Date is required"),
  startTime: z.date("Start time is required"),
  endTime: z.date("End time is required"),
  additionalInfo: z.string().optional(),
});
