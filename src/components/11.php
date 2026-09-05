<?php
$courses = ["Frontend Dev", "Backend Dev I", "Database Mgt"];
foreach ($courses as $course) {
    echo $course . "\n";
}
$student = ["name" => "Halima", "level" => "HND 1"];
foreach ($student as $field => $value) {
    echo ucfirst($field) . ": $value\n";
}
// name: Halima
// level: HND 1