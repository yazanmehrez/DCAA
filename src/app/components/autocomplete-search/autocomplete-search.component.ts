import {Component, forwardRef, Input, NgZone, OnInit} from '@angular/core';
import {ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR} from '@angular/forms';
import {AutoComplete, AutoCompleteEnum, GlobalSearch} from '../../shared/models/autocomplete';
import {HttpErrorResponse} from '@angular/common/http';
import {AccountServiceService} from '../../views/Accounts/account-service.service';
import {NgbDropdown} from '@ng-bootstrap/ng-bootstrap';
import {Subject} from 'rxjs';
import {debounceTime, distinctUntilChanged} from 'rxjs/operators';

@Component({
  selector: 'dcaa-autocomplete-search',
  templateUrl: './autocomplete-search.component.html',
  styleUrls: ['./autocomplete-search.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    multi: true,
    useExisting: forwardRef(() => AutocompleteSearchComponent),
  }]
})
export class AutocompleteSearchComponent implements OnInit, ControlValueAccessor {
  data: AutoComplete[];
  @Input() dropdownInstance: NgbDropdown;
  @Input() api: AutoCompleteEnum;
  searchHolder = new Subject<string>();
  public autoCompleteControl = new FormControl();
  response: AutoComplete[];


  constructor(private restService: AccountServiceService, private ngZone: NgZone) {
  }

  ngOnInit() {
    this.autoCompleteControl.valueChanges.pipe(
      debounceTime(500),
      distinctUntilChanged())
      .subscribe(value => {
        // tslint:disable-next-line:prefer-const
        let model = new GlobalSearch();
        model.search = value;
        model.type = this.api;
        this.fetchAutoSearchData(model);
      });
  }

  fetchAutoSearchData(model: GlobalSearch) {
    this.restService.fetchAutoComplete(model).then((res: AutoComplete[]) => {
      this.ngZone.run(() => {
        this.response = res;
      });
    }).catch((err: HttpErrorResponse) => {

    });
  }

  displayFn(id: number) {
    const result: string = this.response ? this.response.find(l => l.id === id).caption : null;
    return result;
  }

  valueSelected(value: AutoComplete) {
    this.propagateChange(value.id);
  }

  registerOnChange(fn: any): void {
    this.propagateChange = fn;
  }

  propagateChange = (_: any) => {
  }

  registerOnTouched(fn: any): void {
  }

  writeValue(value: number) {
    console.log(value);
    return value;
  }

}
