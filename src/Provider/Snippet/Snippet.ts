export type Searchable = {
    [key: string]: string[] | string | undefined | null;
};

export interface Snippet extends Searchable {
    title: string;
    prefix: string;
    body: string[] | string;
    description: string[] | string;
    doc: string;
    hover: string | undefined | null;
}