import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { DemoPageCdkComponent } from './demo-page-cdk.component'

describe('DemoPageCdkComponent', () => {
    let component: DemoPageCdkComponent
    let fixture: ComponentFixture<DemoPageCdkComponent>

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [DemoPageCdkComponent],
        }).compileComponents()
    }))

    beforeEach(() => {
        fixture = TestBed.createComponent(DemoPageCdkComponent)
        component = fixture.componentInstance
        fixture.detectChanges()
    })

    it('should create', () => {
        expect(component).toBeTruthy()
    })
})
