private void buildList(int untrustedListSize)
{
    if (0 > untrustedListSize)
    {
        die("Negative value supplied for list size, die evil hacker!");
    }
    Widget[] list = new Widget[untrustedListSize];
    list[0] = new Widget();
}