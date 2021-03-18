import { ResponseModel } from "./responseModel";

export interface CarDetailModel<T> extends ResponseModel{
data: T
}