import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { CdkSampleComponent } from './cdk-sample.component'

describe('CdkSampleComponent', () => {
    let component: CdkSampleComponent
    let fixture: ComponentFixture<CdkSampleComponent>

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [CdkSampleComponent],
        }).compileComponents()
    }))

    beforeEach(() => {
        fixture = TestBed.createComponent(CdkSampleComponent)
        component = fixture.componentInstance
        fixture.detectChanges()
    })

    it('should create', () => {
        expect(component).toBeTruthy()
    })
})
