import { createApi } from '@reduxjs/toolkit/query/react';
import baseQueryWithoutAuth from '@/helpers/BaseQueryWithoutAuth';
import { ApiResponse, TaskModel, TaskRequest } from '@/types/global';
import { API } from '../config/Api.constants';

export const commonApi = createApi({
  reducerPath: 'commonApi',
  baseQuery: baseQueryWithoutAuth,
  endpoints: (builder) => ({
    getTaskList: builder.query<{ tasks: TaskModel[] }, void>({
      query: () => ({
        url: `${API.getTasks}`,
      }),
      transformResponse: (response: any) => response.responseObject,
    }),
    deleteTaskById: builder.query<ApiResponse, string>({
      query: (id) => ({
        url: `${API.deleteTask}${id}`,
        method: 'DELETE',
      }),
    }),
    createTask: builder.mutation<ApiResponse, TaskRequest>({
      query: (body: any) => ({
        url: API.createTask,
        method: 'POST',
        body,
      }),
    }),
    updateTask: builder.query<ApiResponse, TaskRequest>({
      query: (body: any) => ({
        url: `${API.deleteTask}${body.id}`,
        method: 'POST',
        body,
      }),
      transformResponse: (response: any) => response.responseObject,
    }),
  }),
});

export const { useCreateTaskMutation, useDeleteTaskByIdQuery, useLazyGetTaskListQuery, useLazyUpdateTaskQuery } = commonApi;
