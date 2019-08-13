<?php

Class User
{
    static public function login($data)
    {
        if (Helper::is_null($data['password'])) {
            $result = Helper::response(\Model\Enums::$code['empty_filed'], Exceptions::field_missing('password'));
        } elseif (Helper::is_null($data['username'])) {
            $result = Helper::response(\Model\Enums::$code['empty_filed'], Exceptions::field_missing('username'));
        } else {
            $username = Helper::make_safe($data['username']);
            $password = md5(Helper::make_safe($data['password']));
            $response = Queries::login($username, $password);
            if (is_numeric($response)) {
                $error_msg = array_search($response, \Model\Enums::$code);
                $result = Helper::response(\Model\Enums::$code[$error_msg], Exceptions::$error_msg());
            } else {
                $result = Helper::response(\Model\Enums::$code['success'], Exceptions::success(), $response);
            }
        }
        return $result;
    }

    static public function register($data)
    {
        if (Helper::is_null($data['password'])) {
            $result = Helper::response(\Model\Enums::$code['empty_filed'], Exceptions::field_missing('password'));
        } elseif (Helper::is_null($data['username'])) {
            $result = Helper::response(\Model\Enums::$code['empty_filed'], Exceptions::field_missing('username'));
        } else {
            $username = Helper::make_safe($data['username']);
            $password = Helper::make_safe($data['password']);
            $response = Queries::register($username, $password);
            if (is_numeric($response)) {
                $error_msg = array_search($response, \Model\Enums::$code);
                $result = Helper::response(\Model\Enums::$code[$error_msg], Exceptions::$error_msg());
            } else {
                $result = Helper::response(\Model\Enums::$code['success'], Exceptions::success(), $response);
            }
        }
        return $result;
    }

    static public function get_products($data)
    {
        if (is_null(Validation::validate_page_size($data))) {
            $page = $data['page'];
            $size = $data['size'];

            $response = Queries::get_products($page, $size);

            if (is_numeric($response)) {
                $error_msg = array_search($response, \Model\Enums::$code);
                $result = Helper::response(\Model\Enums::$code[$error_msg], Exceptions::$error_msg());
            } else {
                $result = Helper::response(\Model\Enums::$code['success'], Exceptions::success(), $response);
            }
            return $result;
        } else {
            return Validation::validate_page_size($data);
        }


    }

    static public function get_users()
    {
        $response = Queries::get_users();
        if (is_numeric($response)) {
            $error_msg = array_search($response, \Model\Enums::$code);
            $result = Helper::response(\Model\Enums::$code[$error_msg], Exceptions::$error_msg());
        } else {
            $result = Helper::response(\Model\Enums::$code['success'], Exceptions::success(), $response);
        }

        return $result;
    }

    static public function upload_profile_pic($data)
    {
        $avatar = ImageUpload::upload_image($data['avatar']);
        $response = Queries::upload_profile_pic($data, $avatar);
        if (is_numeric($response)) {
            $error_msg = array_search($response, \Model\Enums::$code);
            $result = Helper::response(\Model\Enums::$code[$error_msg], Exceptions::$error_msg());
        } else {
            $result = Helper::response(\Model\Enums::$code['success'], Exceptions::success(), $response);
        }
        return $result;
    }
}

?>
