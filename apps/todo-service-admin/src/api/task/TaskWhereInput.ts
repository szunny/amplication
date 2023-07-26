import { BooleanFilter } from "../../util/BooleanFilter";
import { StringFilter } from "../../util/StringFilter";
import { UserListRelationFilter } from "../user/UserListRelationFilter";

export type TaskWhereInput = {
  completed?: BooleanFilter;
  id?: StringFilter;
  text?: StringFilter;
  uid?: UserListRelationFilter;
};
