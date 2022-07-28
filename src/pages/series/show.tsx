import { useNavigation, useShow } from "@pankod/refine-core";
import { Show, Typography, Tag, Image, Row, Col, List, Table } from "@pankod/refine-antd";

const { Title, Text } = Typography;

export const SeriesShow = () => {
    const { queryResult } = useShow();
    const { data, isLoading } = queryResult;
    const record = data?.data;
    const { show } = useNavigation();

    const renderEpisodesList = () => (
        <List
            pageHeaderProps={{ style: { marginTop: 20 } }}
            title={
                <Text style={{ fontSize: 22, fontWeight: 800 }}>
                    Episodes
                </Text>
            }
        >
            <Table
                dataSource={record?.episodes}
                onRow={(episode) => {
                    return {
                        onClick: () => {
                            show("episodes", episode.id);
                        },
                    };
                }}
            >
                <Table.Column
                    dataIndex="seasonNumber"
                    title={"Season"}
                />
                <Table.Column
                    dataIndex="episodeNumber"
                    title={"Episode"}
                />
                <Table.Column
                    title={"Title"}
                    dataIndex="title"
                    render={(title) => (
                        <Text style={{ fontWeight: 800 }}>{title}</Text>
                    )}
                />
                <Table.Column
                    dataIndex="duration"
                    title={"Duration"}
                />
            </Table>
        </List>
    );

    return (
        <>
        <Show isLoading={isLoading} canDelete={true}>
            <Title level={5}>Title</Title>
            <Text>{record?.title}</Text>
            
            <Title level={5}>ID</Title>
            <Text>{record?.id}</Text>
            
            <Title level={5}>Reviewed</Title>
            <Text><Tag>{record?.reviewed ? 'Yes' : 'No'}</Tag></Text>

            <Title level={5}>Thumbnail</Title>
            <Row>
                <Col span={18}><Text>{record?.thumbnailUrl}</Text></Col>
                <Col span={6}><Image src={record?.thumbnailUrl} width={100}></Image></Col>
            </Row>
        </Show>
        {renderEpisodesList()}
        </>
    );
};