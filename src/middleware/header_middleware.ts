import { Request, Response, NextFunction } from "express";

const AUTH_KEY = "X-TOTO-73";

export default (value: string) => (req: Request, res: Response, next: NextFunction) => {
    if (req.headers[AUTH_KEY] !== value && req.query[AUTH_KEY] !== value) {
        return res.status(401).json({ message: "Unauthorized" });
    }

    next();
}
