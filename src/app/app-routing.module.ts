import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ChangeColorComponent} from './change-color/change-color.component';
import {ParentComponent} from './parent/parent.component';

const routes: Routes = [
    {path: '', component: ParentComponent},
    {path: 'color', component: ChangeColorComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
