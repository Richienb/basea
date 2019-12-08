"use strict"

const { toBase, fromBase, toAlphabet, fromAlphabet } = require("bases")
const _ = require("lodash")

let customBases = {
    1: "/", // Tallies for base 1
}
const supportedBases = _.concat(_.range(2, 10), _.range(26, 52), _.range(11, 62), _.range(32, 58), 64)
const isSupportedBase = (base) => supportedBases.includes(base)

module.exports = (number, from, to) => {
    // TODO: Simplify logic
    if (
        !_.isString(number) &&
        !_.isNumber(number)
    ) return NaN

    if (!_.isNil(from) && !_.isNumber(from) && !_.isString(from)) return NaN

    from = from || customBases[from]
    to = to || customBases[to]

    if (
        !_.isNil(from) &&
        !_.isNil(to) &&
        from === to
    ) return number

    if (_.isNil(to) && _.isNumber(number)) {
        to = from
        from = 10
    } else if (_.isNil(to) && _.isString(from)) {
        to = 10
    } else if (_.isNil(to)) {
        return NaN
    }

    if (!isSupportedBase(from) && !from) return NaN
    if (!isSupportedBase(to) && !to) return NaN

    if (_.isString(from) && number.toString().split("").some((value) => !from.includes(value))) return NaN

    const decNumber = (_.isNumber(from) ? fromBase : fromAlphabet)(number.toString(), from)
    const res = (_.isNumber(to) ? toBase : toAlphabet)(decNumber, to)

    if (_.isNumber(to) && to <= 10) return Number(res)
    return res
}

module.exports.base = (base, characters) => {
    // TODO: Check if characters are the right length for the base.
    if (_.isPlainObject(base)) customBases = _.extend(customBases, base)
    else customBases[base] = characters
}
