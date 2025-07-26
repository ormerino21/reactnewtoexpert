import {z} from "zod"

export const schema = z.object({
    name: z.string().min(1, "Name is required"),
    email: z.email().min(1, "Email is required"),
    password: z.string().min(5, "Password is required and larger than 5 characters"),
    confirmPassword: z.string().min(5, "Confirm Password is required and larger than 5 characters")
}).refine(data => data.password === data.confirmPassword, {
    message: "Password are different",
    path: ["confirmPassword"]
})

export type FormValues = z.infer<typeof schema>