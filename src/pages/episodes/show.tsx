import { useShow } from "@pankod/refine-core";
import { Show, Typography, Image, Row, Col } from "@pankod/refine-antd";
import { VideoPlayer } from "components/VideoPlayer";

const { Title, Text } = Typography;

export const EpisodeShow = () => {
    const { queryResult } = useShow();
    const { data, isLoading } = queryResult;
    const record = data?.data.result;

    return (
        <>
        <Show isLoading={isLoading} canEdit={true}>
            <Title level={5}>Title</Title>
            <Text>{record?.title}</Text>
            <Title level={5}>Thumbnail</Title>
            <Row>
                <Col span={18}><Text>{record?.thumbnailUrl}</Text></Col>
                <Col span={6}><Image src={record?.thumbnailUrl} width={100}></Image></Col>
            </Row>
            <Title level={5}>Description</Title>
            <Text>{record?.description}</Text>
            <Title level={5}>ID</Title>
            <Text>{record?.id}</Text>
            <Title level={5}>Kind</Title>
            <Text>{record?.kind}</Text>
            <Title level={5}>Duration</Title>
            <Text>{record?.duration}</Text>
            <Title level={5}>Season</Title>
            <Text>{record?.seasonNumber}</Text>
            <Title level={5}>Episode</Title>
            <Text>{record?.episodeNumber}</Text>
            <Title level={5}>Position</Title>
            <Text>{record?.position}</Text>
            <Title level={5}>Media URL</Title>
            <Text>{record?.mediaUrl}</Text>
            <VideoPlayer url={record?.mediaUrl}></VideoPlayer>
        </Show>
        </>
    );
};