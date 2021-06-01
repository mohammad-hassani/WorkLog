<?php

header('Access-Control-Allow-Origin: http://localhost:3000');

class  Connection
{
    public static function make($config)
    {
        try {
            //return new PDO('mysql:host=127.0.0.1;dbname=work_log', 'root', '');

            return new PDO(
                $config['connection'].';dbname='.$config['name'],
                $config['username'],
                $config['password'],
                $config['options']
            );
            echo "connected successfully";
        } catch (PDOException $e) {
            die($e->getMessage());
        }

    }
}