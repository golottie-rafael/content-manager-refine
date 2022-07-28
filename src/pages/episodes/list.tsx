import { List, Typography } from "@pankod/refine-antd";

const { Title, Text } = Typography;

export const EpisodesList: React.FC = () => {
    return (
        <List>
            <Title level={3}>Nothing to show...</Title>
            <Text>Please select an episode from a series' list of episodes.</Text>
        </List>
    );
};
