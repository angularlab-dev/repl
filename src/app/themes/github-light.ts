import {Theme} from "../helpers/type";
import getExtension from "./getExtension";

const config = {
  name: 'githubLight',
  dark: false,
  background: '#fff',
  foreground: '#444d56',
  selection: '#0366d625',
  cursor: '#044289',
  dropdownBackground: '#fff',
  dropdownBorder: '#e1e4e8',
  activeLine: '#f6f8fa',
  matchingBracket: '#34d05840',
  keyword: '#d73a49',
  storage: '#d73a49',
  variable: '#e36209',
  parameter: '#24292e',
  function: '#005cc5',
  string: '#032f62',
  constant: '#005cc5',
  type: '#005cc5',
  class: '#6f42c1',
  number: '#005cc5',
  comment: '#6a737d',
  heading: '#005cc5',
  invalid: '#cb2431',
  regexp: '#032f62',
}

export const githubLight: Theme = {
  name: 'Github Light',
  config,
  extension: getExtension(config),
};
