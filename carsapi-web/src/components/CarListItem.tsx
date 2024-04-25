import {CarData} from "@/models/cars"
import Image from "next/image";
import carLogoPlaceHolder from "@/assets/car-logo-placeholder.png";
import {Clock1Icon} from "lucide-react";
import Badge from "./Badge";

interface CarListItemProps {
  car: CarData;
}

export default function CarListItem({
  car: {
    model,
    brand,
    color,
    year,
  },
}: CarListItemProps) {
  return (
    <article className="flex gap-3 rounded-lg border p-5 hover:bg-muted/60">
      <Image
        src={carLogoPlaceHolder}
        alt="car"
        width={100}
        height={100}
        className="self-center rounded-lg"
      />
      <div className="flex-grow space-y-3">
        <div>
          <h2 className="text-xl font-medium">{brand} {model}</h2>
          <p className="text-muted-foreground">{color}</p>
        </div>
        <div className="text-muted-foreground">
          <p className="flex items-center gap-1.5">
            <Clock1Icon size={16} className="shrink-0" />
            {year}
          </p>
        </div>
      </div>
      <div className="hidden shrink-0 flex-col items-end justify-between sm:flex">
        <Badge>{brand}</Badge>
        <span className="flex items-center gap-1.5 text-muted-foreground">
          {year}
        </span>
      </div>
    </article>
  );
}
