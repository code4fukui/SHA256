import * as t from "https://deno.land/std/testing/asserts.ts";
import { SHA256 } from "./SHA256.js";
import { SHA512 } from "https://code4fukui.github.io/SHA512/SHA512.js";
import { hex } from "https://js.sabae.cc/hex.js";

Deno.test("digest bin", async () => {
  t.assertEquals(
    hex.fromBin(await SHA256.digest(new Uint8Array([97, 98, 99]))),
    "ba7816bf8f01cfea414140de5dae2223b00361a396177a9cb410ff61f20015ad"
  );
});
Deno.test("digest str", async () => {
  t.assertEquals(
    hex.fromBin(await SHA256.digest("abc")),
    "ba7816bf8f01cfea414140de5dae2223b00361a396177a9cb410ff61f20015ad"
  );
});
Deno.test("not equals with SHA512/256", async () => {
  t.assert(
    SHA512.sha512_256("abc") != "ba7816bf8f01cfea414140de5dae2223b00361a396177a9cb410ff61f20015ad"
  );
});
