export interface Company {
    id: number | null; // Optional for new companies
    logoUrl: string; // Required Logo
    companyName: string;
    isLegalEntity: boolean;
    identificationType: string;
    taxId: string;
    verificationDigit: string;
    email: string;
    rutUrl: string;
    legalCertificateUrl: string;
    taxRegime: string; // Dropdown list
    taxResponsibility: string; // Dropdown list
    economicSector: string; // Dropdown list
    website: string;
    mainCurrency: string;
    orgChartUrl: string;
    address: string;
    departmentId: number;
    cityId: number;
    totalEmployees: number; // Auto-filled from HR module
}
