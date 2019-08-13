<?php

define("___APP", "Backend");
try {
    if (isset($_GET['lang']) && !empty($_GET['lang'])) {
        $_SESSION[___APP]['lang'] = $_GET['lang'];
    } elseif (!isset($_SESSION[___APP]['lang']) || empty($_SESSION[___APP]['lang'])) {
        $_SESSION[___APP]['lang'] = "ar";
    }


} catch (Exception $e) {
    $_SESSION[___APP]['lang'] = "en";
}

$DevLink = "http://localhost/Angular Landing/src/app/api/";
$AdminDevLink = "";
$ProxyLocal = "";
$DefaultLocationLocal = "";
$SFTPDev = "";


if ($_SERVER['HTTP_HOST'] == "localhost") {
    $restful_url = $DevLink;
    $restful_admin_url = $AdminDevLink;
    $proxy = $ProxyLocal;
    $default_location = $DefaultLocationLocal;
    $sftp_location = $SFTPDev;
}

require_once '../../langs/' . $_SESSION[___APP]['lang'] . '.php';
require_once 'meta_data.php';
require_once 'class.upload.php';
require_once 'class.crawler.php';

require_once 'phpseclib/Net/SFTP.php';

require_once 'functions.php';
require_once 'errors.php';

$data = json_decode(file_get_contents('php://input'), true);

if (isset($_SESSION[___APP]['change_username']) && ($_SESSION[___APP]['change_username'] === true) && (!isset($data['change_username']))&& (!isset($data['login_action']))) {
    global $err;
    $returned_data['code'] = $err['CHGUSENM']['code'];
    $returned_data['msg'] = $err['CHGUSENM']['msg'];
    $returned_data['data'] = null;
    echo json_encode($returned_data);
    exit;
}
