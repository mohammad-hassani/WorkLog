<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
<ul>
    hi
    <br>
    <?php
    foreach ($tasks as $task): ?>
        <li> <?= $task->name; ?> </li>
    <?php endforeach; ?>
</ul>
</body>
</html>