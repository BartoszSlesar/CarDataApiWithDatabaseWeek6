export interface CarData {
  carId?: number
  model: string;
  brand: string
  color: string
  year: number;
}

export interface CarDataSearchResponse {
  results: CarData[];
}
