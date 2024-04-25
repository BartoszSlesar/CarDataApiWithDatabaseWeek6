

import H1 from "@/components/ui/h1";
import {carFilterValues} from "@/lib/validation";
import {Metadata} from "next";
import CarResults from "@/components/CarResults"
import CarFilterSidebar from "@/components/CarFilterSidebar"

interface PageProps {
    searchParams: {
        year?: string;
        yearTo?: string;
    };
}


export function generateMetadata(): Metadata {
    return {
        title: "cars",
    };
}

export default async function Home({
                                       searchParams: {year, yearTo},
                                   }: PageProps) {
    const filterValues: carFilterValues = {
        year,
        yearTo
    };

    return (
        <main className="m-auto my-10 max-w-5xl space-y-10 px-3">
            <div className="space-y-5 text-center">
                <H1>Cars Data</H1>
                <p className="text-muted-foreground">Find your car.</p>
            </div>
            <section className="flex flex-col gap-4 md:flex-row">
                <CarFilterSidebar defaultValues={filterValues}/>
                <CarResults
                    filterValues={filterValues}
                />
            </section>
        </main>
    );
}
