public enum Roles
{
    ADMIN,OPERATOR,USER,GUEST
}

public void resetPassword(User requestingUser, User user, String password)
{
    if (isAuthenticated(requestingUser))
    {
        switch (requestingUser.role)
        {
        case GUEST:
            System.out.println("You are not authorized to perform this command");
            break;

        case USER:
            System.out.println("You are not authorized to perform this command");
            break;

        default:
            setPassword(user, password);
            break;
        }
    }
    else
    {
        System.out.println("You must be logged in to perform this command");
    }
}