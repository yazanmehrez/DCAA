<?php

class Helper
{

    public static $lang;
    public static $lang_code;
    public static $ip = '';
    public static $browser_info = '';

    static public function make_safe_array($data, $except = array())
    {
        $new_array = array();
        foreach ($data as $key => $value) {
            if (in_array($key, $except)) {
                $new_array[$key] = $value;
                continue;
            }
            $new_array[$key] = self::make_safe($value);
        }
        return $new_array;
    }

    static public function make_safe($data)
    {
        if (is_array($data)) return $data;
        $data = addslashes($data);
        return $data;
    }

    static public function objectToArray($object)
    {
        if (is_object($object)) {
            $object = get_object_vars($object);
        }
        if (is_array($object)) {
            return array_map(__FUNCTION__, $object);
        } else {
            return $object;
        }
    }

    static public function unmake_safe_array($data)
    {
        $new_array = array();
        foreach ($data as $key => $value) {
            $new_array[$key] = $value;
        }
        $new_array[$key] = stripcslashes($value);
        return $data;
    }

    static public function guid()
    {
        if (function_exists('com_create_guid') === true) {
            return trim(com_create_guid(), '{}');
        }
        return sprintf('%04X%04X-%04X-%04X-%04X-%04X%04X%04X', mt_rand(0, 65535), mt_rand(0, 65535), mt_rand(0, 65535), mt_rand(16384, 20479), mt_rand(32768, 49151), mt_rand(0, 65535), mt_rand(0, 65535), mt_rand(0, 65535));
    }

    public static function check_header()
    {

        GLOBAL $headers;
        $headers = [];
        foreach ($_SERVER as $name => $value) {
            if (substr($name, 0, 5) == 'HTTP_') {
                $headers[str_replace(' ', '-', ucwords(strtolower(str_replace('_', ' ', substr($name, 5)))))] = $value;
            }
        }
        $ip = self::get_client_ip();
        $result = array();

        static::$ip = $ip;
//        if (isset($headers['Authorization'])) {
//            if ($headers['Authorization'] == Helper::jwt_validation($jw_token)) {
        if (isset($headers['Accept-Language'])) {
            if (in_array($headers['Accept-Language'], \Model\Enums::$available_languages)) {
                self::$lang_code = $language = $headers['Accept-Language'];
                require_once('lang/' . $language . '.php');
                self::$lang = $lang;
                if (isset($headers['Platform'])) {
                    if (in_array($headers['Platform'], \Model\Enums::$platforms)) {
                        \Model\Config::$platform = $headers['Platform'];
                        if (isset($headers['Os-Version'])) {
                            \Model\Config::$os_version = $headers['Os-Version'];
                            if (isset($headers['Mobile-Brand'])) {
                                \Model\Config::$mobile_brand = $headers['Mobile-Brand'];
                                if (isset($headers['App-Version'])) {
                                    \Model\Config::$app_version = $headers['App-Version'];
                                    $version = Queries::check_version_header(\Model\Config::$app_version);
                                    if (!$version['required'] === true) {
                                        $result['code'] = 1;
                                        $result['msg'] = 'Success';
                                    } else {
                                        $result['code'] = -11;
                                        $result['data'] = $version;
                                    }
                                } else {
                                    $result['code'] = -9;
                                    $result['msg'] = 'Please Insert App Version Parameter';
                                }
                            } else {
                                $result['code'] = -9;
                                $result['msg'] = 'Please Insert Mobile Brand Version Parameter';
                            }
                        } else {
                            $result['code'] = -9;
                            $result['msg'] = 'Please Insert OS Version Parameter';
                        }
                    } else {
                        $result['code'] = -9;
                        $result['msg'] = 'Platform Parameter Not Valid';
                    }
                } else {
                    $result['code'] = -9;
                    $result['msg'] = 'Please Insert Platform Parameter';
                }
            } else {
                $result['code'] = -9;
                $result['msg'] = 'Language Is Not Valid';
            }
        } else {
            $result['code'] = -9;
            $result['msg'] = 'Please Insert Language Parameter';
        }
//            } else {
//                $result['code'] = -9;
//                $result['msg'] = 'Authorization Key Not Valid';
//            }
//        } else {
//            $result['code'] = -9;
//            $result['msg'] = 'Please Insert Authorization Parameter';
//        }
        return $result;
    }

    static public function get_client_ip()
    {
        $ip_address = '';
        if (getenv('HTTP_CLIENT_IP'))
            $ip_address = getenv('HTTP_CLIENT_IP');
        else if (getenv('HTTP_X_FORWARDED_FOR'))
            $ip_address = getenv('HTTP_X_FORWARDED_FOR');
        else if (getenv('HTTP_X_FORWARDED'))
            $ip_address = getenv('HTTP_X_FORWARDED');
        else if (getenv('HTTP_FORWARDED_FOR'))
            $ip_address = getenv('HTTP_FORWARDED_FOR');
        else if (getenv('HTTP_FORWARDED'))
            $ip_address = getenv('HTTP_FORWARDED');
        else if (getenv('REMOTE_ADDR'))
            $ip_address = getenv('REMOTE_ADDR');
        else
            $ip_address = 'UNKNOWN';
        return $ip_address;

    }

