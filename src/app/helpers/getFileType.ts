
export const fileTypes = [
  'txt',
  'md',
  'json',
  'css',
  'scss',
  'sass',
  'html',
  'spec.js',
  'spec.ts',
  'js',
  'ts',
  'ico',
  'png',
  'unknown',
];

export default function getFileType(name: string): typeof fileTypes[number]{
  const type = fileTypes.find((type) => name.endsWith(`.${type}`));

  if (!type) {
    return 'unknown';
  }

  return type;
}
