$(document).ready(function()
{
if ($("#alertSuccess").text().trim() == "")
{
$("#alertSuccess").hide();
}
$("#alertError").hide();
});

//SAVE
$(document).on("click", "#btnSave", function(event)
{
// Clear alerts---------------------
$("#alertSuccess").text("");
$("#alertSuccess").hide();
$("#alertError").text("");
$("#alertError").hide();
// Form validation-------------------
var status = validateUserForm();
if (status != true)
{
$("#alertError").text(status);
$("#alertError").show();
return;
}

var type = ($("#hidUserIDSave").val() == "") ? "POST" : "PUT";
$.ajax(
{
url : "UsersAPI",
type : type,
data : $("#formUser").serialize(),
dataType : "text",
complete : function(response, status)
{
onUserSaveComplete(response.responseText, status);
}
});
});


function onUserSaveComplete(response, status)
{
if (status == "success")
{
var resultSet = JSON.parse(response);
if (resultSet.status.trim() == "success")
{
$("#alertSuccess").text("Successfully saved.");
$("#alertSuccess").show();
$("#divItemsGrid").html(resultSet.data);
} else if (resultSet.status.trim() == "error")
{
$("#alertError").text(resultSet.data);
$("#alertError").show();
}
} else if (status == "error")
{
$("#alertError").text("Error while saving.");
$("#alertError").show();
} else
{
$("#alertError").text("Unknown error while saving..");
$("#alertError").show();
}
$("#hidUserIDSave").val("");
$("#formUser")[0].reset();
}

// CLIENT-MODEL================================================================
function validateUserForm()
{
// CODE
if ($("#type").val().trim() == "")
{
return "Insert user type.";
}
// NAME
if ($("#userName").val().trim() == "")
{
return "Insert user Name.";
}

if ($("#password").val().trim() == "")
{
return "Insert user password.";
}

if ($("#email").val().trim() == "")
{
return "Insert user email.";
}

if ($("#address").val().trim() == "")
{
return "Insert user address.";
}

if ($("#dob").val().trim() == "")
{
return "Insert user date of birth.";
}

if ($("#phone").val().trim() == "")
{
return "Insert user phone.";
}

if ($("#desc").val().trim() == "")
{
return "Insert user Description.";
}

if ($("#profileInfo").val().trim() == "")
{
return "Insert user profile information.";
}
return true;
}




$(document).on("click", ".btnUpdate", function(event)
{
$("#hidUserIDSave").val($(this).data("userid"));
$("#userName").val($(this).closest("tr").find('td:eq(0)').text());
$("#password").val($(this).closest("tr").find('td:eq(1)').text());
$("#email").val($(this).closest("tr").find('td:eq(2)').text());
$("#address").val($(this).closest("tr").find('td:eq(3)').text());
$("#dob").val($(this).closest("tr").find('td:eq(4)').text());
$("#phone").val($(this).closest("tr").find('td:eq(5)').text());

})


$(document).on("click", ".btnRemove", function(event)
{
	var data = "userID="+ + $(this).data("userid") + "&userType=" + +$(this).data("userType");
	
$.ajax(
{
url : "UsersAPI",
type : "DELETE",
data :"userID="+ + $(this).data("userid"),
dataType : "text",
complete : function(response, status)
{
onItemDeleteComplete(response.responseText, status);
}
});
})


function onItemDeleteComplete(response, status)
{
if (status == "success")
{
var resultSet = JSON.parse(response);
if (resultSet.status.trim() == "success")
{
$("#alertSuccess").text("Successfully deleted.");
$("#alertSuccess").show();
$("#divItemsGrid").html(resultSet.data);
} else if (resultSet.status.trim() == "error")
{
$("#alertError").text(resultSet.data);
$("#alertError").show();
}
} else if (status == "error")
{
$("#alertError").text("Error while deleting.");
$("#alertError").show();
} else
{
$("#alertError").text("Unknown error while deleting..");
$("#alertError").show();
}
}
