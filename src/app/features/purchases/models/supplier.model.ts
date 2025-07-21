import { DocumentType } from '../../../core/enums/document-type.enum';

export interface Supplier {
    id?: number;
    contactName: string;
    companyName: string;
    documentType: DocumentType;
    documentNumber: string;
    dv?: string;
    email: string;
    address: string;
    phone: string;
    creditLimit?: number;
    paymentTerm: string;
    salesRep: string;

    departmentId: number;
    cityId: number;
}
