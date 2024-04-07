import { type SelectItemGroup } from 'primeng/api';
import { SelectItemThreeValuesImpl } from './SelectItemThreeValues';

export interface SelectItemGroupThreeValues extends SelectItemGroup {
  items: SelectItemThreeValuesImpl[];
}
