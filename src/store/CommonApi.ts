import { createApi } from '@reduxjs/toolkit/query/react';
import baseQueryWithoutAuth from '@/helpers/BaseQueryWithoutAuth';
import { ApiResponse, TaskModel, TaskRequest } from '@/types/global';
import { API } from '../config/Api.constants';

export const commonApi = createApi({
  reducerPath: 'commonApi',
  baseQuery: baseQueryWithoutAuth,
  endpoints: (builder) => ({
    getTaskList: builder.query<{ tasks: TaskRequest[] }, void>({
      query: () => ({
        url: `${API.getTasks}`,
      }),
      transformResponse: (response: any) => response.responseObject,
    }),
    getTask: builder.query<{ tasks: TaskRequest }, string>({
      query: (id) => ({
        url: `${API.getTasks}/${id}`,
      }),
      transformResponse: (response: any) => response.responseObject,
    }),
    deleteTaskById: builder.query<ApiResponse, string>({
      query: (id) => ({
        url: `${API.deleteTask}${id}`,
        method: 'DELETE',
      }),
    }),
    createTask: builder.mutation<ApiResponse, TaskModel>({
      query: (body: any) => ({
        url: API.createTask,
        method: 'POST',
        body,
      }),
    }),
    updateTask: builder.query<ApiResponse, TaskRequest>({
      query: (body: any) => ({
        url: `${API.updateTask}${body.id}`,
        method: 'PUT',
        body,
      }),
    }),
  }),
});

export const {
  useCreateTaskMutation,
  useLazyDeleteTaskByIdQuery,
  useLazyGetTaskListQuery,
  useLazyUpdateTaskQuery,
  useLazyGetTaskQuery,
} = commonApi;
