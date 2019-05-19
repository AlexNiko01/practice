import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ChangeColorComponent} from './change-color/change-color.component';
import {ParentComponent} from './parent/parent.component';
import {ButtonsComponent} from "./buttons/buttons.component";

const routes: Routes = [
    {path: '', component: ParentComponent},
    {path: 'color', component: ChangeColorComponent},
    {path: 'buttons', component: ButtonsComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
