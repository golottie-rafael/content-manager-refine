import {
    List,
    Table,
    useTable,
    ImageField,
    Tag,
    getDefaultSortOrder,
} from "@pankod/refine-antd";
import { useNavigation } from "@pankod/refine-core";

import { ISeries } from "interfaces";

type SeriesStatusProps = {
    status: "Reviewed" | "Unreviewed";
};

export const SeriesStatus: React.FC<SeriesStatusProps> = ({ status }) => {
    let color;

    switch (status) {
        case "Reviewed":
            color = "green";
            break;
        case "Unreviewed":
            color = "red";
            break;
    }

    return <Tag color={color}>{status}</Tag>;
};

export const SeriesList: React.FC = () => {
    const { tableProps, sorter } = useTable<ISeries>();
    const { show } = useNavigation();
    return (
        <List>
            <Table
                {...tableProps}
                rowKey="id"
                onRow={(series) => {
                    return {
                        onClick: () => {
                            show("series", series.id);
                        },
                    };
                }}>
                <Table.Column
                    key="thumbnailUrl"
                    dataIndex="thumbnailUrl"
                    title="Thumbnail"
                    render={(value) => <ImageField value={value} width={100}/>}
                />
                <Table.Column
                    key="title"
                    dataIndex="title"
                    title="Title"
                    sorter
                    defaultSortOrder={getDefaultSortOrder(
                        "title",
                        sorter,
                    )}/>
                <Table.Column
                    key="reviewed"
                    dataIndex="reviewed"
                    title="Status"
                    render={(value) => {
                        return <SeriesStatus status={value ? "Reviewed" : "Unreviewed"} />;
                    }}
                />
                {/* <Table.Column<ISeries>
                    title="Actions"
                    dataIndex="actions"
                    render={(_text, record): React.ReactNode => {
                        return (
                            <ShowButton
                                size="small"
                                recordItemId={record.id}
                                hideText
                            />
                        );
                    }}
                /> */}
            </Table>
        </List>
    );
};
