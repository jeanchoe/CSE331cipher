
// Collab: David, Justin, Antonio
import * as assert from 'assert';
import { nil } from './list';
import { explode } from './char_list';
import { last, prefix, suffix } from './list_ops';


describe('list_ops', function() {

  it('last', function() {
    // Error case branch
    assert.throws(() => last(nil), Error);

      /**  0-1-many heuristic, base case*/
      assert.deepEqual(last(explode("a")), "a".charCodeAt(0));
    assert.deepEqual(last(explode("_")), "_".charCodeAt(0));

      /**  0-1-many heuristic, 1 cases, single recursive call*/
      assert.deepEqual(last(explode("hm")), "m".charCodeAt(0));
    assert.deepEqual(last(explode("hu")), "u".charCodeAt(0));

      /**  0-1-many heuristic, many cases, >1 recursive call*/
    assert.deepEqual(last(explode("hub")), "b".charCodeAt(0));
    assert.deepEqual(last(explode("stray")), "y".charCodeAt(0));
    assert.deepEqual(last(explode("shrug")), "g".charCodeAt(0));
  });

  it('prefix', function() {
      /**  Exceptions Testing*/
      assert.throws(() => prefix(1, nil), Error);

      /**  0-1-many heuristic, base case*/
      assert.deepStrictEqual(prefix(0, nil), nil);
      assert.deepStrictEqual(prefix(0, explode("hi")), nil);

      /**  0-1-many heuristic, 1 cases, single recursive call*/
      assert.deepStrictEqual(prefix(1, explode("bob")), explode("b"));
      assert.deepStrictEqual(prefix(1, explode("joe")), explode("j"));

      /**  0-1-many heuristic, many cases, >1 recursive call*/
      assert.deepStrictEqual(prefix(2, explode("luffy")), explode("lu"));
      assert.deepStrictEqual(prefix(2, explode("peter")), explode("pe"));

    });

    it('suffix', function() {
      /**  Exceptions Testing*/
      assert.throws(() => suffix(1, nil), Error);

      /**  0-1-many heuristic, base case*/
      assert.deepStrictEqual(suffix(0, nil), nil);
      assert.deepStrictEqual(suffix(0, explode("hi")), explode("hi"));

      /**  0-1-many heuristic, 1 cases, single recursive call*/
      assert.deepStrictEqual(suffix(1, explode("paths")), explode("aths"));
      assert.deepStrictEqual(suffix(1, explode("bob")), explode("ob"));


      /**  0-1-many heuristic, many cases, >1 recursive call*/
      assert.deepStrictEqual(suffix(2, explode("luffy")), explode("ffy"));
      assert.deepStrictEqual(suffix(2, explode("pizza")), explode("zza"));

    });


});
