import React from 'react';
import { Divider, Space, Table, Tag } from 'antd';
import { AiOutlineEdit } from "react-icons/ai"
import { BiTrashAlt } from "react-icons/bi"
import { BsInfoCircle } from "react-icons/bs"
import { useDispatch, useSelector } from 'react-redux';
import { contactDelete, showModal, todosMap } from '../Redux-store/features/sliceCounter';




const data = [
    {
        name: 'Jim Green',
        key: '1',
        icon: <AiOutlineEdit />,
        tags: ['nice', 'developer'],
    },
    {
        key: '2',
        name: 'Jim Green',
        tags: ['loser'],
    },
    {
        key: '3',
        name: 'Joe Black',
        tags: ['cool', 'teacher'],
    },

];

const App = () => {

    const obj = useSelector((state) => state.counter)
    const dispatch = useDispatch()
    console.log(obj.todos);

    const columns = [

        {
            title: 'Name',
            dataIndex: 'name',
            // key: 'name',
            // render: (text) => <a>{text}</a>,
        },
        {
            title: 'Surname',
            dataIndex: 'surname',
            // key: 'surname',
        },
        {
            title: 'Fathers name',
            dataIndex: 'fatherName',
            // key: 'fatherName',
        },
        {

            title: 'Professions name',
            // key: 'field',
            dataIndex: 'field',

            // render: (_, { tags }) => (

            //     <>
            //         <ul>

            //             {tags.map((tag) => {

            //                 return (
            //                     <Tag key={tag}>
            //                         {tag.toLowerCase()}

            //                     </Tag>                       
            //                 );
            //             })}
            //         </ul>
            //     </>
            // ),
        },
        {
            title: 'Edit Info Delete',
            key: 'Edit Info Delete',
            render: (_, item) => (
                <Space size="middle" key={item.id} className='text-[25px] flex items-center justify-center'>
                    <button> <AiOutlineEdit /></button>
                    <BsInfoCircle onClick={() => dispatch(showModal(item.id))} />
                    <button onClick={() => dispatch(contactDelete(item.id))}> <BiTrashAlt /></button>
                </Space>
            ),
        },
    ];
    return (

        <>
            <Table className='mb-[400px] ' columns={columns} dataSource={obj.todos} />
            {/* {
        obj.todos?.map((item, index)=>(
            <li key={index}>{item.name}</li>         
        ))   
     }  */}

        </>
    )
}

export default App;