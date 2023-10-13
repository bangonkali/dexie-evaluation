import { z } from "zod";

export const ContactModel = z.object({
    firstName: z.string().max(255).min(1),
    lastName: z.string().max(255).min(1),
    id: z.string().uuid(),
});

export type IContact = z.infer<typeof ContactModel>;