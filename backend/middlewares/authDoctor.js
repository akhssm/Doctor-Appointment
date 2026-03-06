import jwt from "jsonwebtoken";

// Middleware to verify doctor authentication
const authDoctor = async (req, res, next) => {
    try {
        const dToken = req.headers.dtoken;
        if (!dToken) {
            return res.json({ success: false, message: "No token provided Login Again" });
        }

        // Verify token
        const token_decode = jwt.verify(dToken, process.env.JWT_SECRET_KEY);
        req.docId = token_decode.id
        next();

    } catch (error) {
        console.log(error)
        res.json({ success: false, message: "Invalid token or error verifying token" });
    }
}

export default authDoctor;