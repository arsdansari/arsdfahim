<?php
function contact_form(){
	$str='ERR';
	
	$to='karan@northumberlandheights.ca';
	//$to='kss.nashik@yahoo.com';

		$msg='<body>
				<table>
				<tr>
					<td colspan="2">
						<h1>Hello Admin</h1>
						<p>You have received an Application for Reservation from northumberlandwebsite website.</p>
					</td>
				</tr>
				
				<tr>
					<td>Name</td>
					<td>'.$_REQUEST['name'].'</td>
				</tr>
				
				<tr>
					<td>E-mail</td>
					<td>'.$_REQUEST['email'].'</td>
				</tr>
				
				<tr>
					<td>Phone Number</td>
					<td>'.$_REQUEST['phone'].'</td>
				</tr>
				
				<tr>
					<td>Check-in</td>
					<td>'.$_REQUEST['checkin'].'</td>
				</tr>
				
				<tr>
					<td>Check-out</td>
					<td>'.$_REQUEST['checkout'].'</td>
				</tr>
				
				<tr>
					<td>Adults</td>
					<td>'.$_REQUEST['adults'].'</td>
				</tr>
				
				<tr>
					<td>Children</td>
					<td>'.$_REQUEST['childrens'].'</td>
				</tr>
				
				<tr>
					<td>Meals</td>
					<td>'.$_REQUEST['meals'].'</td>
				</tr>
				
				<tr>
					<td colspan="2">
						<h1>Warm Regards,</h1>
						<p>Web admin</p>
					</td>
				</tr>				
					</table>
				</body>';		

		$headers = "MIME-Version: 1.0" . "\r\n";

		$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
		
		$headers .= 'From: <'.$_REQUEST['email'].'>' . "\r\n";
		
		$sendmail=mail($to,'Reservation From Northumberland website',$msg,$headers);
		
		$to1=$_REQUEST['email'];

		$msg1='<body>
				<table>
				<tr>
					<td colspan="2">
						<h1>Dear '.$_REQUEST['name'].',</h1>
						<p>THANK YOU FOR YOUR RESERVATION<br>
						WE WILL GET BACK TO YOU SHORLTY.</p>						
					</td>
				</tr>
				
				<tr>
					<td colspan="2">
						<h1>Warm Regards,</h1>
						<p>Web admin</p>
					</td>
				</tr>
					</table>
				</body>';		

		$headers1 = "MIME-Version: 1.0" . "\r\n";

		$headers1 .= "Content-type:text/html;charset=UTF-8" . "\r\n";
		
		$headers1 .= 'From: <karan@northumberlandheights.ca>' . "\r\n";
		
		$sendmail1=mail($to1,'Thank you for contacting us',$msg1,$headers1);

		if($sendmail && $sendmail1)
			$str='OK';
		else
			$str='ERR';
			
		return $str;
}

if($_REQUEST["xAction"]) {
	session_start();	
	switch($_REQUEST["xAction"]) {		
		case "contact_form":
			//require("../../connectdb.inc.php");	
				echo contact_form();
		break;
	}
}
?>