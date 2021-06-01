<?php

//
//class Constructor{
//protected $electrician;
//public $plumber;
//    public function __construct($electrician , $plumber , $designer)
//    {
//        $this->electrician=$electrician;
//        $this->plumber = $plumber;
//    }
//}
header('Access-Control-Allow-Origin: http://localhost:3000');
require 'models/UserModel.php';
require 'models/TaskModel.php';
class QueryBuilder
{
    public $pdo;

    public function __construct(PDO $pdo)
    {
        $this->pdo = $pdo;
    }


    public function selectAll($table)
    {
        $statment = $this->pdo->prepare("select * from {$table}");
        $statment->execute();
        return $statment->fetchAll(PDO::FETCH_CLASS);
    }

    public function selectTasks($userid)
    {
        $statment = $this->pdo->prepare("select * from tabletask where tabletask.userid={$userid} ");
        $statment->execute();
        return $statment->fetchAll(PDO::FETCH_CLASS);
    }


    public function insertUser($name, $email, $password)
    {
        $user = new UserModel($name, $email, $password);
        $sql = "INSERT INTO tableuser(name,tocken,create_at,email,password) VALUES(:name,:tocken,:create_at,:email,:password)";
        $statement = $this->pdo->prepare($sql);
        $statement->execute([
            ":name" => $user->name,
            ":tocken" => $user->tocken,
            ":create_at" => $user->create_at,
            ":email" => $user->email,
            ":password" => $user->password,
        ]);
        $lastId= $this->pdo->lastInsertId();
        $result = $lastId == 0 ? $statement->errorInfo() : $lastId;
        return json_encode($result);
    }

    public function insertTask($userid, $start_time, $end_time, $date)
    {
        $task = new TaskModel($userid, $start_time, $end_time, $date);

        $sql =" INSERT INTO tabletask(userid,start_time,end_time,date,create_at) "
            . "VALUES(:userid,:start_time,:end_time,:date,:create_at)";
        $statement = $this->pdo->prepare($sql);
        $statement->execute([
            ":userid" => $task->userid,
            ":start_time" => $task->start_time,
            ":end_time" => $task->end_time,
            ":date" => $task->date,
            ":create_at" => $task->create_at
        ]);
        $lastId= $this->pdo->lastInsertId();
        $result = $lastId == 0 ? $statement->errorInfo() : $lastId;
        return json_encode($result);
    }

    public function delete($table, $id)
    {
        $sql = "DELETE FROM {$table} "
            . "WHERE id = :id";
        $stmt = $this->pdo->prepare($sql);
        $stmt->bindValue(":id", $id);
        if($stmt->execute() == true){
            return true;
        }
        print_r($stmt->errorInfo());
        return false;
    }

    function login($email, $password)
    {
        $statment = $this->pdo->prepare("select id from tableuser where tableuser.email = '{$email}' AND tableuser.password='{$password}' ");
        $statment->execute();
        return $statment->fetchAll(PDO::FETCH_CLASS);
    }
}