const UPDATE_PROJECT_ID = (state, projectId) => {
  state.projectId = projectId
}

const UPDATE_TOTAL = (state, total) => {
  state.currentTotal = total
}

export default {
  UPDATE_PROJECT_ID,
  UPDATE_TOTAL,
}
