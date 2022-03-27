import React from 'react'

const Pagination = (props) => {
    return (
        <>
            <div className="container d-flex justify-content-between my-3">
            <button  type="button" className="btn btn-dark" onClick={props.prev}
                    disabled={props.strt-9 < 0}
                    >{`<< Previous`}</button>
                    <button type="button"  className="btn btn-dark" onClick={props.next} 
                    disabled={props.last+9 > props.len} >{`Next >>`}</button>

            </div>
        </>
    )
}

export default Pagination
