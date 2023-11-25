// Collab: David,Justin, Antonio
import { List, nil, cons, concat, len, rev} from './list';
import { last, prefix, suffix } from './list_ops'
import { compact } from './char_list';


/** Determines whether the given character is a vowel. */
const is_latin_vowel = (c: number): boolean => {
    const ch = String.fromCharCode(c).toLowerCase();
    return "aeiouy".indexOf(ch) >= 0;
};

/** Determines whether the given character is a Latin consonant. */
const is_latin_consonant = (c: number): boolean => {
    const ch = String.fromCharCode(c).toLowerCase();
    return "bcdfghjklmnpqrstvwxz".indexOf(ch) >= 0;
};

/** Changes most Latin alphabetic characters to different ones. */
export const next_latin_char = (c: number): number => {
    switch (String.fromCharCode(c)) {
        case "a": return "e".charCodeAt(0);
        case "e": return "i".charCodeAt(0);
        case "i": return "o".charCodeAt(0);
        case "o": return "u".charCodeAt(0);
        case "u": return "y".charCodeAt(0);
        case "y": return "a".charCodeAt(0);

        case "b": return "p".charCodeAt(0);
        case "p": return "j".charCodeAt(0);
        case "j": return "g".charCodeAt(0);
        case "g": return "d".charCodeAt(0);
        case "d": return "t".charCodeAt(0);
        case "t": return "b".charCodeAt(0);

        case "c": return "k".charCodeAt(0);
        case "k": return "s".charCodeAt(0);
        case "s": return "z".charCodeAt(0);
        case "z": return "c".charCodeAt(0);

        case "f": return "v".charCodeAt(0);
        case "v": return "w".charCodeAt(0);
        case "w": return "f".charCodeAt(0);

        case "h": return "l".charCodeAt(0);
        case "l": return "r".charCodeAt(0);
        case "r": return "h".charCodeAt(0);

        case "m": return "n".charCodeAt(0);
        case "n": return "m".charCodeAt(0);

        case "q": return "x".charCodeAt(0);
        case "x": return "q".charCodeAt(0);

        default: return c;
    }
};

/** Inverse of next_char. */
export const prev_latin_char = (c: number): number => {
    switch (String.fromCharCode(c)) {
        case "a": return "y".charCodeAt(0);
        case "e": return "a".charCodeAt(0);
        case "i": return "e".charCodeAt(0);
        case "o": return "i".charCodeAt(0);
        case "u": return "o".charCodeAt(0);
        case "y": return "u".charCodeAt(0);

        case "b": return "t".charCodeAt(0);
        case "p": return "b".charCodeAt(0);
        case "j": return "p".charCodeAt(0);
        case "g": return "j".charCodeAt(0);
        case "d": return "g".charCodeAt(0);
        case "t": return "d".charCodeAt(0);

        case "c": return "z".charCodeAt(0);
        case "k": return "c".charCodeAt(0);
        case "s": return "k".charCodeAt(0);
        case "z": return "s".charCodeAt(0);

        case "f": return "w".charCodeAt(0);
        case "v": return "f".charCodeAt(0);
        case "w": return "v".charCodeAt(0);

        case "h": return "r".charCodeAt(0);
        case "l": return "h".charCodeAt(0);
        case "r": return "l".charCodeAt(0);

        case "m": return "n".charCodeAt(0);
        case "n": return "m".charCodeAt(0);

        case "q": return "x".charCodeAt(0);
        case "x": return "q".charCodeAt(0);

        default: return c;
    }
};

// Note: count_consonants() and AY are provided to help you implement
// pig_latin_encode and pig_latin_decode

/** Returns the number of consonants at the start of the given string */
export const count_consonants = (L: List<number>): number|undefined => {
    if (L === nil) {
        return undefined;
    } else if (is_latin_vowel(L.hd)) {
        return 0;
    } else if (is_latin_consonant(L.hd)) {
        const n = count_consonants(L.tl);
        if (n === undefined) {
            return undefined;
        } else {
            return n + 1;
        }
    } else {
        return undefined;
    }
};



// TODO: uncomment to use
// List containing the character codes for the string "AY".
const AY: List<number> = cons("a".charCodeAt(0), cons("y".charCodeAt(0), nil));


// TODO: add your function declarations in this file for:
// cipher_encode, cipher_decode crazy_caps_encode, crazy_caps_decode,
// pig_latin_encode, pig_latin_decode

