const { body } = require('express-validator');
const path = require('path')

module.exports = [
	body('nombre').notEmpty().withMessage('Tienes que escribir un nombre'),
	body('nombreUsuario').notEmpty().withMessage('Tienes que escribir un nombre de usuario'),
	body('fecha').notEmpty().withMessage('Tienes que seleccionar una fecha').bail()
	.isDate().withMessage('Selecciona una fecha valida'),
	body('generos').notEmpty().withMessage('Selecciona al menos una categoria'),
	body('contra').notEmpty().withMessage('Tienes que escribir una contraseña'),
	body('fotoUsuario').custom((value, { req }) => {
		let file = req.file;
		let acceptedExtensions = [ '.jpg', '.png', '.jpeg', '.gif'];
		if ( !file ) {
			throw new Error('Tienes que subir una imagen')
		} else {
			let fileExtension = path.extname(file.originalname);
			if ( !acceptedExtensions.includes(fileExtension)) {
				throw new Error(`Las extensiones de archivo permitidas son ${ acceptedExtensions.join(', ') }`);
			}
		}

		return true
	})
]