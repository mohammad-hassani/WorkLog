<?php


class TaskModel
{
    public $id;
    public $userid;
    public $start_time;
    public $end_time;
    public $date;
    public $create_at;

    public function __construct($userid,$start_time,$end_time,$date)
    {
        $this->userid = $userid;
        $this->start_time = $start_time;
        $this->end_time = $end_time;
        $this->date = $date;
        $this->create_at = date("Y-m-d h:i:sa");
    }
}