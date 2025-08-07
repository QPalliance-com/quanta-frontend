import { Product, ProductVariant } from '../../models/product.model';
import { patchState, signalStore, withMethods, withState } from '@ngrx/signals';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { tapResponse } from '@ngrx/operators';
import { pipe, switchMap } from 'rxjs';
import { inject } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { ApiResponse } from '../../../../core/models/api-response.model';
import { MessageService } from 'primeng/api';

type ProductsState = {
    productsList: Product[];
    productsListItems: Product[];
    product: Product | null;
    productvariants: ProductVariant[];
    query: string;
};

const initialState: ProductsState = {
    productsList: [],
    productsListItems: [],
    product: null,
    productvariants: [],
    query: ''
};
export const ProductsStore = signalStore(
    withState(initialState),
    withMethods((store, _productsService = inject(ProductService), msg = inject(MessageService)) => ({
        loadAllProducts: rxMethod<void>(
            pipe(
                switchMap(() =>
                    _productsService.getAllProductsCatalogItem().pipe(
                        tapResponse({
                            next: (productslist: ApiResponse<Product[]>) => {
                                patchState(store, { productsList: productslist.data });
                                msg.add({ severity: 'success', summary: 'Completado', detail: productslist.message });
                            },
                            error: () => {}
                        })
                    )
                )
            )
        ),
        loadProductById: rxMethod<{ id: number | string | null }>(
            pipe(
                switchMap(({ id }) =>
                    _productsService.getProductById(id).pipe(
                        tapResponse({
                            next: (product: ApiResponse<Product>) => {
                                patchState(store, { product: product.data });
                                msg.add({ severity: 'success', summary: 'Completado', detail: product.message });
                            },
                            error: (product: ApiResponse<Product>) => {
                                msg.add({ severity: 'error', summary: 'Error', detail: product.message });
                            }
                        })
                    )
                )
            )
        ),
        searchProducts: rxMethod<string>(
            pipe(
                switchMap((string) =>
                    _productsService.searchProducts(string).pipe(
                        tapResponse({
                            next: (productslistItems: ApiResponse<Product[]>) => {
                                patchState(store, { productsListItems: productslistItems.data });
                                if (productslistItems.data.length > 0) {
                                    msg.add({ severity: 'success', summary: 'Completado', detail: productslistItems.message });
                                } else {
                                    msg.add({ severity: 'error', summary: 'Completado', detail: productslistItems.message });
                                }
                            },
                            error: (productslistItems: ApiResponse<Product[]>) => {
                                msg.add({ severity: 'error', summary: 'Error', detail: productslistItems.message });
                            }
                        })
                    )
                )
            )
        ),
        addProduct: rxMethod<Product>(
            pipe(
                switchMap((newProduct) =>
                    _productsService.createProduct(newProduct).pipe(
                        tapResponse({
                            next: (product: ApiResponse<Product>) => {
                                patchState(store, {
                                    product: product.data
                                });
                                msg.add({ severity: 'success', summary: 'Creado', detail: product.message, life: 3000 });
                            },
                            error: () => {}
                        })
                    )
                )
            )
        ),
        updateProduct: rxMethod<{ product: Product; id: number | string | null }>(
            pipe(
                switchMap(({ product, id }) =>
                    _productsService.updateProduct(id, product).pipe(
                        tapResponse({
                            next: (product: ApiResponse<Product>) => {
                                patchState(store, {
                                    product: product.data
                                });
                                msg.add({ severity: 'success', summary: 'Actualizado', detail: product.message, life: 3000 });
                            },
                            error: () => {}
                        })
                    )
                )
            )
        )
    }))
);
