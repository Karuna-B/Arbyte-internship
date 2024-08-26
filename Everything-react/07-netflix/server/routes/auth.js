const router = require("express").router;
const { check, validationResult } = require("express-validator");
const { prisma } = require("../db");

router.post(
  "/signup",
  [
    check("email", "please input a valid email"),
    check(
      "password",
      "Please input a password with a min length of 6"
    ).isLength({ min: 6 }),
    check(
      "username",
      "Please input a username with a min length of 6"
    ).isLength({ min: 6 }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array(),
      });
    }

    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (user) {
      return res.status(400).json({
        errors: [{ msg: "This user aready exists" }],
      });
    }
    
    const { email, password, username } = req.body;
  }
);

module.exports = {
  router,
};
