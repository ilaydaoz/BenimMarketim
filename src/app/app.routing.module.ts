import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router"
import { ProductsComponent } from "./products/products.component";
import { OrdersComponent } from "./orders/orders.component"

const routes: Routes = [

    { path: "products", component: ProductsComponent },
    { path: "", redirectTo:  'products', pathMatch: 'full' },
    { path: "orders", component: OrdersComponent },
];


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }