import { Role } from './role.model';

export interface User {
    id: number;
    firstName: string; // Nombres del usuario
    email: string; // Correo electrónico
    status: 'Active' | 'Inactive'; // Estado
    role: Role; // Assigned Role
    branchIds: number[]; // Assigned branch IDs (sedes)
    userType: string; // Tipo de usuario (non-editable)
    position: string; // Specific position (non-editable)
    imageUrl?: string; // Profile picture
    language: 'es' | 'en'; // Language
}
