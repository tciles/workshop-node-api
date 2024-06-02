import { Request, Response } from "express";
import ProfileService from "../service/profile_service";

const profileService = new ProfileService();

export const getProfile = async (req: Request, res: Response) => {
    res.json(await profileService.getProfile());
};
