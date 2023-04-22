import {Theme} from "../helpers/type";
import getExtension from "./getExtension";

export const config = {
  name: 'aura',
  dark: true,
  background: '#21202e',
  foreground: '#edecee',
  selection: '#3d375e7f',
  cursor: '#a277ff',
  dropdownBackground: '#21202e',
  dropdownBorder: '#3b334b',
  activeLine: '#a394f033',
  matchingBracket: '#a394f033',
  keyword: '#a277ff',
  storage: '#a277ff',
  variable: '#edecee',
  parameter: '#edecee',
  function: '#ffca85',
  string: '#61ffca',
  constant: '#61ffca',
  type: '#82e2ff',
  class: '#82e2ff',
  number: '#61ffca',
  comment: '#6d6d6d',
  heading: '#a277ff',
  invalid: '#ff6767',
  regexp: '#61ffca',
}
export const aura: Theme = {
  name: 'Aura',
  extension: getExtension(config),
};
