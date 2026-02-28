import jwt from "jsonwebtoken";

// Middleware to verify user authentication
const authUser = async (req, res, next) => {
    try {
        const { token } = req.headers;
        if (!token) {
            return res.json({ success: false, message: "No token provided Login Again" });
        }

        // Verify token
        const token_decode = jwt.verify(token, process.env.JWT_SECRET_KEY);
        req.userId = token_decode.id
        next();

    } catch (error) {
        console.log(error)
        res.json({ success: false, message: "Invalid token or error verifying token" });
    }
}

export default authUser;