export function createSlug(name: string, id: number): string {
  const slugifyName = name
    .toLowerCase()
    .replace(/[\s_]+/g, '-')
    .replace(/[^\w-]+/g, '')
    .replace(/--+/g, '-')
    .replace(/^-+|-+$/g, '');

  return `${slugifyName}-${id}`;
}
