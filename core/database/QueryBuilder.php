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

    public function insertUser($name)
    {
        $user = new UserModel($name);

        $sql = 'INSERT INTO tableuser(name,tocken,create_at) VALUES(:name,:tocken,:create_at)';
        $statement = $this->pdo->prepare($sql);
        $statement->execute([
            ':name' => $user->name,
            ':tocken' => $user->tocken,
            ':create_at' => $user->create_at
        ]);
        return $this->pdo->lastInsertId();
    }

    public function insertTask($userid, $start_time, $end_time, $date)
    {
        $task = new TaskModel($userid, $start_time, $end_time, $date);

        $sql = 'INSERT INTO tabletask(userid,start_time,end_time,date,create_at) '
            . 'VALUES(:userid,:start_time,:end_time,:date,:create_at)';
        $statement = $this->pdo->prepare($sql);
        $statement->execute([
            ':userid' => $task->userid,
            ':start_time' => $task->start_time,
            ':end_time' => $task->end_time,
            ':date' => $task->date,
            ':create_at' => $task->create_at
        ]);
        return $this->pdo->lastInsertId();
    }

    public function delete($table, $id)
    {
        $sql = 'DELETE FROM {$table} '
            . 'WHERE id = :id';
        $stmt = $this->pdo->prepare($sql);
        $stmt->bindValue(':id', $id);
        $stmt->execute();
//        return $stmt->rowCount();
        return true;
    }
}