import { Id } from "../../shared/models/id.interface";

export interface TeachersResponse extends TeachersRequest, Id {}

export interface TeachersRequest extends Id {
    name: string,
    description: string,
    address: string,
    dateOfBirth: string,
    dateOfRegister: string,
    phone: string,
    email: string,
    telegramUserName: string,
    specialization: string
}