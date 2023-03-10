import { EventsEntity } from './events.models';
import {
  eventsAdapter,
  EventsPartialState,
  initialEventsState,
} from './events.reducer';
import * as EventsSelectors from './events.selectors';

describe('Events Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getEventsId = (it: EventsEntity) => it.id;
  const createEventsEntity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as EventsEntity);

  let state: EventsPartialState;

  beforeEach(() => {
    state = {
      events: eventsAdapter.setAll(
        [
          createEventsEntity('PRODUCT-AAA'),
          createEventsEntity('PRODUCT-BBB'),
          createEventsEntity('PRODUCT-CCC'),
        ],
        {
          ...initialEventsState,
          selectedId: 'PRODUCT-BBB',
          error: ERROR_MSG,
          loaded: true,
        }
      ),
    };
  });

  describe('Events Selectors', () => {
    it('getAllEvents() should return the list of Events', () => {
      const results = EventsSelectors.getAllEvents(state);
      const selId = getEventsId(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getSelected() should return the selected Entity', () => {
      const result = EventsSelectors.getSelected(state) as EventsEntity;
      const selId = getEventsId(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getEventsLoaded() should return the current "loaded" status', () => {
      const result = EventsSelectors.getEventsLoaded(state);

      expect(result).toBe(true);
    });

    it('getEventsError() should return the current "error" state', () => {
      const result = EventsSelectors.getEventsError(state);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
