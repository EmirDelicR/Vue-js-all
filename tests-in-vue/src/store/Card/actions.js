import axios from "axios";

const incrementTotal = (context, newTotal) => {
  context.commit("UPDATE_TOTAL", newTotal);
};

const updateProjectId = (context, newProjectId) => {
  context.commit("UPDATE_PROJECT_ID", newProjectId);
};

const authenticate = async ({ commit }, { username, password }) => {
  try {
    const authenticated = await axios.post("/api/authenticate", {
      username,
      password
    });

    commit("SET_AUTHENTICATED", authenticated);
  } catch (e) {
    throw Error("API Error occurred.");
  }
};

export default {
  incrementTotal,
  updateProjectId,
  authenticate
};
