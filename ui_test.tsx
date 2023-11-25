// Collab: David, Justin, Antonio
import React from 'react';
import * as assert from 'assert';
import { ShowResult } from './ui';
import { compact, explode } from './char_list';
import { cipher_encode, cipher_decode, crazy_caps_encode, crazy_caps_decode, pig_latin_encode, pig_latin_decode } from './latin_ops';


describe('ui', function() {

  // Crazy-caps encode test 1
  it('ShowResult', function() {
    assert.deepStrictEqual(
        ShowResult({word: "crazy", algo: "crazy-caps", op: "encode"}),
        <p><code>{compact(crazy_caps_encode(explode("crazy")))}</code></p>);
  });

  // Crazy-caps encode test 2
  it('ShowResult', function () {
    assert.deepStrictEqual(
      ShowResult({ word: "wassup", algo: "crazy-caps", op: "encode"}),
      <p><code>{compact(crazy_caps_encode(explode("wassup")))}</code></p>
    );
  });

  // Crazy-caps decode test 1
  it('ShowResult', function () {
    assert.deepStrictEqual(
      ShowResult({ word: "LuFfY", algo: "crazy-caps", op: "decode"}),
      <p><code>{compact(crazy_caps_decode(explode("LuFfY")))}</code></p>
    );
  });

  // Crazy-caps decode test 2
  it('ShowResult', function () {
    assert.deepStrictEqual(
      ShowResult({ word: "DuKe", algo: "crazy-caps", op: "decode"}),
      <p><code>{compact(crazy_caps_decode(explode("DuKe")))}</code></p>
    );
  });

  // Cipher encode test 1
  it('ShowResult', function () {
    assert.deepStrictEqual(
      ShowResult({ word: "kai", algo: "cipher", op: "encode"}),
      <p><code>{compact(cipher_encode(explode("kai")))}</code></p>
    );
  });

  // Cipher encode test 2
  it('ShowResult', function () {
    assert.deepStrictEqual(
      ShowResult({ word: "cenat", algo: "cipher", op: "encode"}),
      <p><code>{compact(cipher_encode(explode("cenat")))}</code></p>
    );
  });

  // Cipher decode test 1
  it('ShowResult', function () {
    assert.deepStrictEqual(
      ShowResult({ word: "poo", algo: "cipher", op: "decode"}),
      <p><code>{compact(cipher_decode(explode("poo")))}</code></p>
    );
  });

  // Cipher decode test 2
  it('ShowResult', function () {
    assert.deepStrictEqual(
      ShowResult({ word: "penjamin", algo: "cipher", op: "decode"}),
      <p><code>{compact(cipher_decode(explode("penjamin")))}</code></p>
    );
  });

  // Pig-Latin encode test 1
  it('ShowResult', function () {
    assert.deepStrictEqual(
      ShowResult({ word: "fun", algo: "pig-latin", op: "encode"}),
      <p><code>{compact(pig_latin_encode(explode("fun")))}</code></p>
    );
  });

  // Pig-Latin encode test 2
  it('ShowResult', function () {
    assert.deepStrictEqual(
      ShowResult({ word: "dennis", algo: "pig-latin", op: "encode"}),
      <p><code>{compact(pig_latin_encode(explode("dennis")))}</code></p>
    );
  });

  // Pig-Latin decode test 1
  it('ShowResult', function () {
    assert.deepStrictEqual(
      ShowResult({ word: "zoro", algo: "pig-latin", op: "decode"}),
      <p><code>{compact(pig_latin_decode(explode("zoro")))}</code></p>
    );
  });

  // Pig-Latin decode test 2
  it('ShowResult', function () {
    assert.deepStrictEqual(
      ShowResult({ word: "parks", algo: "pig-latin", op: "decode"}),
      <p><code>{compact(pig_latin_decode(explode("parks")))}</code></p>
    );
  });

});