import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { DemoPageComponent } from './demo-page.component'
import { MaterialModule } from '../material.module'
import { UiSampleModule } from '@imichel/ui-lib'

@NgModule({
    declarations: [DemoPageComponent],
    imports: [CommonModule, MaterialModule, UiSampleModule],
    exports: [DemoPageComponent],
})
export class DemoPageModule {}
