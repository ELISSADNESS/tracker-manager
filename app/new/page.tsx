import React from 'react'

const NewPage = () => {
    return (
        <>
            <form className='form-control space-y-5 ml-3'>
                <h2 className='text-2xl'>New Task</h2>
                <input type="text" placeholder="Title" className="input input-bordered w-full max-w-xl" />
                <textarea className="textarea textarea-bordered w-full max-w-xl" placeholder="Description"></textarea>

                <button type="submit" className="btn btn-primary w-fit">Submit</button>
            </form>
        </>
    )
}

export default NewPage;