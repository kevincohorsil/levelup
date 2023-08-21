export const nameValidation = {
  notEmpty: {
    args: true,
    msg: 'El Nombre no debe ser Nulo',
  },
  len: {
    args: [10, 50],
    msg: 'El nombre debe tener entre 10 y 50 caracteres.',
  },
}

export const emailValidation = {
  len: {
    args: [2, 50],
    msg: 'El Correo debe tener entre 2 y 50 caracteres.',
  },
  isEmail: {
    args: true,
    msg: 'El Formato del Correo no es Correcto ',
  },
}

export const phoneValidation = {
  len: {
    args: [9, 9],
    msg: 'El Telefono debe tener entre 9 caracteres. incluyendo el -',
  },
}

export const photoValidation = {
  len: {
    args: [0, 100],
    msg: 'El Link de la Foto debe tener entre 9 caracteres. incluyendo el -',
  },
}

export const identidadValidation = {
  notEmpty: {
    args: true,
    msg: 'la Identidad no debe ser Nulo',
  },
  len: {
    args: [10, 50],
    msg: 'La Identidad debe tener entre 13 caracteres. sin los Guiones',
  },
}
