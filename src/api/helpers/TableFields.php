<?php

class TableFields
{
    static public function field_name($field)
    {
        switch ($field) {
            case 'username';
                return Helper::$lang['username'];
                break;
            case 'session_id':
                return Helper::$lang['session_id'];
                break;
            case 'password':
                return Helper::$lang['password'];
                break;
            case 'page':
                return Helper::$lang['page'];
                break;
            case 'size':
                return Helper::$lang['size'];
                break;
        }
    }
}
