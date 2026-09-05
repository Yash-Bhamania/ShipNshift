
import { string, z } from 'zod'

const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(3, "Name must be at least 3 characters long"),
  email: z
    .string()
    .trim()
    .email("Invalid email address"),
  phone: z.string()
    .trim()
    .regex(/^[6-9]\d{9}$/, "Please enter a valid 10-digit phone number"),
  subject: z
    .string()
    .trim()
    .min(5, "Subject must be at least 5 characters long"),
  message: z
    .string()
    .trim()
    .min(10, "Message must be at least 10 characters long"),

})

export default contactSchema