import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

export type LangCode = "vi" | "en" | "zh" | "ko" | "ja";

const STORAGE_KEY = "site.lang";
const DEFAULT_LANG: LangCode = "vi";

type Ctx = {
  lang: LangCode;
  setLang: (l: LangCode) => void;
};

const LanguageContext = createContext<Ctx>({
  lang: DEFAULT_LANG,
  setLang: () => {},
});

function readInitial(): LangCode {
  if (typeof window === "undefined") return DEFAULT_LANG;
  try {
    const v = window.localStorage.getItem(STORAGE_KEY);
    if (v === "vi" || v === "en" || v === "zh" || v === "ko" || v === "ja") return v;
  } catch {
    /* noop */
  }
  // fallback theo navigator
  const nav = window.navigator?.language?.toLowerCase() ?? "";
  if (nav.startsWith("vi")) return "vi";
  if (nav.startsWith("zh")) return "zh";
  if (nav.startsWith("ko")) return "ko";
  if (nav.startsWith("ja")) return "ja";
  if (nav.startsWith("en")) return "en";
  return DEFAULT_LANG;
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<LangCode>(DEFAULT_LANG);

  // Hydrate sau mount để tránh mismatch SSR
  useEffect(() => {
    const initial = readInitial();
    if (initial !== lang) setLangState(initial);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const setLang = useCallback((l: LangCode) => {
    setLangState(l);
    try {
      window.localStorage.setItem(STORAGE_KEY, l);
      document.documentElement.lang = l;
    } catch {
      /* noop */
    }
  }, []);

  // sync html[lang] khi thay đổi
  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.lang = lang;
    }
  }, [lang]);

  const value = useMemo(() => ({ lang, setLang }), [lang, setLang]);
  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  return useContext(LanguageContext);
}
