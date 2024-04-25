"use client";

import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import H1 from "@/components/ui/h1";
import {CreateCarValues, createCarSchema} from "@/lib/validation";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {Input} from "@/components/ui/input";
import LoadingButton from "@/components/LoadingButton";
import {error} from "console";
import {createCarPosting} from "./actions";

export default function NewCarForm() {
    const form = useForm<CreateCarValues>({
        resolver: zodResolver(createCarSchema),
    });

    const {
        handleSubmit,
        watch,
        trigger,
        control,
        setValue,
        setFocus,
        formState: {isSubmitting},
    } = form;

    async function onSubmit(values: CreateCarValues) {
        const formData = new FormData();
        Object.entries(values).forEach(([key, value]) => {
            if (value) {
                formData.append(key, value);
            }
        });

        try {
            await createCarPosting(formData);
        } catch (error) {
            alert("Something went wrong, please try again.");
        }
    }

    return (
        <main className="m-auto my-10 max-w-3xl space-y-10">
            <div className="space-y-5 text-center">
                <H1>Cars Data</H1>
                <p className="text-muted-foreground">
                    Find your dream car
                </p>
            </div>
            <div className="space-y-6 rounded-lg border p-4">
                <div>
                    <h2 className="font-semibold ">Car details</h2>
                    <p className="text-muted-foreground">
                        Provide a job description and details
                    </p>
                </div>
                <Form {...form}>
                    <form
                        className="space-y-4 "
                        noValidate
                        onSubmit={handleSubmit(onSubmit)}
                    >
                        <FormField
                            control={control}
                            name="model"
                            render={({field}) => (
                                <FormItem>
                                    <FormLabel>Car Model</FormLabel>
                                    <FormControl>
                                        <Input placeholder="e.g Skoda, Toyota" {...field} />
                                    </FormControl>
                                    <FormMessage/>
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={control}
                            name="brand"
                            render={({field}) => (
                                <FormItem>
                                    <FormLabel>Car Brand</FormLabel>
                                    <FormControl>
                                        <Input placeholder="e.g Octavia, Civic" {...field} />
                                    </FormControl>
                                    <FormMessage/>
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={control}
                            name="color"
                            render={({field}) => (
                                <FormItem>
                                    <FormLabel>Car Color</FormLabel>
                                    <FormControl>
                                        <Input {...field} />
                                    </FormControl>
                                    <FormMessage/>
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={control}
                            name="year"
                            render={({field}) => (
                                <FormItem>
                                    <FormLabel>Production Year</FormLabel>
                                    <FormControl>
                                        <Input {...field} />
                                    </FormControl>
                                    <FormMessage/>
                                </FormItem>
                            )}
                        />
                        <LoadingButton type="submit" loading={isSubmitting}>
                            Submit
                        </LoadingButton>
                    </form>
                </Form>
            </div>
        </main>
    );
}
