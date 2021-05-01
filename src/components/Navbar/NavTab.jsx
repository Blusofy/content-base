import { Tab, Tabs, Typography } from '@material-ui/core';
import {
    Code as CodeIcon,
    DataUsage as DataUsageIcon,
    Help as HelpIcon,
    Home as HomeIcon,
    QueryBuilder as QueryBuilderIcon,
    ShowChart as ShowChartIcon,
} from '@material-ui/icons';

function a11yProps(index) {
    return {
        id: `scrollable-force-tab-${index}`,
        'aria-controls': `scrollable-force-tabpanel-${index}`,
    };
}

const listMenu = [
    {
        name: 'হোম',
        href: '/',
        icon: <HomeIcon />,
    },
    {
        name: 'প্রোগ্রামিং',
        href: '/programming',
        icon: <CodeIcon />,
    },
    {
        name: 'ডাটা স্ট্রাটার্স',
        href: '/data-structures',
        icon: <DataUsageIcon />,
    },
    {
        name: 'অ্যালগরিদমস',
        href: '/algorithms',
        icon: <ShowChartIcon />,
    },
    {
        name: 'টেকনোলজি',
        href: '/technologies',
        icon: <HelpIcon />,
    },
    {
        name: 'ব্লগ',
        href: '/blogs',
        icon: <QueryBuilderIcon />,
    },
];
const getCurrentTabValue = () => {
    switch (process.env.ROOT_PAGE) {
        case '/':
            return process.env.ROOT_PAGE;
        case '/programming':
            return process.env.ROOT_PAGE;
        case '/data-structures':
            return process.env.ROOT_PAGE;
        case '/algorithms':
            return process.env.ROOT_PAGE;
        case '/technologies':
            return process.env.ROOT_PAGE;
        case '/blogs':
            return process.env.ROOT_PAGE;
        default:
            return false;
    }
};

function NavTab() {
    return (
        <Tabs
            value={getCurrentTabValue()}
            variant="scrollable"
            scrollButtons="on"
            indicatorColor="primary"
            textColor="primary"
            aria-label="scrollable force tabs example"
        >
            {listMenu.map(({ name, href, icon }, index) => (
                <Tab
                    label={
                        <Typography variant="h6" color="textSecondary">
                            {name}
                        </Typography>
                    }
                    href={href}
                    value={href}
                    icon={icon}
                    key={name}
                    {...a11yProps(index)}
                />
            ))}
        </Tabs>
    );
}
export default NavTab;
