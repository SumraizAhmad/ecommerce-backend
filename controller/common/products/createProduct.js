const productService = require("../../../service/productService");
const Joi = require("joi");

const { StatusCodes } = require("http-status-codes");

const schema = Joi.object().keys({
  // email: Joi.string()
  //     .email({ tlds: { allow: false } })
  //     .required(),
  // password: Joi.string().required(),
  // userName: Joi.string().required(),
  // phoneNumber: Joi.string().required(),
  // firstName : Joi.string().required(),
  // lastName: Joi.string().required(),
  // roleId: Joi.number().required(),
  title: Joi.string().required(),
  price: Joi.number().required(),
  description: Joi.string(),
  category: Joi.string(),
});

module.exports = async function (req, res) {
  try {
    const validate = await schema.validateAsync(req.body, {
      abortEarly: false,
    });

    if (validate.error) {
      res.status(StatusCodes.BAD_REQUEST).send({
        data: {},
        message: err.message,
        error: err.stack,
      });
    }

    const data = await productService.createProduct(req.body);
    res.status(StatusCodes.OK).send({ message: "Success", data, error: {} });
  } catch (err) {
    res.status(StatusCodes.METHOD_NOT_ALLOWED).send({
      data: {},
      message: err.message,
      error: err.stack,
    });
  }
};

// module.exports = async function ( req, res ) {
//     const data = await productService.createProduct( req.body );
//     res.send( data );
// }
