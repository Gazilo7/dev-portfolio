<?php
$score = 72;

if ($score >= 70) {
    echo "Grade: A";
} elseif ($score >= 60) {
    echo "Grade: B";
} elseif ($score >= 50) {
    echo "Grade: C";
} elseif ($score >= 40) {
    echo "Grade: D";
} else {
    echo "Grade: F (Fail)";
}