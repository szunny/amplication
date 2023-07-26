import { UserCreateNestedManyWithoutTasksInput } from "./UserCreateNestedManyWithoutTasksInput";

export type TaskCreateInput = {
  completed: boolean;
  text: string;
  uid?: UserCreateNestedManyWithoutTasksInput;
};
