import { Unit } from './unit.enum';
import { Ingredient } from './ingredient';
import { Meal } from './meal';

export const MockMealData = [
  {
    id: '1',
    name: 'Spagetti',
    ingredients: [
      {
        amount: 1,
        unit: Unit.can,
        name: 'Heinz Spagetti Sauce'
      } as Ingredient,
      {
        amount: 0.5,
        unit: Unit.box,
        name: 'Angel Hair Spagetti Noodles'
      } as Ingredient,
      {
        amount: 1,
        unit: Unit.lbs,
        name: 'Ground Beef'
      } as Ingredient
    ]
  } as Meal,
  {
    id: '2',
    name: 'Sausage & Potatoes',
    ingredients: [
      {
        amount: 6,
        unit: Unit.whole,
        name: 'Potatoes'
      } as Ingredient,
      {
        amount: 1,
        unit: Unit.cup,
        name: 'Shredded Cheese'
      } as Ingredient,
      {
        amount: 1,
        unit: Unit.whole,
        name: 'Sausage'
      } as Ingredient
    ]
  } as Meal,
  {
    id: '3',
    name: 'Tacos',
    ingredients: [
      {
        amount: 1,
        unit: Unit.lbs,
        name: 'Ground Beef'
      } as Ingredient,
      {
        amount: 1.5,
        unit: Unit.pack,
        name: 'Taco Seasoning'
      } as Ingredient,
      {
        amount: 1,
        unit: Unit.pack,
        name: 'Tortilla Shells'
      } as Ingredient,
      {
        amount: 1,
        unit: Unit.pack,
        name: 'Shredded Lettuce'
      } as Ingredient,
      {
        amount: 1,
        unit: Unit.tub,
        name: 'Sour Cream'
      } as Ingredient,
      {
        amount: 1,
        unit: Unit.can,
        name: 'Refried Beans'
      } as Ingredient
    ]
  } as Meal,
  {
    id: '4',
    name: 'Homemade Salsa',
    ingredients: [
      {
        amount: 13,
        unit: Unit.whole,
        name: 'Roma tomotoes'
      } as Ingredient,
      {
        amount: 1,
        unit: Unit.whole,
        name: 'Jalepeno'
      } as Ingredient,
      {
        amount: 0.5,
        unit: Unit.whole,
        name: 'Red Onion'
      } as Ingredient,
      {
        amount: 1,
        unit: Unit.pack,
        name: 'Cilantro'
      } as Ingredient,
      {
        amount: 1,
        unit: Unit.tbsp,
        name: 'Sugar'
      } as Ingredient,
      {
        amount: 1,
        unit: Unit.tsp,
        name: 'Garlic Powder'
      } as Ingredient,
      {
        amount: 0.25,
        unit: Unit.tsp,
        name: 'Ground Cumin'
      } as Ingredient,
      {
        amount: 2,
        unit: Unit.tsp,
        name: 'Salt'
      } as Ingredient
    ]
  } as Meal
];
