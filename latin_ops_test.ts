// Collab: David, Justin, Antonio

import * as assert from 'assert';
import { nil } from './list';
import { explode, compact } from './char_list';
import { next_latin_char, prev_latin_char, count_consonants, cipher_encode, cipher_decode, crazy_caps_encode, crazy_caps_decode, pig_latin_encode } from './latin_ops';


describe('latin_ops', function() {

  // For the following 2 functions, there are a finite number of cases
  // but the number exceeds our reasonable case limit of 20, so just some
  // were selected.

  it('next_latin_char', function() {
    assert.equal(next_latin_char("a".charCodeAt(0)), "e".charCodeAt(0));
    assert.equal(next_latin_char("e".charCodeAt(0)), "i".charCodeAt(0));
    assert.equal(next_latin_char("i".charCodeAt(0)), "o".charCodeAt(0));
    assert.equal(next_latin_char("o".charCodeAt(0)), "u".charCodeAt(0));
    assert.equal(next_latin_char("u".charCodeAt(0)), "y".charCodeAt(0));
    assert.equal(next_latin_char("j".charCodeAt(0)), "g".charCodeAt(0));
    assert.equal(next_latin_char("g".charCodeAt(0)), "d".charCodeAt(0));
    assert.equal(next_latin_char("d".charCodeAt(0)), "t".charCodeAt(0));
    assert.equal(next_latin_char("t".charCodeAt(0)), "b".charCodeAt(0));
    assert.equal(next_latin_char("c".charCodeAt(0)), "k".charCodeAt(0));
    assert.equal(next_latin_char("k".charCodeAt(0)), "s".charCodeAt(0));
    assert.equal(next_latin_char("f".charCodeAt(0)), "v".charCodeAt(0));
    assert.equal(next_latin_char("v".charCodeAt(0)), "w".charCodeAt(0));
    assert.equal(next_latin_char("w".charCodeAt(0)), "f".charCodeAt(0));
    assert.equal(next_latin_char("h".charCodeAt(0)), "l".charCodeAt(0));
    assert.equal(next_latin_char("l".charCodeAt(0)), "r".charCodeAt(0));
    assert.equal(next_latin_char("r".charCodeAt(0)), "h".charCodeAt(0));
    assert.equal(next_latin_char("m".charCodeAt(0)), "n".charCodeAt(0));
    assert.equal(next_latin_char("n".charCodeAt(0)), "m".charCodeAt(0));
    assert.equal(next_latin_char("x".charCodeAt(0)), "q".charCodeAt(0));
  });

  it('prev_latin_char', function() {
    assert.equal(prev_latin_char("a".charCodeAt(0)), "y".charCodeAt(0));
    assert.equal(prev_latin_char("e".charCodeAt(0)), "a".charCodeAt(0));
    assert.equal(prev_latin_char("i".charCodeAt(0)), "e".charCodeAt(0));
    assert.equal(prev_latin_char("u".charCodeAt(0)), "o".charCodeAt(0));
    assert.equal(prev_latin_char("y".charCodeAt(0)), "u".charCodeAt(0));
    assert.equal(prev_latin_char("b".charCodeAt(0)), "t".charCodeAt(0));
    assert.equal(prev_latin_char("p".charCodeAt(0)), "b".charCodeAt(0));
    assert.equal(prev_latin_char("j".charCodeAt(0)), "p".charCodeAt(0));
    assert.equal(prev_latin_char("g".charCodeAt(0)), "j".charCodeAt(0));
    assert.equal(prev_latin_char("k".charCodeAt(0)), "c".charCodeAt(0));
    assert.equal(prev_latin_char("s".charCodeAt(0)), "k".charCodeAt(0));
    assert.equal(prev_latin_char("z".charCodeAt(0)), "s".charCodeAt(0));
    assert.equal(prev_latin_char("f".charCodeAt(0)), "w".charCodeAt(0));
    assert.equal(prev_latin_char("v".charCodeAt(0)), "f".charCodeAt(0));
    assert.equal(prev_latin_char("w".charCodeAt(0)), "v".charCodeAt(0));
    assert.equal(prev_latin_char("l".charCodeAt(0)), "h".charCodeAt(0));
    assert.equal(prev_latin_char("m".charCodeAt(0)), "n".charCodeAt(0));
    assert.equal(prev_latin_char("n".charCodeAt(0)), "m".charCodeAt(0));
    assert.equal(prev_latin_char("q".charCodeAt(0)), "x".charCodeAt(0));
    assert.equal(prev_latin_char("x".charCodeAt(0)), "q".charCodeAt(0));
  });






//Additional test cases can be added for more coverage.

// ...

it('cipher_encode', function() {
  // 'a' becomes 'e'
  assert.strictEqual(
      compact(cipher_encode(explode("a"))),
      "e"
  );
    // 's' becomes 'z'
  assert.strictEqual(
      compact(cipher_encode(explode("s"))),
      "z"
  );
  // 'aei' becomes 'eio'
  assert.strictEqual(
    compact(cipher_encode(explode("aei"))),
    "eio"
  );
  // 'ouy' becomes 'uya'
  assert.strictEqual(
    compact(cipher_encode(explode("ouy"))),
    "uya"
  );
  // nil becomes nil
  assert.strictEqual(
    cipher_encode(nil),
    nil
    );
});

it('cipher_decode', function() {
  // 'e' becomes 'a'
  assert.strictEqual(
      compact(cipher_decode(explode("e"))),
      "a"
  );
    // 'u' becomes 'y'
  assert.strictEqual(
      compact(cipher_decode(explode("a"))),
      "y"
  );
  // 'uyb' becomes 'out'
  assert.strictEqual(
      compact(cipher_decode(explode("uyb"))),
      "out"
  );
  // 'pjg' becomes 'bpj'
  assert.strictEqual(
    compact(cipher_decode(explode("pjg"))),
    "bpj"
  );
  // nil becomes nil
  assert.strictEqual(
    cipher_decode(nil),
    nil
  );
});

it('crazy_caps_encode', function() {
  // 'h' becomes 'H'
  assert.strictEqual(
      compact(crazy_caps_encode(explode("h"))),
      "H"
  );
  // 'i' becomes 'I'
  assert.strictEqual(
    compact(crazy_caps_encode(explode("i"))),
    "I"
  );
  assert.strictEqual(
    compact(crazy_caps_encode(explode("pig"))),
    "PiG"
  );
  assert.strictEqual(
    compact(crazy_caps_encode(explode("wow"))),
    "WoW"
  );
  assert.strictEqual(
    compact(crazy_caps_encode(explode("cool"))),
    "CoOl"
  );
  assert.strictEqual(
    compact(crazy_caps_encode(explode("loud"))),
    "LoUd"
  );
  assert.strictEqual(
    crazy_caps_encode(nil),
    nil
);


});

it('crazy_caps_decode', function() {
  // 'h' becomes 'H'
  assert.strictEqual(
    compact(crazy_caps_decode(explode("H"))),
    "h"
  );
  // 'i' becomes 'I'
  assert.strictEqual(
    compact(crazy_caps_decode(explode("I"))),
    "i"
  );
  assert.strictEqual(
    compact(crazy_caps_decode(explode("PiG"))),
    "pig"
  );
  assert.strictEqual(
    compact(crazy_caps_decode(explode("WoW"))),
    "wow"
  );
  assert.strictEqual(
    compact(crazy_caps_decode(explode("CoOl"))),
    "cool"
  );
  assert.strictEqual(
    compact(crazy_caps_decode(explode("LoUd"))),
    "loud"
  );
  assert.strictEqual(
    crazy_caps_decode(nil),
    nil
  );
});

  it('count_consonants', function() {
    // base case: nil
    assert.strictEqual(count_consonants(nil), undefined);
    // base case: 1st char is vowel, no recursive calls
    assert.strictEqual(count_consonants(explode("e")), 0);
    assert.strictEqual(count_consonants(explode("astray")), 0);
    // base case: no vowels or cosonants
    assert.strictEqual(count_consonants(explode("")), undefined);
    assert.strictEqual(count_consonants(explode("_")), undefined);

    // 1 recursive call:
    assert.strictEqual(count_consonants(explode("say")), 1);
    assert.strictEqual(count_consonants(explode("l_")), undefined);

    // multiple recursive calls:
    assert.strictEqual(count_consonants(explode("stingray")), 2);
    assert.strictEqual(count_consonants(explode("stray")), 3);
    assert.strictEqual(count_consonants(explode("str")), undefined);
    assert.strictEqual(count_consonants(explode("st_a")), undefined);
  });

  // TODO: uncomment the following tests when you are ready to test your
  // pig latin functions. You'll need to import these functions.

  // Note: these tests are based on the cases described in the spec with
  // some consideration for possible peculiar cases. This is an example of
  // the heuristics we teach being a good starting point, but how it's
  // sometimess reasonable to add more that the minimum number they
  // require to give us more confidence in our code!

  it('pig_latin_encode', function() {
    // case 1:
    // empty string, no characters
    assert.strictEqual(compact(pig_latin_encode(explode(""))), "");
    // neither consonants nor vowels
    assert.strictEqual(compact(pig_latin_encode(explode("__"))), "__");
    // all consonants
    assert.strictEqual(compact(pig_latin_encode(explode("str"))), "str");

    // case 2: starts with a vowel
    assert.strictEqual(compact(pig_latin_encode(explode("a"))), "away");
    assert.strictEqual(compact(pig_latin_encode(explode("is"))), "isway");
    assert.strictEqual(compact(pig_latin_encode(explode("astro"))), "astroway");

    // case 3: starting with consonant case
    assert.strictEqual(compact(pig_latin_encode(explode("say"))), "aysay");
    assert.strictEqual(compact(pig_latin_encode(explode("stay"))), "aystay");
    assert.strictEqual(compact(pig_latin_encode(explode("nasty"))), "astynay");
    assert.strictEqual(compact(pig_latin_encode(explode("qut"))), "utqay");
    assert.strictEqual(compact(pig_latin_encode(explode("qit"))), "itqay");
    assert.strictEqual(compact(pig_latin_encode(explode("buffalo"))), "uffalobay");
    assert.strictEqual(compact(pig_latin_encode(explode("ruins"))), "uinsray");
    assert.strictEqual(compact(pig_latin_encode(explode("suade"))), "uadesay");

    // case 4: "qu" exception case
    assert.strictEqual(compact(pig_latin_encode(explode("quay"))), "ayquay");
    assert.strictEqual(compact(pig_latin_encode(explode("quail"))), "ailquay");
    assert.strictEqual(compact(pig_latin_encode(explode("shquay"))), "ayshquay");
  });

  it('pig_latin_decode', function() {
    // // case 1: doesn't look like pig latin - no 'ay'
    // assert.strictEqual(compact(pig_latin_decode(explode(""))), "");
    // assert.strictEqual(compact(pig_latin_decode(explode("y"))), "y");
    // assert.strictEqual(compact(pig_latin_decode(explode("sat"))), "sat");

    // // case 2: doesn't look like pig latin - no consonants/vowel+consonants before 'ay'
    // assert.strictEqual(compact(pig_latin_decode(explode("ay"))), "ay");
    // assert.strictEqual(compact(pig_latin_decode(explode("say"))), "say");
    // assert.strictEqual(compact(pig_latin_decode(explode("shtay"))), "shtay");

    // // case 3: 'w' before ending 'ay'
    // assert.strictEqual(compact(pig_latin_decode(explode("away"))), "a");
    // assert.strictEqual(compact(pig_latin_decode(explode("astroway"))), "astro");
    // assert.strictEqual(compact(pig_latin_decode(explode("way"))), "way");
    // assert.strictEqual(compact(pig_latin_decode(explode("sway"))), "sway");

    // // case 4: 'qu' before ending 'ay'
    // assert.strictEqual(compact(pig_latin_decode(explode("ayquay"))), "quay");
    // assert.strictEqual(compact(pig_latin_decode(explode("ailquay"))), "lquai");
    // assert.strictEqual(compact(pig_latin_decode(explode("aysquay"))), "squay");
    // assert.strictEqual(compact(pig_latin_decode(explode("ayshquay"))), "shquay");

    // // case 5: consonants before 'ay' (if 3, 4 don't apply)
    // assert.strictEqual(compact(pig_latin_decode(explode("aysay"))), "say");
    // assert.strictEqual(compact(pig_latin_decode(explode("aystray"))), "stray");
    // assert.strictEqual(compact(pig_latin_decode(explode("aysway"))), "sway");
  });

});
