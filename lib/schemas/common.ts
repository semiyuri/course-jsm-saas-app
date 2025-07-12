import { z } from "zod";

export const RequiredTextFieldSchema = z.string().min(1, "Field is required");
export const NameSchema = z.string().min(1, "Field is required");

// export const emailSchema = z
//   .string()
//   .min(1, "Email is required")
//   .email("Please enter a valid email address");

// export const passwordSchema = z
//   .string()
//   .min(1, "Password is required")
//   .min(8, "Password must be at least 8 characters")
//   .max(100, "Password must be less than 100 characters");

// export const phoneSchema = z
//   .string()
//   .min(1, "Phone number is required")
//   .regex(/^[\+]?[1-9][\d]{0,15}$/, "Please enter a valid phone number");
