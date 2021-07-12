import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { AddCandidate } from '../../layouts/AddCandidate'
import { AddEmployer } from '../../layouts/AddEmployer'
import { UserSelection } from '../../layouts/UserSelection'

export const RegisterUser = () => {
    const [selection, setSelection] = useState(0)
    const history = useHistory()
    const onSubmitted=()=>{
        history.push("/")
    }
    return (
        <div>
            <UserSelection setSelection={setSelection}/>
            {selection===1&&<AddCandidate onSubmitted={onSubmitted}/>}
            {selection===2&&<AddEmployer onSubmitted={onSubmitted}/>}
            
        </div>
    )
}
