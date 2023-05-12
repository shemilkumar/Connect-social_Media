function dateConverter(dateInString: Date): string {
  const date = new Date(dateInString).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
  });

  return date;
}

export default dateConverter;
