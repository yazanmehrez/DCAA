<?php
session_start();

require_once '../config.php';
$string = '';

for ($i = 0; $i < 5; $i++) {
//    $string .= chr(rand(97, 122));
    $string .= rand(0, 9);
}

$_SESSION[___APP]['rand_code'] = $string;

$dir = 'fonts/';
$image = imagecreatefromjpeg("default.jpg");

$black = imagecolorallocate($image, 150, 150, 150);

$grey1[0] = imagecolorallocate($image, 220, 34, 41);
$grey1[1] = imagecolorallocate($image, 160, 10, 10);
$grey1[2] = imagecolorallocate($image, 120, 120, 120);

$oNum = rand(0, 2);

imagettftext($image, 40, rand(-15, 15), 20, 50, $grey1[$oNum], $dir . "times_new_yorker.ttf", $string[0]);
$oNum++;
if ($oNum == 3)
    $oNum = 0;
imagettftext($image, 40, rand(-15, 15), 45, 50, $grey1[$oNum], $dir . "times_new_yorker.ttf", $string[1]);
$oNum++;
if ($oNum == 3)
    $oNum = 0;
imagettftext($image, 40, rand(-15, 15), 70, 50, $grey1[$oNum], $dir . "times_new_yorker.ttf", $string[2]);
$oNum++;
if ($oNum == 3)
    $oNum = 0;
imagettftext($image, 40, rand(-15, 15), 95, 50, $grey1[$oNum], $dir . "times_new_yorker.ttf", $string[3]);
$oNum++;
if ($oNum == 3)
    $oNum = 0;
imagettftext($image, 40, rand(-15, 15), 110, 50, $grey1[$oNum], $dir . "times_new_yorker.ttf", $string[4]);

imagettftext($image, 7.1, 0, 74, 72, $black, $dir . "arial.ttf", "Powered by Yazan");

header("Content-type: image/png");/**/
imagepng($image);

?>
