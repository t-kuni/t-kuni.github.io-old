import {STATE} from "./state";
import products from "./assets/products/products";

export const GETTERS = {
    FILTERED_BOOKS    : 'filtered_books',
    PARSED_SEARCH_TEXT: 'parsed_search_text',
    NEXT_PRODUCT      : 'next_product',
    PREV_PRODUCT      : 'prev_product',
    FIRST_PRODUCT      : 'first_product',
};

export default {
    [GETTERS.FILTERED_BOOKS]    : (state, getters) => {
        const books  = state[STATE.BOOKS];
        const search = getters[GETTERS.PARSED_SEARCH_TEXT];

        const sortedBooks = books.sort(function (a, b) {
            const diff = b.progress - a.progress;
            if (diff !== 0) {
                return diff;
            }

            const dateA = Date.parse(a.start);
            const dateB = Date.parse(b.start);
            return dateB - dateA;
        });

        if (search === null) {
            return books;
        }

        return books.filter((book) => {
            if (search.tags.length > 0) {
                const matchedTags = book.tags.filter((tag) => {
                    return search.tags.indexOf(tag) >= 0;
                });
                if (matchedTags.length > 0) {
                    return true;
                }
            }

            return false;
        });
    },
    [GETTERS.PARSED_SEARCH_TEXT]: (state, getters) => {
        const search = state[STATE.BOOK_SEARCH_TEXT];

        const normalized = search.trim().replace(/\s+/g, ' ');

        if (normalized === '') {
            return null;
        }

        return normalized.split(' ').reduce((acc, curr) => {
            if (curr.slice(0, 1) === '#') {
                acc.tags.push(curr.slice(1));
            } else {
                acc.words.push(curr);
            }
            return acc;
        }, {
            words: [],
            tags : [],
        });
    },
    [GETTERS.PREV_PRODUCT]: (state, getters) => {
        if ( ! ('permalink' in state.route.params)) {
            return null;
        }

        const permalink = state.route.params.permalink;

        if (permalink === null) {
            return null;
        }

        const i = products.findIndex((p) => p.permalink === permalink);

        if (i === 0) {
            return null;
        }

        return products[i - 1].permalink;
    },
    [GETTERS.NEXT_PRODUCT]: (state, getters) => {
        if ( ! ('permalink' in state.route.params)) {
            return null;
        }

        const permalink = state.route.params.permalink;

        if (permalink === null) {
            return null;
        }

        const i = products.findIndex((p) => p.permalink === permalink);

        if (i === products.length - 1) {
            return null;
        }

        return products[i + 1].permalink;
    },
    [GETTERS.FIRST_PRODUCT]: (state, getters) => {
        return products[0].permalink;
    },
}
