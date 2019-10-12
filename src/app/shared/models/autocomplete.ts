export interface AutoComplete {
  id: number;
  routeUrl: string;
  imageUrl: string;
  caption: string;
  data: any;
  api: AutoCompleteEnum;
}

export class GlobalSearch {
  search: string;
  type: AutoCompleteEnum;
}

export enum AutoCompleteEnum {
  LocaleInfo = 'LocaleInfo',
  Airports = 'Airports',
  Users = 'Users',
  SubService = 'SubService',
}
