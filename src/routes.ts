import { PageId } from "./types";

export const PAGE_PATHS: Record<PageId, string> = {
  home: "/",
  about: "/about",
  products: "/products",
  news: "/news",
  contacts: "/contacts",
};

export const PRODUCT_DETAIL_PATH = "/products/:id";

export const PAGE_TITLE_KEYS: Record<PageId, string> = {
  home: "meta.pages.home",
  about: "meta.pages.about",
  products: "meta.pages.products",
  news: "meta.pages.news",
  contacts: "meta.pages.contacts",
};

export const NAV_ITEMS: ReadonlyArray<{ id: PageId; key: string; path: string }> = [
  { id: "home", key: "nav.home", path: PAGE_PATHS.home },
  { id: "about", key: "nav.about", path: PAGE_PATHS.about },
  { id: "products", key: "nav.products", path: PAGE_PATHS.products },
  { id: "news", key: "nav.news", path: PAGE_PATHS.news },
  { id: "contacts", key: "nav.contacts", path: PAGE_PATHS.contacts },
];

export function getPageIdFromPath(pathname: string): PageId {
  const matchedItem = NAV_ITEMS.find((item) => item.path === pathname);
  return matchedItem?.id ?? "home";
}
