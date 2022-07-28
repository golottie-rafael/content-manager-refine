import { useForm, Form, Input, Select, Edit, useSelect, Typography, Checkbox, Image } from "@pankod/refine-antd";
import { ISeries } from "interfaces";


export const SeriesEdit: React.FC = () => {
    const { formProps, saveButtonProps, queryResult } = useForm<ISeries>({
        redirect: false
    });

    return (
        <Edit saveButtonProps={saveButtonProps}>
            <Image src={queryResult?.data?.data.thumbnailUrl} width={100}></Image>
            <Form {...formProps} layout="vertical">
                <Form.Item
                    label="Title"
                    name="title"
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
                    name="id"
                >
                    <Input disabled={true} />
                </Form.Item>
                <Form.Item
                    label="Reviewed"
                    name="reviewed"
                    valuePropName="checked"
                >
                    <Checkbox>Reviewed</Checkbox>
                </Form.Item>
                <Form.Item
                    label="Thumbnail"
                    name="thumbnailUrl">
                    <Input />
                </Form.Item>
            </Form>
        </Edit>
    );
};