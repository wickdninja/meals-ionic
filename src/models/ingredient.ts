import { Unit } from './unit.enum';

export interface Ingredient {
  name: string;
  amount: number;
  unit: Unit;
}
