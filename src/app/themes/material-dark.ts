import {Theme} from "../helpers/type";
import getExtension from "./getExtension";

export const config = {
  name: 'materialDark',
  dark: true,
  background: '#263238',
  foreground: '#EEFFFF',
  selection: '#80CBC420',
  cursor: '#FFCC00',
  dropdownBackground: '#263238',
  dropdownBorder: '#FFFFFF10',
  activeLine: '#00000050',
  matchingBracket: '#263238',
  keyword: '#89DDFF',
  storage: '#89DDFF',
  variable: '#EEFFFF',
  parameter: '#EEFFFF',
  function: '#82AAFF',
  string: '#C3E88D',
  constant: '#89DDFF',
  type: '#FFCB6B',
  class: '#FFCB6B',
  number: '#F78C6C',
  comment: '#546E7A',
  heading: '#89DDFF',
  invalid: '#f0717870',
  regexp: '#C3E88D',
}

export const materialDark: Theme = {
  name: 'Material Dark',
  extension: getExtension(config),
};
