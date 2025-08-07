import { DocumentType } from '../../../core/enums/document-type.enum';

export interface Company {
    id: number | null; // Optional for new companies
    logoUrl: string; // Required Logo
    companyName: string;
    identificationType: DocumentType;
    numberIdentification: number;
    verificationDigit: string;
    email: string;
    rutUrl: string;
    website: string;
    address: string;
    departmentId: number;
    cityId: number;
}
