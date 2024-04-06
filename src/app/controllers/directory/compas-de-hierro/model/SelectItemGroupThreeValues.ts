import { type SelectItemGroup } from 'primeng/api';
import { type SelectItemThreeValues, SelectItemThreeValuesImpl } from './SelectItemThreeValues';

export interface SelectItemGroupThreeValues extends SelectItemGroup {
  items: SelectItemThreeValuesImpl[];
}
