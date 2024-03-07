export function createSlug(name: string, id: number): string {
  const slugifiedName = name
    .toLowerCase()
    .replace(/[\s_]+/g, '-')
    .replace(/[^\w-]+/g, '')
    .replace(/--+/g, '-')
    .replace(/^-+|-+$/g, '');

  return `${slugifiedName}-${id}`;
}
