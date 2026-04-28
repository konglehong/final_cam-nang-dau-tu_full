// Helper hooks để hiển thị nội dung (article/event/media) đa ngôn ngữ.
import { useLanguage } from "./i18n";
import { CONTENT_I18N, trField, trTags } from "@/data/content-i18n";

type Translatable = {
  slug: string;
  title?: string;
  excerpt?: string;
  description?: string;
  location?: string;
  organizer?: string;
  body?: string;
  tags?: string[];
};

/** Dùng trong component:  const item = useTranslatedItem(article); item.title  */
export function useTranslatedItem<T extends Translatable>(item: T): T {
  const { lang } = useLanguage();
  if (lang === "vi" || !CONTENT_I18N[item.slug]) return item;
  return {
    ...item,
    title: item.title ? trField(item.slug, "title", lang, item.title) : item.title,
    excerpt: item.excerpt ? trField(item.slug, "excerpt", lang, item.excerpt) : item.excerpt,
    description: item.description
      ? trField(item.slug, "description", lang, item.description)
      : item.description,
    location: item.location ? trField(item.slug, "location", lang, item.location) : item.location,
    organizer: item.organizer
      ? trField(item.slug, "organizer", lang, item.organizer)
      : item.organizer,
    body: item.body ? trField(item.slug, "body", lang, item.body) : item.body,
    tags: item.tags ? trTags(item.slug, lang, item.tags) : item.tags,
  };
}

/** Phiên bản function (không phải hook), khi đã biết lang */
export function translateItem<T extends Translatable>(item: T, lang: string): T {
  if (lang === "vi" || !CONTENT_I18N[item.slug]) return item;
  const l = lang as "en" | "zh" | "ko" | "ja";
  return {
    ...item,
    title: item.title ? trField(item.slug, "title", l, item.title) : item.title,
    excerpt: item.excerpt ? trField(item.slug, "excerpt", l, item.excerpt) : item.excerpt,
    description: item.description
      ? trField(item.slug, "description", l, item.description)
      : item.description,
    location: item.location ? trField(item.slug, "location", l, item.location) : item.location,
    organizer: item.organizer
      ? trField(item.slug, "organizer", l, item.organizer)
      : item.organizer,
    body: item.body ? trField(item.slug, "body", l, item.body) : item.body,
    tags: item.tags ? trTags(item.slug, l, item.tags) : item.tags,
  };
}
