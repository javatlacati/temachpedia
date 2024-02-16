import {SelectItemGroup} from "primeng/api";
import {SelectItemTwoValues} from "./SelectItemTwoValues";

export interface SelectItemGroupTwoValues extends SelectItemGroup {
  value1?: any;
  items: SelectItemTwoValues[];
}
