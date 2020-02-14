import { useState, useEffect } from "react";


let globalstate = {};
let listeners = [];
let actions = {};

export const useStore = (shouldListen = true) => {
 const setState= useState(globalstate)[1];
 
 const dispatch = (actionIdentifier,payload) =>{
    const newstate =  actions[actionIdentifier](globalstate,payload);
    globalstate = {...globalstate,...newstate};
}
    for(const listener of listeners){
                listener(globalstate);
}
    useEffect(()=>{
        if(shouldListen)
        {listeners.push(setState)}
    return()=>{
        if(shouldListen)
        {listeners= listeners.filter(li => li !== setState);}
    }
    },[setState,shouldListen])
 return [globalstate,dispatch];
};

export const initStore = (userAction, initialState)=>{
    if(initialState){
        globalstate= {...globalstate,...initialState}
    }
    actions ={...actions,...userAction}
};