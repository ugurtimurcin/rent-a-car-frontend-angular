import { Brand } from "./brand";
import { Color } from "./color";

export interface Car{
    id: number;
    modelYear: number;
    dailyPrice: number;
    description: string;
    color:string;
    brand:string;
    imagePath: string;
}