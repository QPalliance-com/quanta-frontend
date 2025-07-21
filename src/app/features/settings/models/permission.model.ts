export interface Permission {
    id: number;
    name: string; // Permission Name
    action: 'Create' | 'Edit' | 'Delete' | 'View'; // Defined actions
}
