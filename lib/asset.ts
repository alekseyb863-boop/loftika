// Для статического экспорта next/image не добавляет basePath к локальным файлам.
export const asset = (path: string) => `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${path}`;
