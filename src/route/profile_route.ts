import { Router } from "express";
import { getProfile } from "../controller/profile_controller";

export default (router: Router) => {
    router.get("/profile", getProfile);
};
