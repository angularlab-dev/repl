import {Theme} from "../helpers/type";
import getExtension from "./getExtension";

const config = {
  name: 'tokyoNightStorm',
  dark: true,
  background: '#24283b',
  foreground: '#7982a9',
  selection: '#6f7bb630',
  cursor: '#c0caf5',
  dropdownBackground: '#24283b',
  dropdownBorder: '#7982a9',
  activeLine: '#292e42',
  matchingBracket: '#1f2335',
  keyword: '#bb9af7',
  storage: '#bb9af7',
  variable: '#c0caf5',
  parameter: '#c0caf5',
  function: '#7aa2f7',
  string: '#9ece6a',
  constant: '#bb9af7',
  type: '#2ac3de',
  class: '#c0caf5',
  number: '#ff9e64',
  comment: '#565f89',
  heading: '#89ddff',
  invalid: '#ff5370',
  regexp: '#b4f9f8',
}

export const tokyoNightStorm: Theme = {
  name: 'Tokyo Night Storm',
  config,
  extension: getExtension(config),
};
