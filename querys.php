<?php
    // Funcion para visualizar los usuarios
    function getUsers()
    {
        include('connection.php');

        $sql = "SELECT * FROM t_usuarios";

        $result = $conn->query($sql);

        if ($result->num_rows > 0) {
            $users = [];
            while ($row = $result->fetch_assoc()) {
                //JSON
                array_push($users, $row);
            }
            echo json_encode($users);
        } else {
            $error = new stdClass();
            $error->msg = "Sin resultados...";
            $error->id = 0;
            echo json_encode($error);
        }
    }

    // Funcion para visualizar un usuario
    function getUser($id)
    {
        include('connection.php');
        $sql = "SELECT * FROM t_usuarios WHERE id = '".$id."'";
        $result = $conn->query($sql);
        $user = [];
        if ($result->num_rows > 0) {
            array_push($user, $result->fetch_assoc());
            echo json_encode($user);
        } else {
            echo json_encode("Sin resultado...");
        }
    }

    // Funcion para crear el usuario
    function createUser($data)
    {
        include('connection.php');
        if (empty(trim($data['nombre'])) || (intval($data['edad']) < 18) && (intval($data['edad']) > 99)) {
            die();
        } else {
            $sql = "INSERT INTO t_usuarios (nombre, edad, genero) VALUES ('".$data['nombre']."', '".$data['edad']."', '".$data['genero']."')";
            $conn->query($sql);
        }
    }

    // Funcion para eliminar el usuario
    function deleteUser($data)
    {
        include('connection.php');
        $sql = "DELETE FROM t_usuarios WHERE id='".$data['id']."'";
        $conn->query($sql);
    }

    // Funcion para actualizar el usuario
    function udpateUser($data)
    {
        include('connection.php');
        $sql = "UPDATE t_usuarios SET nombre='".$data['nombre']."', edad='".$data['edad']."', genero='".$data['genero']."' WHERE id='".$data['id']."'";
        $conn->query($sql);
    }
