import {MUTATION} from "./mutations";
import {STATE} from "./state";

export const ACTION = {
    FETCH_NEXT_SOMEONES_DISCUSSIONS: 'fetch_next_someones_discussions',
};

export default {
    [ACTION.FETCH_NEXT_SOMEONES_DISCUSSIONS]: ({commit, getters, state}, payload) => {
        const userID   = state[STATE.SOMEONES_USER_ID];
        const offsetID = getters[GETTERS.SOMEONES_DISCUSSION_OFFSET_ID];

        return api.userDiscussions(userID, offsetID)
            .then((response) => {
                commit(MUTATION.ADD_SOMEONES_DISCUSSIONS, {
                    items  : response.data.discussions,
                    hasNext: response.data.hasNext,
                });
            })
    },
}
