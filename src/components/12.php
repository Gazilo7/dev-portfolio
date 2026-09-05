<?php
$prices = [100, 200, 300];
foreach ($prices as &$price) {
    $price *= 1.1;   // increase each price by 10%  
}
unset($price);   // IMPORTANT after a reference loop
// $prices is now [110, 220, 330]