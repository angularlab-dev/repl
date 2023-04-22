import {Theme} from "../helpers/type";
import getExtension from "./getExtension";

export const config = {
  name: 'githubDark',
  dark: true,
  background: '#24292e',
  foreground: '#d1d5da',
  selection: '#3392FF44',
  cursor: '#c8e1ff',
  dropdownBackground: '#24292e',
  dropdownBorder: '#1b1f23',
  activeLine: '#2b3036',
  matchingBracket: '#17E5E650',
  keyword: '#f97583',
  storage: '#f97583',
  variable: '#ffab70',
  parameter: '#e1e4e8',
  function: '#79b8ff',
  string: '#9ecbff',
  constant: '#79b8ff',
  type: '#79b8ff',
  class: '#b392f0',
  number: '#79b8ff',
  comment: '#6a737d',
  heading: '#79b8ff',
  invalid: '#f97583',
  regexp: '#9ecbff',
}

export const githubDark: Theme = {
  name: 'Github Dark',
  extension: getExtension(config),
};
