import {
  DRINK_COFFEE,
  EAT_SNACK,
  TAKE_NAP,
  STUDY,
  CRAZY, 
  RESET_ALL
} from '../actions/allActions';

const initialState = {
  coffees: 0,
  snacks: 0,
  naps: 0,
  studies: 0
};

export default function countReducer(state = initialState, action) {
  switch(action.type) {
    case DRINK_COFFEE: 
      return { ...state, coffees: state.coffees + 1 };
    case EAT_SNACK: 
      return { ...state, snacks: state.snacks + 1 };
    case TAKE_NAP: 
      return { ...state, naps: state.naps + 1 };
    case STUDY: 
      return { ...state, studies: state.studies + 1 };
    case CRAZY: 
      return { ...state, craziez: state.craziez + 1 };
    case RESET_ALL: 
      return { coffees: 0, snacks: 0, naps: 0, studies: 0, craziez: 0 };
    default: 
      return state; 


  }
}
