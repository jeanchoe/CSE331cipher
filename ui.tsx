// Collab: David, Justin, Antonio
import React from 'react';
import { compact, explode } from './char_list';
import { cipher_encode, cipher_decode, crazy_caps_encode, crazy_caps_decode, pig_latin_encode, pig_latin_decode } from './latin_ops';


/** Returns UI that displays a form asking for encode/decode input. */
export const ShowForm = (_: {}): JSX.Element => {
    // TODO: Replace this with something fully functional.
    return (
        <form action="/" method="get">
          <input type="text" id="word" name="word"></input>

          <select id="" name="">
          <option value="cipher">cipher</option>
            <option value="crazy-caps">crazy caps</option>
            <option value="pig-latin">pig latin</option>
          </select>

          <input type="radio" id="encode" name="op" value="encode"></input>
          <label htmlFor="word">encode</label>
          <input type="radio" id="decode" name="op" value="decode"></input>
          <label htmlFor="word">decode</label>

          <input type="submit" value="Submit"></input>
        </form>);
};


/** Properties expected for the ShowResult UI below. */
export type ShowResultProps = {
    word: string;
    algo: "cipher" | "crazy-caps" | "pig-latin";
    op: "encode" | "decode";
};

/**
 * Returns UI that shows the result of applying the specified operation to the
 * given word.
 */
export const ShowResult = (props: ShowResultProps): JSX.Element => {
  if (props.algo === "cipher") {
    if (props.op === "encode") {
      return (<p><code>{compact(cipher_encode(explode(props.word)))}</code></p>);
    } else if (props.op === "decode") {
      return (<p><code>{compact(cipher_decode(explode(props.word)))}</code></p>);
    }
  } else if (props.algo === "crazy-caps") {
    if (props.op === "encode") {
      return (<p><code>{compact(crazy_caps_encode(explode(props.word)))}</code></p>);
    } else if (props.op === "decode") {
      return (<p><code>{compact(crazy_caps_decode(explode(props.word)))}</code></p>);
    }
  } else if (props.algo === "pig-latin") {
    if (props.op === "encode") {
      return (<p><code>{compact(pig_latin_encode(explode(props.word)))}</code></p>);
    } else if (props.op === "decode") {
      return (<p><code>{compact(pig_latin_decode(explode(props.word)))}</code></p>);
    }
  }
  return (<p><code>Something went wrong.</code></p>);
};
