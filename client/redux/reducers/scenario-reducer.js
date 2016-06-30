import { GET_SCENARIOS, VALID_SCRIPT, RESET_ATTEMPT_CHECK, CURRENT_SCENARIO_ID, CURRENT_SPAWNS_COUNT } from '../actionCreators/scenario-actions';

const initialState = {
  allScenarios: [],
  currentScenarioID: 0,
  currentSpawnsCount: 0,
  isValidScript: false,
  attemptedCheck: false,
};

export const scenarioReducer = (state = initialState, action) => {
  console.log('This is scenarioReducers state', state);
  switch (action.type) {
    case GET_SCENARIOS:
      return Object.assign({}, state, {
        allScenarios: action.scenario,
      });

    case VALID_SCRIPT:
      return Object.assign({}, state, {
        isValidScript: action.isValidScript,
        attemptedCheck: action.attemptedCheck,
      });

    case RESET_ATTEMPT_CHECK:
      return Object.assign({}, state, {
        isValidScript: action.isValidScript,
        attemptedCheck: action.attemptedCheck,
      });

    case CURRENT_SCENARIO_ID:
      return Object.assign({}, state, {
        currentScenarioID: action.currentScenarioID,
      });

    case CURRENT_SPAWNS_COUNT:
      return Object.assign({}, state, {
        currentSpawnsCount: action.currentSpawnsCount,
      });

    default:
      return state;
  }
};