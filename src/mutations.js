import {STATE} from "./state";

export const MUTATION = {
    SET_TAG_TO_BOOK_SEARCH_TEXT: 'set_tag_to_book_search_text',
    CLEAR_BOOK_SEARCH_TEXT: 'clear_book_search_text',
};

export default {
    [MUTATION.SET_TAG_TO_BOOK_SEARCH_TEXT]: (state, payload) => {
        const tag = payload.tag;

        state[STATE.BOOK_SEARCH_TEXT] = '#' + tag;
    },
    [MUTATION.CLEAR_BOOK_SEARCH_TEXT]: (state, payload) => {
        state[STATE.BOOK_SEARCH_TEXT] = '';
    },
}
