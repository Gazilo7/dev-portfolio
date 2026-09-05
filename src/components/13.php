<?php
$students = [
    ["name" => "Halima", "score" => 85],
    ["name" => "Emeka", "score" => 53],
    ["name" => "Aisha", "score" => 38],
    ["name" => "Bello", "score" => 38],
];

$passCount =0;
$failCount =0;

foreach ($students as $student) {
    $name = $student["name"];
    $score = $student["score"];

    if ($score >= 70)     { $grade = "A"; }
    elseif ($score >= 60) { $grade = "B"; }
    elseif ($score >= 50) { $grade = "C"; }
    elseif ($score >= 40) { $grade = "D"; }
    else                  { $grade = "F"; }

    $result = ($score >= 40) ? "Pass" : "Fail";
    if ($result === "Pass") { $passCount++; } else { $failCount++; }

    echo "$name: Score=$score Grade=$grade Result=$result\n";
}

echo "\n--- Summary ---\n";
echo "Total Students: " . count($students) . "\n";
echo "Passed: $passCount\n";
echo "Failed: $failCount\n";
