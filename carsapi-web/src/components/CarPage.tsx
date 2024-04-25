import {Car, Clock1Icon} from "lucide-react";
import {CarData} from "@/models/cars";
import Image from "next/image";
import carLogoPlaceHolder from "@/assets/car-logo-placeholder.png";

interface CarPageProps {
    car: CarData;
}

export default function CarPage({
                                    car: {
                                        brand,
                                        model,
                                        color,
                                        year
                                    },
                                }: CarPageProps) {
    return (
        <section className="w-full grow space-y-5">
            <div className="flex items-center gap-3">
                <Image
                    src={carLogoPlaceHolder}
                    alt="Company logo"
                    width={100}
                    height={100}
                    className="rounded-xl"
                />
                <div>
                    <div>
                        <h1 className="text-xl font-bold">{brand} {model}</h1>
                    </div>
                    <div className="text-muted-foreground">
                        <p className="flex items-center gap-1.5">
                            <Car size={16} className="shrink-0"/>
                            {color}
                        </p>
                        <p className="flex items-center gap-1.5">
                            <Clock1Icon size={16} className="shrink-0"/>
                            {year}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
