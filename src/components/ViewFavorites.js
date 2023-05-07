import React, { useState } from "react";

import { useSelector, useDispatch } from 'react-redux'
import { viewMsgs,allMsg } from "../slice/messageSlice";
const ViewFavorites = () => {
  const dispatch=useDispatch()
  const Msg = useSelector((state) => state.messages.favoriteMsgs);
  const[favMsg,setFavMsg]=useState([])
  console.log("favvvvv", Msg);
  const favoriteMsgObjects = [];

  for (let i = 0; i < Msg.length; i++) {
    const nestedArray = Msg[i];
    const object = nestedArray[0];
    favoriteMsgObjects.push(object);
  }

  console.log(favoriteMsgObjects);

  const uniqueFavoriteMsgObjects = favoriteMsgObjects.filter(
    (object, index, self) =>
      index ===
      self.findIndex(
        (t) =>
          t.id === object.id &&
          t.Sender === object.Sender &&
          t.message === object.message &&
          t.favorites === object.favorites
      )
  );
  const viewSelectedMsg=(id)=>{
    const selectedMessages=[...uniqueFavoriteMsgObjects]
    const viewMsg1=selectedMessages.filter((msg)=>msg.id===id)
    dispatch(viewMsgs(viewMsg1))
      }

  console.log(uniqueFavoriteMsgObjects);

  return <div >
    {uniqueFavoriteMsgObjects.map((msg)=>(<div className=" border border-gray-800 m-2 rounded-lg" key={msg.id}>
      <h1 onClick={()=>viewSelectedMsg(msg.id)}>{msg.Sender}</h1>
    </div>))}
  </div>;
};

export default ViewFavorites;
