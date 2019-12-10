"use strict"

const { toAlphabet, fromAlphabet, KNOWN_ALPHABETS: knownBases } = require("bases")
const is = require("@sindresorhus/is")

const baseChars = {
    0: "", // No characters for base 0
    1: "/", // Tallies for base 1
    ...knownBases, // Other known bases
}

module.exports = (number, from, to) => {
    // If `number` is an invalid type
    if (
        !is.string(number) &&
        !is.number(number)
    ) return NaN

    // If `from` is an invalid type
    if (
        !is.undefined(from) &&
        !is.number(from) &&
        !is.string(from)
    ) return NaN

    // If `from` and `to` are the same but not undefined
    if (
        !is.undefined(from) &&
        !is.undefined(to) &&
        from === to
    ) return number

    if (is.string(number) && is.string(from) && is.undefined(to)) {
        // If only `number` and `from` are strings assume converting to decimal ("aa", "abc")
        to = 10
    } else if (!is.undefined(from) && is.undefined(to)) {
        // If only `number` and `to` provided assume from is 10 (10, 16) or (10, "abc") or (1, "abc")
        to = from
        from = 10
    }

    // Try to get the characters for the base
    if (is.number(from)) from = baseChars[from]
    if (is.number(to)) to = baseChars[to]

    // If base is not found
    if (is.undefined(from) || is.undefined(to)) return NaN

    // If from is a string and the provided number has invalid characters that aren't in the string
    if (is.string(from) && number.toString().split("").some((value) => !from.includes(value))) return NaN

    // Convert the number
    const res = toAlphabet(fromAlphabet(number.toString(), from), to)

    // If the provided base only contains numbers
    if (!is.nan(Number(to))) return Number(res)

    // If the base has 1 or more letter
    return res
}

module.exports.bases = baseChars
