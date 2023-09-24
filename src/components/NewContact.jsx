// import React from 'react'

// const NewContact = () => {
//   return (
//     <div>
//       new contact
//     </div>
//   )
// }

// export default NewContact
import { useDispatch, useSelector } from 'react-redux';
import { PlusOutlined } from '@ant-design/icons';
import React, { useState } from 'react';
import {
    Button,
    Cascader,
    Checkbox,
    DatePicker,
    Form,
    Input,
    InputNumber,
    Radio,
    Select,
    Slider,
    Switch,
    TreeSelect,
    Upload,
} from 'antd';
import { inputValue, todosMap } from '../Redux-store/features/sliceCounter';


const { RangePicker } = DatePicker;
const { TextArea } = Input;
const normFile = (e) => {
    if (Array.isArray(e)) {
        return e;
    }
    return e?.fileList;
};
const FormDisabledDemo = () => {

    const obj = useSelector((state) => state.counter);
    const dispatch = useDispatch();

    const submit = (e) => {
        e.preventDefault()
        dispatch(todosMap());
        dispatch(inputValue(""));
    }

    const change = (e) => {
        dispatch(inputValue(e.target.value))
    }

    return (
        <div className=' bg-slate-300 p-16 flex flex-col items-center justify-center'>
            <div>
                <h1 className=' text-6xl'>FORM</h1>
            </div>
            <div className=' w-[70%] flex flex-col items-center justify-center  '>
                <form onSubmit={() => submit()} >
                <Form>
                    <form onSubmit={() => submit()}>
                        <Form.Item className='mt-10' label="Name">
                            <input className='w-full p-2 rounded-xl' value={obj.todo} onChange={(e) => change(e)} placeholder="Enter your first name" />
                            {obj.todo}
                        </Form.Item>
                    </form>
                    <form className=' w-[500px]' onSubmit={() => submit()}>
                        <Form.Item className='mt-10' label="Surname">
                            <input className='w-full p-2 rounded-xl' placeholder="Enter your last name" />
                        </Form.Item>
                    </form>
                    <form onSubmit={() => submit()}>
                        <Form.Item className='mt-10' label="Father's name">
                            <input className='w-full p-2 rounded-xl' placeholder="Enter your father's name" />
                        </Form.Item>
                    </form>
                    <form onSubmit={() => submit()}>
                        <Form.Item className='mt-10' label="Email">
                            <input className='w-full p-2 rounded-xl' placeholder="Enter your e-mail" />
                        </Form.Item>
                    </form>
                    <form onSubmit={() => submit()}>
                        <Form.Item label="Field">
                            <Select placeholder="Select your field" >
                                <Select.Option value="Front-end Developer">Front-end Developer</Select.Option>
                                <Select.Option value="Back-end Developer">Back-end developer</Select.Option>
                                <Select.Option value="Full-stack Developer">Full-stack Developer</Select.Option>
                            </Select>
                        </Form.Item>
                    </form>
                    <form onSubmit={() => submit()}>
                        <Form.Item label="Motivation">
                            <TextArea placeholder="Write about your motivation" rows={4} />
                        </Form.Item>
                    </form>
                    <form onSubmit={() => submit()}>
                        <Form.Item label="Gender">
                            <Radio.Group>
                                <Radio value=" Male "> Male </Radio>
                                <Radio value="Female"> Female </Radio>
                            </Radio.Group>
                        </Form.Item>
                    </form>
                    <form onSubmit={() => submit()}>
                        <Form.Item >
                            <button className='w-[100%] p-3 rounded-xl bg-cyan-500 text-white '>Send Form</button>
                        </Form.Item>
                    </form>
                </Form>
                </form>
            
            </div>

        </div>
    );
};
export default () => <FormDisabledDemo />;