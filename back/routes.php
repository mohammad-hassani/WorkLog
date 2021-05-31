<?php

$router->define([
    ''=>'controllers/index.php',
    'about'=>'controllers/about.php',
    'contact'=>'controllers/contact.php',
    'api'=>'controllers/api.php',

    'user'=>'controllers/user.php',
    'user/del-user'=>'controllers/user.php',
    'user/show-user'=>'controllers/user.php',
    'user/add-user'=>'controllers/user.php',
    'user/login'=>'controllers/user.php',

    'task'=>'controllers/task.php',
    'task/del-task'=>'controllers/task.php',
    'task/show-task'=>'controllers/task.php',
    'task/add-task'=>'controllers/task.php',

]);




