<?php


require 'core/bootstarp.php';

//die(var_dump($app));

require Router::load('routes.php')
    ->direct(Request::uri());






























//
//require 'function.php';

//class Task
//{
//    public $description;
//    protected $completed;
//
//    public function __construct($description)
//    {
//        $this->$description = $description;
//    }
//}
//
////$task = new Task('go to the store');
//
////dd($task);
//$tasks = [
//    new Task('Go to the story'),
//    new Task('finish my screen'),
//    new Task('clean my room')
//];
//require 'index.view.php';