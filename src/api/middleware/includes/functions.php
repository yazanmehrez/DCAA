<?php

$sftp = null;
//var_dump($_SESSION[___APP]['lang']);

function get_rest_url($Function, $Service, $Params, $Method = "POST")
{
    global $restful_url;
    $resArr['result'] = "";
    $resArr['full_result'] = "";
    $resArr['url'] = "";
    $resArr['params'] = json_encode($Params, true);
    $resArr['funcName'] = $Function;
    $resArr['exp'] = "";
    $resArr['exp-ar'] = "";
    $resArr['exp-en'] = "";
    $resArr['code'] = "";
    $resArr['http-code'] = "";
    $resArr['Method'] = $Method;
    $resArr['TotalCount'] = '';

    if (!$Service)
        $Service = 'ProfileService';
    $service_url = $restful_url . $Service . '/' . $Function;


    $resArr['url'] = $service_url;

    if ($Method == 'GET') {
        $mTMP = '';
        foreach ($Params as $PKey => $PValue)
            $mTMP .= $PKey . '=' . $PValue . '&';
        $methodParams = substr($mTMP, 0, -1);
        $service_url .= '?' . $methodParams;
        echo $service_url;
    }


    $curl = curl_init($service_url);
    curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, false);
    curl_setopt($curl, CURLOPT_SSL_VERIFYHOST, false);

    $HeaderLanguage = (isset($_SESSION[___APP]['lang']) && !empty($_SESSION[___APP]['lang']) ? $_SESSION[___APP]['lang'] : "en");

    if ($Method == "POST") {
        $headers = array('Accept: */*', 'Content-Type: application/json; charset=utf-8', 'Authorization: 12345', "Accept-Language:" . $HeaderLanguage);
        curl_setopt($curl, CURLOPT_HTTPHEADER, $headers);
        curl_setopt($curl, CURLOPT_HEADER, false);
    }

    curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
    if ($Method == "POST") {
        curl_setopt($curl, CURLOPT_POST, true);
        curl_setopt($curl, CURLOPT_POSTFIELDS, json_encode($Params, true));
    }
    $curl_response = curl_exec($curl);

    // $curl_response = escape_json_string($curl_response);
    $curlInfo = curl_getinfo($curl);
    $resArr['http-code'] = $curlInfo['http_code'];
    $resArr['full_result'] = $curl_response;
    if (($curl_response == '') || ($curl_response === false)) {
        $resArr['exp'] = curl_error($curl);
        curl_close($curl);
        $resArr['exp'] = 'لم يتم إتمام العملية المطلوبة بنجاح , أعد المحاولة لاحقاً.';
        $resArr['exp'] = 'An error occurred , process could not be completed please try again later.';
        $resArr['code'] = '404';
    } else {
        $TheResponse = json_decode($curl_response, true);
        if ($curlInfo['http_code'] == '200') {
            $resArr['exp'] = $TheResponse['message'];
            $resArr['code'] = $TheResponse['code'];
            $field = 'data';
            if (isset($TheResponse[$field]))
                $resArr['result'] = $TheResponse[$field];

            $field = 'TotalCount';
            if (isset($TheResponse[$field]))
                $resArr['TotalCount'] = $TheResponse[$field];

        } else {
            $resArr['exp'] = 'Content Error';
            $resArr['code'] = $curlInfo['http_code'];


        }
        curl_close($curl);
    }
    return $resArr;
}

