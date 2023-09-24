import React from 'react';
import { Space, Table, Tag } from 'antd';
import { AiOutlineEdit } from "react-icons/ai"
const columns = [
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        render: (text) => <a>{text}</a>,
    },
    {
        title: 'Surname',
        dataIndex: 'Surname',
        key: 'Surname',
    },
    {
        title: 'Fathers name',
        dataIndex: 'Fathers name',
        key: 'Fathers name',
    },
    {
        title: 'Professions name',
        key: 'Professions name',
        dataIndex: 'Professions name',
        render: (_, { tags }) => (
            <>
                <ul>
                    {tags.map((tag) => {
                        return (
                            <Tag key={tag}>
                                {tag.toLowerCase()}
                              
                            </Tag>                       
                        );
                    })}
                </ul>
            </>
        ),
    },
    {
        title: 'Edit Info Delete',
        key: 'Edit Info Delete',
        render: (_, record) => (
            <Space size="middle">
                <a> {record.icon}</a>
                <a>Delete</a>
            </Space>
        ),
    },
];
const data = [
    {
        key: '1',
        icon: <AiOutlineEdit />,
        tags: ['nice', 'developer'],
    },
    {
        key: '2',
        name: 'Jim Green',
        age: 42,
        address: 'London No. 1 Lake Park',
        tags: ['loser'],
    },
    {
        key: '3',
        name: 'Joe Black',
        age: 32,
        address: 'Sydney No. 1 Lake Park',
        tags: ['cool', 'teacher'],
    },
];
const App = () => <Table columns={columns} dataSource={data} />;
export default App;