"use server";

import { createCarSchema } from "@/lib/validation";
import { redirect } from "next/navigation";
import {addNewCar} from "@/api/carsApi"

export async function createCarPosting(formData: FormData) {
  const values = Object.fromEntries(formData.entries());
  const {
    model,
    brand,
    color,
    year,
  } = createCarSchema.parse(values);



  await addNewCar({
      model: model.trim(),
      brand: brand.trim(),
      color: color.trim(),
      year:  +year,
    });

  redirect("/car-submitted");
}
