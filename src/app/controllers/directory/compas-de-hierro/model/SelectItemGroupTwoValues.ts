import { type SelectItemGroup } from 'primeng/api';
import { type SelectItemTwoValues } from './SelectItemTwoValues';

export interface SelectItemGroupTwoValues extends SelectItemGroup {
  items: SelectItemTwoValues[];
}