function get_admin_rest_url($Method, $Function, $Id = null, $Params = null)
{
    global $restful_admin_url;
    $Method = strtoupper($Method);

    $resArr['result'] = "";
    $resArr['full_result'] = "";
    $resArr['url'] = "";
    $resArr['params'] = (isset($Params) && !empty($Params)) ? json_encode($Params, true) : null;
    $resArr['funcName'] = $Function;
    $resArr['exp'] = "";
    $resArr['exp-ar'] = "";
    $resArr['exp-en'] = "";
    $resArr['code'] = "";
    $resArr['http-code'] = "";
    $resArr['Method'] = $Method;
    $resArr['TotalCount'] = '';

    $service_url = $restful_admin_url . $Function;
    if (!empty($Id))
        $service_url .= '/' . $Id;

    if (isset($Params) && !empty($Params) && $Method == 'GET') {
        $mTMP = '';
        foreach ($Params as $PKey => $PValue)
            $mTMP .= $PKey . '=' . $PValue . '&';
        $methodParams = substr($mTMP, 0, -1);
        $service_url .= '?' . $methodParams;
    }

    $resArr['url'] = $service_url;

    $curl = curl_init($service_url);
    curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, false);
    curl_setopt($curl, CURLOPT_SSL_VERIFYHOST, false);

    $HeaderLanguage = (isset($_SESSION[___APP]['lang']) && !empty($_SESSION[___APP]['lang']) ? $_SESSION[___APP]['lang'] : "en");

    $headers = array('Accept: application/json; Accept-Charset: utf-8', 'Content-Type: application/json; charset=utf-8', 'Authorization: 12345', "Accept-Language:" . $HeaderLanguage);
    curl_setopt($curl, CURLOPT_HTTPHEADER, $headers);
    curl_setopt($curl, CURLOPT_HEADER, false);


    curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);

    if ($Method == "POST") {
        curl_setopt($curl, CURLOPT_POST, true);
    } elseif ($Method == "PATCH") {
        curl_setopt($curl, CURLOPT_CUSTOMREQUEST, 'PATCH');
    } elseif ($Method == "PUT") {
        curl_setopt($curl, CURLOPT_CUSTOMREQUEST, 'PUT');
    } elseif ($Method == "DELETE") {
        curl_setopt($curl, CURLOPT_CUSTOMREQUEST, 'DELETE');
    }

    if (isset($Params) && !empty($Params) && in_array($Method, array('POST', 'PATCH', 'PUT', 'DELETE'))) {
        curl_setopt($curl, CURLOPT_POSTFIELDS, json_encode($Params, true));
    }

    $curl_response = curl_exec($curl);
    // $curl_response = escape_json_string($curl_response);
    $curlInfo = curl_getinfo($curl);
    $resArr['http-code'] = $curlInfo['http_code'];
    $resArr['full_result'] = $curl_response;
    if (($curl_response == '') || ($curl_response === false)) {
        $resArr['exp'] = curl_error($curl);
        // $resArr['info']=$curlInfo;
        curl_close($curl);
        $resArr['exp'] = 'لم يتم إتمام العملية المطلوبة بنجاح , أعد المحاولة لاحقاً.';
        $resArr['exp'] = 'An error occurred , process could not be completed please try again later.';
        $resArr['code'] = '404';
    } else {
        $TheResponse = json_decode($curl_response, true);
        if ($curlInfo['http_code'] == '200') {
            $resArr['exp'] = $TheResponse['message'];
            $resArr['code'] = $TheResponse['code'];
            $field = 'data';
            if (isset($TheResponse[$field]))
                $resArr['result'] = $TheResponse[$field];

            $countField = 'totalElements';
            if (isset($TheResponse[$field][$countField]))
                $resArr['TotalCount'] = $TheResponse[$field][$countField];
        } else {
            $resArr['exp'] = 'Content Error';
            $resArr['code'] = $curlInfo['http_code'];


        }
        curl_close($curl);
        //hi

    }
    return $resArr;
}

function GUID()
{
    if (function_exists('com_create_guid') === true) {
        return trim(com_create_guid(), '{}');
    }
    return sprintf('%04X%04X-%04X-%04X-%04X-%04X%04X%04X', mt_rand(0, 65535), mt_rand(0, 65535), mt_rand(0, 65535), mt_rand(16384, 20479), mt_rand(32768, 49151), mt_rand(0, 65535), mt_rand(0, 65535), mt_rand(0, 65535));
}

