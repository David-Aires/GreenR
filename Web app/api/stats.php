<?php
	// Connect to database
	include("db_connect.php");
	$request_method = $_SERVER["REQUEST_METHOD"];

/*===========================================================================================*/

    function getElementTable($table,$element)
    {
        global $conn;
        $query = "SELECT $element FROM $table";

        $response = array();
        $result = mysqli_query($conn, $query) or die("Error in Selecting " . mysqli_error($conn));
        while($row = mysqli_fetch_object($result))
        {
            $response[] = $row;
        }
        header('Content-Type: application/json');
        echo json_encode($response, JSON_PRETTY_PRINT);
    }

/*===========================================================================================*/

    function getLasElement($box,$table,$relever)
    {
        global $conn;

        if($relever=="dernier"){
            if($table == "AIR_STAT") {
                $query = "SELECT ID_AIR,TEMPERATURE,HUMIDITY,CO2,FROM_UNIXTIME(DATE_TIME) as DATE FROM AIR_STAT natural join CROSS_CENTER where SERIAL_NUM='$box' ORDER BY ID_AIR DESC LIMIT 1;";
            }
            else if($table == "AIR_BOX") {
                die("Error in Selecting " . mysqli_error($conn));
            }
            else if($table == "POSITION") {
                $query = "SELECT ID_POS,LAT,LON,ALT,FROM_UNIXTIME(DATE_TIME) as DATE FROM POSITION natural join CROSS_CENTER where SERIAL_NUM='$box' ORDER BY ID_POS DESC LIMIT 1;";
            }
            else if($table == "CROSS_CENTER") {
                $query = "SELECT SERIAL_NUM,ID_POS,ID_AIR,FROM_UNIXTIME(DATE_TIME) as DATE FROM CROSS_CENTER where SERIAL_NUM='$box' ORDER BY DATE_TIME DESC LIMIT 1;";
            }
        }
        $response = array();
        $result = mysqli_query($conn, $query) or die("Error in Selecting " . mysqli_error($conn));
        while($row = mysqli_fetch_object($result))
        {
            $response[] = $row;
        }
        header('Content-Type: application/json');
        echo json_encode($response, JSON_PRETTY_PRINT);
    }

/*===========================================================================================*/

    function getDataTable($box,$table)
    {
        global $conn;

        if($table == "AIR_STAT") {
            $query = "SELECT ID_AIR,TEMPERATURE,HUMIDITY,CO2,FROM_UNIXTIME(DATE_TIME) as DATE FROM AIR_STAT natural join CROSS_CENTER where SERIAL_NUM='$box;'";
        }
        else if($table == "AIR_BOX") {
            $query = "SELECT * FROM AIR_BOX where SERIAL_NUM='$box';";
        }
        else if($table == "POSITION") {
            $query = "SELECT ID_POS,LAT,LON,ALT,FROM_UNIXTIME(DATE_TIME) as DATE FROM POSITION natural join CROSS_CENTER where SERIAL_NUM='$box';";
        }
        else if($table == "CROSS_CENTER") {
            $query = "SELECT SERIAL_NUM,ID_POS,ID_AIR,FROM_UNIXTIME(DATE_TIME) as DATE FROM CROSS_CENTER where SERIAL_NUM='$box';";
        }
        $response = array();
        $result = mysqli_query($conn, $query) or die("Error in Selecting " . mysqli_error($conn));
        while($row = mysqli_fetch_object($result))
        {
            $response[] = $row;
        }
        header('Content-Type: application/json');
        echo json_encode($response, JSON_PRETTY_PRINT);
    }

/*===========================================================================================*/

    function getMesureTable($box,$table,$mesure)
    {
        global $conn;
        if($table=="POSITION"){
            $query="SELECT $mesure,FROM_UNIXTIME(DATE_TIME) as DATE FROM db_GreenR.POSITION natural join CROSS_CENTER WHERE SERIAL_NUM='$box';";
        }
        else if($table=="AIR_STAT"){
            $query="SELECT $mesure,FROM_UNIXTIME(DATE_TIME) as DATE FROM db_GreenR.AIR_STAT natural join CROSS_CENTER WHERE SERIAL_NUM='$box';";
        }
        else if($table=="AIR_BOX"){
            $query="SELECT $mesure,FROM_UNIXTIME(DATE_TIME) as DATE FROM db_GreenR.AIR_BOX WHERE SERIAL_NUM='$box';";
        }
        else if($table=="CROSS_CENTER"){
            $query="SELECT $mesure,FROM_UNIXTIME(DATE_TIME) as DATE FROM db_GreenR.CROSS_CENTER natural join CROSS_CENTER WHERE SERIAL_NUM='$box';";
        }
        else{
            header('Content-Type: application/json');
        }
        $response = array();
        $result = mysqli_query($conn, $query) or die("Error in Selecting " . mysqli_error($conn));
        while($row = mysqli_fetch_object($result))
        {
            $response[] = $row;
        }
        header('Content-Type: application/json');
        echo json_encode($response, JSON_PRETTY_PRINT);
    }

