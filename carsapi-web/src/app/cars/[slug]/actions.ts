"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import {deleteCarById, getCarById} from "@/api/carsApi";

type FormState = { error?: string } | undefined;


export async function deleteCar(
    prevState: FormState,
    formData: FormData,
): Promise<FormState> {
    try {

        const carId = formData.get("carId") as string;



        const car = getCarById(carId)


        await deleteCarById(carId)

        revalidatePath("/");
    } catch (error) {
        let message = "Unexpected error";
        if (error instanceof Error) {
            message = error.message;
        }
        return { error: message };
    }

    redirect("/");
}
