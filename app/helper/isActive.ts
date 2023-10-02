

export const isActiveUser = (members:string[],email:string)=>{
    const isActive = members.indexOf(email) !== -1

    return isActive
}