
import instance from "./httpServices";


export const getUserRequest = () =>
instance.get("/users");
