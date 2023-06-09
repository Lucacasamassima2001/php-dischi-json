<?php


$Arr_dischi = file_get_contents('albums.json');


header('Content-Type: application/json');
echo $Arr_dischi;