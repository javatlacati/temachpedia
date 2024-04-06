import { type SelectItem } from 'primeng/api';

export interface SelectItemThreeValues extends SelectItem {
  value1?: string;
  /** indicates if this is an official account */
  value2: boolean;
}

export class SelectItemThreeValuesImpl implements SelectItemThreeValues {
  label: any;
  value: any;
  value1: string | undefined = undefined;
  value2: boolean = false;

  constructor(values: SelectItemThreeValues) {
    this.label = values.label;
    this.value = values.value;
    this.value1 = values.value1;
    this.value2 = values.value2;
  }

  // constructor(label: string, value: any, value1: string | undefined, value2: boolean) {
  //   this.label = label;
  //   this.value = value;
  //   this.value1 = value1;
  //   this.value2 = value2;
  // }

  _customOptionLabel: string = '';

  get customOptionLabel(): string {
    if (this.value2) {
      return `${this.label} ✓`; // Display verification symbol if value2 is true
    }
    return this.label; // Otherwise, display the city label as usual
  }

  // public customOptionLabel(): string {
  //   if (this.value2) {
  //     return `${this.label} ✓`; // Display verification symbol if value2 is true
  //   }
  //   return this.label; // Otherwise, display the city label as usual
  // }
}
