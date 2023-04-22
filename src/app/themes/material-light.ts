import {Theme} from "../helpers/type";
import getExtension from "./getExtension";

export const config = {
  name: 'materialLight',
  dark: false,
  background: '#FAFAFA',
  foreground: '#90A4AE',
  selection: '#80CBC440',
  cursor: '#272727',
  dropdownBackground: '#FAFAFA',
  dropdownBorder: '#00000010',
  activeLine: '#CCD7DA50',
  matchingBracket: '#FAFAFA',
  keyword: '#39ADB5',
  storage: '#39ADB5',
  variable: '#90A4AE',
  parameter: '#90A4AE',
  function: '#6182B8',
  string: '#91B859',
  constant: '#39ADB5',
  type: '#E2931D',
  class: '#E2931D',
  number: '#F76D47',
  comment: '#90A4AE',
  heading: '#39ADB5',
  invalid: '#E5393570',
  regexp: '#91B859',
}

export const materialLight: Theme = {
  name: 'Material Light',
  extension: getExtension(config),
};
