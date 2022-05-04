import React from 'react'

const NavbarItem = ({props}) => {
    return (
        <>
            <div className='col-sm-5 col-md-3 col-lg-2 col-5 py-3' >
                <div className='box' onClick={props.func}  >
                    <div className='col-mda-auto'>
                        <img src={props.src} className="icon" alt={props.name + '.icon'} />
                    </div>
                    <div className='col-md-auto alt-text'  >
                        <span >{props.name}</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NavbarItem