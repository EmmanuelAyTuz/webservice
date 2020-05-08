<?php

error_reporting(E_ALL ^ E_NOTICE);

include("querys.php");

// Obtener usuario(s)
if ($_POST['all_users']) {
    getUsers();
}

// Obtener usuario
if ($_GET['user']) {
    getUser($_GET['user']);
}

if ($_GET['users']) {
    getUsers();
}

// Obtener usuario
if ($_POST['single_user']) {
    getUser($_POST['id']);
}

// Crear usuario
if ($_POST['create_user']) {
    createUser($_POST);
}

// Elimnar usuario by ID
if ($_POST['delete_user']) {
    deleteUser($_POST);
}

// Elimnar usuario by ID
if ($_POST['update_user']) {
    udpateUser($_POST);
}
