import {Theme} from "../helpers/type";
import getExtension from "./getExtension";

const config = {
  name: 'dracula',
  dark: true,
  background: '#282A36',
  foreground: '#F8F8F2',
  selection: '#44475A',
  cursor: '#F8F8F2',
  dropdownBackground: '#282A36',
  dropdownBorder: '#191A21',
  activeLine: '#282A36',
  matchingBracket: '#44475A',
  keyword: '#FF79C6',
  storage: '#FF79C6',
  variable: '#F8F8F2',
  parameter: '#F8F8F2',
  function: '#50FA7B',
  string: '#F1FA8C',
  constant: '#BD93F9',
  type: '#8BE9FD',
  class: '#8BE9FD',
  number: '#BD93F9',
  comment: '#6272A4',
  heading: '#BD93F9',
  invalid: '#FF5555',
  regexp: '#F1FA8C',
}

export const dracula: Theme = {
  name: 'Dracula',
  config,
  extension: getExtension(config),
};