function upload_file($html_name, $is_multiple, $is_img = false, $img_type = null, $base64_data = null)
{
    global $configs;
    global $sftp;

    $sftp = new Net_SFTP($configs['sftp_ip']);

    $max_size = $configs['allowed_size'];
    $allowed_file_types = $configs['allowed_types'];
    $full_path = $configs['sftp_path'];

    if (!$base64_data) {
        $length = sizeof($_FILES[$html_name]["name"]);
    } else {
        $length = 1;
    }

    if (!$sftp->login($configs['sftp_usr'], $configs['sftp_pwd'])) {

        exit('Login Failed');
    }
    if ($length == 0) {
        return 0;
    } elseif ($length == 1 && !$is_multiple) {
        $fileType = 'jpg';
        if (!$base64_data) {
            $fileType = strtolower(pathinfo(basename($_FILES[$html_name]["name"][0]), PATHINFO_EXTENSION));
        }
        $file_guid = GUID();
        $target_file = $full_path . $file_guid . "." . $fileType;
        $file['name'] = $file_guid;
        $returnData['code'] = 1;
        $returnData['msg'] = "";


        if ($is_img && $img_type && $base64_data) {
            $file['type'] = 'jpg';
            $file['mime'] = 'image/jpeg';
            $file['size'] = get_image_size_from_base64($base64_data);
            image_handler(0, $file_guid, $img_type, $base64_data);
        } else {
            // Allow certain file formats
            if (!array_keys($allowed_file_types, $fileType)) {
                if (!$_FILES[$html_name]["type"][0] == $allowed_file_types[$fileType]) {
                    $returnData['msg'] .= "Sorry, file type not allowed.";
                    $returnData['code'] = 0;
                }
            }
            if ($is_img) {
                // Check if image file is a actual image or fake image
                $check = getimagesize($_FILES[$html_name]["tmp_name"][0]);
                if (!empty($check)) {
                    image_handler($_FILES[$html_name], $file_guid, $img_type);
                    $file['type'] = 'jpg';
                    $file['mime'] = 'image/jpeg';
                    $file['size'] = $_FILES[$html_name]["size"];
                } else {
                    $returnData['code'] = 0;
                    $returnData['msg'] .= "Sorry, file is not image.";
                }
            } // Check if $uploadOk is set to 0 by an error
            elseif (!$is_img) {

                // Check file size
                if ($_FILES[$html_name]["size"][0] > $max_size) {
                    $returnData['msg'] .= "Sorry, your file is too large.";
                    $returnData['code'] = 0;
                }

                if ($sftp->put($target_file, $_FILES[$html_name]["tmp_name"][0], NET_SFTP_LOCAL_FILE)) {
//                if (move_uploaded_file($_FILES[$html_name]["tmp_name"], $target_file)) {
                    $file['type'] = $fileType;
                    $file['mime'] = $_FILES[$html_name]["type"][0];
                    $file['size'] = $_FILES[$html_name]["size"][0];
                    $returnData['msg'] .= "Ok";
                } else {
                    $returnData['msg'] .= "Sorry, there was an error uploading your file.";
                }
            }
        }
        //echo json_encode($returnData);
        return $file;
    } else {
        $names = array();
        for ($i = 0; $i < $length; $i++) {
            $fileType = 'jpg';
            if (!$base64_data) {
                $fileType = strtolower(pathinfo(basename($_FILES[$html_name]["name"][$i]), PATHINFO_EXTENSION));
            }
            $file_guid = GUID();
            $target_file = $full_path . $file_guid . "." . $fileType;
            $names[$i]['name'] = $file_guid;

            $returnData['code'] = 1;
            $returnData['msg'] = "";
            if ($is_img && $img_type && $base64_data) {
                $names[$i]['type'] = 'jpg';
                $names[$i]['mime'] = 'image/jpeg';
                $names[$i]['size'] = get_image_size_from_base64($base64_data);
                image_handler(0, $file_guid, $img_type, $base64_data);
            } else {

                // Check if file already exists
                if (file_exists($target_file)) {
                    $returnData['msg'] .= "Sorry, file already exists.";
                    $returnData['code'] = 0;
                }

                // Allow certain file formats
                if (!array_keys($allowed_file_types, $fileType)) {
                    if (!$_FILES[$html_name]["type"][$i] == $allowed_file_types[$fileType]) {
                        $returnData['msg'] .= "Sorry, file type not allowed.";
                        $returnData['code'] = 0;
                    }

                }
                if ($is_img) {
                    // Check if image file is a actual image or fake image
                    $check = getimagesize($_FILES[$html_name]["tmp_name"][$i]);

                    if (!empty($check)) {

                        $file['name'] = $_FILES[$html_name]["name"][$i];
                        $file['type'] = $_FILES[$html_name]["type"][$i];
                        $file['tmp_name'] = $_FILES[$html_name]["tmp_name"][$i];
                        $file['error'] = $_FILES[$html_name]["error"][$i];
                        $file['size'] = $_FILES[$html_name]["size"][$i];

                        image_handler($file, $file_guid, $img_type);
                        $names[$i]['type'] = 'jpg';
                        $names[$i]['mime'] = 'image/jpeg';
                        $names[$i]['size'] = $_FILES[$html_name]["size"][$i];

                    } else {
                        $returnData['code'] = 0;
                        $returnData['msg'] .= "Sorry, file is not image.";
                    }
                } // Check if $uploadOk is set to 0 by an error
                elseif (!$is_img) {
                    // Check file size
                    if ($_FILES[$html_name]["size"][$i] > $max_size) {
                        $returnData['msg'] .= "Sorry, your file is too large.";
                        $returnData['code'] = 0;
                    }

                    if ($sftp->put($target_file, $_FILES[$html_name]["tmp_name"][$i], NET_SFTP_LOCAL_FILE)) {
//                        var_dump($sftp->getErrors());
//                        var_dump($sftp->errors());
//                        var_dump($sftp->sftp_errors());
//                        var_dump($sftp->getSFTPErrors());
//                    if (move_uploaded_file($_FILE S[$html_name]["tmp_name"][$i], $target_file)) {
                        $names[$i]['type'] = $fileType;
                        $names[$i]['mime'] = $_FILES[$html_name]["type"][$i];
                        $names[$i]['size'] = $_FILES[$html_name]["size"][$i];
                        $returnData['msg'] .= "";
                    } else {
                        $returnData['msg'] .= "Sorry, there was an error uploading your file.";
                    }
                }
            }

        }
        //echo json_encode($returnData);
        return $names;
    }
}

