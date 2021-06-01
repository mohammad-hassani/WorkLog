<?php
$app=[];
$app['config']= require 'config.php';
require 'core/Router.php';
require 'core/Request.php';
require 'core/database/connection.php';
require 'core/database/QueryBuilder.php';

header('Access-Control-Allow-Origin: http://localhost:3000');

$app['database']=
    new QueryBuilder(Connection::make($app['config']['database']));