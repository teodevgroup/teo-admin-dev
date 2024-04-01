export type Language = "enUs" | "enUk" | "de" | "fr" | "es" | "hi" | "he" | "ja" | "ko" | "zhCn" | "zhTw"

export const languageNamesArray: Array<Language> = [
    "enUs",
    "enUk",
    "de",
    "fr",
    "es",
    "hi",
    "he",
    "ja",
    "ko",
    "zhCn",
    "zhTw",
]

export const languageNamesMap: { [key in Language]: string } = {
    "enUs": "English (United States)",
    "enUk": "English (United Kingdom)",
    "de": "Deutsch",
    "fr": "Français",
    "es": "Español",
    "hi": "हिन्दी",
    "he": "עברית",
    "ja": "日本語",
    "ko": "한국어",
    "zhCn": "中文（简体）",
    "zhTw": "中文（繁體）",
}