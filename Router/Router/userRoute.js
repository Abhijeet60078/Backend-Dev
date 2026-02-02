/*import express from 'express';
const router=express.Router();
import { registerUser, loginUser, getUserProfile } from '../controllers/userController.js';
import { protect } from '../middleware/authMiddleware.js';  
router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/profile', protect, getUserProfile);
export default router;  
*/

import express from 'express';

const router = express.Router();

let loggin = (req, res, next) => {
  console.log("this is middleware");
  console.log(req.url)
  next();
}

router.use(loggin);

router.get("/", (req, res) => {
  res.send("server is running");
});

router.get("/user", (req, res) => {
  res.send("user route");
});

export default router;