import { z } from "zod";

export const resourceSchema = z.object({
  id: z.string(),
  name: z.string().min(1, { message: "Resource name required" }),
  url: z
    .string()
    .url({ message: "Invalid URL" })
    .min(1, { message: "Resource URL required" }),
  locale: z.string(),
  address: z.string(),
  description: z.string(),
  type: z.string(),
  tags: z.array(z.string()),
});

export const meetingSchema = z.object({
  id: z.string(),
  month: z.string().regex(/^[0-9][0-9]$/, { message: "Two digits required" }),
  year: z
    .string()
    .regex(/^[0-9][0-9][0-9][0-9]$/, { message: "Four digits required" }),
  url: z
    .string()
    .min(1, { message: "URL required" })
    .url({ message: "Invalid URL" }),
});

export const eventSchema = z.object({
  id: z.string(),
  title: z.string(),
  frequency: z.string(),
  schedule: z.string(),
  location: z.string(),
  next_date: z.string(),
  description: z.string(),
  created: z.string(),
});

export const announcementSchema = z.object({
  id: z.string(),
  title: z.string(),
  description: z.string(),
  created: z.string(),
});
