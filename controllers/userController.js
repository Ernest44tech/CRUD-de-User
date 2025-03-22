class UserController {
    constructor({ userService }) {
        this.userService = userService;
    }

    async register(req, res) {
        try {
            const user = await this.userService.register(req.body);
            res.status(201).json(user);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    async login(req, res) {
        try {
            const result = await this.userService.login(req.body.email, req.body.password);
            res.json(result);
        } catch (error) {
            res.status(401).json({ error: error.message });
        }
    }
}

module.exports = UserController;
