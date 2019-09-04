import { NgModule } from "@angular/core";
import { Routes, RouterModule, Router } from "@angular/router";
import { CommonModule } from "@angular/common";

const routes: Routes = [
    { path: '', loadChildren: './home/home.module#HomeModule' },
    { path: 'login', loadChildren: './login/login.module#LoginModule' }
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule {}