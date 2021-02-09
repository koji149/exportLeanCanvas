import {
  CREATE_LEAN_CANVAS,
  DELETE_ALL_EVENT
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
  console.log(`${state}ddd`)

      return [ contents]
    case DELETE_ALL_EVENT:
      return []
    default:
      return state
  }
}

export default operationLeanCanvasContents