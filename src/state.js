import books from 'json-loader!yaml-loader!./assets/books.yml'

export const STATE = {
    BOOK_SEARCH_TEXT: 'book_search_text',
    BOOKS: 'books',
};

export const baseState = {
    [STATE.BOOK_SEARCH_TEXT]: '',
    [STATE.BOOKS]: books,
};

export function makeState() {
    let state = Object.assign({}, baseState);

    if (window && window.defaultState) {
        state = Object.assign(state, window.defaultState);
    }

    return state;
}

export default makeState;
