export function convertToPlain(html) {
  if (html) {
    return html
      .replace(/<[^>]+>/g, "/")
      .split("//")
      .filter((text) => text !== "");
  }
  return [];
}
