const path = require('path');
const swaggerUI = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerSpec =

{
    definition: {
        openapi: "3.0.0",
        info: {
            title: "API",
            version: "1.0",
            description: "API for DAW",
            contact: {
                name: "DAW CLASS",
                email: "support@gmail.com",
                url: "https://api.com"
            },
            license: {
                name: "GPLv3",
                url: "https://www.gnu.org/licenses/gpl-3.0.en.html"
            },
        },
        paths: {
            "/api/hombres": {
                get: {
                    summary: "Devuelve los hombresd del sistema",
                    tags: [
                        "hombres"
                    ],
                    responses: {
                        200: {
                            description: "Una lista de hombres.",
                            content: {
                                "application/json": {
                                    schema: {
                                        type: "array",
                                        items: {
                                            type: "object",
                                            properties: {
                                                id: {
                                                    type: "integer",
                                                    format: "int64"
                                                },
                                                name: {
                                                    type: "string"
                                                }
                                            }, example: {

                                                "id": 1,
                                                "name": "Roberto"
                                            }
                                        }
                                    }
                                }

                            }
                        }
                    }
                },
                post: {
                    summary: "Crear un nuevo hombre",
                    tags: [
                        "hombres"
                    ],
                    requestBody: {
                        content: {
                            "application/json": {
                                schema: {
                                    type: "object",
                                    properties: {
                                        name: {
                                            type: "string"
                                        }
                                    },
                                    required: [
                                        "name"
                                    ]
                                },
                                example: {
                                    "name": "Bernat"
                                }
                            }
                        },
                        required: true
                    },
                    responses: {
                        201: {
                            description: "El hombre fue creado.",
                            content: {
                                "application/json": {
                                    schema: {
                                        type: "object",
                                        properties: {
                                            id: {
                                                type: "integer",
                                                format: "int64"
                                            },
                                            name: {
                                                type: "string"
                                            }
                                        },
                                        example: {
                                            "id": 11,
                                            "name": "Angel"
                                        }
                                    }
                                }
                            }
                        }
                    }
                },
            },
            "/api/hombres/{id}": {
                get: {
                    summary: "Delvueve los hombres del sistema por su ID",
                    tags: [
                        "hombres"
                    ],
                    parameters: [
                        {
                            name: "id",
                            in: "path",
                            description: "ID del hombre para buscarlo",
                            required: true,
                            type: "integer",
                            format: "int64"
                        }
                    ],
                    responses: {
                        200: {
                            description: "Un hombre.",
                            content: {
                                "application/json": {
                                    schema: {
                                        type: "object",
                                        properties: {
                                            name: {
                                                type: "string"

                                            }
                                        }, example: {
                                            "name": "Quevedo"
                                        }
                                    }
                                }
                            }
                        }
                    }
                },
                put: {
                    summary: "Actualiza lod hombres del sistema por su ID",
                    tags: [
                        "hombres"
                    ],
                    parameters: [
                        {
                            name: "id",
                            in: "path",
                            description: "ID del hombre para actualizarlo",
                            required: true,
                            type: "integer",
                            format: "int64"
                        }
                    ],
                    requestBody: {
                        required: true,
                        content: {
                            "application/json": {
                                schema: {
                                    type: "object",
                                    properties: {
                                        name: {
                                            type: "string"
                                        }
                                    },
                                    example: {
                                        "name": "Pedro"
                                    }
                                }
                            }
                        }
                    },
                    responses: {
                        200: {
                            description: "Un hombre actualizado.",
                            content: {
                                "application/json": {
                                    schema: {
                                        type: "object",
                                        properties: {
                                            message: {
                                                type: "string"
                                            }
                                        },
                                        example: {
                                            "message": "hombre actualizado!"
                                        }
                                    }
                                }
                            }
                        }
                    }
                },
                delete: {
                    summary: "Eliminar hombres del sistema por su ID",
                    tags: [
                        "hombres"
                    ],
                    parameters: [
                        {
                            name: "id",
                            in: "path",
                            description: "ID del hombre para borrarlo",
                            required: true,
                            type: "integer",
                            format: "int64"
                        }
                    ],
                    responses: {
                        200: {
                            description: "Un hombre.",
                            content: {
                                "application/json": {
                                    schema: {
                                        type: "object",
                                        properties: {
                                            message: {
                                                type: "string"
                                            }
                                        },
                                        example: {
                                            "message": "hombre borrado!"
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            },
            "/api/mujeres": {
                get: {
                    summary: "Devuelve la lista de mujeres del sistema",
                    tags: [
                        "mujeres"
                    ],
                    responses: {
                        200: {
                            description: "Una lista de mujeres.",
                            content: {
                                "application/json": {
                                    schema: {
                                        type: "array",
                                        items: {
                                            type: "object",
                                            properties: {
                                                id: {
                                                    type: "integer",
                                                    format: "int64"
                                                },
                                                name: {
                                                    type: "string"
                                                }
                                            }, example: {

                                                "id": 1,
                                                "name": "Lola"
                                            }
                                        }
                                    }
                                }

                            }
                        }
                    }
                },
                post: {
                    summary: "Crear una nueva mujer",
                    tags: [
                        "mujeres"
                    ],
                    requestBody: {
                        content: {
                            "application/json": {
                                schema: {
                                    type: "object",
                                    properties: {
                                        name: {
                                            type: "string"
                                        }
                                    },
                                    required: [
                                        "name"
                                    ]
                                },
                                example: {
                                    "name": "Maria"
                                }
                            }
                        },
                        required: true
                    },
                    responses: {
                        201: {
                            description: "Has creado una nueva mujer en el sistema!",
                            content: {
                                "application/json": {
                                    schema: {
                                        type: "object",
                                        properties: {
                                            id: {
                                                type: "integer",
                                                format: "int64"
                                            },
                                            name: {
                                                type: "string"
                                            }
                                        },
                                        example: {
                                            "id": 11,
                                            "name": "Maria"
                                        }
                                    }
                                }
                            }
                        }
                    }
                },
            },
            "/api/mujeres/{id}": {
                get: {
                    summary: "Devuelve las mujeres del sistema por su ID",
                    tags: [
                        "mujeres"
                    ],
                    parameters: [
                        {
                            name: "id",
                            in: "path",
                            description: "ID de la muejr para enctontrarla",
                            required: true,
                            type: "integer",
                            format: "int64"
                        }
                    ],
                    responses: {
                        200: {
                            description: "Una mujer.",
                            content: {
                                "application/json": {
                                    schema: {
                                        type: "object",
                                        properties: {
                                            name: {
                                                type: "string"
                                            }
                                        }, example: {
                                            "name": "Maria"
                                        }
                                    }
                                }
                            }
                        }
                    }
                },
                put: {
                    summary: "Actualizar mujeres del sistema por su ID",
                    tags: [
                        "mujeres"
                    ],
                    parameters: [
                        {
                            name: "id",
                            in: "path",
                            description: "ID de la muejr para actualizarla",
                            required: true,
                            type: "integer",
                            format: "int64"
                        }
                    ],
                    requestBody: {
                        required: true,
                        content: {
                            "application/json": {
                                schema: {
                                    type: "object",
                                    properties: {
                                        name: {
                                            type: "string"
                                        }
                                    },
                                    example: {
                                        "name": "Maria"
                                    }
                                }
                            }
                        }
                    },
                    responses: {
                        200: {
                            description: "Una mujer actualizada.",
                            content: {
                                "application/json": {
                                    schema: {
                                        type: "object",
                                        properties: {
                                            message: {
                                                type: "string"
                                            }
                                        },
                                        example: {
                                            "message": "mujer actualizada"
                                        }
                                    }
                                }
                            }
                        }
                    }
                },
                delete: {
                    summary: "Eliminar mujeres del sistema por su ID",
                    tags: [
                        "mujeres"
                    ],
                    parameters: [
                        {
                            name: "id",
                            in: "path",
                            description: "ID de la mujer para borrarla",
                            required: true,
                            type: "integer",
                            format: "int64"
                        }
                    ],
                    responses: {
                        200: {
                            description: "A mujer.",
                            content: {
                                "application/json": {
                                    schema: {
                                        type: "object",
                                        properties: {
                                            message: {
                                                type: "string"
                                            }
                                        },
                                        example: {
                                            "message": "mujer borrada"
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            },
        },
    },

    apis: [path.join(__dirname, 'routes/*.js')]
};
const swaggerDocs = (app, port) => {

    app.use('/api/docs', swaggerUI.serve, swaggerUI.setup(swaggerJsDoc(swaggerSpec)));
    console.log(`Swagger docs disponible en http://localhost:/api/docs`);
}

module.exports = { swaggerDocs };