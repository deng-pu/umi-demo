/*
 * @Author: dengpu
 * @Date: 2022-09-16 22:34:47
 * @LastEditTime: 2022-09-16 22:50:16
 * @LastEditors: dengpu
 * @Description: 
 */
import { defineConfig } from '@umijs/max';
import routes from './routes';
export default defineConfig({
  antd: {},
  access: {},
  model: {},
  dva:{
    immer:{}
  },
  initialState: {},
  request: {},
  layout: {
    title: '@umijs/max',
  },
  routes,
  npmClient: 'yarn',
});

