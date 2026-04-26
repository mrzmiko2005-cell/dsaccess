import { useTranslation } from "react-i18next";
import type { NewsItem, Partner, Product, Project, Stat } from "../types";

type ProductCategoryId =
  | "all"
  | "frames"
  | "roofing"
  | "platforms"
  | "specialized";

const statDefinitions = [
  { value: "480", labelKey: "home.stats.projects", suffix: "+" },
  { value: "15", labelKey: "home.stats.years", suffix: "+" },
  { value: "320", labelKey: "home.stats.employees", suffix: "+" },
  { value: "2500", labelKey: "home.stats.tons", suffix: "t" },
] as const;

const newsDefinitions = [
  { id: 1, image: "https://images.pexels.com/photos/1117452/pexels-photo-1117452.jpeg?auto=compress&cs=tinysrgb&w=800" },
  { id: 2, image: "https://images.pexels.com/photos/3862130/pexels-photo-3862130.jpeg?auto=compress&cs=tinysrgb&w=800" },
  { id: 3, image: "https://images.pexels.com/photos/236698/pexels-photo-236698.jpeg?auto=compress&cs=tinysrgb&w=800" },
  { id: 4, image: "https://images.pexels.com/photos/1463917/pexels-photo-1463917.jpeg?auto=compress&cs=tinysrgb&w=800" },
  { id: 5, image: "https://images.pexels.com/photos/2760241/pexels-photo-2760241.jpeg?auto=compress&cs=tinysrgb&w=800" },
  { id: 6, image: "https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=800" },
] as const;

const projectDefinitions = [
  { id: 1, image: "https://images.pexels.com/photos/1463917/pexels-photo-1463917.jpeg?auto=compress&cs=tinysrgb&w=800" },
  { id: 2, image: "https://images.pexels.com/photos/209251/pexels-photo-209251.jpeg?auto=compress&cs=tinysrgb&w=800" },
  { id: 3, image: "https://images.pexels.com/photos/236698/pexels-photo-236698.jpeg?auto=compress&cs=tinysrgb&w=800" },
  { id: 4, image: "https://images.pexels.com/photos/2760241/pexels-photo-2760241.jpeg?auto=compress&cs=tinysrgb&w=800" },
  { id: 5, image: "https://images.pexels.com/photos/3862130/pexels-photo-3862130.jpeg?auto=compress&cs=tinysrgb&w=800" },
  { id: 6, image: "https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=800" },
] as const;

const productDefinitions = [
  { id: 1, image: "https://images.pexels.com/photos/1117452/pexels-photo-1117452.jpeg?auto=compress&cs=tinysrgb&w=600", categoryId: "frames" },
  { id: 2, image: "https://images.pexels.com/photos/209251/pexels-photo-209251.jpeg?auto=compress&cs=tinysrgb&w=600", categoryId: "roofing" },
  { id: 3, image: "https://images.pexels.com/photos/3862130/pexels-photo-3862130.jpeg?auto=compress&cs=tinysrgb&w=600", categoryId: "frames" },
  { id: 4, image: "https://images.pexels.com/photos/1463917/pexels-photo-1463917.jpeg?auto=compress&cs=tinysrgb&w=600", categoryId: "roofing" },
  { id: 5, image: "https://images.pexels.com/photos/236698/pexels-photo-236698.jpeg?auto=compress&cs=tinysrgb&w=600", categoryId: "platforms" },
  { id: 6, image: "https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=600", categoryId: "platforms" },
  { id: 7, image: "https://images.pexels.com/photos/2760241/pexels-photo-2760241.jpeg?auto=compress&cs=tinysrgb&w=600", categoryId: "specialized" },
  { id: 8, image: "https://images.pexels.com/photos/302769/pexels-photo-302769.jpeg?auto=compress&cs=tinysrgb&w=600", categoryId: "specialized" },
] as const;

export const partners: Partner[] = [
  { id: 1, name: "ArcelorMittal" },
  { id: 2, name: "NLMK Group" },
  { id: 3, name: "Metinvest" },
  { id: 4, name: "Evraz" },
  { id: 5, name: "Severstal" },
  { id: 6, name: "MMK" },
];

export function useSiteData() {
  const { t } = useTranslation();

  const stats: Stat[] = statDefinitions.map((stat) => ({
    value: stat.value,
    label: t(stat.labelKey),
    suffix: stat.suffix,
  }));

  const news: NewsItem[] = newsDefinitions.map((item) => ({
    id: item.id,
    image: item.image,
    title: t(`home.news.items.${item.id}.title`),
    excerpt: t(`home.news.items.${item.id}.excerpt`),
    date: t(`home.news.items.${item.id}.date`),
    category: t(`home.news.items.${item.id}.category`),
  }));

  const projects: Project[] = projectDefinitions.map((item) => ({
    id: item.id,
    image: item.image,
    title: t(`home.portfolio.projects.${item.id}.title`),
    category: t(`home.portfolio.projects.${item.id}.category`),
    location: t(`home.portfolio.projects.${item.id}.location`),
  }));

  const productCategories = [
    { id: "all", label: t("products.categories.all") },
    { id: "frames", label: t("products.categories.frames") },
    { id: "roofing", label: t("products.categories.roofing") },
    { id: "platforms", label: t("products.categories.platforms") },
    { id: "specialized", label: t("products.categories.specialized") },
  ] as const satisfies ReadonlyArray<{ id: ProductCategoryId; label: string }>;

  const products: (Product & { categoryId: Exclude<ProductCategoryId, "all"> })[] =
    productDefinitions.map((product) => ({
      id: product.id,
      image: product.image,
      title: t(`products.items.${product.id}.title`),
      description: t(`products.items.${product.id}.description`),
      category: t(`products.categories.${product.categoryId}`),
      categoryId: product.categoryId,
    }));

  return { stats, news, projects, products, productCategories };
}
