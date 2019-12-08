import test from "ava"
import basea from "."

test("main", (t) => {
    // TODO: Finish these tests.
    t.is(basea(150, 16), "96")
    t.is(basea(96, 16, 10), 150)
    t.is(basea("d", "abc"), NaN)
    t.is(basea(1, "abc"), "b")
})
