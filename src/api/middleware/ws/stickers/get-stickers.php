<?php

session_start();
require_once '../../includes/config.php';

header("Access-Control-Allow-Origin: *");
header("Content-type:application/json");

$data = json_decode(file_get_contents('php://input'), true);
$return_data = array();


$params['username'] = "Yazon";
$params['password'] = "Yazon12345";

$results = get_rest_url('register', 'user', $params);
var_dump($results);
$return_data['code'] = $results['code'];
$return_data['msg'] = $results['exp'];

if ($results['code'] == 1) {
    $return_data['data'] = $results['result'];
} else {
    $return_data['data'] = null;
}
echo json_encode($return_data);
exit;
?>
