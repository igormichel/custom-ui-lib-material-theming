import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { DemoPageCdkComponent } from './demo-page-cdk.component'
import { CdkSampleModule } from '@imichel/ui-lib'
import { MaterialModule } from '../material.module'

@NgModule({
    declarations: [DemoPageCdkComponent],
    imports: [CommonModule, CdkSampleModule, MaterialModule],
})
export class DemoPageCdkModule {}
