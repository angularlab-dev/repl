export default function lightenColor(color: string, amount: number) {
  const colorValue = parseInt(color.slice(1), 16);
  const red = (colorValue >> 16) & 0xff;
  const green = (colorValue >> 8) & 0xff;
  const blue = colorValue & 0xff;

  const newRed = Math.min(255, red + amount);
  const newGreen = Math.min(255, green + amount);
  const newBlue = Math.min(255, blue + amount);

  const newColorValue = (newRed << 16) | (newGreen << 8) | newBlue;

  return `#${newColorValue.toString(16).padStart(6, '0')}`;
}
