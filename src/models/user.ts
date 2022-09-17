/*
 * @Author: dengpu
 * @Date: 2022-09-16 22:47:17
 * @LastEditTime: 2022-09-17 16:18:42
 * @LastEditors: dengpu
 * @Description:
 */
import { Effect, ImmerReducer, Subscription } from '@umijs/max';
export interface UserModelState {
  name: string;
  age: number;
}
export interface UserModelType {
  namespace: 'user';
  state: UserModelState;
  effects: {
    query: Effect;
  };
  reducers: {
    save: ImmerReducer<UserModelState>;
  };
  subscriptions?: { setup: Subscription };
}

const UserModel: UserModelType = {
  namespace: 'user',
  state: {
    name: '',
    age: 2,
  },
  effects: {
    *query({ payload }, { call, put }) {},
  },
  reducers: {
    save(state, action) {
      state.name = action.payload;
    },
  },
};
export default UserModel;
