<?php
header('Access-Control-Allow-Origin: http://localhost:3000');

class Request
{
    public static function uri()
    {
        return trim(parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH), '/');
//        return trim($_SERVER['REQUEST_URI'], '/');
    }
}
