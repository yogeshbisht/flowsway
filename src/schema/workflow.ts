import { z } from "zod";

export const createWorkflowSchema = z.object({
  name: z
    .string()
    .min(3, { message: "Name must be at least 3 characters long" })
    .max(50, { message: "Name must be less than 50 characters" }),
  description: z.string().max(80).optional()
});

export type CreateWorkflowSchemaType = {
  success: boolean;
  data: z.infer<typeof createWorkflowSchema>;
};