function image_handler($img_obj, $img_name, $type, $base64_data = null)
{
    global $configs;
    global $sftp;
    $file = null;
//    var_dump($base64_data);
//    exit;
    if ($base64_data !== null) {
//        $base64_data = explode(';', $base64_data);
//        var_dump(str_replace(',',':',$base64_data[1]));
//        $obj = new upload(str_replace(',', ':', $base64_data[1]));
//        var_dump($obj->uploaded);
        $filename = GUID();
        $file =  base64_to_file($base64_data, $configs['default_location'] . 'crops/' . $filename);
        $obj = new upload($file);

    } else {
        $obj = new upload($img_obj);
    }
    if ($obj->uploaded) {
        switch ($type) {
            case 1: //Profile & Page
            {
                $obj->file_new_name_body = $img_name;
                $obj->file_new_name_ext = 'jpg';
                $obj->allowed = array('image/*');
                $obj->image_resize = true;
                $obj->image_convert = 'jpg';
                $obj->image_ratio = true;
                $obj->file_overwrite = true;
                $obj->image_x = $configs['pic_max'];
                $obj->image_y = $configs['pic_max'];
                $obj->process($configs['default_location'] . 'large/');
//                var_dump( $obj->log);
                $sftp->put($configs['sftp_path'] . 'large/' . $img_name . '.jpg', $configs['default_location'] . 'large/' . $img_name . '.jpg', NET_SFTP_LOCAL_FILE);
                @unlink($configs['default_location'] . 'large/' . $img_name . '.jpg');


                $obj->file_new_name_body = $img_name;
                $obj->file_new_name_ext = 'jpg';
                $obj->allowed = array('image/*');
                $obj->image_resize = true;
                $obj->image_convert = 'jpg';
                $obj->image_ratio = true;
                $obj->file_overwrite = true;
                $obj->image_x = $configs['pic_medium'];
                $obj->image_y = $configs['pic_medium'];
                $obj->process($configs['default_location'] . 'medium/');
                $sftp->put($configs['sftp_path'] . 'medium/' . $img_name . '.jpg', $configs['default_location'] . 'medium/' . $img_name . '.jpg', NET_SFTP_LOCAL_FILE);
                @unlink($configs['default_location'] . 'medium/' . $img_name . '.jpg');

                $obj->file_new_name_body = $img_name;
                $obj->file_new_name_ext = 'jpg';
                $obj->allowed = array('image/*');
                $obj->image_resize = true;
                $obj->image_convert = 'jpg';
                $obj->image_ratio_crop = true;
                $obj->file_overwrite = true;
                $obj->image_x = $configs['pic_thumbnail'];
                $obj->image_y = $configs['pic_thumbnail'];
                $obj->process($configs['default_location'] . 'thumb');
                $sftp->put($configs['sftp_path'] . 'thumb/' . $img_name . '.jpg', $configs['default_location'] . 'thumb/' . $img_name . '.jpg', NET_SFTP_LOCAL_FILE);
                @unlink($configs['default_location'] . 'thumb/' . $img_name . '.jpg');

                $obj->file_new_name_body = $img_name;
                $obj->file_new_name_ext = 'jpg';
                $obj->allowed = array('image/*');
                $obj->image_resize = true;
                $obj->image_convert = 'jpg';
                $obj->image_ratio_crop = true;
                $obj->file_overwrite = true;
                $obj->image_x = $configs['pic_x_thumbnail'];
                $obj->image_y = $configs['pic_x_thumbnail'];
                $obj->process($configs['default_location'] . 'x-thumb/');
                $sftp->put($configs['sftp_path'] . 'x-thumb/' . $img_name . '.jpg', $configs['default_location'] . 'x-thumb/' . $img_name . '.jpg', NET_SFTP_LOCAL_FILE);
                @unlink($configs['default_location'] . 'x-thumb/' . $img_name . '.jpg');


                if ($obj->processed) {
                    $obj->clean();
                }
                @unlink($file);
                return true;
            }
            case 2: //Post
            {

                $obj->file_new_name_body = $img_name;
                $obj->file_new_name_ext = 'jpg';
                $obj->allowed = array('image/*');
                $obj->image_resize = true;
                $obj->image_convert = 'jpg';
                $obj->image_ratio = true;
                $obj->file_overwrite = true;
                $obj->image_x = $configs['pic_max'];
                $obj->image_y = $configs['pic_max'];
                $obj->process($configs['default_location'] . 'large/');
                $sftp->put($configs['sftp_path'] . 'large/' . $img_name . '.jpg', $configs['default_location'] . 'large/' . $img_name . '.jpg', NET_SFTP_LOCAL_FILE);
                @unlink($configs['default_location'] . 'large/' . $img_name . '.jpg');

                $obj->file_new_name_body = $img_name;
                $obj->file_new_name_ext = 'jpg';
                $obj->allowed = array('image/*');
                $obj->image_resize = true;
                $obj->image_convert = 'jpg';
                $obj->image_ratio = true;
                $obj->file_overwrite = true;
                $obj->image_x = $configs['post_medium_max_width'];
                $obj->image_y = $configs['post_medium_max_height'];
                $obj->process($configs['default_location'] . 'medium/');
                $sftp->put($configs['sftp_path'] . 'medium/' . $img_name . '.jpg', $configs['default_location'] . 'medium/' . $img_name . '.jpg', NET_SFTP_LOCAL_FILE);
                @unlink($configs['default_location'] . 'medium/' . $img_name . '.jpg');

                $obj->file_new_name_body = $img_name;
                $obj->file_new_name_ext = 'jpg';
                $obj->allowed = array('image/*');
                $obj->image_resize = true;
                $obj->image_convert = 'jpg';
                $obj->image_ratio_crop = true;
                $obj->file_overwrite = true;
                $obj->image_x = $configs['pic_thumbnail'];
                $obj->image_y = $configs['pic_thumbnail'];
                $obj->process($configs['default_location'] . 'thumb');
                $sftp->put($configs['sftp_path'] . 'thumb/' . $img_name . '.jpg', $configs['default_location'] . 'thumb/' . $img_name . '.jpg', NET_SFTP_LOCAL_FILE);
                @unlink($configs['default_location'] . 'thumb/' . $img_name . '.jpg');


                if ($obj->processed) {
                    $obj->clean();
                }
                @unlink($file);
                return true;
            }
            case 3: //Cover
            {
                $obj->file_new_name_body = $img_name;
                $obj->file_new_name_ext = 'jpg';
                $obj->allowed = array('image/*');
                $obj->image_resize = true;
                $obj->image_convert = 'jpg';
                $obj->image_ratio = true;
                $obj->file_overwrite = true;
                $obj->image_x = $configs['cover_width_max_size'];
                $obj->image_y = $configs['cover_height_max_size'];
                $obj->process($configs['default_location'] . 'large/');
                $sftp->put($configs['sftp_path'] . 'large/' . $img_name . '.jpg', $configs['default_location'] . 'large/' . $img_name . '.jpg', NET_SFTP_LOCAL_FILE);
                @unlink($configs['default_location'] . 'large/' . $img_name . '.jpg');

                $obj->file_new_name_body = $img_name;
                $obj->file_new_name_ext = 'jpg';
                $obj->allowed = array('image/*');
                $obj->image_resize = true;
                $obj->image_convert = 'jpg';
                $obj->image_ratio = true;
                $obj->file_overwrite = true;
                $obj->image_x = $configs['cover_medium_width_max_size'];
                $obj->image_y = $configs['cover_medium_height_max_size'];
                $obj->process($configs['default_location'] . 'medium/');
                $sftp->put($configs['sftp_path'] . 'medium/' . $img_name . '.jpg', $configs['default_location'] . 'medium/' . $img_name . '.jpg', NET_SFTP_LOCAL_FILE);
                @unlink($configs['default_location'] . 'medium/' . $img_name . '.jpg');

                $obj->file_new_name_body = $img_name;
                $obj->file_new_name_ext = 'jpg';
                $obj->allowed = array('image/*');
                $obj->image_resize = true;
                $obj->image_convert = 'jpg';
                $obj->image_ratio_crop = true;
                $obj->file_overwrite = true;
                $obj->image_x = $configs['pic_thumbnail'];
                $obj->image_y = $configs['pic_thumbnail'];
                $obj->process($configs['default_location'] . 'thumb');
                $sftp->put($configs['sftp_path'] . 'thumb/' . $img_name . '.jpg', $configs['default_location'] . 'thumb/' . $img_name . '.jpg', NET_SFTP_LOCAL_FILE);
                @unlink($configs['default_location'] . 'thumb/' . $img_name . '.jpg');

                if ($obj->processed) {
                    $obj->clean();
                }
                @unlink($file);
                return true;
            }
            default:
                return false;
        }
    }
    return false;
}

