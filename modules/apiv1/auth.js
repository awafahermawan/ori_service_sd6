module.exports = {
    isAuth: (req,res,next) => {
        let authHeader = req.headers.authorization;
        let setHeader = "da3eec008ec45371d190119fec4673a4cd284566" // SHA1('ORIAdministration')
        if (authHeader == setHeader) {
            next()
        } else {
            res.status(401).json({
                code: 401,
                message: "Unauthorized"
            });
        }
    }
}