    public static function is_null($field)
    {
        if (strlen($field) === 0) {
            return true;
        }
        return false;
    }

    public static function jwt($username, $password)
    {
        $header = json_encode(['typ' => 'JWT', 'alg' => 'HS256']);

        $payload = json_encode([$username => $password]);

        $base64UrlHeader = str_replace(['+', '/', '='], ['-', '_', ''], base64_encode($header));

        $base64UrlPayload = str_replace(['+', '/', '='], ['-', '_', ''], base64_encode($payload));

        $signature = hash_hmac('sha256', $base64UrlHeader . "." . $base64UrlPayload, 'aLpHA@', true);

        $base64UrlSignature = str_replace(['+', '/', '='], ['-', '_', ''], base64_encode($signature));

        $jwt = $base64UrlHeader . "." . $base64UrlPayload . "." . $base64UrlSignature;

        return $jwt;
    }

    public static function jwt_validation($token)
    {
        $result = array();
        $token = str_replace('Bearer ', '', $token);

        if (empty($token)) {
            $result['code'] = -401;
            $result['msg'] = 'Authorization Key Not Valid';
        }
        $tks = explode('.', $token);
        $_tks = explode('.', $_SESSION[___APP]['token']);

        if (count($tks) != 3) {
            $result['code'] = -401;
            $result['msg'] = 'Authorization Key Not Valid';
        }
        list($headb64, $bodyb64, $cryptob64) = $tks;
        list($_headb64, $_bodyb64, $_cryptob64) = $_tks;

        if ($_headb64 != $headb64) {
            $result['code'] = -401;
            $result['msg'] = 'Authorization Header Not Valid';
        }
        if ($bodyb64 != $_bodyb64) {
            $result['code'] = -401;
            $result['msg'] = 'Authorization Body Not Valid';
        }
        if ($cryptob64 != $_cryptob64) {
            $result['code'] = -401;
            $result['msg'] = 'Authorization Signature Not Valid';
        }
        return $result;
    }

    public static function jsonDecode($input)
    {
        if (version_compare(PHP_VERSION, '5.4.0', '>=') && !(defined('JSON_C_VERSION') && PHP_INT_SIZE > 4)) {
            /** In PHP >=5.4.0, json_decode() accepts an options parameter, that allows you
             * to specify that large ints (like Steam Transaction IDs) should be treated as
             * strings, rather than the PHP default behaviour of converting them to floats.
             */
            $obj = json_decode($input, false, 512, JSON_BIGINT_AS_STRING);
        } else {
            /** Not all servers will support that, however, so for older versions we must
             * manually detect large ints in the JSON string and quote them (thus converting
             *them to strings) before decoding, hence the preg_replace() call.
             */
            $max_int_length = strlen((string)PHP_INT_MAX) - 1;
            $json_without_bigints = preg_replace('/:\s*(-?\d{' . $max_int_length . ',})/', ': "$1"', $input);
            $obj = json_decode($json_without_bigints);
        }
        if (function_exists('json_last_error') && $errno = json_last_error()) {
            static::handleJsonError($errno);
        } elseif ($obj === null && $input !== 'null') {
            throw new DomainException('Null result with non-null input');
        }
        return $obj;
    }

    public static function jsonEncode($input)
    {
        $json = json_encode($input);
        if (function_exists('json_last_error') && $errno = json_last_error()) {
            static::handleJsonError($errno);
        } elseif ($json === 'null' && $input !== null) {
            throw new DomainException('Null result with non-null input');
        }
        return $json;
    }

    public static function urlsafeB64Decode($input)
    {
        $remainder = strlen($input) % 4;
        if ($remainder) {
            $padlen = 4 - $remainder;
            $input .= str_repeat('=', $padlen);
        }
        return base64_decode(strtr($input, '-_', '+/'));
    }

    public static function urlsafeB64Encode($input)
    {
        return str_replace('=', '', strtr(base64_encode($input), '+/', '-_'));
    }

    private static function handleJsonError($errno)
    {
        $messages = array(
            JSON_ERROR_DEPTH => 'Maximum stack depth exceeded',
            JSON_ERROR_STATE_MISMATCH => 'Invalid or malformed JSON',
            JSON_ERROR_CTRL_CHAR => 'Unexpected control character found',
            JSON_ERROR_SYNTAX => 'Syntax error, malformed JSON',
            JSON_ERROR_UTF8 => 'Malformed UTF-8 characters' //PHP >= 5.3.3
        );
        throw new DomainException(
            isset($messages[$errno])
                ? $messages[$errno]
                : 'Unknown JSON error: ' . $errno
        );
    }

    private static function safeStrlen($str)
    {
        if (function_exists('mb_strlen')) {
            return mb_strlen($str, '8bit');
        }
        return strlen($str);
    }

    static public function response($code, $msg, $data = null, $query = null)
    {
        $response['code'] = $code;
        $response['msg'] = $msg;
        $response['data'] = $data;
        if (isset($query) && !empty($query)) {
            $response['query'] = $query;
        }
        return $response;
    }

}

?>
