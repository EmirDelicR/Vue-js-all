const incrementTotal = (context, newTotal) => {
  context.commit('UPDATE_TOTAL', newTotal)
}

const updateProjectId = (context, newProjectId) => {
  context.commit('UPDATE_PROJECT_ID', newProjectId)
}

export default {
  incrementTotal,
  updateProjectId,
}
