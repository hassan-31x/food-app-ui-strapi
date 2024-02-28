export const getRgba = (color: string): string | null => {
  const match = color.match(/rgb\((\d+),(\d+),(\d+)\)/);

  if (match) {
    const [, red, green, blue] = match;
    return `rgba(${red},${green},${blue}`;
  }

  return "rgba(0,0,0";
};
