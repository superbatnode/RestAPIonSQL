# RestAPIonSQL
routes - 
user/register - post - {username, password, confirmPassword, emailID, firstName, lastName} #email and username should  be unique
user/login - post -  {username, password } #return login token 
user/get - get - return user data
user/delete - put - delete all user data
user/address - post- address, city, state , pincode , phone no  
user/get/id - get - return all the data related to the user
user/address - delete - {will take an address  and acess token}  #delete the user address
user/forgot-password - 
user/profile-img 
email confirmation 
//email part done - 