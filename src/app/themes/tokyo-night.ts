import {Theme} from "../helpers/type";
import getExtension from "./getExtension";

export const config = {
  name: 'tokyoNight',
  dark: true,
  background: '#1a1b26',
  foreground: '#787c99',
  selection: '#515c7e40',
  cursor: '#c0caf5',
  dropdownBackground: '#1a1b26',
  dropdownBorder: '#787c99',
  activeLine: '#1e202e',
  matchingBracket: '#16161e',
  keyword: '#bb9af7',
  storage: '#bb9af7',
  variable: '#c0caf5',
  parameter: '#c0caf5',
  function: '#7aa2f7',
  string: '#9ece6a',
  constant: '#bb9af7',
  type: '#0db9d7',
  class: '#c0caf5',
  number: '#ff9e64',
  comment: '#444b6a',
  heading: '#89ddff',
  invalid: '#ff5370',
  regexp: '#b4f9f8',
}

export const tokyoNight: Theme = {
  name: 'Tokyo Night',
  extension: getExtension(config),
};
