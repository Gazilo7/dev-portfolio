<?php
$status = ($attendance >= 75) ? "Eligible" : "Barred";

$name = $_GET["name"] ?? "Guest";  // uses "Guest" if name is not set 