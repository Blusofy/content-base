/**
 * Date:01/04/2021
 * Author: Muhammad Minhaj
 * Title: WEB FOOTTER
 * Description: Web footer section
 * * */
import { Container, Divider, Grid, Typography, useMediaQuery } from '@material-ui/core';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import TrendingFlatIcon from '@material-ui/icons/TrendingFlat';
import SocialLinks from '../SocialLinks';
import CustomList from './List';

function GapDiv({ children }) {
    return <div style={{ padding: '2rem' }}>{children}</div>;
}
const languages = [
    {
        name: 'জাভাস্ক্রিপ্ট',
        url: '/javascript',
    },
    {
        name: 'পাইথন',
        url: '/python',
    },
    {
        name: 'সি',
        url: '/c',
    },
    {
        name: 'সি++',
        url: '/c',
    },
    {
        name: 'টাইপস্ক্রিপট',
        url: '/typescript',
    },
];
const resources = [
    {
        name: 'প্রোগ্রামিং',
        url: '/programming',
    },
    {
        name: 'ডাটা স্ট্রাকচার',
        url: '/datastructure',
    },
    {
        name: 'অ্যালগরিদম',
        url: '/algorithm',
    },
    {
        name: 'জনপ্রিয় প্রযুক্তি',
        url: '/technologies',
    },
    {
        name: 'ব্লগ',
        url: '/blog',
    },
];
const organization = [
    {
        name: 'আমাদের সম্পর্কে',
        url: '/about-us',
    },
    {
        name: 'আমাদের লেখকগণ',
        url: '/our-authors',
    },
    {
        name: 'কন্ট্রিবিউশন',
        url: '/contribution',
    },
    {
        name: 'ব্যবহারবিধি এবং নীতিমালা',
        url: '/terms-conditions',
    },
    {
        name: 'ইউটুব',
        url: 'https://www.youtube.com/channel/UCBSNbOumi5uNLJz8vFGJLRQ',
    },
];
const links = [
    { name: 'facebook', href: 'https://facebook.com/InformativeCoding' },
    { name: 'linkedin', href: 'https://www.linkedin.com/company/informativecoding' },
    { name: 'github', href: 'https://github.com/InformativeCoding' },
    { name: 'youtube', href: 'https://www.youtube.com/channel/UCBSNbOumi5uNLJz8vFGJLRQ' },
];
function Footer() {
    const isMobile = useMediaQuery('(max-width:600px)');
    return (
        <footer style={{ background: '#f5f5f5' }}>
            <Container>
                <Grid container>
                    <Grid item sm={3}>
                        <GapDiv>
                            <Typography variant="h5">জনপ্রিয় প্রযুক্তি</Typography>
                            <CustomList lists={languages} icon={<FiberManualRecordIcon />} />
                        </GapDiv>
                    </Grid>
                    <Grid item sm={3}>
                        <GapDiv>
                            <Typography variant="h5">রিসোর্স</Typography>
                            <CustomList lists={resources} icon={<TrendingFlatIcon />} />
                        </GapDiv>
                    </Grid>
                    <Grid item sm={3}>
                        <GapDiv>
                            <Typography variant="h5">অর্গানাইজেশন</Typography>
                            <CustomList lists={organization} icon={<FiberManualRecordIcon />} />
                        </GapDiv>
                    </Grid>
                    <Grid item sm={3}>
                        <GapDiv>
                            <Typography variant="h5">ইনফরমেটিভ কোডিং</Typography>
                            <br />

                            <Typography variant="body1">
                                ইনফরমেটিভ কোডিং হচ্ছে একটি অলাভজনক সংস্থা। যার উদ্দেশ্য বাংলায়
                                প্রোগ্রামিং সম্পর্কিত বিষয় সমূহের বৃহৎ সংস্থান গড়ে তোলে মানুষ কে
                                শিখার সুযোগ করে দেওয়া। ইনফরমেটিভ কোডিং এর কনটেন্ট ইউটুব এবং
                                ওয়েবসাইটের মাধ্যমে প্রকাশিত হয়।
                            </Typography>
                        </GapDiv>
                    </Grid>
                </Grid>
                <Divider />
                <div
                    style={{
                        padding: '0.5rem 0rem',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        flexDirection: isMobile ? 'column-reverse' : 'row',
                    }}
                >
                    <Typography variant="h6">
                        - ইনফরমেটিভ{' '}
                        <Typography variant="span" color="textSecondary">
                            কোডিং
                        </Typography>
                    </Typography>
                    <SocialLinks links={links} />
                </div>
            </Container>
        </footer>
    );
}
export default Footer;
