import { type SelectItem } from 'primeng/api';

export interface SelectItemThreeValues extends SelectItem {
  /** specifies th facebook account */
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

  _customOptionLabel: string = '';

  /**
   * Getter for a custom option label.
   * This method generates a label for the select option. If the `value2` property (indicating an official account) is true,
   * it appends a verification symbol (✓) to the label. Otherwise, it returns the label as is.
   *
   * @returns {string} The custom label for the select option. If `value2` is true, the label will include a verification symbol.
   */
  get customOptionLabel(): string {
    if (this.value2) {
      return `${this.label} ✓`; // Display verification symbol if value2 is true
    }
    return this.label; // Otherwise, display the city label as usual
  }
}
