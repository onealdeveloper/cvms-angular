import { DashboardEntity } from './dashboard.models';
import {
  dashboardAdapter,
  DashboardPartialState,
  initialDashboardState,
} from './dashboard.reducer';
import * as DashboardSelectors from './dashboard.selectors';

describe('Dashboard Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getDashboardId = (it: DashboardEntity) => it.id;
  const createDashboardEntity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as DashboardEntity);

  let state: DashboardPartialState;

  beforeEach(() => {
    state = {
      dashboard: dashboardAdapter.setAll(
        [
          createDashboardEntity('PRODUCT-AAA'),
          createDashboardEntity('PRODUCT-BBB'),
          createDashboardEntity('PRODUCT-CCC'),
        ],
        {
          ...initialDashboardState,
          selectedId: 'PRODUCT-BBB',
          error: ERROR_MSG,
          loaded: true,
        }
      ),
    };
  });

  describe('Dashboard Selectors', () => {
    it('getAllDashboard() should return the list of Dashboard', () => {
      const results = DashboardSelectors.getAllDashboard(state);
      const selId = getDashboardId(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getSelected() should return the selected Entity', () => {
      const result = DashboardSelectors.getSelected(state) as DashboardEntity;
      const selId = getDashboardId(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getDashboardLoaded() should return the current "loaded" status', () => {
      const result = DashboardSelectors.getDashboardLoaded(state);

      expect(result).toBe(true);
    });

    it('getDashboardError() should return the current "error" state', () => {
      const result = DashboardSelectors.getDashboardError(state);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
