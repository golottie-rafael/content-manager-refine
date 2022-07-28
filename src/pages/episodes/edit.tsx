import { Typography, Edit, useForm, Form, Input } from "@pankod/refine-antd";
import { IEpisode } from "interfaces";

const { Title, Text } = Typography;

export const EpisodeEdit: React.FC = () => {
    const { formProps, saveButtonProps, queryResult } = useForm<IEpisode>({
        redirect: false
    });

    return (
        <>
        <Edit saveButtonProps={saveButtonProps}>
            <Form {...formProps} layout="vertical">
                <Form.Item
                    label="Title"
                    name={["result", "title"]}
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="ID"
                    name={["result", "id"]}
                >
                    <Input disabled={true} />
                </Form.Item>
                <Form.Item
                    label="Description"
                    name={["result", "description"]}
                >
                    <Input.TextArea/>
                </Form.Item>
            </Form>
        </Edit>
        </>
    );
};