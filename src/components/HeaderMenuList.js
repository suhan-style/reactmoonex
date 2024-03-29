const HeaderMenuList = [
    {
        navItem : 'Home',
        navLink : '/'
    },
    {
        navItem : 'Portfolio',
        navLink : '/portfolio',
        children : [
            {
                navItem : 'Portfolio Type 1',
                navLink : '/portfolio-type-1'
            },
            {
                navItem : 'Portfolio Type 2',
                navLink : '/portfolio-type-2'
            }
        ]
    },
    {
        navItem : 'Coding Task',
        navLink : '/coding-task'
    },
    {
        navItem : 'Contact',
        navLink : '/contact'
    }
];

export default HeaderMenuList;