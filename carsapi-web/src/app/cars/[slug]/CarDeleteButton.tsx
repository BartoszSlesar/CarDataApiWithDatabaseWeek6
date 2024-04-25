"use client";

import FormSubmitButton from "@/components/FormSubmitButton";
import {useFormState} from "react-dom";
import {deleteCar} from "./actions";
import {CarData} from "@/models/cars";

interface CarDataProps {
    car: CarData;
}

export default function CarDeleteButton({car}: CarDataProps) {
    const [formState, formAction] = useFormState(deleteCar, undefined);
    return (
        <form action={formAction} className="space-y-1">
            <input hidden name="carId" value={car.carId}/>
            <FormSubmitButton className="w-full bg-red-500 hover:bg-red-600">
                Delete
            </FormSubmitButton>
            {formState?.error && (
                <p className="text-sm text-red-500">{formState.error}</p>
            )}
        </form>
    );
}
