import React from 'react'
import { CloseModal } from 'components/CloseModal'
import { Mobile, Default } from 'containers/ResponseLayout'
import Form from './Form'
import { MobileHeader } from 'containers/Header'
import { MobileFooter } from 'containers/Footer'
import { PageHeader } from 'components/PageHeader'

const NeedToUpgradeForm = ({ onClose }) => {

  return (
    <>
      <Mobile>
        <MobileHeader />
        <PageHeader />
        <Form />
        <MobileFooter />
      </Mobile>

      <Default>
        <CloseModal
          onClose={onClose}
        >
          <Form onClose={onClose} />
        </CloseModal>
      </Default>
    </>
  )
}

export default NeedToUpgradeForm
