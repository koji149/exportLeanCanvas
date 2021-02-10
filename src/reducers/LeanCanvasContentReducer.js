import {
  CREATE_LEAN_CANVAS,
  ALL_TEXT_CLEAR
} from "../actions"

const operationLeanCanvasContents = (state = [], action) => {
  switch (action.type) {
    case CREATE_LEAN_CANVAS:
      const contents = {
        problem: action.problem,
        alternatives: action.alternatives,
        customer: action.customer,
        earlyAdopters: action.earlyAdopters,
        uniqueValue: action.uniqueValue,
        solution: action.solution,
        channels: action.channels,
        revenue: action.revenue,
        cost: action.cost,
        keyMetrics: action.keyMetrics,
        unfairAdvantage: action.unfairAdvantage,
  }
      return [contents]
    case ALL_TEXT_CLEAR:
      return []
    default:
      return state
  }
}

export default operationLeanCanvasContents