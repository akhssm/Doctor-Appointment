import jwt from "jsonwebtoken";

// Middleware to verify admin authentication
const authAdmin = async (req, res, next) => {
    try {
        const { atoken } = req.headers;
        if (!atoken) {
            return res.json({ success: false, message: "No token provided Login Again" });
        }

        // Verify token
        const token_decode = jwt.verify(atoken, process.env.JWT_SECRET_KEY);

        if (token_decode !== process.env.ADMIN_EMAIL + process.env.ADMIN_PASSWORD) {
            return res.json({ success: false, message: "Invalid token" });
        }

        next();

    } catch (error) {
        console.log(error)
        res.json({ success: false, message: "Invalid token or error verifying token" });
    }
}

export default authAdmin;