export const assignBackgroundColor = (backgroundColor: string) => {
  const bgColor = backgroundColor
    ? `bg-${backgroundColor?.toLowerCase()}`
    : "bg-default";
  return bgColor;
};
