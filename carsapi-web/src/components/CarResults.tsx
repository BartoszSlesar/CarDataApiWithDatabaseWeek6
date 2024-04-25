import CarListItem from "@/components/CarListItem";
import {carFilterValues} from "@/lib/validation";
import Link from "next/link";
import {CarData} from "@/models/cars";
import {getCarByQuery} from "@/api/carsApi";

interface CarResultProps {
    filterValues: carFilterValues;
}

export function getSearchString(filterValues: carFilterValues) {

    const {year, yearTo} = filterValues;

    const yearString = year ? `?year=${year}` : yearTo ? `?year=${yearTo}` : ""

    const yearToString = yearTo ? `&yearTo=${yearTo}` : ""

    return `${yearString}${yearToString}`
}

export default async function CarResults({
                                             filterValues,
                                         }: CarResultProps) {


    const searchParams = getSearchString(filterValues)

    const cars = await getCarByQuery(searchParams);



    // const countPromise = prisma.job.count({where});


    return (
        <div className="grow space-y-4">
            {cars.map((car: any) => (
                <Link key={car.carId} href={`/cars/${car.carId}`} className="block">
                    <CarListItem car={car}/>
                </Link>
            ))}
            {cars.length === 0 && (
                <p className="m-auto text-center">
                    No Cars Found. Try adjusting your search filters.
                </p>
            )}
        </div>
    );
}


