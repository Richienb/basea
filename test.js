import test from "ava"
import is from "@sindresorhus/is"
import basea from "."

test("basic conversion", (t) => {
    t.is(basea(null), NaN)
    t.is(basea(1, null), NaN)
    t.is(basea(1, "aaa", "aaa"), 1)
    t.is(basea(150, 16), "96")
    t.is(basea(1, "abc"), "b")
    t.is(basea("abc", 10), NaN)
    t.is(basea("96", 16, 10), 150)
    t.is(basea("b", "abc"), 1)
    t.is(basea("b", "abc", "bcd"), "c")
    t.is(basea("d", "abc"), NaN)
})

test("custom conversion", (t) => {
    const baseNumber = 99999999999
    t.true(is.plainObject(basea.bases))
    t.is(basea(1, baseNumber), NaN)
    basea.bases[baseNumber] = "abc"
    t.is(basea(1, baseNumber), "b")
})
