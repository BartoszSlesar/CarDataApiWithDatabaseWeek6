import CarPage from "@/components/CarPage";
import {Button} from "@/components/ui/button";
import {Metadata} from "next";
import {notFound} from "next/navigation";
import {cache} from "react";
import {deleteCarById, getCarById, getCarByQuery} from "@/api/carsApi";
import CarDeleteButton from "@/app/cars/[slug]/CarDeleteButton";

interface PageProps {
    params: { slug: string };
}

const getCar = cache(async (slug: string) => {
    // const job = await prisma.job.findUnique({
    //   where: { slug },
    // });
    const car = await getCarById(slug);

    if (!car) {
        notFound();
    }

    return car;
});

export async function generateMetadata({
                                           params: {slug},
                                       }: PageProps): Promise<Metadata> {
    const car = await getCar(slug);
    return {
        title: car.model,
    };
}

export async function generateStaticParams() {
    const cars = await getCarByQuery("")

    return cars.map((car: any) => car.carId);
}

async function removeCar(carId: any) {
    await deleteCarById(carId)
}

export default async function Page({params: {slug}}: PageProps) {
    const car = await getCar(slug);

    return (
        <main className="m-auto my-10 flex max-w-5xl flex-col items-center gap-5 px-3 md:flex-row md:items-start">
            <CarPage car={car}/>
            <aside>
                <div className="m-auto gap-2 flex-col items-center px-3 md:flex-row md:space-y-2">

                    <Button asChild>
                        <a href="/" className="w-40 md:w-fit">
                            Back
                        </a>
                    </Button>
                    <CarDeleteButton car={car}/>

                </div>

            </aside>
        </main>
    );
}