function make_safe($data)
{
    $data = trim($data);
    $data = addslashes($data);
    $data = htmlspecialchars($data);
    return $data;
}

function un_make_safe($data)
{
    $data = stripslashes($data);
    $data = htmlspecialchars_decode($data);
    return $data;
}

function isValidEmail($email)
{
    $pattern = "/[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})/";

    if (preg_match($pattern, $email)) {
        return true;
    } else {
        return false;
    }
}
function hasURL($string)
{
    $matches = array();
    $pattern = "/(https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&\/=]*))/";
    if (preg_match($pattern, $string,$matches)) {
        return $matches;
    } else {
        return false;
    }
}

function isValidGSM($GSM)
{
    $pattern = "/((((\+|0{2})?963)|0)?9)?[9,8,6,5,4,3]\d{7}/";

    if (preg_match($pattern, $GSM)) {
        return true;
    } else {
        return false;
    }
}

function get_web_page($url)
{
    $user_agent = 'Mozilla/5.0 (Windows NT 6.1; rv:8.0) Gecko/20100101 Firefox/8.0';

    $options = array(

        CURLOPT_CUSTOMREQUEST => "GET",        //set request type post or get
        CURLOPT_POST => false,        //set to GET
        CURLOPT_USERAGENT => $user_agent, //set user agent
        CURLOPT_COOKIEFILE => "cookie.txt", //set cookie file
        CURLOPT_COOKIEJAR => "cookie.txt", //set cookie jar
        CURLOPT_RETURNTRANSFER => true,     // return web page
        CURLOPT_HEADER => false,    // don't return headers
        CURLOPT_FOLLOWLOCATION => true,     // follow redirects
        CURLOPT_ENCODING => "",       // handle all encodings
        CURLOPT_AUTOREFERER => true,     // set referer on redirect
        CURLOPT_CONNECTTIMEOUT => 120,      // timeout on connect
        CURLOPT_TIMEOUT => 120,      // timeout on response
        CURLOPT_MAXREDIRS => 10,       // stop after 10 redirects
        CURLOPT_PROXY => ''
    );

    $ch = curl_init($url);
    curl_setopt_array($ch, $options);
    $content = curl_exec($ch);
    $err = curl_errno($ch);
    $errmsg = curl_error($ch);
    $header = curl_getinfo($ch);
    curl_close($ch);

    $header['errno'] = $err;
    $header['errmsg'] = $errmsg;
    $header['content'] = $content;
    return $header;
}

