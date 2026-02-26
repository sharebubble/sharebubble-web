import { useI18n } from "@/i18n/I18nProvider";
import { useTheme } from "@/components/ThemeProvider";
import { Globe, Moon, Sun, Github } from "lucide-react";

const LanguageSwitcher = () => {
  const { lang, setLang } = useI18n();
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="inline-flex items-center gap-1 rounded-full bg-card border border-border px-2 py-1 shadow-md">
      <a
        href="https://github.com/treibhausdonaufeld/bubble/"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center rounded-full p-2 text-foreground hover:bg-accent transition-colors"
        aria-label="GitHub Repository"
      >
        <Github className="h-4 w-4" />
      </a>
      <div className="w-px h-5 bg-border" />
      <button
        onClick={() => setLang(lang === "en" ? "de" : "en")}
        className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm font-medium text-foreground hover:bg-accent transition-colors"
        aria-label="Switch language"
      >
        <Globe className="h-4 w-4 text-primary" />
        {lang === "en" ? "DE" : "EN"}
      </button>
      <div className="w-px h-5 bg-border" />
      <button
        onClick={toggleTheme}
        className="inline-flex items-center justify-center rounded-full p-2 text-foreground hover:bg-accent transition-colors"
        aria-label="Toggle dark mode"
      >
        {theme === "light" ? (
          <Moon className="h-4 w-4" />
        ) : (
          <Sun className="h-4 w-4" />
        )}
      </button>
    </div>
  );
};

export default LanguageSwitcher;
