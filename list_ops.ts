import { List, nil, len, cons } from './list';


/** Returns the last element in the given list. */
export const last = <A,>(L: List<A>): A => {
    if (L === nil) {
        throw new Error("empty list has no last element");
    } else if (L.tl === nil) {
        return L.hd;
    } else {
        return last(L.tl);
    }
};

/**  checks if less than 0, empty, 0, if not returns value recursively*/
export const prefix = <A>(n: number, L: List<A>): List<A> => {
    if (n < 0) {
      throw new Error("Number cannot be negative");
    } else if (n > len(L)) {
        throw new Error("List is smaller than x");
    }
    if (L === nil) {
        return nil;
    }
    if (n === 0) {
        return nil;
    } else {
        return cons(L.hd, prefix(n - 1, L.tl));
    }
  };

/**  checks if less than 0, empty, 0, if not returns value recursively*/
export const suffix = <A>(n: number, L: List<A>): List<A> => {
    if (n < 0) {
        throw new Error("Number x be be negative.");
      } else if (n > len(L)) {
        throw new Error("List is smaller than x");
      }
      if (L === nil) {
        return nil;
      }
      if (n === 0) {
        return L;
      } else {
        return suffix(n - 1, L.tl);
      }
    };