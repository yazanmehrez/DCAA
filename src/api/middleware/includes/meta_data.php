<?php

global $configs;
global $default_location, $sftp_location;

$configs['allowed_types'] = array(
    'avi' => 'video/x-msvideo',
    'bmp' => 'image/bmp',
    'doc' => 'application/msword',
    'docx' => 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    'gif' => 'image/gif',
    'ico' => 'image/x-icon',
    'jpe' => 'image/jpeg',
    'jpeg' => 'image/jpeg',
    'jpg' => 'image/jpeg',
    'mov' => 'video/quicktime',
    'movie' => 'video/x-sgi-movie',
    'mp3' => 'audio/mpeg',
    'mpeg' => 'video/mpeg',
    'mpg' => 'video/mpeg',
    'mp4' => 'video/mp4',
    'mpga' => 'audio/mpeg',
    'ogg' => 'application/ogg',
    'pdf' => 'application/pdf',
    'png' => 'image/png',
    'ppt' => 'application/vnd.ms-powerpoint',
    'pptx' => 'application/vnd.openxmlformats-officedocument.presentationml.presentation',
    'rar' => 'application/octet-stream',
    'rtf' => 'text/rtf',
    'wav' => 'audio/x-wav',
    'xlsx' => 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    'xls' => 'application/vnd.ms-excel',
    'zip' => 'application/zip',
    'txt' => 'text/plain'
);
$configs['default_location'] = $default_location;
$configs['allowed_size'] = str_replace('M', "000000", ini_get("upload_max_filesize"));
$configs['allowed_count'] = 1;

$configs['allowed_count'] = 1;

$configs['sftp_ip'] = '10.0.31.18';
$configs['sftp_path'] = $sftp_location;
$configs['sftp_usr'] = '';
$configs['sftp_pwd'] = '';


$configs['pic_max'] = 960;
$configs['pic_medium'] = 480;
$configs['pic_thumbnail'] = 260;
$configs['pic_x_thumbnail'] = 50;

$configs['post_medium_max_width'] = 480;
$configs['post_medium_max_height'] = 720;

$configs['cover_width_max_size'] = 1020;
$configs['cover_height_max_size'] = 340;
$configs['cover_medium_width_max_size'] = 480;
$configs['cover_medium_height_max_size'] = 160;



