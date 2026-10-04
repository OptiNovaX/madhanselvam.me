// PLACEHOLDER sections mirrored from the reference layout. Fill an array and its
// section renders real cards; leave it empty and the section shows a placeholder.
export type Book = { title: string; author: string; quote: string };
export type Publication = { title: string; venue: string; year: string; href?: string; summary?: string };
export type Post = { title: string; date: string; href: string; summary: string };

export const books: Book[] = [];
export const publications: Publication[] = [];
export const posts: Post[] = [];
