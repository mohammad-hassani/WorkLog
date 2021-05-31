<?php


class UserModel
{
    public $id;
    public $name;
    public $tocken;
    public $create_at;

    public function __construct($name)
    {
        $this->tocken = generateRandomString(8);
        $this->create_at = date("Y-m-d h:i:sa");
        $this->name = $name;
    }
}


function generateRandomString($length = 10)
{
    $characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    $charactersLength = strlen($characters);
    $randomString = '';
    for ($i = 0; $i < $length; $i++) {
        $randomString .= $characters[rand(0, $charactersLength - 1)];
    }
    return $randomString;
}