function getMetaTags($str)
{
    $pattern = '
  ~<\s*meta\s

  # using lookahead to capture type to $1
    (?=[^>]*?
    \b(?:name|property|http-equiv)\s*=\s*
    (?|"\s*([^"]*?)\s*"|\'\s*([^\']*?)\s*\'|
    ([^"\'>]*?)(?=\s*/?\s*>|\s\w+\s*=))
  )

  # capture content to $2
  [^>]*?\bcontent\s*=\s*
    (?|"\s*([^"]*?)\s*"|\'\s*([^\']*?)\s*\'|
    ([^"\'>]*?)(?=\s*/?\s*>|\s\w+\s*=))
  [^>]*>

  ~ix';

    if (preg_match_all($pattern, $str, $out))
        return array_combine($out[1], $out[2]);
    return array();
}

function getTitle($Url)
{
    $str = file_get_contents($Url);
    if (strlen($str) > 0) {
        preg_match("/\<title\>(.*)\<\/title\>/", $str, $title);
        return $title[1];
    } else {
        return false;
    }
}

function base64_to_file($base64_string, $output_file)
{

    // open the output file for writing
    $ifp = fopen($output_file, 'wb');

    // split the string on commas
    // $data[ 0 ] == "data:image/png;base64"
    // $data[ 1 ] == <actual base64 string>
    $data = explode(',', $base64_string);

    // we could add validation here with ensuring count( $data ) > 1
    fwrite($ifp, base64_decode($data[1]));

    // clean up the file resource
    fclose($ifp);

    return $output_file;
}

function get_image_size_from_base64($data)
{
    return (int)(strlen(rtrim($data, '=')) * 3 / 4);
}


function link_preview($url)
{

    $c = new crawler($url);
    if ($resp = $c->parse()) {
        $returned_data['msg'] = 'success';
        $returned_data['code'] = 1;
        $returned_data['result'] = $resp;
    } else {
        $returned_data['msg'] = $c->error_response;
        $returned_data['code'] = $c->error_code;
    }
    return $returned_data;
}
