import {Input} from "./ui/input";
import {Label} from "./ui/label";
import Select from "./ui/select";
import {Button} from "./ui/button";
import {carFilterValues, carFilterSchema} from "@/lib/validation";
import {redirect} from "next/navigation";
import FormSubmitButton from "./FormSubmitButton";
async function filterCars(formData: FormData) {
    "use server";

    const values = Object.fromEntries(formData.entries());

    const {year, yearTo} = carFilterSchema.parse(values);

    const searchParams = new URLSearchParams({
        ...(year && {year: year.trim()}),
        ...(yearTo && {yearTo: yearTo.trim()}),
    });

    redirect(`/?${searchParams.toString()}`);
}

interface CarFilterSidebarProps {
    defaultValues: carFilterValues;
}

export default async function CarFilterSidebar({
                                                   defaultValues,
                                               }: CarFilterSidebarProps) {


    return (
        <aside className="sticky top-0 h-fit rounded-lg border bg-background p-4 md:w-[260px]">
            <form action={filterCars} key={JSON.stringify(defaultValues)}>
                <div className="space-y-4">
                    <div className="flex flex-col gap-2">
                        <div className="flex flex-col gap-2">
                            <Label htmlFor="year">Year</Label>
                            <Input
                                id="year"
                                name="year"
                                placeholder="Car Year"
                                defaultValue={defaultValues.year}
                            />
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="flex flex-col gap-2">
                            <Label htmlFor="yearTo">Year To</Label>
                            <Input
                                id="yearTo"
                                name="yearTo"
                                placeholder="To year"
                                defaultValue={defaultValues.yearTo}
                            />
                        </div>
                    </div>

                    <FormSubmitButton className="w-full">Filter jobs</FormSubmitButton>
                </div>
            </form>
        </aside>
    );
}
