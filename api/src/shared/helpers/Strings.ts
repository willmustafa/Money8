export function toLowerCase(str: string): string {
  if (!str) return str;
  return String(str).toLowerCase();
}

export function toSnakeCase(str: string): string {
  if (!str) return str;
  return String(str).toLowerCase().replace(' ', '_');
}
