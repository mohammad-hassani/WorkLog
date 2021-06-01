<?php

//

$url = parse_url($_SERVER['REQUEST_URI']);
$action = explode("/", $url['path']);


switch ($action[2]) {
    case 'del-task':
        $id = $_GET['id'];
        $result = $app['database']->delete('tabletask', $id);
        echo json_encode($result);
        break;
    case 'add-task':
        $userid = $_GET['userid'];
        $start_time = $_GET['start_time'];
        $end_time = $_GET['end_time'];
        $date = $_GET['date'];
        $result = $app['database']->insertTask($userid, $start_time, $end_time, $date);
        echo $result;
        break;
    case 'show-task':
        $users = $app['database']->selectAll('tabletask');
        echo json_encode($users);
        break;
    case 'show-user-task':
        $userid = $_GET['userid'];
        $tasks = $app['database']->selectTasks($userid);
        echo json_encode($tasks);
}

