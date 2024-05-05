import React, { useEffect, useState } from 'react'
import './Modal.css'
const Modal = () => {
    const [show, setShow] = useState(false);
    const handleClose = ()=>{
        setShow(false);
    }

    useEffect(()=>{
        function onKeyDown(e){
            if(e.keyCode === 27){
                handleClose();
            }
        }
        document.addEventListener("keydown", onKeyDown);

        return ()=>{
            document.removeEventListener("keydown", onKeyDown);
        }
    })


  return (
    <div className='main' onClick={handleClose}>
      <h1 className='heading'>Build the modal functionality</h1>
      <button className="button" type='button' onClick={(e)=> {
        e.stopPropagation();
        setShow(true);
        }}> Open Modal</button>
      {show && <div className="modal-main">
        <div className="modal">
            <div className="modal-heading">
                <span className="modal-head">Modal</span>
                <span className="modal-close" onClick={handleClose}>X</span>
            </div>
            <div className="modal-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur ullam, nobis asperiores magni optio doloribus fugit voluptatum! Ad voluptas consequuntur qui illo officia quos, molestiae eius omnis, inventore, aspernatur accusamus?
                Unde aperiam blanditiis dolore veritatis ad? Facilis, at ducimus? Hic, sunt ducimus. Sapiente vel molestias neque nihil dolores soluta voluptates enim maiores, ex iste modi eum repudiandae? Ut, rem quae.
                Quisquam voluptates voluptatibus delectus autem enim laboriosam eum. Hic ratione perferendis est cum tenetur, dolor consequatur facilis nisi sunt dolorem incidunt amet quae natus ab et, dolore inventore nihil quasi!
                Quo quidem, magnam mollitia fugiat, autem sed itaque officia illo aut commodi eveniet quisquam magni incidunt. Provident alias consequuntur blanditiis, velit sint vel quis neque quaerat. Quos omnis alias doloremque?
            </div>
        </div>
      </div>}
    </div>
  )
}

export default Modal
