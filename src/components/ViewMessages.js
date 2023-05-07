import React, { useEffect, useState } from "react";
import { data } from "../constants/constants";
import { useSelector, useDispatch } from 'react-redux'
import { viewMsgs,allMsg } from "../slice/messageSlice";
const ViewMessages = () => {
  const dispatch=useDispatch()
  const MsgConst = useSelector((state) => state.messages.allMessages);
  const [data1, setData] = useState([data]);
  console.log(data1);
  const getAllMsgs=()=>{
    dispatch(allMsg(data1[0]))
  }
  const viewSelectedMsg=(id)=>{
const selectedMessages=[...data1[0]]
const viewMsg1=selectedMessages.filter((msg)=>msg.id===id)
dispatch(viewMsgs(viewMsg1))
  }
 useEffect(()=>getAllMsgs(),[data1])
  return (
    <div className="p-2 m-2">
      <>
        {
          <div>
            <h1>No of Message {MsgConst?.length}</h1>
          </div>
        }

        <div>
          {MsgConst?.map((name) => (
            <h1 className="border border-gray-800 p-2 m-2 rounded-lg" onClick={()=>viewSelectedMsg(name.id)}>{name.Sender}</h1>
          ))}
        </div>
      </>
    </div>
  );
};

export default ViewMessages;
