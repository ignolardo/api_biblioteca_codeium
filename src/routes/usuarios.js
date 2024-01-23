const express = require("express");
const router = express.Router();

const { getAllUsers, getUserById, createUser, updateUser, deleteUser } = require("../controllers/usuarioController");

const { requiredScopes } = require("express-oauth2-jwt-bearer");

router.get("/", requiredScopes("read:libros"), getAllUsers);

router.get("/:id", requiredScopes("read:libros"), getUserById);

router.post("/", requiredScopes("write:libros"), createUser);

router.put("/:id", requiredScopes("write:libros"), updateUser);

router.delete("/:id", requiredScopes("write:libros"), deleteUser);

module.exports = router;