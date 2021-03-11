import { Brand } from "./brand";
import { Color } from "./color";

export interface Car{
    id: number;
    modelYear: number;
    dailyPrice: number;
    description: string;
    colorId: number;
    color: Color;
    brandId: number;
    brand: Brand;
}