import {z} from "zod";

const requiredString = z.string().min(2, "Required, Minimum length 2").max(50, "maximum length 50");
const numericRequiredString = requiredString.regex(/^\d+$/, "Must be a number");


export const createCarSchema = z
    .object({
        brand: requiredString,
        model: requiredString,
        color: requiredString,
        year: numericRequiredString
            .min(4, "Number can't be lower than 4 digits")
            .max(4, "Number can't be longer than 4 digits"),
    })

export type CreateCarValues = z.infer<typeof createCarSchema>;

export const carFilterSchema = z.object({
    year: z.string().optional(),
    yearTo: z.string().optional(),
});

export type carFilterValues = z.infer<typeof carFilterSchema>;