/*===========================================================================================*/

    function getMesureTableDate($box,$table,$mesure,$from,$to){
        global $conn;
        if($table=="POSITION"){
            $query="SELECT $mesure,FROM_UNIXTIME(DATE_TIME) as DATE FROM db_GreenR.POSITION natural join CROSS_CENTER WHERE CROSS_CENTER.DATE_TIME between '$from' and '$to' and SERIAL_NUM='$box'";
        }
        else if($table=="AIR_STAT"){
            $query="SELECT $mesure,FROM_UNIXTIME(DATE_TIME) as DATE FROM db_GreenR.AIR_STAT natural join CROSS_CENTER WHERE CROSS_CENTER.DATE_TIME between '$from' and '$to' and SERIAL_NUM='$box'";
        }
        else if($table=="AIR_BOX"){
            $query="SELECT $mesure,FROM_UNIXTIME(DATE_TIME) as DATE FROM db_GreenR.AIR_BOX WHERE CROSS_CENTER.DATE_TIME between '$from' and '$to' and SERIAL_NUM='$box'";
        }
        else if($table=="CROSS_CENTER"){
            $query="SELECT $mesure,FROM_UNIXTIME(DATE_TIME) as DATE FROM db_GreenR.CROSS_CENTER  WHERE CROSS_CENTER.DATE_TIME between '$from' and '$to' and SERIAL_NUM='$box'";
        }
        else{
            header('Content-Type: application/json');
        }
        $response = array();
        $result = mysqli_query($conn, $query) or die("Error in Selecting " . mysqli_error($conn));
        while($row = mysqli_fetch_object($result))
        {
            $response[] = $row;
        }
        header('Content-Type: application/json');
        echo json_encode($response, JSON_PRETTY_PRINT);
    }

/*===========================================================================================*/

    function getAllPosition(){
        global $conn;
        $query = "select SERIAL_NUM as box, LAT as latitude, LON as longitude, ALT as altitude 
                  FROM db_GreenR.POSITION
                  natural join db_GreenR.CROSS_CENTER
                  where ID_POS IN (select ID_POS from db_GreenR.CROSS_CENTER where ID_POS in (select Max(ID_POS) from db_GreenR.CROSS_CENTER group by SERIAL_NUM));
            ";

        $response = array();
        $result = mysqli_query($conn, $query) or die("Error in Selecting " . mysqli_error($conn));
        while($row = mysqli_fetch_object($result))
        {
            $response[] = $row;
        }
        header('Content-Type: application/json');
        echo json_encode($response, JSON_PRETTY_PRINT);
    }

/*===========================================================================================*/

function getLastTableDate($box,$table,$from,$to){
    global $conn;
    if($table=="POSITION"){
        $query="SELECT *,FROM_UNIXTIME(DATE_TIME) as DATE FROM db_GreenR.POSITION natural join CROSS_CENTER WHERE CROSS_CENTER.DATE_TIME between '$from' and '$to' and SERIAL_NUM='$box'";
    }
    else if($table=="AIR_STAT"){
        $query="SELECT *,FROM_UNIXTIME(DATE_TIME) as DATE FROM db_GreenR.AIR_STAT natural join CROSS_CENTER WHERE CROSS_CENTER.DATE_TIME between '$from' and '$to' and SERIAL_NUM='$box'";
    }
    else if($table=="AIR_BOX"){
        $query="SELECT *,FROM_UNIXTIME(DATE_TIME) as DATE FROM db_GreenR.AIR_BOX WHERE CROSS_CENTER.DATE_TIME between '$from' and '$to' and SERIAL_NUM='$box'";
    }
    else if($table=="CROSS_CENTER"){
        $query="SELECT *,FROM_UNIXTIME(DATE_TIME) as DATE FROM db_GreenR.CROSS_CENTER  WHERE CROSS_CENTER.DATE_TIME between '$from' and '$to' and SERIAL_NUM='$box'";
    }
    else{
        header('Content-Type: application/json');
    }
    $response = array();
    $result = mysqli_query($conn, $query) or die("Error in Selecting " . mysqli_error($conn));
    while($row = mysqli_fetch_object($result))
    {
        $response[] = $row;
    }
    header('Content-Type: application/json');
    echo json_encode($response, JSON_PRETTY_PRINT);
}

/*===========================================================================================*/

