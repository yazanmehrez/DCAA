<?php
session_start();
header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *");
require_once('config.php');
$request_headers = Helper::check_header();
global $headers;
date_default_timezone_set("Asia/Damascus");
$result = array();
$json = file_get_contents('php://input');
$data = json_decode(Helper::objectToArray($json), true);
$prefix = '';
$function = isset($_GET['function']) ? Helper::make_safe($_GET['function']) : null;
$valid = true;
$method = strtolower($_SERVER['REQUEST_METHOD']);
if ($request_headers['code'] == 1) {
    if (!empty($_SESSION[___APP])) {
        $session_key = $_SESSION[___APP]['session_key'] ? $_SESSION[___APP]['session_key'] : NULL;
    } else {
        $session_key = NULL;
    }
    if ($function) {
        if (!in_array($function, array('login', 'register', 'check_version'))) {
            if ($session_key) {
                $valid = Queries::check_session_alive($session_key);
                if (!$valid) {
                    $result = Helper::response(\Model\Enums::$code['session_expired'], Exceptions::session_expired());
                } else {
                    $jw_token = $headers['Authorization'];
                    $jwt_validation = Helper::jwt_validation($jw_token);
                    if (empty($jwt_validation)) {
                        $data['user_id'] = $valid;
                    } else {
                        $result = $jwt_validation;
                        $valid = false;
                    }
                }
            } else {
                $result = Helper::response(\Model\Enums::$code['session_not_found'], Exceptions::session_not_found());
                $valid = false;
            }
        }
        if ($valid) {
            switch ($function) {
                case 'login':
                    {
                        $result = User::login($data);
                        break;
                    }
                case 'register':
                    {
                        $result = User::register($data);
                        break;
                    }
                case 'get_products':
                    {
                        $result = User::get_products($data);
                        break;
                    }
                case 'get_users':
                    {
                        $result = User::get_users();
                        break;
                    }
                case 'upload_profile_pic':
                    {
                        $result = User::upload_profile_pic($data);
                        break;
                    }
                case 'logout':
                    {
                        session_unset();
                        $result = 'success';
                        break;
                    }
                default:
                    {
                        $result = Helper::response(\Model\Enums::$code['not_found_api'], Exceptions::not_found_api());
                        break;
                    }
            }
        }
    } else {
        $result = Helper::response(\Model\Enums::$code['invalid_request'], Exceptions::invalid_request());
    }

} elseif ($request_headers['code'] == -11) {
    $result = Helper::response(\Model\Enums::$code['new_version'], Exceptions::new_version(), $request_headers['data']);
} else {
    $result = Helper::response(\Model\Enums::$code['header_fail'], $request_headers['msg']);
}

echo json_encode($result);
exit;

?>
