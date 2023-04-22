import {Theme} from "../helpers/type";
import getExtension from "./getExtension";

export const config = {
  name: 'tokyoNightDay',
  dark: false,
  background: '#e1e2e7',
  foreground: '#6a6f8e',
  selection: '#8591b840',
  cursor: '#3760bf',
  dropdownBackground: '#e1e2e7',
  dropdownBorder: '#6a6f8e',
  activeLine: '#d9dae4',
  matchingBracket: '#e9e9ec',
  keyword: '#9854f1',
  storage: '#9854f1',
  variable: '#3760bf',
  parameter: '#3760bf',
  function: '#2e7de9',
  string: '#587539',
  constant: '#9854f1',
  type: '#07879d',
  class: '#3760bf',
  number: '#b15c00',
  comment: '#9da3c2',
  heading: '#006a83',
  invalid: '#ff3e64',
  regexp: '#2e5857',
}

export const tokyoNightDay: Theme = {
  name: 'Tokyo Night Day',
  extension: getExtension(config),
};