function getMoyenneMesureTableDate($box,$from,$to){
    global $conn;
    $query="SELECT avg(TEMPERATURE),avg(HUMIDITY),avg(CO2) FROM AIR_STAT natural join CROSS_CENTER where CROSS_CENTER.DATE_TIME between '$from' and '$to' and SERIAL_NUM='$box';";
    $response = array();
    $result = mysqli_query($conn, $query) or die("Error in Selecting " . mysqli_error($conn));
    while($row = mysqli_fetch_object($result))
    {
        $response[] = $row;
    }
    header('Content-Type: application/json');
    echo json_encode($response, JSON_PRETTY_PRINT);
}

/*===========================================================================================*/

	switch($request_method)
	{
		
		case 'GET':
            if(!empty($_GET["box"]) AND !empty($_GET["table"]) AND !empty($_GET["mesure"]) AND !empty($_GET["from"]) AND !empty($_GET["to"]))
            {

                $table=$_GET["table"];
                $box=$_GET["box"];
                $mesure=$_GET["mesure"];
                $from=strtotime($_GET["from"]);
                $to=strtotime($_GET["to"]);
                if($table != "AIR_STAT" AND $table != "AIR_BOX" AND $table != "CROSS_CENTER" AND $table != "POSITION"){
                    break;
                    header("HTTP/1.0 405 Method Not Allowed");
                }
                getMesureTableDate($box,$table,$mesure,$from,$to);

            }
            else if(!empty($_GET["box"]) AND !empty($_GET["table"]) AND !empty($_GET["from"]) AND !empty($_GET["to"]))
            {

                $table=$_GET["table"];
                $box=$_GET["box"];
                $from=strtotime($_GET["from"]);
                $to=strtotime($_GET["to"]);
                if($table != "AIR_STAT" AND $table != "AIR_BOX" AND $table != "CROSS_CENTER" AND $table != "POSITION"){
                    break;
                    header("HTTP/1.0 405 Method Not Allowed");
                }
                getLastTableDate($box,$table,$from,$to);

            }
            else if(!empty($_GET["box"]) AND !empty($_GET["from"]) AND !empty($_GET["to"]) AND !empty($_GET["action"]))
            {
                $box=$_GET["box"];
                $from=strtotime($_GET["from"]);
                $to=strtotime($_GET["to"]);
                getMoyenneMesureTableDate($box,$from,$to);

            }
            else if(!empty($_GET["box"]) AND !empty($_GET["table"]) AND !empty($_GET["mesure"]))
            {

                $table=$_GET["table"];
                $box=$_GET["box"];
                $mesure=$_GET["mesure"];
                if($table != "AIR_STAT" AND $table != "AIR_BOX" AND $table != "CROSS_CENTER" AND $table != "POSITION"){
                    break;
                    header("HTTP/1.0 405 Method Not Allowed");
                }
                getMesureTable($box,$table,$mesure);

            }
            else if(!empty($_GET["box"]) AND !empty($_GET["table"]) AND !empty($_GET["relever"]))
            {
                $table=$_GET["table"];
                $box=$_GET["box"];
                $relever=$_GET["relever"];
                getLasElement($box,$table,$relever);

            }
            else if(!empty($_GET["table"]) AND !empty($_GET["element"]))
            {

                $table=$_GET["table"];
                $element=$_GET["element"];
                if($table != "AIR_STAT" AND $table != "AIR_BOX" AND $table != "CROSS_CENTER" AND $table != "POSITION"){
                    break;
                    header("HTTP/1.0 405 Method Not Allowed");
                }
                getElementTable($table,$element);

            }
            else if(!empty($_GET["box"]) AND !empty($_GET["table"]))
            {
                $box=$_GET["box"];
                $table=$_GET["table"];
                if($table != "AIR_STAT" AND $table != "AIR_BOX" AND $table != "CROSS_CENTER" AND $table != "POSITION"){
                    break;
                    header("HTTP/1.0 405 Method Not Allowed");
                }
                getDataTable($box,$table);
            }
            else if(!empty($_GET["position"]))
            {

                getAllPosition();
            }
            else if ($_SERVER['QUERY_STRING'])
            {
                header($_SERVER["SERVER_PROTOCOL"]." 404 Not Found", true, 404);
                echo '<div align="center"><font face="arial" size="10" color="#8b0000">Nothing to found here! Check the parameter </font><br />';
                echo '<img src="../assets/images/error_404.png" border="0"  width="80%"/></div> ';
                break;
            }
            else {
                include("includes/api.php");
            }
			break;
		default:
            header($_SERVER["SERVER_PROTOCOL"]." 404 Not Found", true, 404);
            echo '<div align="center"><font face="arial" size="10" color="#8b0000">Nothing to found here! Check the parameter</font><br />';
            echo '<img src="../assets/images/error_404.png" border="0" width="80%"/></div> ';
            break;
	}
?>