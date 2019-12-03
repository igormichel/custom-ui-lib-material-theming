import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { CdkSampleComponent } from './cdk-sample.component'
import { MaterialModule } from '../material.module'
import { MatNativeDateModule } from '@angular/material'
import { ReactiveFormsModule, FormsModule } from '@angular/forms'

@NgModule({
    declarations: [CdkSampleComponent],
    imports: [
        CommonModule,
        MaterialModule,
        MatNativeDateModule,
        ReactiveFormsModule,
        FormsModule,
    ],
    exports: [CdkSampleComponent],
})
export class CdkSampleModule {}
