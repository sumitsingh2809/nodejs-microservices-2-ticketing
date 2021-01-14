import express from 'express';

import { currentUser } from '@ssticketingdev/common';

const router = express.Router();

interface UserPayload {
    id: string;
    email: string;
}
declare module 'express-serve-static-core' {
    interface Request {
        currentUser?: UserPayload;
    }
}

router.get('/api/users/currentuser', currentUser, (req, res) => {
    res.send({ currentUser: req.currentUser || null });
});

export { router as currentUserRouter };
