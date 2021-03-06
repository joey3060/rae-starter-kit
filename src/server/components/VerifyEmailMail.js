import React, { PropTypes } from 'react'
import tokenToURL from '../utils/tokenToURL'

const VerifyEmailMail = ({ token }) => {
  const url = tokenToURL('/user/email/verify', token)

  return (
    <div>
      <p>
        Please click the following link to verify your account.
      </p>
      <p>
        <a href={url}>
          {url}
        </a>
      </p>
    </div>
  )
}

VerifyEmailMail.propTypes = {
  token: PropTypes.string,
}

export default VerifyEmailMail
