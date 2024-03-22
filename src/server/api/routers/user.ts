import { createTRPCRouter, publicProcedure } from "../trpc";
import { UserSchema } from "@/server/types/user";
import bcrypt from "bcrypt";

export const userRouter = createTRPCRouter({
    register: publicProcedure
    .input(UserSchema)
    .mutation(async ({input, ctx}) => {
        const seed = await bcrypt.genSalt(10);

        const hashedPassword = await bcrypt.hash(input.password, seed);

        const response = await ctx.db.user.create({
            data: {
                email: input.email,
                surname: input.surname,
                name: input.name,
                password: hashedPassword
            }
        })



        if (!response) {
            throw new Error("Failed to create user");
        }
        return response;
    }),
})