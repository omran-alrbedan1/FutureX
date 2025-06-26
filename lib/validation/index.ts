import { z } from "zod";

export const formSchemaForConsultationForm = z.object({
  fullName: z.string().min(2, {
    message: "Full name must be at least 2 characters.",
  }),
  phone: z.string().min(10, {
    message: "Please enter a valid phone number.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  serviceType: z.string({
    required_error: "Please select a service type.",
  }),
  description: z.string().min(10, {
    message: "Description must be at least 10 characters.",
  }),
  date: z.date({
    required_error: "Please select a date for your consultation.",
  }),
  time: z.string({
    required_error: "Please select a time for your consultation.",
  }),
});
