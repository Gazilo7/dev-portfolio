<?php
$i = 1;
while ($i <= 5) {
    echo $i . "\n";
    $i++;           // update, to avoid an infinite loop
}
// Output: 1 2 3 4 5
?>