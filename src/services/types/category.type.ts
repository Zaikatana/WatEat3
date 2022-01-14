export type CategoryResponse = {
    categories: Category[];
}

export type Category = {
    alias: string;
    title: string;
    parent_aliases?: string[];
    country_whitelist?: string[];
    country_blacklist?: string[];
}