import React from 'react'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUndo } from '@fortawesome/free-solid-svg-icons'
function ForgetPasswordLink() {
return (
    <>
        <Link href="/auth/forgot-password">
            <a className="py-2">
                <FontAwesomeIcon icon={faUndo} />
                <span className="px-2"> Forgot Password</span>
            </a>
        </Link>
    </>
)
}

export default ForgetPasswordLink;