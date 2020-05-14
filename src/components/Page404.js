import React from 'react'
import { useHistory} from 'react-router-dom'

export default function Page404() {
    let history = useHistory()
    const handleClose = () => {
        history.push("/");
    }
    return (
        <div>
            <h2>That page does not exist</h2>
            <div className="close-btn" onClick={handleClose}>Close</div>
        </div>
    )
}
