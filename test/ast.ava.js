import * as ast from "../lib/ast.js";
import test from "ava";

test("range escape", t => {
  t.throws(() => ast.Range.escape(0x10000));
  t.is(ast.Range.escape(0x7c), "\\x7c");
  t.is(ast.Range.escape(0x100), "\\u0100");
});
