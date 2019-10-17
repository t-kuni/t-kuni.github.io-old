import {STATE} from "./state";
import products from "assets/products/products";

export const MUTATION = {
    SET_TAG_TO_BOOK_SEARCH_TEXT: 'set_tag_to_book_search_text',
    CLEAR_BOOK_SEARCH_TEXT: 'clear_book_search_text',
    MOVE_PREV_PRODUCT: 'move_prev_product',
    MOVE_NEXT_PRODUCT: 'move_next_product',
};

export default {
    [MUTATION.SET_TAG_TO_BOOK_SEARCH_TEXT]: (state, payload) => {
        const tag = payload.tag;

        state[STATE.BOOK_SEARCH_TEXT] = '#' + tag;
    },
    [MUTATION.CLEAR_BOOK_SEARCH_TEXT]: (state, payload) => {
        state[STATE.BOOK_SEARCH_TEXT] = '';
    },
    [MUTATION.MOVE_PREV_PRODUCT]: (state, payload) => {
        // const curPerm = this.$store.state.route.params.permalink;
        // let index = null;
        // const filtered = products.filter((p, i) => p.permalink === curPerm);
        // if (filtered.length > 0) {
        //     return filtered[0];
        // } else {
        //     return null;
        // }
    },
    [MUTATION.MOVE_NEXT_PRODUCT]: (state, payload) => {
    },
}
