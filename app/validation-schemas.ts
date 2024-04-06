import { z } from "zod";

export const createTaskSchema = z.object({
    title: z.string().min(1),
    description: z.string().min(1)
})

export type TaskForm = z.infer<typeof createTaskSchema>;