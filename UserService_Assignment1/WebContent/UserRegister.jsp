<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
    
     <%@page import = "model.User" %>
      
     
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Register User</title>


<link rel = "stylesheet" href = "Views/bootstrap.min.css">
<script src = "Components/jquery-3.6.0.min.js"></script>
<script src = "Components/user.js"></script>

</head>
<body>

<div class = "container"> 
	<div class="row">
		<div class="col">

		<h1>User Management</h1>
		
	<form id="formUser" name="formUser"  >
		User type:
		<input id="type" name="type" type="text" class="form-control form-control-sm"><br>
		 User Name:
		<input id="userName" name="userName" type="text" class="form-control form-control-sm"><br> 
		Password :
		<input id="password" name="password" type="text" class="form-control form-control-sm"><br>
		Email :
		<input id="email" name="email" type="text" class="form-control form-control-sm"><br>
		 Address : 
		<input id="address" name="address" type="text" class="form-control form-control-sm"><br>
		 Date Of Birth :
		<input id="dob" name="dob" type="text" class="form-control form-control-sm"><br>
		 Phone number : 
		<input id="phone" name="phone" type="text" class="form-control form-control-sm"><br>
		 Description : 
		<input id="desc" name="desc" type="text" class="form-control form-control-sm"><br>
		 Profile Info : 
		<input id="profileInfo" name="profileInfo" type="text" class="form-control form-control-sm"><br>
		
		
		<input id="btnSave" name="btnSave" type="button" value="Save" class="btn btn-primary">
		<input type="hidden" id="hidUserIDSave" name="hidUserIDSave" value="">
	</form>
    
    <div id="alertSuccess" class="alert alert-success"></div>
     <div id="alertError" class="alert alert-danger"></div>
    
    <br>
	<div id="divItemsGrid">

	 
	<%
	String type1 = "consumer";
	String type2 = "manufacturer";
	String type3 = "researcher";
	User userObj = new User();
	out.print("Consumer Details");
	out.print(userObj.readUsers(type1));
	out.println();
	out.println();
	out.print("Manufacturer Details");
	out.println();
	out.println();
	out.print(userObj.readUsers(type2));
	out.print("Researcher Details");
	out.print(userObj.readUsers(type3));
	
	%> 
	</div>

<br>


</div>
</div>
</div>


</body>
</html>
