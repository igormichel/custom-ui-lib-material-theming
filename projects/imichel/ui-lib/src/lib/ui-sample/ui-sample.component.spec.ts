import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { UiSampleComponent } from './ui-sample.component'

describe('UiSampleComponent', () => {
    let component: UiSampleComponent
    let fixture: ComponentFixture<UiSampleComponent>

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [UiSampleComponent],
        }).compileComponents()
    }))

    beforeEach(() => {
        fixture = TestBed.createComponent(UiSampleComponent)
        component = fixture.componentInstance
        fixture.detectChanges()
    })

    it('should create', () => {
        expect(component).toBeTruthy()
    })
})
