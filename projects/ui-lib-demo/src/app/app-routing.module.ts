import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { DemoPageComponent } from './demo-page/demo-page.component'
import { DemoPageCdkComponent } from './demo-page-cdk/demo-page-cdk.component'

const routes: Routes = [
    { path: '', component: DemoPageComponent },
    { path: 'cdk', component: DemoPageCdkComponent },
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
