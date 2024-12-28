export enum TaskColors {
  ADMIN = 'super-admin',
  PARTNER_ADMIN = 'partner-admin',
  PARTNER = 'partner',
}

export type ApiResponse = {
  message: string;
  statusCode: number;
  success: boolean;
  responseObject: any;
};

export type TaskModel = {
  title: string;
  color: string;
  completed: boolean;
};

export type TaskRequest = {
  id?: string;
  title: string;
  color: string;
  completed: boolean;
};
