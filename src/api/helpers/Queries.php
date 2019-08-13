<?php

class Queries
{
    static public function login($username, $password)
    {
        global $db;
        $token = Helper::jwt($username, $password);

        $data = Array(
            'session_key' => md5(microtime()),
            'token' => $token
        );
        $db->where('username', $username);
        $db->where('password', $password);
        $db->update('users', $data);
        $user = $db->where('username', $username)
            ->where('password', $password)
            ->getOne("users", 'user_id, username, token');
        $_SESSION[___APP]['session_key'] = $data['session_key'];
        if ($db->count) {
            return $user;
        } else {
            return -24;
        }
    }

    static public function register($username, $password)
    {
        global $db;

        $data = Array(
            'user_id' => uniqid(),
            'password' => md5($password),
            'username' => $username,
            'session_key' => '',
            'email' => '',
            'avatar' => ''
        );

        $userCheck = $db->where("username", $username)->get("users");
        if (!$userCheck) {
            $db->insert('users', $data);
            $user = $db->where('username', $username)->getOne('users', 'username');
            if ($db->count) {
                return $user;
            } else {
                return -95;
            }
        } else {
            return -23;
        }
    }

    static public function get_products($page, $size)
    {
        global $db;
        $db->pageLimit = $size;
        $products = $db->arraybuilder()->paginate("products", $page);
        foreach ($products as &$prod) {
            $prod['added_by'] = $db->where('user_id', $prod['added_by'])->getValue('users', 'username');
        }
        if (!empty($products)) {
            if ($db->count) {
                return $products;
            } else {
                return -99;
            }
        } else {
            return [];
        }
    }

    static public function get_users()
    {
        global $db;
        $users = $db->get("users");
        foreach ($users as &$user) {
            $user['products'] = $db->where('added_by', $user['user_id'])->get('products');
            $user['total_products'] = sizeof($user['products']);
            unset($user['session_key']);
            unset($user['password']);
        }
        if ($users) {
            return $users;
        } else {
            return -99;
        }
    }

    static public function upload_profile_pic($data, $avatar)
    {
        global $db;
        $avatar = json_decode($avatar)->data->link;
        $new = Array('avatar' => $avatar);
        $users = $db->where('session_key', $data['session_key'])->update('users', $new);

        if ($db->count) {
            return $users;
        } else {
            return -46;
        }

    }

    public static function check_session_alive($session)
    {
        global $db;
        GLOBAL $headers;

        $db->where("session_key", $session);
        $user_id = $db->getValue("users", "user_id");
        if ($db->count) {
            return $user_id;
        } else {
            return false;
        }
    }

    static public function check_version_header($version)
    {
        return true;
    }
}


?>
