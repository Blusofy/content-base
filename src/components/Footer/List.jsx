import { List, ListItem, ListItemIcon, ListItemText, Typography } from '@material-ui/core';
import { useRouter } from 'next/router';

export default function InsetList({ lists, icon }) {
    const router = useRouter();
    return (
        <List component="nav" aria-label="contacts">
            {lists.map(({ name, url }) => (
                <ListItem
                    button
                    key={name}
                    style={{ paddingLeft: '0px' }}
                    onClick={() => router.push(url)}
                >
                    <ListItemIcon>{icon}</ListItemIcon>
                    <ListItemText primary={<Typography variant="subtitle1">{name}</Typography>} />
                </ListItem>
            ))}
        </List>
    );
}
