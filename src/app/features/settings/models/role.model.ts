import { Module } from './module.model';
import { Permission } from './permission.model';

export interface Role {
    id: number;
    name: string; // Role Name
    description: string; // Description
    permissions: Permission[]; // Associated Permissions
    modules: Module[]; // Associated Modules
}
