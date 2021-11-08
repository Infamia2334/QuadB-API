# QuadB-API

*API Documentation:-*

* details API will fetch details of a specific user given the user_id as a query parameter.
Structure: BASE_URL/details/${user_id}
Returns: object:{...user_details}
* /update API updates the details of a specific user given the new details in the request body. 
Structure: BASE_URL/update
Request Body: object:{...new_details_of_user}
Returns: Some kind of a success or failure message for acknowledgement
* /image gets the image of an user given the user_id as a query parameter
Structure: BASE_URL/image/${user_id}
Returns: object:{...user_image}
* /insert inserts a new user to the database
Structure: BASE_URL/insert
Request Body: object:{user_details}
Returns: Some kind of success or failure message
* /delete deletes an user from the database given the user_id
Structure: BASE_URL/delete/${user_id}
Returns: A success or failure message

*Database Documentation:-*
Users table structure:

* user_id : A randomly generated UUIDV4
* user_name : The username of an user (May not be unique)
* user_email : The user’s email address (unique)
* user_password: The user’s password
* user_image : The user’s image
* total_orders : Total orders placed by user**
* created_at : Timestamp when user was created
* last_logged_in: Timestamp when user last logged in
