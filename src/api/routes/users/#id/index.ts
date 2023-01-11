import { Router, Request, Response } from "express";
import { User } from "@fosscord/util";
import { route } from "@fosscord/api";

const router: Router = Router();

router.get("/", route({}), async (req: Request, res: Response) => {
	const { id } = req.params;

	res.json(await User.getPublicUser(id));
});

router.patch(
	"/",
	route({ right: "OPERATOR" }),
	(req: Request, res: Response) => {},
);

export default router;
