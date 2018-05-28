import * as usersService from '../services/users';
import {routerRedux} from 'dva/router'

export default {
  namespace: 'users100',
  state: {
    list: [],
    total: null,
    page: null,
    param:null,
  },
  reducers: {
    save(state, { payload: { data: list, total, page } }) {
      return { ...state, list, total, page };
    },
    saveParms(state,  { payload: { param }}) {
      return { ...state, param};
    },
  },
  effects: {
    *fetch({ payload: { page = 1 } }, { call, put }) {
      const { data, headers } = yield call(usersService.fetch, { page });
      yield put({
        type: 'save',
        payload: {
          data,
          total: parseInt(headers['x-total-count'], 10),
          page: parseInt(page, 10),
        },
      });
    },
    *remove({ payload: id }, { call, put }) {
      yield call(usersService.remove, id);
      yield put({ type: 'reload' });
    },
    *patch({ payload: { id, values } }, { call, put }) {
      yield call(usersService.patch, id, values);
      yield put({ type: 'reload' });
    },
    *create({ payload: values }, { call, put }) {
      yield call(usersService.create, values);
      yield put({ type: 'reload' });
    },
    *reload(action, { put, select }) {
      const page = yield select(state => state.users.page);
      yield put({ type: 'fetch', payload: { page } });
    },
    *test({payload}, { put, select }) {
      console.log("1=",payload);
      yield put(routerRedux.push(`/bx/22222@a=${payload.a}&b=${payload.b}`));
    },
    *test1({payload}, { call, put }) {
      console.log(location.pathname);
      console.log("3",payload);
      const param = payload.replace("/bx/","");
      // const parms = payload.search();
      // console.log("4",parms);
      yield put({ type: 'saveParms', payload: { param } });
    },
  },
  subscriptions: {
    setup({ dispatch, history }) {
      history.listen( location => {
        if (location.pathname === '/users') {
          dispatch({ type: 'fetch', payload: query });
        }
        if (location.pathname.includes('/bx')) {
          dispatch({ type: 'test1', payload: location.pathname });
        }
      });
    },
  },
};
