import { Company } from '../models/company.model';
import { patchState, signalStore, withMethods, withState } from '@ngrx/signals';
import { tapResponse } from '@ngrx/operators';
import { inject } from '@angular/core';
import { CompanyService } from '../services/company.service';
import { ApiResponse } from '../../../core/models/api-response.model';
import { MessageService } from 'primeng/api';

type CompanyState = {
    company: Company | null;
    query: string;
};

const initialState: CompanyState = {
    company: null,
    query: ''
};
export const CompanyStore = signalStore(
    withState(initialState),
    withMethods((store, _companyService = inject(CompanyService), msg = inject(MessageService)) => ({
        initCompanyLoad: () => {
            return _companyService.loadCompany().pipe(
                tapResponse({
                    next: (company: ApiResponse<Company>) => {
                        patchState(store, { company: company.data });
                    },
                    error: (company: ApiResponse<Company>) => {
                        msg.add({ severity: 'error', summary: 'Error', detail: company.message });
                    }
                })
            );
        }
    }))
);
