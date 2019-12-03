import {FocusMonitor} from '@angular/cdk/a11y';
import {coerceBooleanProperty} from '@angular/cdk/coercion';
import {Component, ElementRef, Input, OnDestroy, Optional, Self} from '@angular/core';
import {FormBuilder, FormGroup, ControlValueAccessor, NgControl} from '@angular/forms';
import {MatFormFieldControl} from '@angular/material/form-field';
import {Subject} from 'rxjs';
import {BusinessProcessId} from './cdk-sample.model';

/** Custom `MatFormFieldControl` for bussines process id consisting of three fields */
@Component({
  selector: 'im-cdk-sample',
  templateUrl:  './cdk-sample.component.html',
  styleUrls: ['./cdk-sample.component.scss'],
  providers: [{provide: MatFormFieldControl, useExisting: CdkSampleComponent}],
  host: {
    '[class.cdk-sample-floating]': 'shouldLabelFloat',
    '[id]': 'id',
    '[attr.aria-describedby]': 'describedBy',
  }
})
export class CdkSampleComponent implements ControlValueAccessor, MatFormFieldControl<BusinessProcessId>, OnDestroy {
  static nextId = 0;
  formGroup: FormGroup;
  stateChanges = new Subject<void>();
  focused = false;
  errorState = false;
  controlType = 'cdk-sample-input';
  id = `cdk-sample-input-${CdkSampleComponent.nextId++}`;
  describedBy = '';
  onChange = (_: any) => {};
  onTouched = () => {};

  get empty() {
    const {value: {businessProcesCoreId, version, processSpecification}} = this.formGroup;

    return !businessProcesCoreId && !version && !processSpecification;
  }

  get shouldLabelFloat() { return this.focused || !this.empty; }

  @Input()
  get placeholder(): string { return this._placeholder; }
  set placeholder(value: string) {
    this._placeholder = value;
    this.stateChanges.next();
  }
  private _placeholder: string;

  @Input()
  get required(): boolean { return this._required; }
  set required(value: boolean) {
    this._required = coerceBooleanProperty(value);
    this.stateChanges.next();
  }
  private _required = false;

  @Input()
  get disabled(): boolean { return this._disabled; }
  set disabled(value: boolean) {
    this._disabled = coerceBooleanProperty(value);
    this._disabled ? this.formGroup.disable() : this.formGroup.enable();
    this.stateChanges.next();
  }
  private _disabled = false;

  @Input()
  get value(): BusinessProcessId | null {
    const {value: {businessProcesCoreId, version, processSpecification}} = this.formGroup;
    if (businessProcesCoreId.length === 3 && version.length === 3 && processSpecification.length === 4) {
      return new BusinessProcessId(businessProcesCoreId, version, processSpecification);
    }
    return null;
  }

  set value(businessProcessId: BusinessProcessId | null) {
    const {businessProcesCoreId, version, processSpecification} = businessProcessId || new BusinessProcessId('', '', '');
    this.formGroup.setValue({businessProcesCoreId, version, processSpecification});
    this.stateChanges.next();
  }

  constructor(
    formBuilder: FormBuilder,
    private _focusMonitor: FocusMonitor,
    private _elementRef: ElementRef<HTMLElement>,
    @Optional() @Self() public ngControl: NgControl) {

    this.formGroup = formBuilder.group({
      businessProcesCoreId: '',
      version: '',
      processSpecification: '',
    });

    _focusMonitor.monitor(_elementRef, true).subscribe(origin => {
      if (this.focused && !origin) {
        this.onTouched();
      }
      this.focused = !!origin;
      this.stateChanges.next();
    });

    if (this.ngControl != null) {
      this.ngControl.valueAccessor = this;
    }
  }

  ngOnDestroy() {
    this.stateChanges.complete();
    this._focusMonitor.stopMonitoring(this._elementRef);
  }

  setDescribedByIds(ids: string[]) {
    this.describedBy = ids.join(' ');
  }

  onContainerClick(event: MouseEvent) {
    if ((event.target as Element).tagName.toLowerCase() != 'input') {
      this._elementRef.nativeElement.querySelector('input')!.focus();
    }
  }

  writeValue(businessProcessId: BusinessProcessId | null): void {
    this.value = businessProcessId;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  _handleInput(): void {
    this.onChange(this.formGroup.value);
  }
}

