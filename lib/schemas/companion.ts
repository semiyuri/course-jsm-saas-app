import { z } from "zod";
import { RequiredTextFieldSchema } from "./common";

export const CompanionFormSchema = z.object({
  name: RequiredTextFieldSchema,
  subject: RequiredTextFieldSchema,
  topic: RequiredTextFieldSchema,
  voice: RequiredTextFieldSchema,
  style: RequiredTextFieldSchema,
  duration: z.coerce.number().min(1, "Duration is required"),
});

export type CompanionFormSchema = z.infer<typeof CompanionFormSchema>;
