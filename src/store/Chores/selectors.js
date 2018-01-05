function getChores(state) {
    return state.chores || [];
}

function getActiveChore(state) {
    return state.activeChore || {};
}

export default {
    getChores,
    getActiveChore,
};