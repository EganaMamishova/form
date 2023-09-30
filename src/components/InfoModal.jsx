import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { hideModal, showModal } from '../Redux-store/features/sliceCounter';


const InfoModal = () => {

    const obj = useSelector((state) => state.counter)
    const dispatch = useDispatch();


    return (
        <>       
                {obj.todos.map((item, id) => (
                    <Modal title="Info!" open={obj.show} /* onOk={} */ onCancel={()=>dispatch(hideModal())}>
                        {/* {console.log(obj.show)}
                       {console.log(item.id)}  */}
                    <nav key={id}>
                        <ul>
                            <li>
                                {"Name: " + item.name}
                            </li>
                            <li>
                                {"Surname: " + item.surname}
                            </li>
                            <li>
                                {"Father's name: " + item.fatherName}
                            </li>
                            <li>
                                {"Field: " + item.field}
                            </li>
                            <li>
                                {"Email: " + item.mail}
                            </li>
                            <li>
                                {"Gender: " + item.gender}
                            </li>
                        </ul>
                    </nav>
                    </Modal>
                ))}
           
        </>

    )
}

export default InfoModal
