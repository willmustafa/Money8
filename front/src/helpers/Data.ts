export function ISODateToLocal(str: string): string {
    if (!str) return str
    // const locale = navigator.language.split("-")[0]
    return new Intl.DateTimeFormat('pt-BR').format(new Date(str))
}