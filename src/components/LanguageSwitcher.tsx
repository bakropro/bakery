import { type Lang } from "../cartStorage";

type Props = {
  lang: Lang;
  setLang: React.Dispatch<React.SetStateAction<Lang>>;
};

export function LanguageSwitcher({ lang, setLang }: Props) {
  return (
    <div className="language-switcher">
      <button
        type="button"
        className={"language-btn" + (lang === "ru" ? " active" : "")}
        onClick={() => setLang("ru")}
      >
        RU
      </button>

      <button
        type="button"
        className={"language-btn" + (lang === "en" ? " active" : "")}
        onClick={() => setLang("en")}
      >
        EN
      </button>
    </div>
  );
}