/**  checks if list is empty if not returns first character from L and recursively calls*/
export const cipher_encode = (L: List<number>): List<number> => {
    if (L === nil) {
        return nil;
    }
    return cons(next_latin_char(L.hd), cipher_encode(L.tl));
};

/**  checks if list is empty if not returns first character from L and recursively calls*/
export const cipher_decode = (L: List<number>): List<number> => {
    if (L === nil) {
        return nil;
    }
    return cons(prev_latin_char(L.hd), cipher_decode(L.tl));
};

/**  checks if list is empty if not returns first character from L capitalized and recursively calls*/
export const crazy_caps_encode = (L: List<number>): List<number> => {
    if (L === nil) {
        return nil;
    } else if(L.tl === nil){
         return cons(String.fromCharCode(L.hd).toUpperCase().charCodeAt(0), nil);
    } else {
        return cons(String.fromCharCode(L.hd).toUpperCase().charCodeAt(0), cons(L.tl.hd, crazy_caps_encode(L.tl.tl)));
    }
};

/**  checks if list is empty if not returns first character from L, converts to lower case, and recursively calls*/
export const crazy_caps_decode = (L: List<number>): List<number> => {
    if (L === nil) {
        return nil;
    } else if (L.tl === nil){
        return cons(String.fromCharCode(L.hd).toLowerCase().charCodeAt(0), nil);
    } else {
        return cons(String.fromCharCode(L.hd).toLowerCase().charCodeAt(0),cons(L.tl.hd, crazy_caps_decode(L.tl.tl)));
    }
};

/**  checks if list is empty if not returns character from L and recursively calls*/
export const pig_latin_encode = (L: List<number>): List<number> => {
    const num = count_consonants(L);
    if (num === undefined || num < 0) {
        return L
    } else if (count_consonants(L) === 0) {
        return concat(L, cons("w".charCodeAt(0), cons("a".charCodeAt(0), cons("y".charCodeAt(0), nil))));
    } else {
        const first = prefix(num, L);
        const second = suffix(num, L);
        if (last(first) === "q".charCodeAt(0) && second !== nil && second.hd === "u".charCodeAt(0)
            && second.tl !== nil && count_consonants(second.tl) === 0) {
            return concat(suffix(num + 1, L), concat(first, cons("u".charCodeAt(0), AY)))
        }

        return concat(second, concat(first, AY))
    }
};

/** checks if list is empty if not returns character from L and recursively calls*/
export const pig_latin_decode = (L: List<number>): List<number> => {
    if (len(L) < 3) {
        return L
    }

    const test = count_consonants(prefix(len(L) - 2, L))
    const testOne = suffix(len(L) - 3, L)


    if (compact(suffix(len(L) - 2, L)) !== compact(AY) || test === undefined
        ||  test < 0 ||
        (testOne !== nil && count_consonants(testOne) === 0 && testOne.hd !== "u".charCodeAt(0))) {
        return L
    }
    if (len(L) > 3) {
        const testTwo = suffix(len(L) - 4, L)
        if (len(L) > 2 && testOne != nil && testOne.hd === "w".charCodeAt(0) && testTwo != nil &&
            suffix(len(L) - 4, L) !== nil && is_latin_vowel(testTwo.hd)) {
            return prefix(len(L) - 3, L);
        }

    }

    if (compact(prefix(2, suffix(len(L) - 4, L))) === compact(cons("q".charCodeAt(0), cons("u".charCodeAt(0), nil)))) {
        const extraLetter = count_consonants(rev(prefix(len(L) - 4, L)))
        if (extraLetter !== undefined) {
            return concat(prefix( extraLetter, suffix(len(L) - 4 - extraLetter, L)),
                concat(cons("q".charCodeAt(0), cons("u".charCodeAt(0), nil)), prefix(len(L) - 4 - extraLetter, L)))
        } else {
            return concat(cons("q".charCodeAt(0), cons("u".charCodeAt(0), nil)), prefix(len(L) - 4, L))
        }
    }

    const consLength = count_consonants(rev(prefix(len(L) - 2, L)))
    if (consLength === undefined) {
        return L
    }

    return concat(suffix(len(L) - consLength - 2, prefix(len(L) - 2, L)), prefix(len(L) - consLength - 2, L))
};
