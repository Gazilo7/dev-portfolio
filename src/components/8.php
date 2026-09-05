<?php
$label = match(true) {
    $score >= 70 => "Distinction",
    $score >= 50 => "Merit",
    default      => "Pass or Fail",
};