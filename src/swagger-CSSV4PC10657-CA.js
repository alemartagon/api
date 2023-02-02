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
                    summary: "Returns all hombres from the system that the user has access to",
                    tags: [
                        "hombres"
                    ],
                    responses: {
                        200: {
                            description: "A list of hombres.",
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
                                                "name": "Samba"
                                            }
                                        }
                                    }
                                }

                            }
                        }
                    }
                },
                post: {
                    summary: "Create a new hombre",
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
                                    "name": "Leon"
                                }
                            }
                        },
                        required: true
                    },
                    responses: {
                        201: {
                            description: "The hombre was successfully created.",
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
                                            "name": "Leon"
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
                    summary: "Returns a hombre from the system that the user has access to",
                    tags: [
                        "hombres"
                    ],
                    parameters: [
                        {
                            name: "id",
                            in: "path",
                            description: "ID of hombre to fetch",
                            required: true,
                            type: "integer",
                            format: "int64"
                        }
                    ],
                    responses: {
                        200: {
                            description: "A hombre.",
                            content: {
                                "application/json": {
                                    schema: {
                                        type: "object",
                                        properties: {
                                            name: {
                                                type: "string"

                                            }
                                        }, example: {
                                            "name": "Perro"
                                        }
                                    }
                                }
                            }
                        }
                    }
                },
                put: {
                    summary: "Updates a hombre from the system",
                    tags: [
                      "hombres"
                    ],
                    parameters: [
                      {
                        name: "id",
                        in: "path",
                        description: "ID of hombre to update",
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
                              "name": "Leon"
                            }
                          }
                        }
                      }
                    },
                    responses: {
                      200: {
                        description: "A updated hombre.",
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
                                "message": "hombre updated"
                              }
                            }
                          }
                        }
                      }
                    }
                },
                delete: {
                    summary: "Deletes a hombre from the system",
                    tags: [
                        "hombres"
                    ],
                    parameters: [
                        {
                            name: "id",
                            in: "path",
                            description: "ID of hombre to delete",
                            required: true,
                            type: "integer",
                            format: "int64"
                        }
                    ],
                    responses: {
                        200: {
                            description: "A hombre.",
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
                                            "message": "hombre borrado"
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
                    summary: "Returns all mujeres from the system that the user has access to",
                    tags: [
                        "mujeres"
                    ],
                    responses: {
                        200: {
                            description: "A list of mujeres.",
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
                                                "name": "Besugo"
                                            }
                                        }
                                    }
                                }

                            }
                        }
                    }
                },
                post: {
                    summary: "Create a new mujer",
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
                                    "name": "mujer Gato"
                                }
                            }
                        },
                        required: true
                    },
                    responses: {
                        201: {
                            description: "The mujer was successfully created.",
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
                                            "name": "mujer Gato"
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
                    summary: "Returns a mujer from the system that the user has access to",
                    tags: [
                        "mujeres"
                    ],
                    parameters: [
                        {
                            name: "id",
                            in: "path",
                            description: "ID of mujer to fetch",
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
                                            name: {
                                                type: "string"
                                            }
                                        }, example: {
                                            "name": "Besugo"
                                        }
                                    }
                                }
                            }
                        }
                    }
                },
                put: {
                    summary: "Updates a mujer from the system",
                    tags: [
                      "mujeres"
                    ],
                    parameters: [
                      {
                        name: "id",
                        in: "path",
                        description: "ID of mujer to update",
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
                              "name": "mujer Payaso"
                            }
                          }
                        }
                      }
                    },
                    responses: {
                      200: {
                        description: "A updated mujer.",
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
                                "message": "mujer updated"
                              }
                            }
                          }
                        }
                      }
                    }
                },
                delete: {
                    summary: "Deletes a mujer from the system",
                    tags: [
                        "mujeres"
                    ],
                    parameters: [
                        {
                            name: "id",
                            in: "path",
                            description: "ID of mujer to delete",
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
                                            "message": "mujer borrado"
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