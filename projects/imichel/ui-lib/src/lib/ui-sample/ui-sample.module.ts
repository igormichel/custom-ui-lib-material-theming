import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { UiSampleComponent } from './ui-sample.component'
import { MaterialModule } from '../material.module'

@NgModule({
    declarations: [UiSampleComponent],
    imports: [CommonModule, MaterialModule],
    exports: [UiSampleComponent],
})
export class UiSampleModule {}
