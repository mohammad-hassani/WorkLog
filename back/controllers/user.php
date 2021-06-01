<?php

//

header('Access-Control-Allow-Origin: http://localhost:3000');

$url = parse_url($_SERVER['REQUEST_URI']);
$action = explode("/", $url['path']);


switch ($action[2]) {
    case 'del-user':
        $id = $_GET['id'];
        $result = $app['database']->delete('tableuser', $id);
        echo json_encode($result);
        break;
    case 'add-user':
        $name = $_GET['name'];
        $email = $_GET['email'];
        $password = $_GET['password'];
        $result = $app['database']->insertUser($name, $email, $password);
        echo $result;
        break;
    case 'show-user':
        $users = $app['database']->selectAll('tableuser');
        echo json_encode($users);
        break;
    case 'login':
//        $request = getInstance()->request();
//        $data = json_decode($_SERVER['REQUEST_URI']->getBody());
        $data = json_decode(file_get_contents('php://input'), true);
        $email = $data["email"];
        $password = $data["password"];
//        $email = $_GET['email'];
//        $password = $_GET['password'];
        $result = $app['database']->login($email, $password);
        echo json_encode($result);
}

