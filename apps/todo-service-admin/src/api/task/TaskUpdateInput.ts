import { UserUpdateManyWithoutTasksInput } from "./UserUpdateManyWithoutTasksInput";

export type TaskUpdateInput = {
  completed?: boolean;
  text?: string;
  uid?: UserUpdateManyWithoutTasksInput;
};
