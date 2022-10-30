const {
    check,
    validationResult
} = require('express-validator');

const validarCampos = async (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        const errores = {
            errors: errors.array()
        }

        return res.status(400).json(errores);
    }

    next();
}


module.exports = validarCampos;