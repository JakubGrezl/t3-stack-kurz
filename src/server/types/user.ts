import {z} from "zod";

export const UserSchema = z.object({
    surname: z.string(),
    name: z.string(),
    email: z.string(),
    password: z.string(),
    createdAt: z.string().optional(),
    updatedAt: z.string().optional(),
});

export type IUserSchema = z.infer<typeof UserSchema>;