import {Theme} from "../helpers/type";
import getExtension from "./getExtension";

const config = {
  name: 'solarizedLight',
  dark: false,
  background: '#fdf6e3',
  foreground: '#586e75',
  selection: '#eee8d5',
  cursor: '#657b83',
  dropdownBackground: '#fdf6e3',
  dropdownBorder: '#d3af86',
  activeLine: '#eee8d5',
  matchingBracket: '#eee8d5',
  keyword: '#859900',
  storage: '#073642',
  variable: '#657b83',
  parameter: '#657b83',
  function: '#268BD2',
  string: '#2AA198',
  constant: '#CB4B16',
  type: '#b58900',
  class: '#268BD2',
  number: '#D33682',
  comment: '#93A1A1',
  heading: '#268BD2',
  invalid: '#586e75',
  regexp: '#D30102',
}

export const solarizedLight: Theme = {
  name: 'Solarized Light',
  config,
  extension: getExtension(config),
};
