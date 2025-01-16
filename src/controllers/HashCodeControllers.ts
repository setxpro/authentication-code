import { Router } from 'express'
import { generate, validate } from '../services/HashCodeService';

const hashRouter = Router();

hashRouter.post("/generate", generate)
hashRouter.post("/validate", validate)

export default hashRouter;