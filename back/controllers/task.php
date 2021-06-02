<?php

//
header('Access-Control-Allow-Origin: http://localhost:3000');

$url = parse_url($_SERVER['REQUEST_URI']);
$action = explode("/", $url['path']);


switch ($action[2]) {
    case 'del-task':
        $id = $_GET['id'];
        $result = $app['database']->delete('tabletask', $id);
        echo json_encode($result);
        break;
    case 'add-task':
        $dataTask = json_decode(file_get_contents('php://input'), true);
        $userid = $dataTask['userid'];
        $start_time = $dataTask['start_time'];
        $end_time = $dataTask['end_time'];
        $date = $dataTask['date'];
        $result = $app['database']->insertTask($userid, $start_time, $end_time, $date);
        echo $result;
        break;
    case 'show-task':
        $users = $app['database']->selectAll('tabletask');
        echo json_encode($users);
        break;
    case 'show-user-task':
        $data = json_decode(file_get_contents('php://input'), true);
        $userid = $data['userid'];
        $tasks = $app['database']->selectTasks($userid);
        echo json_encode($tasks);
}

