export const useUtilities = () => {
    function toTitleCase(str : string) {
        // Note: /\w\S*/g is a regex that matches a word character followed by zero or more non-whitespace characters.
        return str.replace(/\w\S*/g, function (txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
        })
    }

    return { toTitleCase }
}