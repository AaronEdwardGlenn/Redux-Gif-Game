import countReducer from './countReducer';
import { drink_coffee, eat_snack, take_nap, study, go_crazy, resetAll } from '../actions/allActions';



describe('countReducer functionality', () => {
  it('nada occours when actions === false', () => {
    const action = { type: 'UNEXPECTED' };
    const newState = countReducer({}, action);
    expect(newState).toEqual({});
  });

  it('DRINK_COFFEE functionality ', () => {
    const action = drink_coffee();
    const initialState = { coffees: 0 };
    const newState = countReducer(initialState, action);
    expect(newState).toEqual({ coffees: 1 });
  });

  it('EAT_SNACK functionality', () => {
    const action = eat_snack();
    const initialState = { snacks: 1 };
    const newState = countReducer(initialState, action);
    expect(newState).toEqual({ snacks: 2 });
  });

  it('TAKE_NAP funcitonality', () => {
    const action = take_nap();
    const initialState = { naps: 1 };
    const newState = countReducer(initialState, action);
    expect(newState).toEqual({ naps: 2 });
  });

  it('STUDY functionaliyt', () => {
    const action = study();
    const initialState = { studies: 1 };
    const newState = countReducer(initialState, action);
    expect(newState).toEqual({ studies: 2 });
  });

  it('CRAZY functionality', () => {
    const action = go_crazy();
    const initialState = { craziez: 1 };
    const newState = countReducer(initialState, action);
    expect(newState).toEqual({ craziez: 2 });
  });

  it('handles a resetAll action', () => {
    const action = resetAll();
    const initialState = { coffees: 4, snacks: 3, naps: 2, studies: 1 };
    const newState = countReducer(initialState, action);
    expect(newState).toEqual({ coffees: 0, snacks: 0, naps: 0, studies: 0, craziez: 0 });
  });
});
