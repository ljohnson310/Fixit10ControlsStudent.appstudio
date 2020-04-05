
btnLogin.onclick=function(){
    req1 = ""
      req = Ajax("https://radlab.creighton.edu/appStudio/authLDAP.php" , "POST", "j_username=" + inptNetID.value + "&j_password=" + inptPassword.value)

if (req.status == 200) { //everything worked.
  lbl.Reponse.hidden = false
  lbl.Response.value = "Your LDAP return code was" + req.responseText
  if (req.responseText === 1) 
    ChangeForm(favFoods)
  else 
    NSB.MsgBox("Incorrect login information")
} else  
    lblResponse.hidden = false;
    lblResponse.value = "Error:" + req1.status;
    
}


btnNextpage.onclick=function(){
  ChangeForm(favFoods)
}
